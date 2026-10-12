import Link from "next/link";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <div className="main-content">
                <h1>Modelle</h1>

                <p>
                    Beispiele für erste Projektskizzen. Recht schnell erstellt und ungemein Hilfreich bei ersten Unterredungen und interessanten und spannenden Meetings mit den Standortvertretern.<br/><br/>

                    Unser gegenüber sieht sofort, worum es geht, worüber man spricht.<br/><br/>

                    Das erlaubt uns diverse Standorte zum Nachdenken zu bewegen und die Gesellschaftlichen Wirkungen erkennen und bewerten zulassen, denn:<br/><br/>

                    Nachhaltigkeit & Gesellschaftliche Werte zählen.<br/><br/>

                    Anmerkung und Haltung zum erkennbaren Einsatz von KI-Werkzeugen<br/><br/>

                    Sämtliche Inhalte aus unseren Köpfen.<br/>
                    KI-Assistenz ermöglicht, jeden potentiellen Standort mit interessanten und zielgerichteten Unterlagen zu versorgen - ganz gleich ob klein, unbekannt und benachteiligt oder prominent und schlagkräftig.<br/><br/>

                    Das halten wir fair.
                </p>

                <Link href="/besiedlung-laendlicher-raeume/estate/2-6-10/" className="p-4!"><button>Zurück</button></Link>

                <div className="flex w-full h-full justify-center items-center flex-wrap gap-16">
                    <Image src="/img/Model-Archipelvariante-Beleuchtung.png" alt="Archipelvariante-Beleuchtung" width="0" height="0" sizes="100vw" className="w-full h=auto"/>
                    <Image src="/img/Model-Grundvariante-Faehre.png" alt="Grundvariante-Faehre" width="0" height="0" sizes="100vw" className="w-full h=auto"/>
                    <Image src="/img/Model-Kaivariante-Bebauung-Harburg.png" alt="Kaivariante-Bebauung-Harburg" width="0" height="0" sizes="100vw" className="w-full h=auto"/>
                    <Image src="/img/Model-Kaivariante-Grundvariante-Beleuchtung.png" alt="Kaivariante-Grundvariante-Beleuchtung" width="0" height="0" sizes="100vw" className="w-full h=auto"/>
                    <Image src="/img/Modell-Archipelvariante-Beleuchtung.jpg" alt="Archivpelvariante-Beleuchtung" width="0" height="0" sizes="100vw" className="w-full h=auto"/>
                    <Image src="/img/Modell-Grundvariante+Faehre.jpg" alt="Grundvariante-Faehre" width="0" height="0" sizes="100vw" className="w-full h=auto"/>
                    <Image src="/img/Modell-Inselvariante-Beleuchtung.png" alt="Inselvariante-Beleuchtung" width="0" height="0" sizes="100vw" className="w-full h=auto"/>
                    <Image src="/img/Modell-Inselvariante-Beleuchtung-2.png" alt="Inselvariante-Beleuchtung-2" width="0" height="0" sizes="100vw" className="w-full h=auto"/>
                    <Image src="/img/Modell-Kaivariante+Bebauung-Harburg.jpg" alt="Kaivariante+Bebauung-Harburg" width="0" height="0" sizes="100vw" className="w-full h=auto"/>
                    <Image src="/img/Modell-Kaivariante-Grundvariante.png" alt="Kaivariante-Grundvariante" width="0" height="0" sizes="100vw" className="w-full h=auto"/>
                    <Image src="/img/Modell-Kunstbagger.png" alt="Kunstbagger" width="0" height="0" sizes="100vw" className="w-full h=auto"/>
                </div>

                <Link href="/besiedlung-laendlicher-raeume/estate/2-6-10/" className="p-4!"><button>Zurück</button></Link>

            </div>
        </>
    );
}