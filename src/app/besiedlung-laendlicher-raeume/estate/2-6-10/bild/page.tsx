import Link from "next/link";

export default function Page() {
    return (
        <>
            <div className="main-content">
                <h1>Bilder</h1>

                <Link href="/besiedlung-laendlicher-raeume/estate/2-6-10/" className="p-4!"><button>Zurück</button></Link>

                <div className="flex w-full h-full justify-center items-center flex-wrap gap-4">
                    <img src="/img/Bild-Kunstbagger-Projekt-Inhalte.png" alt="Kunstbagger-Projekt-Inhalte"/>
                    <img src="/img/Bild-Zwischenloesung-BeachClub.png" alt="Zwischenloesung-BeachClub"/>
                </div>

                <Link href="/besiedlung-laendlicher-raeume/estate/2-6-10/" className="p-4!"><button>Zurück</button></Link>

            </div>
        </>
    );
}