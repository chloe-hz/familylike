import Image from "next/image";
import Link from "next/link";

interface SocialLink {
    label: string;
    url: string;
    icon: "linkedin" | "email" | "website" | "github";
}

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    tags: string[];
    image: string;
    links: SocialLink[];
}

const teamMembers: TeamMember[] = [
    {
        name: "Jörg-Matthias Schimmer",
        role: "Mastermind / Projektentwickler",
        bio: "Als Vordenker von Familylike & More treibt er innovative Konzepte für die Nachnutzung ländlicher Liegenschaften sowie zukunftsfähige Lebens- und Gemeinschaftsmodelle voran.",
        tags: ["Strategie", "Regionalentwicklung", "Projektentwicklung", "Konzeptdesign"],
        image: "/img/portrait-joerg.png",
        links: [
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/j%C3%B6rg-matthias-schimmer-4a5375309",
                icon: "linkedin",
            },
            {
                label: "E-Mail",
                url: "mailto:mate.matt@posteo.de",
                icon: "email",
            },
            {
                label: "Kontakt",
                url: "/contact",
                icon: "website",
            },
        ],
    },
    {
        name: "Jörg Schmitz",
        role: "Main Operative Partner / Architekt & Innenarchitekt",
        bio: "Als mehrfach ausgezeichneter Experte für Architektur und Innenarchitektur realisiert er ganzheitliche Gestaltungskonzepte von der ersten Vision bis zur schlüsselfertigen Übergabe.",
        tags: ["Architektur", "Innenarchitektur", "Quartiersentwicklung", "Konzept & Design"],
        image: "/img/portrait-schmitz.jpg",
        links: [
            // {
            //     label: "LinkedIn",
            //     url: "https://www.linkedin.com",
            //     icon: "linkedin",
            // },
            // {
            //     label: "E-Mail",
            //     url: "mailto:elena.lindemann@example.com",
            //     icon: "email",
            // },
            {
                label: "Place-Id",
                url: "https://place-id.de/",
                icon: "website",
            },
        ],
    },
    {
        name: "Sebastian M. Büttner",
        role: "Lead Consultant ESG / Quartiersentwicklung",
        bio: "Der nachhaltigkeitsorientierte Generalist verbindet ESG-Beratung mit praxisnahen Konzepten für gemeinwohlorientierte Wohnprojekte und zukunftsfähige Quartiersentwicklung.",
        tags: ["ESG", "Quartiersentwicklung", "Wohnprojekte", "Nachhaltigkeit"],
        image: "/img/portrait-sebastian-buettner.png",
        links: [
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/sebastian-b%C3%BCttner-94855511?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                icon: "linkedin",
            },
            {
                label: "Website",
                url: "https://seb-m-buettner.de/",
                icon: "website",
            },
            {
                label: "E-Mail",
                url: "seb.m.buettner@icloud.com",
                icon: "email",
            },
        ],
    },
];

function renderIcon(icon: SocialLink["icon"]) {
    switch (icon) {
        case "linkedin":
            return (
                <svg className="w-5! h-5! fill-current!" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
            );
        case "email":
            return (
                <svg className="w-5! h-5! fill-none! stroke-current!" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            );
        case "website":
            return (
                <svg className="w-5! h-5! fill-none! stroke-current!" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            );
        case "github":
            return (
                <svg className="w-5! h-5! fill-current!" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
            );
    }
}

export default function Page() {
    return (
        <div className="main-content py-8! md:py-14! px-4! sm:px-6! lg:px-8! max-w-7xl! mx-auto! w-full!">
            <header className="text-center! max-w-3xl! mx-auto! mb-4! md:mb-6!">
                <h1 className="text-3xl! sm:text-4xl! lg:text-5xl! font-bold! text-[#181830]! tracking-tight! mb-4!">
                    Köpfe hinter der Initiative
                </h1>
                <span className="inline-block! text-xs! uppercase! tracking-widest! font-semibold! px-3! py-1! rounded-full! bg-slate-100! text-[#253251]! mb-3!">
                    Unser Team
                </span>
            </header>

            <section
                aria-label="Teammitglieder"
                className="grid! grid-cols-1! md:grid-cols-2! lg:grid-cols-3! gap-8! sm:gap-10! w-full! items-stretch!"
            >
                {teamMembers.map((member, index) => {
                    return (
                        <article
                            key={member.name}
                            className="flex! flex-col! h-full! bg-white! rounded-2xl! border! border-gray-200/90! shadow-sm! hover:shadow-xl! hover:-translate-y-1.5! transition-all! duration-300! ease-out! overflow-hidden! group"
                        >
                            {/* Card Image Container */}
                            <div className="relative! aspect-4/3! w-full! bg-slate-100! overflow-hidden!">
                                <Image
                                    src={member.image}
                                    alt={`Porträt von ${member.name}`}
                                    fill
                                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                    priority={index === 0}
                                    className="object-cover! object-center! group-hover:scale-105! transition-transform! duration-500! ease-out!"
                                />
                                <div className="absolute! inset-0! bg-linear-to-t! from-black/40! via-transparent! to-transparent! opacity-0! group-hover:opacity-100! transition-opacity! duration-300!" />
                            </div>

                            {/* Card Body */}
                            <div className="flex! flex-col! flex-1! p-6! sm:p-7!">
                                <div className="mb-3!">
                                    <h2 className="text-xl! sm:text-2xl! font-bold! text-[#181830]! group-hover:text-[#47a8a4]! transition-colors! duration-200!">
                                        {member.name}
                                    </h2>
                                    <p className="text-sm! font-semibold! text-[#233f5e]! mt-1!">
                                        {member.role}
                                    </p>
                                </div>

                                <p className="text-sm! sm:text-base! text-gray-600! leading-relaxed! mb-6! flex-1!">
                                    {member.bio}
                                </p>

                                {/* Tags */}
                                <div className="flex! flex-wrap! gap-2! mb-6!">
                                    {member.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs! font-medium! px-2.5! py-1! rounded-md! bg-slate-100! text-slate-700! border! border-slate-200/70!"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Divider & Links (1-3 links) */}
                                <div className="pt-4! border-t! border-gray-100! mt-auto! flex! items-center! justify-between!">
                                    <span className="text-xs! text-gray-400! font-medium! uppercase! tracking-wider!">
                                        Kontakt & Profile
                                    </span>
                                    <div className="flex! items-center! gap-2!">
                                        {member.links.map((link) => {
                                            const isExternal = link.url.startsWith("http");
                                            const LinkComponent = isExternal ? "a" : Link;
                                            return (
                                                <LinkComponent
                                                    key={link.label}
                                                    href={link.url}
                                                    {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                                    aria-label={`${link.label} von ${member.name}`}
                                                    className="inline-flex! items-center! justify-center! w-9! h-9! rounded-full! bg-slate-50! text-slate-600! hover:text-white! hover:bg-[#233f5e]! transition-colors! duration-200! shadow-xs!"
                                                >
                                                    {renderIcon(link.icon)}
                                                </LinkComponent>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </section>
        </div>
    );
}