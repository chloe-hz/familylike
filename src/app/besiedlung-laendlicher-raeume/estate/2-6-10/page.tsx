'use client'

import ResponsiveImageMap, { MapArea } from "@/components/ResponsiveImageMap";
import Link from "next/link";

const estateAreas: MapArea[] = [
    {
        alt: "ipad-tv-report",
        href: "https://www.ardmediathek.de/video/hamburg-journal/hamburg-journal-oder-25-08-2026/ndr/Y3JpZDovL25kci5kZS9wcm9wbGFuXzE5NjM4MDgxNV9nYW56ZVNlbmR1bmc?startTime=1504.27&amp;endTime=1585",
        coords: "69,320,347,284,422,481,107,537,60,479,81,393",
        target: "_blank",
    },
    {
        alt: "maritim-historisch-links",
        href: "/besiedlung-laendlicher-raeume/estate/2-6-10/bild/",
        coords: "138,571,747,643,676,894,2,816,2,739",
        target: "_blank",
    },
    {
        alt: "maritim-historisch-rechts",
        href: "https://canva.link/vvx4doegs06mik0",
        coords: "822,699,1252,736,1298,925,765,879",
        target: "_blank",
    },
    {
        alt: "hamburger-abendblatt",
        href: "/img/Artikel-Hamburger-Abendblatt.jpg",
        coords: "515,469,1039,507,1007,662,398,597",
        target: "_blank",
    },
    {
        alt: "pitch",
        href: "/pdf/Pitch-Kunstbagger-Projekt.pdf",
        coords: "1045,569,1205,574,1363,596,1388,664,1335,705,1036,690",
        target: "_blank",
    },
    {
        alt: "modell-oben-mittig",
        href: "/besiedlung-laendlicher-raeume/estate/2-6-10/modelle",
        coords: "419,442,376,336,450,224,778,197,1115,280,1121,395,1069,497",
        target: "_blank",
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
            <ResponsiveImageMap
                src="/img/estate-img-map.png"
                alt="Estate interactive plan"
                areas={estateAreas}
            />
            <Link href="/besiedlung-laendlicher-raeume/estate/" className="p-4! flex-1"><button>Zurück</button></Link>
        </>
    );
}