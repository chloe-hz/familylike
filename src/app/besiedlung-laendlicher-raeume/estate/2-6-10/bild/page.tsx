import Link from "next/link";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <div className="main-content">
                <h1>Bilder</h1>
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
                    <Image src="/img/Bild-Kaivariante-Bebauung-Harburg.jpeg" alt="Kaivariante-Bebauung-Harburg" width="0" height="0" sizes="100vw" className="w-full h=auto"/>
                    <Image src="/img/Bild-Kaivariante-Beleuchtung.png" alt="Bild-Kaivariante-Beleuchtung" width="0" height="0" sizes="100vw" className="w-full h=auto"/>
                    <Image src="/img/Bild-Kaivariante-Bremerhaven-01.png" alt="Kaivariante-Bremerhaven-01" width="0" height="0" sizes="100vw" className="w-full h=auto"/>
                    <Image src="/img/Bild-Kaivariante-Bremerhaven-02.png" alt="Kaivariante-Bremerhaven-02" width="0" height="0" sizes="100vw" className="w-full h=auto"/>
                    <Image src="/img/Bild-Kaivariante-Bremerhaven-03.png" alt="Kaivariante-Bremerhaven-03" width="0" height="0" sizes="100vw" className="w-full h=auto"/>
                    <Image src="/img/Bild-Kaivariante-Bremerhaven-04.png" alt="Kaivariante-Bremerhaven-04" width="0" height="0" sizes="100vw" className="w-full h=auto"/>
                    <Image src="/img/Bild-Kaivariante-Faehre-Bebauung-Harburg.png" alt="Kaivariante-Faehre-Bebauung-Harburg" width="0" height="0" sizes="100vw" className="w-full h=auto"/>
                    <Image src="/img/Bild-Kaivariante-Zwischenloesung-BeachClub-Harburg.png" alt="Kaivariante-Zwischenloesung-BeachClub-Harburg" width="0" height="0" sizes="100vw" className="w-full h=auto"/>
                    <Image src="/img/Bild-Kunstbagger.png" alt="Kunstbagger" width="0" height="0" sizes="100vw" className="w-full h=auto"/>
                    <Image src="/img/Bild-Kunstbagger-Projekt-Inhalte.png" alt="Kunstbagger-Projekt-Inhalte" width="0" height="0" sizes="100vw" className="w-full h=auto"/>
                    <Image src="/img/Bild-Zwischenloesung-BeachClub-Harburg.png" alt="Bild-Zwischenloesung-BeachClub-Hairburg" width="0" height="0" sizes="100vw" className="w-full h=auto"/>
                </div>

                <Link href="/besiedlung-laendlicher-raeume/estate/2-6-10/" className="p-4!"><button>Zurück</button></Link>

            </div>
        </>
    );
}