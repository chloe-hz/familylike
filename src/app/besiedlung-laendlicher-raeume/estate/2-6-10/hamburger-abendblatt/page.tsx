import Image from "next/image";
import Link from "next/link";


export default function Page() {
    return (
        <>
            <div className="main-content">
                <div>
                    <Image src="/img/abendblatt.jpg" alt="HamburgerAbendblatt" width="0" height="0" sizes="100dvw"
                           className="w-full h-auto"/>
                </div>

                <Link href="/besiedlung-laendlicher-raeume/estate/2-6-10/" className="p-4!"><button>Zurück</button></Link>

                <div className="max-w-3xl mx-auto px-4 py-8 space-y-6 leading-relaxed">
                    <header className="space-y-2">
                        <h1 className="text-3xl font-bold">
                            Kunstbagger ILMENAU: Maritime Geschichte als lebendiger Kulturort
                        </h1>
                        <p className="text-sm uppercase tracking-wide text-gray-500">
                            Eigenständige Projektdarstellung | Arbeitsfassung
                        </p>
                    </header>

                    <section className="space-y-2">
                        <h2 className="text-2xl font-semibold">Ein historisches Arbeitsschiff mit neuer Aufgabe</h2>
                        <p>
                            Die ILMENAU ist ein historischer Schwimmbagger aus dem Jahr 1955. Gebaut wurde das Schiff in
                            Neuenfelde; über viele Jahrzehnte war es für Arbeiten an Wasserwegen und Hafenzufahrten im
                            Einsatz. Heute steht es für eine andere Form der Nutzung maritimer Technik: Es verbindet die
                            Erinnerung an die Arbeitswelt der Schifffahrt mit künstlerischen und gemeinschaftlichen
                            Aktivitäten.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-2xl font-semibold">Kunst aus vorhandenen Materialien</h2>
                        <p>
                            Die Künstlerin Sabine Eisbrenner, auch als „Baggerbine“ bekannt, nutzt den Bagger als Ort
                            für ihre gestalterische Arbeit. Aus gebrauchten Materialien wie Holzresten, ausgedienten
                            Werftgegenständen und Fundstücken entstehen neue Objekte. Im Mittelpunkt steht die Idee, den
                            Wert bereits vorhandener Ressourcen sichtbar zu machen, statt sie vorschnell zu entsorgen.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-2xl font-semibold">Ein Ort des Mitmachens</h2>
                        <p>
                            Der Kunstbagger ist nicht allein Ausstellungsfläche. Er bietet auch Anknüpfungspunkte für
                            praktische Vermittlung: Besucherinnen und Besucher, darunter Kinder, können handwerkliche
                            und künstlerische Prozesse kennenlernen. Das Projekt zeigt, wie maritime Geschichte,
                            Umweltbewusstsein und kulturelle Teilhabe miteinander verbunden werden können.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-2xl font-semibold">Die Herausforderung des Standorts</h2>
                        <p>
                            Nach früheren Stationen im Hamburger Hafen lag die ILMENAU seit 2019 im Kutterhafen
                            Finkenwerder. Der bisherige Liegeplatz steht nach den im Zeitungsbericht geschilderten
                            Umständen nicht dauerhaft zur Verfügung. Damit stellt sich die Frage nach einem neuen, gut
                            erreichbaren Standort. Zusätzlich sind die für ein historisches Schiff erforderlichen
                            technischen Untersuchungen und Werftaufenthalte zu berücksichtigen.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-2xl font-semibold">Perspektive: Eine schwimmende Kulturlandschaft</h2>
                        <p>
                            Die künstlerische Nutzung könnte durch ergänzende schwimmende Flächen erweitert werden.
                            Denkbar sind Bereiche für Ausstellungen, Workshops, Veranstaltungen und Begegnungen. Eine
                            solche Anlage würde das Schiff als historischen Mittelpunkt erhalten und zugleich neue
                            Angebote für die Öffentlichkeit schaffen. Die konkrete Umsetzung hängt von Standort,
                            Genehmigungen, Finanzierung und geeigneten Partnern ab.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-2xl font-semibold">Bedeutung für Stadt und Gesellschaft</h2>
                        <p>
                            Ein öffentlich zugänglicher Kunstbagger kann mehrere Anliegen zusammenführen: den Erhalt
                            maritimen Erbes, kreative Wiederverwendung von Materialien, praktische Bildungsangebote und
                            die Belebung von Hafenräumen. Gerade diese Verbindung macht das Vorhaben zu einem möglichen
                            Modell für weitere Wasserstandorte.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-lg font-semibold">Einordnung und Quellenhinweis</h2>
                        <p>
                            Diese Darstellung ist ein eigenständig verfasster Informationstext auf Grundlage öffentlich
                            berichteter Sachverhalte. Anlass war ein Bericht des Hamburger Abendblatts von Lars Hansen
                            über Sabine Eisbrenner und die ILMENAU. Es wurden keine wörtlichen Zitate oder längeren
                            journalistischen Textpassagen übernommen. Angaben zu Liegeplatz, Schiffszustand und
                            Projektstand beschreiben den damaligen Berichtsstand und sollten vor einer Veröffentlichung
                            aktualisiert und überprüft werden.
                        </p>
                    </section>
                </div>

                <Link href="/besiedlung-laendlicher-raeume/estate/2-6-10/" className="p-4!"><button>Zurück</button></Link>
            </div>
        </>
    )
}