import Link from "next/link";

export default function Page() {
    return (
        <>
            <div className="main-content">
                <h1>Modelle</h1>

                <Link href="/besiedlung-laendlicher-raeume/estate/2-6-10/" className="p-4!"><button>Zurück</button></Link>

                <div className="flex w-full h-full justify-center items-center flex-wrap gap-4">
                    <img src="/img/Modell-Archipelvariante.jpg" alt="Archipelvariante"/>
                    <img src="/img/Modell-Grundvariante+Faehre.jpg" alt="Grundvariante"/>
                    <img src="/img/Modell-Kaivariante+Bebauung.jpg" alt="Kaivariante+Bebauung"/>
                    <img src="/img/Modell-Kaivariante-Grundvariante.png" alt="Kaivariante-Grundvariante"/>
                    <img src="/img/Modell-Inselvariante.png" alt="Inselvariante"/>
                </div>

                <Link href="/besiedlung-laendlicher-raeume/estate/2-6-10/" className="p-4!"><button>Zurück</button></Link>

            </div>
        </>
    );
}