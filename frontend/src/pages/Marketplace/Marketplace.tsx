
import { useState } from "react";
import Navbar from "../../components/navigation/Header";
import Footer from "../../components/navigation/Footer";
import Card from "../../components/common/Card";          // adjust the path if different
import type { Product } from "../../interface/product";   // your Product interface

export default function Marketplace() {
    // Example data – later you’ll fetch this from your backend
    const [products] = useState<Product[]>([
        {
            id: 1,
            name: "Organic Tomatoes",
            image: "https://placehold.co/400x300?text=Tomatoes",
            priceHBAR: 3.2,
            unit: "kg",
            farmerName: "Ama K.",
            location: "Accra, Ghana",
            verified: true,
            shortDesc: "Fresh and pesticide-free",
        },
        {
            id: 2,
            name: "Free-range Eggs",
            image: "https://placehold.co/400x300?text=Eggs",
            priceHBAR: 1.5,
            unit: "dozen",
            farmerName: "Kwame M.",
            location: "Kumasi, Ghana",
            verified: false,
            shortDesc: "Morning collection, rich yolk",
        },
        {
            id: 3,
            name: "Tilapia (whole)",
            image: "https://placehold.co/400x300?text=Tilapia",
            priceHBAR: 5,
            unit: "kg",
            farmerName: "Esi Boateng",
            location: "Cape Coast, Ghana",
            verified: true,
            shortDesc: "Freshly harvested from local ponds",
        },
    ]);

    const handleBuy = (p: Product) => {
        console.log("Buy clicked:", p);
        // TODO: Trigger HBAR payment flow or open checkout modal
    };

    const handleView = (p: Product) => {
        console.log("View clicked:", p);
        // TODO: Navigate to product detail page
    };

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-gray-50 pt-24 pb-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                        Marketplace
                    </h1>

                    {/* Product Grid */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {products.map((p) => (
                            <Card key={p.id} product={p} onBuy={handleBuy} onView={handleView} heading={""} text={""} />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
