"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { SectionShell } from "../components/SectionShell";
import { SectionHeading } from "../components/SectionHeading";
import { NeumoCard } from "../components/NeumoCard";
import { ImageModal } from "../components/ImageModal";

const categories = ["All", "Cuts", "Color", "Wigs", "Bridal"];

interface PortfolioItem {
    id: number;
    category: string;
    src: string;
    title: string;
}

// All 51 portfolio images with categorization
const portfolioItems: PortfolioItem[] = [
    { id: 1, category: "Color", src: "/images/portfolio/IMG_1312.JPG", title: "Blonde Transformation" },
    { id: 2, category: "Color", src: "/images/portfolio/IMG_1313.JPG", title: "Balayage Beauty" },
    { id: 3, category: "Cuts", src: "/images/portfolio/IMG_1314.JPG", title: "Precision Cut" },
    { id: 4, category: "Color", src: "/images/portfolio/IMG_1316.JPG", title: "Highlights" },
    { id: 5, category: "Cuts", src: "/images/portfolio/IMG_1317.JPG", title: "Layered Style" },
    { id: 6, category: "Color", src: "/images/portfolio/IMG_1318.JPG", title: "Color Blend" },
    { id: 7, category: "Bridal", src: "/images/portfolio/IMG_1319.JPG", title: "Elegant Updo" },
    { id: 8, category: "Cuts", src: "/images/portfolio/IMG_1320.JPG", title: "Modern Bob" },
    { id: 9, category: "Color", src: "/images/portfolio/IMG_1321.JPG", title: "Rich Tones" },
    { id: 10, category: "Wigs", src: "/images/portfolio/IMG_1322.JPG", title: "Custom Unit" },
    { id: 11, category: "Color", src: "/images/portfolio/IMG_1323.JPG", title: "Dimensional Color" },
    { id: 12, category: "Cuts", src: "/images/portfolio/IMG_1324.JPG", title: "Textured Layers" },
    { id: 13, category: "Bridal", src: "/images/portfolio/IMG_1326.JPG", title: "Romantic Style" },
    { id: 14, category: "Color", src: "/images/portfolio/IMG_1327.JPG", title: "Vibrant Hues" },
    { id: 15, category: "Cuts", src: "/images/portfolio/IMG_1328.JPG", title: "Sleek Cut" },
    { id: 16, category: "Wigs", src: "/images/portfolio/IMG_1329.JPG", title: "Lace Front" },
    { id: 17, category: "Color", src: "/images/portfolio/IMG_1330.JPG", title: "Subtle Highlights" },
    { id: 18, category: "Cuts", src: "/images/portfolio/IMG_1331.JPG", title: "Precision Styling" },
    { id: 19, category: "Color", src: "/images/portfolio/IMG_1333.JPG", title: "Color Correction" },
    { id: 20, category: "Bridal", src: "/images/portfolio/IMG_1334.JPG", title: "Wedding Perfection" },
    { id: 21, category: "Cuts", src: "/images/portfolio/IMG_1336.JPG", title: "Chic Bob" },
    { id: 22, category: "Color", src: "/images/portfolio/IMG_1337.JPG", title: "Warm Tones" },
    { id: 23, category: "Wigs", src: "/images/portfolio/IMG_1338.JPG", title: "Natural Look" },
    { id: 24, category: "Color", src: "/images/portfolio/IMG_1341.JPG", title: "Blonde Balayage" },
    { id: 25, category: "Cuts", src: "/images/portfolio/IMG_1342.JPG", title: "Layered Perfection" },
    { id: 26, category: "Color", src: "/images/portfolio/IMG_1343.JPG", title: "Rich Color" },
    { id: 27, category: "Bridal", src: "/images/portfolio/IMG_1387.JPG", title: "Bridal Elegance" },
    { id: 28, category: "Color", src: "/images/portfolio/IMG_1404.JPG", title: "Color Magic" },
    { id: 29, category: "Cuts", src: "/images/portfolio/IMG_1406.JPG", title: "Trendy Cut" },
    { id: 30, category: "Color", src: "/images/portfolio/IMG_0725.jpg", title: "Stunning Color" },
    { id: 31, category: "Cuts", src: "/images/portfolio/IMG_0726.jpg", title: "Fresh Cut" },
    { id: 32, category: "Color", src: "/images/portfolio/IMG_0727.jpg", title: "Vibrant Look" },
    { id: 33, category: "Cuts", src: "/images/portfolio/IMG_0728.jpg", title: "Stylish Cut" },
    { id: 34, category: "Color", src: "/images/portfolio/IMG_0729.jpg", title: "Beautiful Blend" },
    { id: 35, category: "Cuts", src: "/images/portfolio/IMG_0731.jpg", title: "Modern Style" },
    { id: 36, category: "Wigs", src: "/images/portfolio/IMG_0532.PNG", title: "Wig Styling" },
    { id: 37, category: "Wigs", src: "/images/portfolio/IMG_0533.PNG", title: "Custom Wig" },
    { id: 38, category: "Wigs", src: "/images/portfolio/IMG_0534.PNG", title: "Wig Installation" },
    { id: 39, category: "Wigs", src: "/images/portfolio/IMG_0535.PNG", title: "Natural Wig" },
    { id: 40, category: "Color", src: "/images/portfolio/IMG_5844.jpg", title: "Color Artistry" },
    { id: 41, category: "Cuts", src: "/images/portfolio/IMG_7680.JPG", title: "Precision Work" },
    { id: 42, category: "Color", src: "/images/portfolio/IMG_9423.JPG", title: "Color Transformation" },
    { id: 43, category: "Color", src: "/images/portfolio/IMG_0175.JPG", title: "Gorgeous Color" },
    { id: 44, category: "Cuts", src: "/images/portfolio/IMG_0176.JPG", title: "Expert Cut" },
    { id: 45, category: "Color", src: "/images/portfolio/1858DD96-7733-4998-8916-99E652430B9C.JPG", title: "Color Excellence" },
    { id: 46, category: "Color", src: "/images/portfolio/BeforeAfter.png", title: "Before & After" },
    { id: 47, category: "Bridal", src: "/images/portfolio/Untitled design (82).png", title: "Special Occasion" },
    { id: 48, category: "Color", src: "/images/portfolio/enhanced-image (13).png", title: "Enhanced Color" },
    { id: 49, category: "Color", src: "/images/portfolio/enhanced-image (68).png", title: "Premium Color" },
    { id: 50, category: "Bridal", src: "/images/portfolio/NYCFoot.png", title: "Bridal Beauty" },
    { id: 51, category: "Cuts", src: "/images/portfolio/IMG_1334(1).JPG", title: "Signature Style" },
];

export function PortfolioSection() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

    const filteredItems = activeCategory === "All"
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeCategory);

    return (
        <SectionShell id="portfolio" className="bg-background">
            <SectionHeading
                title="Selected Works"
                subtitle="Portfolio"
                className="mb-12"
            />

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                            ? "bg-primary text-primary-foreground shadow-lg scale-105"
                            : "bg-surface text-accent-foreground/60 hover:text-primary hover:bg-surface/80"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Image Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {filteredItems.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <NeumoCard
                                className="p-3 group cursor-pointer overflow-hidden"
                                variant="flat"
                                onClick={() => setSelectedItem(item)}
                            >
                                <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        loading="lazy"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <div>
                                            <p className="text-primary text-xs uppercase tracking-wider mb-1">{item.category}</p>
                                            <h4 className="text-white font-serif text-xl">{item.title}</h4>
                                        </div>
                                    </div>
                                </div>
                            </NeumoCard>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Image Modal */}
            {
                selectedItem && (
                    <ImageModal
                        isOpen={!!selectedItem}
                        onClose={() => setSelectedItem(null)}
                        src={selectedItem.src}
                        alt={selectedItem.title}
                        title={selectedItem.title}
                        category={selectedItem.category}
                    />
                )
            }
        </SectionShell >
    );
}
