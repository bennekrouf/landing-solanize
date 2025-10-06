# Solanize.ai

**Talk to your Solana wallet.** Swap, stake, lend, and rebalance your portfolio – just by chatting. Powered by AI, secured by Phantom.

## Features

🤖 **Natural Language Commands** - No complex UIs, just chat with your wallet  
🌍 **Multi-Protocol Support** - Jupiter, Marinade, Pyth Network integration  
👀 **Transparent Transactions** - Review all prices, fees, and slippage  
🔒 **Phantom Secured** - Your keys stay safe, never shared  
📈 **Portfolio Copilot** - AI-powered insights and rebalancing  
⚡ **Real-Time Data** - Live prices and instant market updates  

## Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with modern design system
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Theme**: next-themes with CSS variables
- **Icons**: React Icons (Feather)

## Getting Started

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Type check
yarn type-check
```

## Project Structure

```
├── config/
│   └── site.yaml           # Site configuration
├── content/
│   ├── en/
│   │   ├── blog/           # Published posts (EN)
│   │   ├── draft/          # Work in progress (EN)
│   │   └── queue/          # Scheduled posts (EN)
│   └── fr/
│       ├── blog/           # Published posts (FR)
│       ├── draft/          # Work in progress (FR)
│       └── queue/          # Scheduled posts (FR)
├── messages/
│   ├── en.json            # English translations
│   └── fr.json            # French translations
├── scripts/
│   ├── publish-daily.sh   # Auto-publish script
│   ├── queue-post.sh      # Queue management
│   └── pause-publishing.sh # Pause/resume
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── [locale]/      # Internationalized routes
│   │   └── api/           # API routes
│   ├── components/        # React components
│   │   ├── layout/        # Layout components
│   │   └── ui/            # UI components
│   └── types/             # TypeScript types
└── public/                # Static assets
```

## Blog Publishing System

### Content Organization

Posts follow a three-stage workflow:

1. **draft/** - Work in progress, not published
2. **queue/** - Ready to publish, scheduled
3. **blog/** - Published and live

### Daily Auto-Publishing

The system automatically publishes one post per language per day:

```bash
# Setup cron (runs daily at 9 AM)
crontab -e

# Add this line:
0 9 * * * cd /path/to/project && ./scripts/publish-daily.sh
```

### Manual Publishing Commands

```bash
# Publish today's posts manually
yarn publish:daily

# Add a post to the queue
yarn queue:add en content/en/draft/my-post.md

# Pause/resume auto-publishing
yarn publish:pause

# Check queue status
find content/*/queue -name "*.md" | wc -l

# Force publish (skip date check)
rm .last-publish && yarn publish:daily

# View publish logs
tail -f logs/publish.log
```

### Publishing Workflow

```bash
# 1. Create draft
vim content/en/draft/my-new-post.md

# 2. Move to queue when ready
mv content/en/draft/my-new-post.md content/en/queue/

# 3. Auto-publishes next day at 9 AM
# (or manually: yarn publish:daily)

# 4. Regenerate blog data
yarn blog-data
```

### Queue Management

```bash
# List queued posts
ls -1 content/en/queue/*.md
ls -1 content/fr/queue/*.md

# Count posts in queue
find content/en/queue -name "*.md" | wc -l

# Preview next post to publish (oldest first)
find content/en/queue -type f -name "*.md" | sort | head -n 1

# Skip today's publish
touch .skip-today

# Pause for vacation
yarn publish:pause
# Resume when back
yarn publish:pause
```

## Configuration

### Site Settings

Edit `config/site.yaml`:

```yaml
site:
  name: "Solanize.ai"
  domain: "solanize.ai"
  description: "Talk to your Solana wallet..."

integrations:
  - name: "Phantom Wallet"
    url: "https://phantom.app"
  - name: "Jupiter"
    url: "https://jup.ag"
```

### Environment Variables

```bash
# Copy template and fill in values
cp .env.template .env.local
```

## Development

Following your Rust/YAML preferences:
- ✅ All config in YAML files
- ✅ Trace logging support  
- ✅ Clear error handling
- ✅ Modular component structure
- ✅ TypeScript throughout

## Design System

- **Primary**: Orange gradient (`#FF6B00`)
- **Dark Mode**: Automatic theme switching
- **Responsive**: Mobile-first design
- **Animations**: Smooth Framer Motion transitions
- **Accessibility**: Semantic markup and proper contrast

## Website Sections

1. **Hero** - "Talk to your Solana wallet" with demo chat
2. **How It Works** - 3-step process visualization
3. **Features** - 6 key features with icons
4. **Demo** - Interactive demo placeholder
5. **Security** - Trust & security highlights
6. **Integrations** - Phantom, Jupiter, Marinade, Pyth
7. **CTA** - Final call-to-action section

## Deployment

### Vercel (Recommended)

```bash
vercel
```

### Traditional Hosting

```bash
yarn build
# Upload .next folder and package.json
yarn start
```

## Next Steps

1. **Add Demo Video** - Replace demo placeholder with actual demo
2. **Connect APIs** - Integrate with Jupiter, Phantom SDK
3. **Add Waitlist** - Set up email collection
4. **Analytics** - Add tracking for conversions
5. **SEO** - Optimize metadata and sitemap

## Integrations Roadmap

- [ ] Phantom Wallet SDK
- [ ] Jupiter API for swaps
- [ ] Marinade for liquid staking
- [ ] Pyth Network for price feeds
- [ ] Solscan for transaction links
- [ ] WebSocket for real-time updates

Built with modern best practices for the Solana ecosystem.
