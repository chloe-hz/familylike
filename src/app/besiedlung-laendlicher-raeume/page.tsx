'use client'

import {useEffect, useState} from "react";
import Link from "next/link";

export default function Page() {
    const [grayClicked, setGrayClicked] = useState(false);

    useEffect(() => {
        // No event listener wrapper needed here!
        const gallery = document.querySelector('.polaroid-gallery');

        // Safety check: Make sure the gallery exists in the DOM
        if (gallery) {
            const items = gallery.querySelectorAll('a');

            items.forEach((item, index) => {
                // Set the delay based on item position (0ms, 100ms, 200ms, etc.)
                const delay = index * 100;
                (item as HTMLElement).style.animationDelay = `${delay}ms`; // Added simple TS type casting for style
            });

            setTimeout(() => {
                gallery.classList.add('animate');
            }, 100);
        }
    }, []);

    return (
        <>
            <div className="main-content" onClick={grayClicked ? () => setGrayClicked(false) : undefined}>
                <h1>FamilyLike</h1>
                {grayClicked &&
                    <div
                        className="bg-black opacity-90 rounded-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-1/2 max-w-lg">
                        <p className="text-white text-2xl lg:text-4xl text-center m-4! lg:m-8!">Unterseiten mit grauen Bildern sind noch in Bearbeitung</p>
                    </div>
                }
                <div className="polaroid-gallery">
                    <Link href="" onClick={() => setGrayClicked(true)}>
                        <img src="/img/estate.png" alt="img" className="grayscale-100"/>
                        <p>
                            Estate<br/>
                        </p>
                    </Link>
                    <Link href="" onClick={() => setGrayClicked(true)}>
                        <img src="/img/spot-nachher.png" alt="img" className="grayscale-100"/>
                        <p>
                            Revitalisierung im Ländlichen Raum<br/>
                        </p>
                    </Link>
                    <Link href="" onClick={() => setGrayClicked(true)}>
                        <img src="/img/pai.jpg" alt="img" className="grayscale-100"/>
                        <p>
                            Professional / Administrative / Institutional<br/>
                        </p>
                    </Link>
                    <Link href="" onClick={() => setGrayClicked(true)}>
                        <img src="/img/ecological-agriculture.jpg" alt="img" className="grayscale-100"/>
                        <p>
                            Ecological Agriculture<br/>
                        </p>
                    </Link>
                    <Link href="" onClick={() => setGrayClicked(true)}>
                        <img src="/img/social.jpg" alt="img" className="grayscale-100"/>
                        <p>
                            Social<br/>
                        </p>
                    </Link>
                    <Link href="" onClick={() => setGrayClicked(true)}>
                        <img src="/img/environmental.jpg" alt="img" className="grayscale-100"/>
                        <p>
                            Environmental<br/>
                        </p>
                    </Link>
                </div>
            </div>
        </>
    );
}