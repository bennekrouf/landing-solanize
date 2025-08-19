# Solanize.ai

**Talk to your Solana wallet.** Swap, stake, lend, and rebalance your portfolio — just by chatting. Powered by AI, secured by Phantom.

## Features

🤖 **Natural Language Commands** - No complex UIs, just chat with your wallet  
🌐 **Multi-Protocol Support** - Jupiter, Marinade, Pyth Network integration  
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
├── messages/
│   ├── en.json            # English translations
│   └── fr.json            # French translations
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

- **Primary**: Purple to Pink gradient (`from-purple-500 to-pink-500`)
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
