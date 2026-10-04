'use client'

import ResponsiveImageMap, { MapArea } from "@/components/ResponsiveImageMap";
import Link from "next/link";
import Image from "next/image";

const estateAreas: MapArea[] = [
    {
        alt: "ipad-tv-report",
        href: "https://www.ardmediathek.de/video/hamburg-journal/hamburg-journal-oder-25-08-2026/ndr/Y3JpZDovL25kci5kZS9wcm9wbGFuXzE5NjM4MDgxNV9nYW56ZVNlbmR1bmc?startTime=1504.27&amp;endTime=1585",
        coords: "92,266,399,252,423,438,99,471",
        target: "_blank",
    },
    {
        alt: "grosses-plakat",
        href: "/besiedlung-laendlicher-raeume/estate/2-6-10/bild/",
        coords: "497,387,1100,420,1182,439,1246,618,953,591,924,686,896,688,871,652,646,661,608,674,518,673,418,509",
        target: "",
    },
    {
        alt: "maritim-probleme-loesungen",
        href: "https://canva.link/vvx4doegs06mik0",
        coords: "957,604,1270,635,1247,860,894,821",
        target: "_blank",
    },
    {
        alt: "hamburger-abendblatt",
        href: "/img/Artikel-Hamburger-Abendblatt.jpg",
        coords: "9,509,384,465,526,739,522,766,532,798,303,863,57,863",
        target: "_blank",
    },
    {
        alt: "pitch",
        href: "/pdf/Pitch-Kunstbagger-Projekt.pdf",
        coords: "522,694,867,666,896,796,543,845",
        target: "_blank",
    },
    {
        alt: "modell",
        href: "/besiedlung-laendlicher-raeume/estate/2-6-10/modelle",
        coords: "950,395,1426,479,1478,445,1437,274,1175,142,965,286",
        target: "",
    }
    // {
    // {
    //     alt: "interactive area",
    //     coords: "140,622,737,674,641,903,1,839,1,781",
    //     onClick: (e) => {
    //         e.preventDefault();
    //         alert("Custom click action!");
    //     },
    // },
];

export default function Page() {
    return (
        <>
            {/*<Image width="64" height="64" src="/img/cursor.png" alt="alt" className="absolute z-10 top-20 left-10" />*/}
            <ResponsiveImageMap
                src="/img/maritim-image-map.jpg"
                alt="Estate interactive plan"
                areas={estateAreas}
            />
            <Link href="/besiedlung-laendlicher-raeume/estate/" className="p-4! flex-1"><button>Zurück</button></Link>
        </>
    );
}