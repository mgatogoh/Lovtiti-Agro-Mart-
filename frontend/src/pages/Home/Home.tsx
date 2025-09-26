import Navbar from "../../components/navigation/Header.tsx";
import Footer from "../../components/navigation/Footer.tsx";
import Card from "../../components/common/Card.tsx";


function Home() {


    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 flex flex-col items-center mt-20">
            {/* Hero / Intro */}
            <header className="w-full bg-green-700 text-white text-center py-16 px-4">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    Lovtiti Agro Mart
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                    A decentralized marketplace connecting African farmers with buyers
                    using Hedera blockchain—eliminating middlemen, ensuring fair pricing,
                    and building trust through traceable transactions.
                </p>
            </header>

            {/* Features */}
                <section className="w-full max-w-5xl px-6 py-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">⍨ Key Features</h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: "Identity Verification", text: "Farmer identity verification" },
                            { title: "Traceability", text: "Produce traceability" },
                            { title: "Secure Payments", text: "Secure payments via HBAR" },
                        ].map((f) => (
                            <Card
                                key={f.title}
                                product={{
                                    name: f.title,
                                    shortDesc: f.text,
                                    image: "",
                                    priceHBAR: 0,
                                    unit: "",
                                    farmerName: "",
                                    location: "",
                                    verified: false,
                                }} heading={""} text={""}                            />
                        ))}
                    </div>
                </section>

            {/* Tech Stack */}
            <section className="w-full bg-white px-6 py-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    🛠️ Tech Stack
                </h2>
                <ul className="flex flex-wrap justify-center gap-4 text-gray-700 font-medium">
                    {[
                        "Hedera Hashgraph",
                        "React Native (Frontend)",
                        "Node.js + Express (Backend)",
                        "Firebase (Auth & Database)",
                        "IPFS (Optional image storage)",
                    ].map((tech) => (
                        <li
                            key={tech}
                            className="bg-gray-100 px-4 py-2 rounded-full shadow-sm"
                        >
                            {tech}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Target Users & Goals */}
            <section className="w-full max-w-4xl px-6 py-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    🎯 Our Goals
                </h2>
                <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
                    Empower farmers with digital tools, reduce food waste and fraud,
                    and promote fair trade and transparency.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                    📍 Target Users
                </h3>
                <ul className="list-disc list-inside text-gray-700 text-center space-y-1">
                    <li>Smallholder farmers across Africa</li>
                    <li>Restaurants, retailers, and households</li>
                    <li>NGOs and cooperatives</li>
                </ul>
            </section>
            </div>

            <Footer />
        </>
    );
}

export default Home;
