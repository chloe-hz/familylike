import Link from "next/link";

export default function Page() {
    return (
        <>
            <div className="main-content">
                <div className="container">
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
                        {/*	<button className="my-4!">Item 2.6.10 - Präsentation</button>*/}
                        {/*</a>*/}
                    </div>
                </div>
                <div className="block 2xl:hidden">
                    <h1>
                        Dein Bildschirm ist zu klein um die Webseite korrekt anzuzeigen.
                        Bitte nutze einen Bildschirm mit einer Weite von mindestens 1536px oder nutze die zoom Funktion deines Browsers um das Bild zu verkleinern.
                    </h1>
                </div>
                <div className="hidden 2xl:block">
                    <img src="/img/estate-img-map.png" useMap="#image-map"/>

                    <map name="image-map">
                        <area target="_blank" alt="ipad" title="ipad" href="#"
                              coords="74,350,377,306,448,513,114,566" shape="poly"/>
                        <area target="_blank" alt="schwimmbagger" title="schwimmbagger" href="#"
                              coords="140,622,737,674,641,903,1,839,1,781" shape="poly"/>
                        <area target="_blank" alt="maritim historisch + social + nachhaltigkeit"
                              title="maritim historisch + social + nachhaltigkeit"
                              href="https://canva.link/f1fw6wxo24kap1n"
                              coords="830,700,1263,728,1310,920,777,873" shape="poly"/>
                        <area target="_blank" alt="hamburger abendblatt" title="hamburger abendblatt" href="#"
                              coords="535,480,1021,513,1003,680,408,631" shape="poly"/>
                        <area target="_blank" alt="kunstbagger pitch" title="kunstbagger pitch" href="#"
                              coords="1049,552,1220,557,1303,578,1353,592,1384,616,1380,675,1331,697,1264,694,1047,690"
                              shape="poly"/>
                        <area target="_blank" alt="kunstbagger jlmenau" title="kunstbagger jlmenau" href="#"
                              coords="1062,502,1056,465,1149,211,1619,239,1611,597,1563,641" shape="poly"/>
                        <area target="_blank" alt="schwimmbagger kunst kultur bildung"
                              title="schwimmbagger kunst kultur bildung" href="#"
                              coords="411,371,455,459,1043,502,1040,452,1114,261,476,232" shape="poly"/>
                    </map>

                </div>
            </div>
        </>
    );
}