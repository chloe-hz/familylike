"use client";

import { useEffect, useRef, useId, useState } from "react";
import Image from "next/image";

export interface MapArea {
    coords: string;
    shape?: "poly" | "rect" | "circle" | "default";
    href?: string;
    alt?: string;
    title?: string;
    target?: string;
    onClick?: (e: React.MouseEvent<HTMLAreaElement>) => void;
}

interface ResponsiveImageMapProps {
    src: string;
    alt: string;
    areas: MapArea[];
    className?: string;
}

function getAreaCenter(coordsStr: string, shape?: string): { x: number; y: number } | null {
    if (!coordsStr) return null;
    const raw = coordsStr
        .split(",")
        .map((s) => parseFloat(s.trim()))
        .filter((n) => !isNaN(n));
    if (raw.length === 0) return null;

    if (shape === "circle" && raw.length >= 2) {
        return { x: raw[0], y: raw[1] };
    }

    if (shape === "rect" && raw.length >= 4) {
        const [x1, y1, x2, y2] = raw;
        return { x: (x1 + x2) / 2, y: (y1 + y2) / 2 };
    }

    // Default or "poly"
    let sumX = 0;
    let sumY = 0;
    const count = Math.floor(raw.length / 2);
    if (count === 0) return null;

    for (let i = 0; i < count; i++) {
        sumX += raw[i * 2];
        sumY += raw[i * 2 + 1];
    }

    return { x: sumX / count, y: sumY / count };
}

export default function ResponsiveImageMap({
                                               src,
                                               alt,
                                               areas,
                                               className = "",
                                           }: ResponsiveImageMapProps) {
    const imgRef = useRef<HTMLImageElement>(null);
    const mapRef = useRef<HTMLMapElement>(null);
    const [cursorPositions, setCursorPositions] = useState<({ x: number; y: number } | null)[]>([]);

    // Generates a unique HTML identifier for each component instance
    const uniqueMapId = useId();

    useEffect(() => {
        const updateCoords = () => {
            const img = imgRef.current;
            const map = mapRef.current;
            if (!img || !map) return;

            const origW = img.naturalWidth;
            const origH = img.naturalHeight;
            const currW = img.clientWidth;
            const currH = img.clientHeight;

            if (!origW || !origH || !currW || !currH) return;

            const scaleX = currW / origW;
            const scaleY = currH / origH;

            const areaElements = map.querySelectorAll<HTMLAreaElement>("area");
            areaElements.forEach((area) => {
                if (!area.dataset.originalCoords) {
                    area.dataset.originalCoords = area.getAttribute("coords") || "";
                }

                const raw = area.dataset.originalCoords.split(",").map(Number);
                const scaled = raw.map((val, idx) =>
                    Math.round(idx % 2 === 0 ? val * scaleX : val * scaleY)
                );

                area.coords = scaled.join(",");
            });

            const positions = areas.map((area) => {
                const center = getAreaCenter(area.coords, area.shape);
                if (!center) return null;
                return {
                    x: center.x * scaleX,
                    y: center.y * scaleY,
                };
            });
            setCursorPositions(positions);
        };

        const img = imgRef.current;
        if (!img) return;

        if (img.complete && img.naturalWidth > 0) {
            updateCoords();
        } else {
            img.addEventListener("load", updateCoords);
        }

        const resizeObserver = new ResizeObserver(() => updateCoords());
        resizeObserver.observe(img);

        return () => {
            img.removeEventListener("load", updateCoords);
            resizeObserver.disconnect();
        };
    }, [src, areas]); // Re-calculates if the image source or areas change

    return (
        <div className={`relative ${className}`}>
            {cursorPositions.map((pos, index) => {
                if (!pos) return null;
                return (
                    <Image
                        key={index}
                        width="64"
                        height="64"
                        src="/img/cursor.png"
                        alt={areas[index]?.alt || areas[index]?.title || "cursor indicator"}
                        className="absolute z-10 pointer-events-none -translate-x-1/2 -translate-y-1/2 select-none animate-hover w-8 md:w-12 lg:w-16"
                        style={{
                            left: `${pos.x}px`,
                            top: `${pos.y}px`,
                        }}
                    />
                );
            })}
            <img
                ref={imgRef}
                src={src}
                useMap={`#${uniqueMapId}`}
                alt={alt}
                className="w-full h-auto block select-none"
            />

            <map ref={mapRef} name={uniqueMapId}>
                {areas.map((area, index) => (
                    <area
                        key={index}
                        shape={area.shape || "poly"}
                        coords={area.coords}
                        href={area.href || "#"}
                        alt={area.alt || ""}
                        title={area.title || area.alt || ""}
                        target={area.target}
                        onClick={area.onClick}
                    />
                ))}
            </map>
        </div>
    );
}