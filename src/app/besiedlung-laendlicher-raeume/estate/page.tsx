'use client'

import {useEffect} from "react";
import Link from "next/link";

export default function Page() {

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
            <div className="main-content">
                <div>
                    <h1>Estate</h1>
                    <h2>Querbeet - Individuell - Marktresistent</h2>

                    <h3>Relevante Entwicklungen zu</h3>
                    <p>
                        Wohnen, Leben, Arbeiten, Tourismus, Social, Health, Care, Nachhaltigkeit und Ökologie
                    </p>

                    <p>
                        <br/>
                        Hier werden die unterschiedlichen professionellen Adressaten zu
                        Individualentwicklungen innerhalb der EU und der TR aus der Kooperation
                        Jörg & Jörg animiert, akquiriert und mit unseren Möglichkeiten geführt.<br/><br/>

                        Immer anders und unique und alles aus unserer Feder.<br/>
                        Wir machen nur, was uns Spaß bringt, und deshalb fühlen wir uns klasse.<br/>
                        Neu und anders, out of the box, richtig wichtig und trotzdem top professional.<br/>
                        Willkommen bei Jörg & Jörg kooperation.
                    </p>




                    {/*<a target="_blank" href="https://canva.link/f1fw6wxo24kap1n">*/}
                    {/*	<button className="my-4!">Item 2.6.10 - Maritim</button>*/}
                    {/*</a>*/}

                </div>
                <div className="polaroid-gallery py-8!">
                    {/*<Link href="#">*/}
                    {/*    <img src="/img/eschenhof-potential.jpg" alt="2.6.1" className="grayscale-100"/>*/}
                    {/*    <p>*/}
                    {/*        2.6.1<br/>*/}
                    {/*        Tiny-House-Village-Solution*/}
                    {/*    </p>*/}
                    {/*</Link>*/}
                    {/*<Link href="#">*/}
                    {/*    <img src="https://placehold.co/999x999" className="grayscale-100" alt="2.6.2 - Maritim"/>*/}
                    {/*    <p>*/}
                    {/*        2.6.2<br/>*/}
                    {/*        Tiny-House-Showpark*/}
                    {/*    </p>*/}
                    {/*</Link>*/}
                    {/*<Link href="#">*/}
                    {/*    <img src="/img/ecological-agriculture.jpg" className="grayscale-100" alt="2.6.3 - Maritim"/>*/}
                    {/*    <p>*/}
                    {/*        2.6.3<br/>*/}
                    {/*        Container-Village-Solution<br/>*/}
                    {/*        Housing First*/}
                    {/*    </p>*/}
                    {/*</Link>*/}
                    {/*<Link href="#">*/}
                    {/*    <img src="/img/Container-Village-Solution-High-End.png" className="grayscale-100" alt="2.6.4 - Maritim"/>*/}
                    {/*    <p>*/}
                    {/*        2.6.4<br/>*/}
                    {/*        High End<br/>*/}
                    {/*        Wohnen/Arbeiten/Leben*/}
                    {/*    </p>*/}
                    {/*</Link>*/}
                    {/*<Link href="#">*/}
                    {/*    <img src="https://placehold.co/999x999" className="grayscale-100" alt="2.6.5 - Maritim"/>*/}
                    {/*    <p>*/}
                    {/*        2.6.5<br/>*/}
                    {/*        Tourismus-Fitness-Health-Social-Ecological-Environmental-Park*/}
                    {/*    </p>*/}
                    {/*</Link>*/}
                    {/*<Link href="#">*/}
                    {/*    <img src="https://placehold.co/999x999" className="grayscale-100" alt="2.6.6 - Maritim"/>*/}
                    {/*    <p>*/}
                    {/*        2.6.6<br/>*/}
                    {/*        Special CenterPark 6.0*/}
                    {/*    </p>*/}
                    {/*</Link>*/}
                    {/*<Link href="#">*/}
                    {/*    <img src="https://placehold.co/999x999" className="grayscale-100" alt="2.6.7 - Maritim"/>*/}
                    {/*    <p>*/}
                    {/*        2.6.7<br/>*/}
                    {/*        Wasserflächen Binnen*/}
                    {/*    </p>*/}
                    {/*</Link>*/}
                    {/*<Link href="#">*/}
                    {/*    <img src="https://placehold.co/999x999" className="grayscale-100" alt="2.6.8 - Maritim"/>*/}
                    {/*    <p>*/}
                    {/*        2.6.8<br/>*/}
                    {/*        Special Wasserflächen See*/}
                    {/*    </p>*/}
                    {/*</Link>*/}
                    {/*<Link href="#">*/}
                    {/*    <img src="https://placehold.co/999x999" className="grayscale-100" alt="2.6.9 - Maritim"/>*/}
                    {/*    <p>*/}
                    {/*        2.6.9<br/>*/}
                    {/*        Special Container-Solutions Indoor*/}
                    {/*    </p>*/}
                    {/*</Link>*/}
                    <Link href="/besiedlung-laendlicher-raeume/estate/2-6-10/">
                        <img src="/img/schwimmbagger.png" alt="2.6.10 - Maritim"/>
                        <p>
                            2.6.10<br/>
                            Special
                            Kulturgut Maritim
                            Historisch
                            Management
                            Nachhaltigkeit
                            Kopie Werft Rotterdam für<br/>
                            1x OstseeRevier in DK<br/>
                            1x NordseeRevier in NI
                        </p>
                    </Link>
                </div>

            </div>
        </>
    );
}