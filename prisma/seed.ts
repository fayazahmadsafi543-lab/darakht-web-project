import { PrismaClient, AdminRole, CategoryType, AdStatus } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding Darakht Software Solutions database...");

  // Create super admin
  const hashedPassword = await bcrypt.hash("admin123", 12);
  await prisma.admin.upsert({
    where: { email: "admin@techvision.com" },
    update: {},
    create: {
      email: "admin@techvision.com",
      password: hashedPassword,
      name: "Darakht Admin",
      role: AdminRole.SUPER_ADMIN,
    },
  });

  // Seed categories
  const categories = [
    { name: "Medicine", slug: "medicine", icon: "💊", color: "#ef4444", type: CategoryType.GENERAL, sortOrder: 1 },
    { name: "Clothes", slug: "clothes", icon: "👗", color: "#8b5cf6", type: CategoryType.GENERAL, sortOrder: 2 },
    { name: "Restaurants", slug: "restaurants", icon: "🍽️", color: "#f59e0b", type: CategoryType.GENERAL, sortOrder: 3 },
    { name: "Super Markets", slug: "supermarkets", icon: "🛒", color: "#10b981", type: CategoryType.GENERAL, sortOrder: 4 },
    { name: "Businesses", slug: "businesses", icon: "🏢", color: "#3b82f6", type: CategoryType.GENERAL, sortOrder: 5 },
    { name: "Hospitals", slug: "hospitals", icon: "🏥", color: "#06b6d4", type: CategoryType.GENERAL, sortOrder: 6 },
    { name: "Websites", slug: "websites", icon: "🌐", color: "#6366f1", type: CategoryType.SOFTWARE, sortOrder: 7 },
    { name: "Applications", slug: "applications", icon: "📱", color: "#ec4899", type: CategoryType.SOFTWARE, sortOrder: 8 },
  ];

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: { ...cat, description: `Explore our ${cat.name} advertisements` },
    });
  }

  // Seed testimonials
  const testimonials = [
    { name: "Sarah Mitchell", role: "CEO", company: "MedCare Solutions", content: "Darakht Software Solutions transformed our online presence. Their advertising platform brought us 300% more patient inquiries.", rating: 5 },
    { name: "James Okafor", role: "Marketing Director", company: "FreshMart Superstore", content: "The best advertising investment we've made. Our store visibility skyrocketed and sales followed.", rating: 5 },
    { name: "Aisha Rahman", role: "Owner", company: "Bella Boutique", content: "Professional, modern, and highly effective. Darakht Software Solutions understands what businesses need.", rating: 5 },
    { name: "Carlos Mendez", role: "Restaurant Owner", company: "La Cocina Restaurant", content: "Our reservations doubled within the first month. The advertisement quality is outstanding.", rating: 5 },
  ];

  for (let i = 0; i < testimonials.length; i++) {
    const t = testimonials[i];
    await prisma.testimonial.create({ data: { ...t, sortOrder: i } }).catch(() => {});
  }

  const achievements = [
    {
      name: "La Cocina Restaurant Launch",
      icon: "🍽️",
      description: "Delivered a full digital presence with online reservations and 200% increase in bookings.",
      type: "Project",
      picture: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop",
    },
    {
      name: "MedCare Pharmacy Platform",
      icon: "💊",
      description: "Built a 24/7 online pharmacy system serving 10,000+ customers across the region.",
      type: "Client Success",
      picture: "https://images.unsplash.com/photo-1587854692152-cf960b36b3dd?w=800&auto=format&fit=crop",
    },
    {
      name: "Best Digital Agency 2025",
      icon: "🏆",
      description: "Recognized for excellence in advertising technology and client results.",
      type: "Award",
      picture: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    },
  ];

  for (let i = 0; i < achievements.length; i++) {
    const a = achievements[i];
    await prisma.achievement.create({ data: { ...a, sortOrder: i } }).catch(() => {});
  }

  const products = [
    {
      name: "E-Commerce Platform",
      icon: "🌐",
      description: "Full-featured online store with payment processing, inventory, and analytics.",
      type: "Website",
      picture: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      features: ["React + Next.js", "Stripe Payments", "Admin Dashboard", "Mobile-first"],
      priceFrom: 2999,
      priceLabel: "Starting from",
    },
    {
      name: "Healthcare Mobile App",
      icon: "📱",
      description: "Patient management, appointment booking, and telemedicine platform.",
      type: "Application",
      picture: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop",
      features: ["React Native", "Real-time Chat", "Video Calls", "EHR Integration"],
      priceFrom: 4999,
      priceLabel: "Starting from",
    },
    {
      name: "Restaurant SaaS System",
      icon: "🌐",
      description: "Complete restaurant management with POS, ordering, and delivery tracking.",
      type: "Website",
      picture: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=800&auto=format&fit=crop",
      features: ["Order Management", "POS System", "Delivery Tracking", "Analytics"],
      priceFrom: 1499,
      priceLabel: "Per month",
    },
  ];

  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    await (prisma as any).product.create({ data: { ...p, sortOrder: i } }).catch(() => {});
  }

  // Seed site settings
  const settings = [
    { key: "company_name", value: "Darakht Software Solutions" },
    { key: "company_tagline", value: "Elevate Your Brand with Technology" },
    { key: "company_email", value: "info@techvision.com" },
    { key: "company_phone", value: "+1 (555) 123-4567" },
    { key: "company_address", value: "123 Innovation Drive, Tech City, TC 10001" },
    { key: "whatsapp_number", value: "+15551234567" },
    { key: "whatsapp_default_message", value: "Hi Darakht Software Solutions! I'd like to get in touch about your services." },
    { key: "facebook_url", value: "https://facebook.com/techvision" },
    { key: "instagram_url", value: "https://instagram.com/techvision" },
    { key: "linkedin_url", value: "https://linkedin.com/company/techvision" },
    { key: "twitter_url", value: "https://twitter.com/techvision" },
    { key: "google_maps_embed", value: "" },
  ];

  for (const s of settings) {
    await prisma.siteSettings.upsert({ where: { key: s.key }, update: {}, create: s });
  }

  // Sample published ads (demo content)
  const medicine = await prisma.category.findUnique({ where: { slug: "medicine" } });
  const restaurants = await prisma.category.findUnique({ where: { slug: "restaurants" } });
  const websites = await prisma.category.findUnique({ where: { slug: "websites" } });

  const sampleAds = [
    {
      title: "MedCare Pharmacy",
      slug: "medcare-pharmacy",
      description: "Your trusted neighborhood pharmacy offering prescription services, health consultations, and wellness products.",
      shortDesc: "Trusted pharmacy with 24/7 online ordering",
      categoryId: medicine?.id,
      status: AdStatus.PUBLISHED,
      isFeatured: true,
      images: ["https://images.unsplash.com/photo-1576091160399-211baeb47d79?w=800&auto=format&fit=crop"],
      thumbnail: "https://images.unsplash.com/photo-1576091160399-211baeb47d79?w=800&auto=format&fit=crop",
      priceLabel: "Starting from",
      priceFrom: 29.99,
      features: ["Free delivery", "Licensed pharmacists", "Online ordering"],
      tags: ["pharmacy", "health"],
    },
    {
      title: "La Cocina Restaurant",
      slug: "la-cocina-restaurant",
      description: "Authentic cuisine with a modern twist. Family-friendly dining with online reservations and catering services.",
      shortDesc: "Fine dining & catering — book your table today",
      categoryId: restaurants?.id,
      status: AdStatus.PUBLISHED,
      isFeatured: true,
      images: ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800"],
      thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      priceLabel: "Average meal",
      priceFrom: 45,
      features: ["Outdoor seating", "Private events", "Online booking"],
      tags: ["restaurant", "food"],
    },
    {
      title: "Darakht Software Solutions E-Commerce Platform",
      slug: "techvision-ecommerce",
      description: "Full-featured online store with payment processing, inventory management, and analytics dashboard.",
      shortDesc: "Launch your online store in days, not months",
      categoryId: websites?.id,
      status: AdStatus.PUBLISHED,
      isFeatured: true,
      images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"],
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      priceLabel: "Starting from",
      priceFrom: 2999,
      technologies: ["Next.js", "PostgreSQL", "Stripe"],
      features: ["Admin dashboard", "Mobile-first", "SEO optimized"],
      tags: ["ecommerce", "website"],
    },
  ];

  for (const ad of sampleAds) {
    if (!ad.categoryId) continue;
    const { categoryId, ...rest } = ad;
    await prisma.advertisement.upsert({
      where: { slug: ad.slug },
      update: {},
      create: { ...rest, categoryId },
    });
  }

  console.log("✅ Seeding complete!");
}

main().catch(console.error).finally(() => prisma.$disconnect());
