import type {CardProps} from "../../interface/product.ts";

export default function Card({ product, onBuy, onView }: CardProps) {
    const {
        name,
        image,
        priceHBAR = 0,
        unit = "",
        farmerName = "Unknown",
        location = "",
        verified = false,
        shortDesc = "",
    } = product;

    return (
        <article
            className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden cursor-pointer transform hover:scale-[1.01] transition-all duration-150"
            role="group"
            aria-label={`Product card for ${name}`}
            onClick={() => onView?.(product)}
        >
            {/* Image */}
            <div className="w-full h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="object-cover w-full h-full"
                        loading="lazy"
                    />
                ) : (
                    <div className="text-sm text-gray-500">No image available</div>
                )}
            </div>

            {/* Body */}
            <div className="p-4 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">
                            {name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-300 truncate">
                            {shortDesc}
                        </p>
                        <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                            <span className="font-medium">Farmer:</span> {farmerName}
                            {location && <span className="ml-2">• {location}</span>}
                        </div>
                    </div>

                    {verified && (
                        <div
                            className="flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-800"
                            title="Verified farmer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Verified
                        </div>
                    )}
                </div>

                {/* Price + Actions */}
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-500">Price</span>
                        <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
              {priceHBAR} HBAR{unit ? ` / ${unit}` : ""}
            </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onBuy?.(product);
                            }}
                            className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-medium shadow-sm hover:opacity-95 focus:outline-none"
                            aria-label={`Buy ${name}`}
                        >
                            Buy
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onView?.(product);
                            }}
                            className="px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-transparent"
                            aria-label={`View ${name}`}
                        >
                            View
                        </button>
                    </div>
                </div>

                <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-between mt-1">
                    <span>Traceable on Hedera ✅</span>
                    <span>Earn tokens on purchase</span>
                </div>
            </div>
        </article>
    );
}







/*
Usage example:

<Card
  product={{
    id: 1,
    name: 'Fresh Plantain (1kg)',
    image: 'https://example.com/plantain.jpg',
    priceHBAR: 2.5,
    unit: 'kg',
    farmerName: 'Kwame Mensah',
    location: 'Kumasi, Ghana',
    verified: true,
    shortDesc: 'Organic, harvested this week'
  }}
  onBuy={(p) => {
    // wire HBAR payment flow here or open purchase modal
    console.log('Buy', p);
  }}
  onView={(p) => {
    // navigate to product detail page
    console.log('View', p);
  }}
/>
*/
