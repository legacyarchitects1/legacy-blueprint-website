# Legacy Blueprint OS - Production Deployment

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- GitHub account
- Cloudflare account
- Supabase account (optional)

### Installation

```bash
# Clone repository
git clone https://github.com/legacyarchitects1/legacy-blueprint-website.git
cd legacy-blueprint-website

# Install dependencies
npm install

# Set environment variables
cp .env.example .env.local
```

### Environment Variables

Create `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### Local Development

```bash
npm run dev
```

Visit `http://localhost:3000`

### Production Build

```bash
npm run build
npm start
```

## 🌐 Deployment

### Via GitHub Actions (Recommended)

1. Add GitHub Secrets:
   - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
   - `CLOUDFLARE_ACCOUNT_ID`: b7891b08cf716586ab90cc9b2b4dd4a7
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase key

2. Push to main:

```bash
git add .
git commit -m "Deploy: Production configuration"
git push origin main
```

3. Monitor at: https://github.com/legacyarchitects1/legacy-blueprint-website/actions

### Live URLs

- **Main Site**: https://legacy-blueprint-website.pages.dev
- **Owner's Console**: https://legacy-blueprint-website.pages.dev/console
- **GitHub Actions**: https://github.com/legacyarchitects1/legacy-blueprint-website/actions
- **Cloudflare Dashboard**: https://dash.cloudflare.com/b7891b08cf716586ab90cc9b2b4dd4a7/pages/view/legacy-blueprint-website

## 📊 Features

✅ Next.js 14 frontend
✅ Supabase authentication
✅ Cloudflare Pages deployment
✅ Owner's Console interface
✅ Real-time monitoring
✅ GitOps automation

## 🔐 Security

- HTTPS enforced
- Environment variables protected
- GitHub Secrets for credentials
- Role-based access control
- Audit logging

## 📝 Documentation

- [DEPLOYMENT.md](./DEPLOYMENT.md) - Detailed deployment guide
- [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) - Step-by-step checklist

---

**Status**: Production Ready ✅
