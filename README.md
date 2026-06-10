# TechVision Advertising 🚀

A production-ready digital advertising platform for businesses and software companies.

Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **PostgreSQL**, **Prisma**, **NextAuth**, and **Cloudinary**.

---

## ✨ Features

### Customer Panel
- Full-screen hero with animated particle canvas
- Welcome intro animation (plays once per session)
- Category browsing with 3D hover cards
- Featured advertisements with image gallery & video
- Software products section (Websites & Apps)
- Animated statistics counters
- Testimonials marquee carousel
- Contact form with WhatsApp / email / phone links
- Individual ad detail pages with inquiry form
- SEO: sitemap, robots.txt, Open Graph metadata

### Admin Panel
- Secure login (JWT sessions)
- Dashboard with charts (Recharts bar + pie)
- Advertisement CRUD with multi-image upload (Cloudinary)
- Categories management with icon & color picker
- Media library with upload, preview, delete
- Inquiries inbox with slide-over reply panel
- Testimonials management
- Site settings (company info, social links)
- Profile page with password change

---

## 🛠 Setup

### 1. Clone & install

```bash
git clone https://github.com/your-org/techvision-advertising.git
cd techvision-advertising
npm install
```

### 2. Configure environment

```bash
cp .env.example .env.local
```

Fill in `.env.local`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/techvision_db"
NEXTAUTH_SECRET="generate-with: openssl rand -base64 32"
NEXTAUTH_URL="http://localhost:3000"

CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 3. Set up database

```bash
# Push schema to database
npm run db:push

# Seed with default data (admin user, categories, testimonials)
npm run db:seed
```

**Default admin credentials:**
- Email: `admin@techvision.com`
- Password: `admin123`

> ⚠️ Change the password immediately after first login!

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

Admin panel: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

---

## 🚀 Production Deployment

### Vercel (recommended)

```bash
npm run build
vercel deploy
```

Set all environment variables in the Vercel dashboard.

### Self-hosted (Docker)

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm ci && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── (customer)/         # Public-facing pages
│   │   ├── page.tsx        # Homepage
│   │   ├── categories/     # Category browser
│   │   ├── featured/       # Featured ads
│   │   ├── websites/       # Website listings
│   │   ├── applications/   # App listings
│   │   ├── ads/[slug]/     # Ad detail page
│   │   ├── about/          # About page
│   │   └── contact/        # Contact page
│   ├── admin/              # Protected admin panel
│   │   ├── dashboard/      # Analytics dashboard
│   │   ├── advertisements/ # Ad management
│   │   ├── categories/     # Category management
│   │   ├── media/          # Media library
│   │   ├── contacts/       # Inquiry inbox
│   │   ├── testimonials/   # Testimonial management
│   │   ├── settings/       # Site settings
│   │   └── profile/        # Admin profile
│   └── api/                # All API routes
├── components/
│   ├── customer/           # Customer-facing components
│   ├── admin/              # Admin panel components
│   └── shared/             # Shared utilities
├── lib/
│   ├── prisma.ts           # Prisma client singleton
│   ├── auth.ts             # NextAuth config
│   ├── cloudinary.ts       # Cloudinary utilities
│   └── utils.ts            # Helper functions
└── types/
    └── index.ts            # TypeScript definitions
```

---

## 🎨 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Database | PostgreSQL |
| ORM | Prisma |
| Auth | NextAuth.js (JWT) |
| Media | Cloudinary |
| Charts | Recharts |
| Forms | React Hook Form + Zod |
| Notifications | React Hot Toast |

---

## 🔒 Security

- All admin routes protected by NextAuth middleware
- Passwords hashed with bcrypt (12 rounds)
- File uploads validated (type + size limits: 50MB)
- API routes require valid session for mutations
- Environment variables never exposed to client

---

## 📝 License

© 2025 TechVision Advertising. All rights reserved.
