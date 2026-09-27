"use client";

import { useEffect, useRef, useId } from "react";

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

export default function ResponsiveImageMap({
                                               src,
                                               alt,
                                               areas,
                                               className = "",
                                           }: ResponsiveImageMapProps) {
    const imgRef = useRef<HTMLImageElement>(null);
    const mapRef = useRef<HTMLMapElement>(null);

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
    }, [src]); // Re-calculates if the image source changes

    return (
        <div className={`relative ${className}`}>
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