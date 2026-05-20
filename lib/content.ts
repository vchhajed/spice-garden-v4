export interface BusinessInfo { name: string; tagline: string; phone: string; email: string; address: string; mapUrl: string; }
export interface HeroSection { headline: string; subheadline: string; ctaText: string; ctaSecondaryText: string; image: string; }
export interface AboutSection { badge: string; title: string; body: string; stats: Array<{ value: string; label: string }>; image: string; }
export interface Service { name: string; description: string; icon: string; image: string; }
export interface Testimonial { name: string; text: string; role: string; rating: number; }
export interface ContactSection { title: string; subtitle: string; }
export interface FooterSection { tagline: string; links: Array<{ label: string; href: string }>; }
export interface Theme { primary: string; primaryDark: string; secondary: string; accent: string; background: string; surface: string; textPrimary: string; textSecondary: string; headingFont: string; bodyFont: string; }
export interface SiteContent { business: BusinessInfo; hero: HeroSection; about: AboutSection; services: Service[]; testimonials: Testimonial[]; contact: ContactSection; footer: FooterSection; theme: Theme; }

export const content: SiteContent = {
  business: {
    name: "Spice Garden",
    tagline: "Authentic Indian flavors, crafted with love",
    phone: "9876543210",
    email: "hello@spicegarden.in",
    address: "Mumbai, Maharashtra",
    mapUrl: "https://maps.google.com/?q=Mumbai,Maharashtra",
  },
  hero: {
    headline: "Experience the richness of authentic Indian cuisine",
    subheadline: "Savor traditional recipes prepared with the finest spices and freshest ingredients, delivered to your table with passion and expertise.",
    ctaText: "Order Now",
    ctaSecondaryText: "View Menu",
    image: "/images/hero.jpg",
  },
  about: {
    badge: "About Spice Garden",
    title: "Bringing India's culinary heritage to your home",
    body: "At Spice Garden, we blend generations of authentic Indian cooking techniques with premium ingredients sourced from trusted suppliers. Every dish is crafted with meticulous attention to detail, ensuring each bite captures the true essence of Indian flavors. Our commitment to quality and tradition has made us a beloved choice for food enthusiasts across Mumbai.",
    stats: [
      { value: "8000+", label: "Satisfied Customers" },
      { value: "15+", label: "Years of Excellence" },
      { value: "98%", label: "Customer Satisfaction" },
      { value: "50+", label: "Signature Dishes" },
    ],
    image: "/images/about.jpg",
  },
  services: [
    {
    name: "Biryani Specialties",
    description: "Fragrant, slow-cooked basmati rice layered with tender meat and aromatic spices, perfected to authentic Mughlai traditions.",
    icon: "🍚",
    image: "/images/service-1.jpg",
  },
    {
    name: "Dal Makhani",
    description: "Creamy lentil curry slow-simmered with butter, cream, and spices for an indulgent, restaurant-quality experience.",
    icon: "🥘",
    image: "/images/service-2.jpg",
  },
    {
    name: "Butter Chicken",
    description: "Tender chicken in a velvety tomato cream sauce with warming spices and a hint of sweetness that melts in your mouth.",
    icon: "🍗",
    image: "/images/service-3.jpg",
  },
    {
    name: "Tandoori Selection",
    description: "Marinated meats and vegetables charred to perfection in our traditional clay oven with a smoky, authentic flavor.",
    icon: "🔥",
    image: "/images/service-4.jpg",
  },
    {
    name: "Fresh Breads",
    description: "Hand-kneaded naan, roti, and kulcha baked fresh daily in our tandoor, served warm and buttery.",
    icon: "🍞",
    image: "/images/service-5.jpg",
  },
    {
    name: "Catering & Events",
    description: "Complete catering solutions for weddings, celebrations, and corporate events with customizable menus and professional service.",
    icon: "🎉",
    image: "/images/service-6.jpg",
  },
  ],
  testimonials: [
    { name: "Rajesh Patel", text: "The biryani from Spice Garden is absolutely incredible—perfectly fragrant rice and meat that's tender every single time. This is how biryani should taste!", role: "Food Enthusiast", rating: 5 },
    { name: "Priya Sharma", text: "Their dal makhani is pure comfort in a bowl. The creaminess and spice balance is exactly what I remember from my grandmother's kitchen. Highly recommended!", role: "Home Cook", rating: 5 },
    { name: "Arjun Desai", text: "Catered our company dinner and guests couldn't stop raving about the butter chicken and tandoori selections. Professional, delicious, and reasonably priced!", role: "Event Organizer", rating: 5 },
  ],
  contact: {
    title: "Taste the Authentic Flavors",
    subtitle: "Get in touch with us for orders, catering inquiries, or to learn more about our signature dishes. We're here to serve you with passion.",
  },
  footer: {
    tagline: "Bringing the warmth and spice of India to your table",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Menu", href: "/menu" },
      { label: "Contact", href: "/contact" },
    ],
  },
  theme: {
    "primary": "#b45309",
    "primaryDark": "#92400e",
    "secondary": "#fef3c7",
    "accent": "#d97706",
    "background": "#fffbeb",
    "surface": "#fef9ee",
    "textPrimary": "#1c1917",
    "textSecondary": "#78716c",
    "headingFont": "Nunito",
    "bodyFont": "Lato"
},
};