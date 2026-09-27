'use client'

import ResponsiveImageMap, { MapArea } from "@/components/ResponsiveImageMap";
import Link from "next/link";

const estateAreas: MapArea[] = [
    {
        alt: "ipad-tv-report",
        href: "https://www.ardmediathek.de/video/hamburg-journal/hamburg-journal-oder-25-08-2026/ndr/Y3JpZDovL25kci5kZS9wcm9wbGFuXzE5NjM4MDgxNV9nYW56ZVNlbmR1bmc?startTime=1504.27&amp;endTime=1585",
        coords: "76,367,382,321,463,537,124,600,72,546,93,458",
        target: "_blank",
    },
    {
        alt: "maritim-historisch-links",
        href: "#",
        coords: "156,617,4,810,1,843,713,915,779,674",
        target: "_blank",
    },
    {
        alt: "maritim-historisch-rechts",
        href: "https://canva.link/f1fw6wxo24kap1n",
        coords: "824,717,1267,745,1316,937,765,897",
        target: "_blank",
    },
    {
        alt: "hamburger-abendblatt",
        href: "#",
        coords: "574,501,1053,531,1044,696,465,640",
        target: "_blank",
    },
    {
        alt: "pitch-left",
        href: "#",
        coords: "1075,575,1240,578,1256,717,1073,711",
        target: "_blank",
    },
    {
        alt: "pitch-right",
        href: "#",
        coords: "1327,596,1354,599,1375,611,1391,625,1401,640,1404,662,1400,687,1388,711,1364,723,1339,729,1301,723,1271,704,1252,676,1249,637,1271,611,1298,597",
        target: "_blank",
    },
    {
        alt: "modell-oben-mittig",
        href: "#",
        coords: "420,404,479,256,836,215,1123,247,1137,373,1099,472,1081,488,1071,529,452,481",
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
            <div className="flex-1 w-auto h-full">
                <ResponsiveImageMap
                    src="/img/estate-img-map.png"
                    alt="Estate interactive plan"
                    areas={estateAreas}
                />
            </div>
            <div>
                <Link href="/besiedlung-laendlicher-raeume/estate/"><button>Back</button></Link>
            </div>
        </>
    );
}