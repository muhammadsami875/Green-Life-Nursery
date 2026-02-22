import monsteraImg from "@/assets/plants/monstera.jpg";
import peaceLilyImg from "@/assets/plants/peace-lily.jpg";
import fiddleLeafImg from "@/assets/plants/fiddle-leaf.jpg";
import snakePlantImg from "@/assets/plants/snake-plant.jpg";
import rubberPlantImg from "@/assets/plants/rubber-plant.jpg";
import pothosImg from "@/assets/plants/pothos.jpg";
import zzPlantImg from "@/assets/plants/zz-plant.jpg";
import birdOfParadiseImg from "@/assets/plants/bird-of-paradise.jpg";
import syngoniumImg from "@/assets/plants/syngonium.jpg";
import mangoImg from "@/assets/plants/mango-plant.jpg";
import guavaImg from "@/assets/plants/guava-plant.jpg";
import lemonImg from "@/assets/plants/lemon-plant.jpg";
import echeveriaImg from "@/assets/plants/echeveria.jpg";
import jadePlantImg from "@/assets/plants/jade-plant.jpg";
import aloeVeraImg from "@/assets/plants/aloe-vera.jpg";
import pomegranateImg from "@/assets/plants/pomegranate-plant.jpg";

export type Plant = {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number | null;
  rating: number;
  reviews: number;
  image: string;
  badge: string | null;
  description: string;
};

export const allPlants: Plant[] = [
  // Indoor Plants
  { id: 1, name: "Monstera Deliciosa", category: "Indoor Plants", price: 2500, originalPrice: 3000, rating: 4.9, reviews: 128, image: monsteraImg, badge: "Bestseller", description: "Large tropical plant with iconic split leaves. Perfect for living rooms." },
  { id: 2, name: "Peace Lily", category: "Indoor Plants", price: 1800, originalPrice: null, rating: 4.8, reviews: 95, image: peaceLilyImg, badge: null, description: "Elegant white-flowering plant. Great air purifier and low-light tolerant." },
  { id: 3, name: "Fiddle Leaf Fig", category: "Indoor Plants", price: 4500, originalPrice: 5500, rating: 4.7, reviews: 76, image: fiddleLeafImg, badge: "20% OFF", description: "Statement tree with large violin-shaped leaves. Stunning focal point." },
  { id: 4, name: "Rubber Plant", category: "Indoor Plants", price: 2200, originalPrice: null, rating: 4.6, reviews: 64, image: rubberPlantImg, badge: null, description: "Glossy burgundy leaves that add drama to any space." },
  { id: 5, name: "Pothos Golden", category: "Indoor Plants", price: 800, originalPrice: 1000, rating: 4.8, reviews: 156, image: pothosImg, badge: "Popular", description: "Trailing vine with golden variegation. Perfect for shelves and baskets." },
  { id: 6, name: "ZZ Plant", category: "Indoor Plants", price: 1500, originalPrice: null, rating: 4.7, reviews: 89, image: zzPlantImg, badge: null, description: "Waxy dark green leaves that shine. Extremely drought tolerant." },
  { id: 7, name: "Monstera Mini", category: "Indoor Plants", price: 1200, originalPrice: 1500, rating: 4.6, reviews: 67, image: monsteraImg, badge: null, description: "Compact version of the monstera, great for desks and shelves." },
  { id: 8, name: "Peace Lily XL", category: "Indoor Plants", price: 3200, originalPrice: null, rating: 4.9, reviews: 38, image: peaceLilyImg, badge: "XL Size", description: "Extra large peace lily in premium ceramic pot." },
  { id: 9, name: "Pothos Marble Queen", category: "Indoor Plants", price: 950, originalPrice: null, rating: 4.7, reviews: 84, image: pothosImg, badge: null, description: "White and green marbled foliage. Stunning trailing vine." },
  { id: 28, name: "Rubber Plant Variegated", category: "Indoor Plants", price: 2800, originalPrice: 3200, rating: 4.8, reviews: 52, image: rubberPlantImg, badge: "New", description: "Stunning cream and green variegated rubber plant. Rare collector's item." },
  { id: 29, name: "ZZ Raven", category: "Indoor Plants", price: 2000, originalPrice: 2500, rating: 4.9, reviews: 41, image: zzPlantImg, badge: "Rare", description: "Dramatic dark purple-black leaves. Unique and low maintenance." },
  { id: 30, name: "Fiddle Leaf Mini", category: "Indoor Plants", price: 2200, originalPrice: null, rating: 4.6, reviews: 33, image: fiddleLeafImg, badge: null, description: "Compact tabletop fiddle leaf fig. Perfect for small spaces." },

  // Syngoniums
  { id: 10, name: "Syngonium Pink", category: "Syngoniums", price: 1400, originalPrice: 1800, rating: 4.8, reviews: 102, image: syngoniumImg, badge: "Trending", description: "Beautiful pink arrow-shaped leaves. Easy care and fast growing." },
  { id: 11, name: "Syngonium White Butterfly", category: "Syngoniums", price: 1100, originalPrice: null, rating: 4.7, reviews: 78, image: syngoniumImg, badge: null, description: "Creamy white foliage with green edges. Great for low light areas." },
  { id: 12, name: "Syngonium Neon Robusta", category: "Syngoniums", price: 1600, originalPrice: 2000, rating: 4.9, reviews: 56, image: syngoniumImg, badge: "New", description: "Vibrant neon pink leaves that brighten any room. Compact grower." },
  { id: 31, name: "Syngonium Green", category: "Syngoniums", price: 900, originalPrice: null, rating: 4.6, reviews: 68, image: syngoniumImg, badge: null, description: "Classic green arrow-head plant. Rapid grower and easy to propagate." },
  { id: 32, name: "Syngonium Milk Confetti", category: "Syngoniums", price: 2200, originalPrice: 2800, rating: 4.9, reviews: 29, image: syngoniumImg, badge: "Rare", description: "Speckled pink and white variegation. Highly sought-after collector plant." },

  // Snake Plants (Sansevieria)
  { id: 13, name: "Snake Plant (Sansevieria)", category: "Snake Plants", price: 1200, originalPrice: null, rating: 4.9, reviews: 203, image: snakePlantImg, badge: "Easy Care", description: "Nearly indestructible succulent. Purifies air and thrives on neglect." },
  { id: 14, name: "Snake Plant Trio", category: "Snake Plants", price: 2800, originalPrice: 3500, rating: 4.8, reviews: 112, image: snakePlantImg, badge: "Bundle", description: "Set of 3 snake plant varieties in matching pots." },
  { id: 15, name: "Sansevieria Moonshine", category: "Snake Plants", price: 1800, originalPrice: null, rating: 4.7, reviews: 64, image: snakePlantImg, badge: null, description: "Pale silver-green leaves with a unique glow. Stunning variety." },
  { id: 16, name: "Sansevieria Cylindrica", category: "Snake Plants", price: 1500, originalPrice: 1800, rating: 4.6, reviews: 47, image: snakePlantImg, badge: null, description: "Cylindrical upright leaves. Modern and architectural look." },
  { id: 33, name: "Sansevieria Black Gold", category: "Snake Plants", price: 1600, originalPrice: null, rating: 4.8, reviews: 55, image: snakePlantImg, badge: "Popular", description: "Dark green leaves with striking golden edges. Classic variety." },
  { id: 34, name: "Sansevieria Laurentii XL", category: "Snake Plants", price: 3200, originalPrice: 3800, rating: 4.9, reviews: 38, image: snakePlantImg, badge: "XL Size", description: "Tall statement snake plant with yellow-bordered leaves. Over 3 feet tall." },

  // Succulents
  { id: 17, name: "Echeveria Rosette", category: "Succulents", price: 650, originalPrice: 800, rating: 4.8, reviews: 134, image: echeveriaImg, badge: "Popular", description: "Beautiful rosette-shaped succulent with pink-tipped fleshy leaves." },
  { id: 18, name: "Jade Plant", category: "Succulents", price: 900, originalPrice: null, rating: 4.7, reviews: 98, image: jadePlantImg, badge: null, description: "Lucky money plant with thick glossy oval leaves. Easy to grow." },
  { id: 19, name: "Aloe Vera", category: "Succulents", price: 750, originalPrice: null, rating: 4.9, reviews: 187, image: aloeVeraImg, badge: "Medicinal", description: "Healing succulent with thick gel-filled leaves. Great for skin care." },
  { id: 20, name: "Echeveria Lola", category: "Succulents", price: 850, originalPrice: 1000, rating: 4.6, reviews: 72, image: echeveriaImg, badge: null, description: "Lavender-grey rosette succulent. Perfect for windowsills and desks." },
  { id: 21, name: "Jade Bonsai", category: "Succulents", price: 2500, originalPrice: 3000, rating: 4.8, reviews: 45, image: jadePlantImg, badge: "Premium", description: "Mature jade plant trained as bonsai. Statement desktop piece." },
  { id: 35, name: "Aloe Vera XL", category: "Succulents", price: 1400, originalPrice: 1800, rating: 4.8, reviews: 62, image: aloeVeraImg, badge: "XL Size", description: "Large aloe vera in terracotta pot. Mature and ready for harvesting gel." },
  { id: 36, name: "Echeveria Purple Pearl", category: "Succulents", price: 750, originalPrice: null, rating: 4.7, reviews: 48, image: echeveriaImg, badge: null, description: "Stunning purple-rose colored rosette. Sun-loving and drought tolerant." },
  { id: 37, name: "Haworthia Zebra", category: "Succulents", price: 600, originalPrice: null, rating: 4.6, reviews: 91, image: jadePlantImg, badge: null, description: "Compact striped succulent. Perfect for windowsills and terrariums." },

  // Fruit Plants
  { id: 22, name: "Mango Tree Sapling", category: "Fruit Plants", price: 3500, originalPrice: 4200, rating: 4.9, reviews: 58, image: mangoImg, badge: "Seasonal", description: "Grafted mango sapling. Bears fruit within 2-3 years." },
  { id: 23, name: "Guava Plant", category: "Fruit Plants", price: 2200, originalPrice: null, rating: 4.8, reviews: 73, image: guavaImg, badge: null, description: "High-yield guava variety. Sweet fruits and easy to maintain." },
  { id: 24, name: "Lemon Tree", category: "Fruit Plants", price: 2800, originalPrice: 3500, rating: 4.7, reviews: 91, image: lemonImg, badge: "Popular", description: "Dwarf lemon tree perfect for patios. Fruits year-round." },
  { id: 25, name: "Pomegranate Plant", category: "Fruit Plants", price: 3000, originalPrice: null, rating: 4.8, reviews: 42, image: pomegranateImg, badge: null, description: "Ornamental and fruiting pomegranate. Beautiful red flowers." },
  { id: 26, name: "Lemon Tree XL", category: "Fruit Plants", price: 4500, originalPrice: 5500, rating: 4.9, reviews: 34, image: lemonImg, badge: "XL Size", description: "Mature lemon tree, already fruiting. Ready for your garden." },
  { id: 38, name: "Mango Chaunsa", category: "Fruit Plants", price: 4000, originalPrice: 4800, rating: 4.9, reviews: 27, image: mangoImg, badge: "Premium", description: "Famous Chaunsa variety grafted mango. Sweet aromatic fruit." },
  { id: 39, name: "Guava Thai", category: "Fruit Plants", price: 2800, originalPrice: 3200, rating: 4.7, reviews: 36, image: guavaImg, badge: "New", description: "Thai seedless guava variety. Extra large sweet fruits." },
  { id: 40, name: "Pomegranate Dwarf", category: "Fruit Plants", price: 2200, originalPrice: null, rating: 4.6, reviews: 31, image: pomegranateImg, badge: null, description: "Compact pomegranate ideal for pots and balconies. Decorative and fruiting." },
  { id: 41, name: "Banana Plant", category: "Fruit Plants", price: 1800, originalPrice: 2200, rating: 4.5, reviews: 44, image: mangoImg, badge: null, description: "Dwarf banana plant suitable for home gardens. Bears fruit in warm climates." },

  // Outdoor Plants
  { id: 27, name: "Bird of Paradise", category: "Outdoor Plants", price: 5500, originalPrice: 6500, rating: 4.9, reviews: 42, image: birdOfParadiseImg, badge: "Premium", description: "Tropical statement plant with large banana-like leaves." },
  { id: 42, name: "Bird of Paradise XL", category: "Outdoor Plants", price: 8500, originalPrice: 10000, rating: 4.9, reviews: 18, image: birdOfParadiseImg, badge: "XL Size", description: "Mature bird of paradise over 5 feet tall. Stunning garden centerpiece." },
  { id: 43, name: "Bougainvillea", category: "Outdoor Plants", price: 1500, originalPrice: null, rating: 4.7, reviews: 88, image: birdOfParadiseImg, badge: "Colorful", description: "Vibrant flowering vine in pink, red, or purple. Perfect for fences and walls." },
  { id: 44, name: "Hibiscus Plant", category: "Outdoor Plants", price: 1200, originalPrice: 1500, rating: 4.6, reviews: 76, image: birdOfParadiseImg, badge: null, description: "Tropical hibiscus with large colorful blooms. Attracts butterflies." },
  { id: 45, name: "Jasmine Plant", category: "Outdoor Plants", price: 1000, originalPrice: null, rating: 4.8, reviews: 112, image: birdOfParadiseImg, badge: "Fragrant", description: "Intensely fragrant white flowers. Perfect for evening gardens." },
];

export const categories = [
  "All",
  "Indoor Plants",
  "Syngoniums",
  "Snake Plants",
  "Succulents",
  "Fruit Plants",
  "Outdoor Plants",
];

export const sortOptions = ["Popular", "Price: Low to High", "Price: High to Low", "Rating"];
