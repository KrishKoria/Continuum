"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  MessageSquare,
  Users,
  Zap,
  Shield,
  CreditCard,
  Hash,
  AtSign,
  SmilePlus,
  ImageIcon,
  Pencil,
  Clock,
  Bot,
  Building2,
  Check,
  ChevronRight,
  Globe,
  Menu,
  X,
} from "lucide-react";
import { useRef, useState } from "react";

// Floating message component for hero
function FloatingMessage({
  children,
  className,
  delay = 0,
  duration = 20,
  x = 0,
  y = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x, y }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0.8, 1, 1, 0.9],
        y: [y, y - 20, y - 40, y - 60],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Presence indicator
function PresenceDot({ status }: { status: "online" | "away" | "offline" }) {
  const colors = {
    online: "bg-emerald-500",
    away: "bg-amber-500",
    offline: "bg-zinc-500",
  };
  return (
    <span
      className={`size-2.5 rounded-full ${colors[status]} ring-2 ring-background`}
    />
  );
}

// Message bubble component
function MessageBubble({
  avatar,
  name,
  message,
  time,
  hasAI,
  reactions,
}: {
  avatar: string;
  name: string;
  message: string;
  time: string;
  hasAI?: boolean;
  reactions?: string[];
}) {
  return (
    <div className="group relative flex gap-3 rounded-lg bg-card/50 p-3 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all">
      <div className="relative shrink-0">
        <div className="size-9 rounded-md bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center text-sm font-medium">
          {avatar}
        </div>
        <div className="absolute -bottom-0.5 -right-0.5">
          <PresenceDot status="online" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2">
          <span className="font-semibold text-sm">{name}</span>
          <span className="text-xs text-muted-foreground">{time}</span>
          {hasAI && (
            <span className="inline-flex items-center gap-1 text-xs text-primary">
              <Sparkles className="size-3" />
              AI
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-0.5 truncate">
          {message}
        </p>
        {reactions && reactions.length > 0 && (
          <div className="flex gap-1 mt-2">
            {reactions.map((r, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 rounded-full bg-muted/50 px-2 py-0.5 text-xs"
              >
                {r}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Feature card
function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm hover:bg-card/50 hover:border-primary/30 transition-all duration-300"
    >
      <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary group-hover:bg-primary/20 transition-colors">
        <Icon className="size-5" />
      </div>
      <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

// Pricing card
function PricingCard({
  name,
  price,
  description,
  features,
  popular,
  delay = 0,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative rounded-2xl border p-8 ${
        popular
          ? "border-primary/50 bg-linear-to-b from-primary/10 to-transparent shadow-lg shadow-primary/10"
          : "border-border/50 bg-card/30"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            <Sparkles className="size-3" />
            Most Popular
          </span>
        </div>
      )}
      <div className="mb-6">
        <h3 className="font-display text-xl font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
      <div className="mb-6">
        <span className="font-display text-4xl font-bold">{price}</span>
        {price !== "Custom" && (
          <span className="text-muted-foreground">/mo</span>
        )}
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <Check className="size-4 text-primary shrink-0 mt-0.5" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={popular ? "default" : "outline"}
        className="w-full"
        size="lg"
      >
        Get Started
        <ArrowRight className="size-4" />
      </Button>
    </motion.div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="relative min-h-screen bg-background font-body overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 size-150 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 size-125 rounded-full bg-primary/8 blur-[100px]" />
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-lg bg-linear-to-br from-primary to-primary/60 flex items-center justify-center">
                <MessageSquare className="size-4 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight">
                Continuum
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </a>
              <a
                href="#ai"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                AI
              </a>
              <a
                href="#pricing"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Docs
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                Sign In
              </Button>
              <Button size="sm" className="hidden sm:inline-flex">
                Get Started
                <ArrowRight className="size-3.5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl"
          >
            <div className="px-6 py-4 space-y-4">
              <a
                href="#features"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#ai"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                AI
              </a>
              <a
                href="#pricing"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Docs
              </a>
              <div className="pt-4 border-t border-border/50 space-y-2">
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
                <Button className="w-full">
                  Get Started
                  <ArrowRight className="size-3.5" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="mx-auto max-w-7xl px-6"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-6"
              >
                <Sparkles className="size-3.5" />
                AI-Powered Communication
                <ChevronRight className="size-3.5" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
              >
                Where teams{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary to-emerald-400">
                  communicate
                </span>{" "}
                in real-time
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
              >
                Continuum brings your team together with AI-powered messaging,
                intelligent thread summarization, and seamless real-time
                collaboration. Built for modern teams who demand more.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button size="lg" className="text-base px-8">
                  Start Free Trial
                  <ArrowRight className="size-4" />
                </Button>
                <Button variant="outline" size="lg" className="text-base px-8">
                  Watch Demo
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-6 mt-10 justify-center lg:justify-start"
              >
                <div className="flex -space-x-2">
                  {["JD", "MK", "AS", "RB"].map((initials, i) => (
                    <div
                      key={i}
                      className="size-8 rounded-full bg-linear-to-br from-primary/30 to-primary/10 border-2 border-background flex items-center justify-center text-xs font-medium"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">2,000+</span>{" "}
                  <span className="text-muted-foreground">
                    teams already onboard
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right: Floating messages demo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-125 hidden lg:block"
            >
              {/* Main chat window */}
              <div className="absolute inset-0 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-xl overflow-hidden shadow-2xl shadow-primary/5">
                {/* Window header */}
                <div className="flex items-center gap-3 border-b border-border/50 px-4 py-3 bg-card/50">
                  <div className="flex gap-1.5">
                    <div className="size-3 rounded-full bg-red-500/80" />
                    <div className="size-3 rounded-full bg-yellow-500/80" />
                    <div className="size-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Hash className="size-4 text-muted-foreground" />
                    <span className="font-medium">product-launch</span>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="flex -space-x-1.5">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="size-6 rounded-full bg-muted border border-background"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      12 online
                    </span>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-4 space-y-3">
                  <MessageBubble
                    avatar="SR"
                    name="Sarah R."
                    message="Just pushed the final designs to Figma! Check them out"
                    time="2:34 PM"
                    reactions={["🎉 3", "👀 2"]}
                  />
                  <MessageBubble
                    avatar="JD"
                    name="Jake D."
                    message="Looking great! The new dashboard is much cleaner"
                    time="2:36 PM"
                  />
                  <MessageBubble
                    avatar="AI"
                    name="Continuum AI"
                    message="Thread summary: Team reviewed new designs, approved for launch..."
                    time="2:38 PM"
                    hasAI
                  />
                </div>

                {/* Composer */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border/50 bg-card/50">
                  <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/50 px-3 py-2">
                    <input
                      type="text"
                      placeholder="Message #product-launch"
                      className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                      disabled
                    />
                    <Button
                      size="icon-xs"
                      variant="ghost"
                      className="text-muted-foreground"
                    >
                      <Sparkles className="size-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <FloatingMessage
                delay={0}
                duration={15}
                x={-80}
                y={60}
                className="absolute top-20 -left-16"
              >
                <div className="rounded-lg bg-card/80 border border-border/50 px-3 py-2 backdrop-blur-sm shadow-lg">
                  <div className="flex items-center gap-2 text-xs">
                    <PresenceDot status="online" />
                    <span className="text-muted-foreground">
                      Mike is typing...
                    </span>
                  </div>
                </div>
              </FloatingMessage>

              <FloatingMessage
                delay={5}
                duration={18}
                x={40}
                y={80}
                className="absolute top-10 -right-8"
              >
                <div className="rounded-lg bg-primary/20 border border-primary/30 px-3 py-2 backdrop-blur-sm shadow-lg">
                  <div className="flex items-center gap-2 text-xs text-primary">
                    <Sparkles className="size-3" />
                    <span>AI summarized 23 messages</span>
                  </div>
                </div>
              </FloatingMessage>

              <FloatingMessage
                delay={10}
                duration={20}
                x={60}
                y={100}
                className="absolute bottom-32 -right-12"
              >
                <div className="rounded-full bg-card/80 border border-border/50 px-3 py-1.5 backdrop-blur-sm shadow-lg">
                  <div className="flex items-center gap-1.5 text-sm">
                    <span>🎉</span>
                    <span>👍</span>
                    <span>🚀</span>
                  </div>
                </div>
              </FloatingMessage>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Logos Section */}
      <section className="py-16 border-y border-border/50 bg-card/20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by innovative teams worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-50">
            {["Vercel", "Cloudflare", "Neon", "Prisma", "Kinde"].map((name) => (
              <div
                key={name}
                className="text-xl font-semibold text-muted-foreground"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Everything your team needs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From real-time messaging to AI-powered insights, Continuum has all
              the features to keep your team connected and productive.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Zap}
              title="Real-time Messaging"
              description="Instant message delivery powered by Cloudflare Durable Objects. See who's typing, online, and engaged."
              delay={0}
            />
            <FeatureCard
              icon={MessageSquare}
              title="Threaded Conversations"
              description="Keep discussions organized with threaded replies. Never lose context in busy channels."
              delay={0.1}
            />
            <FeatureCard
              icon={Hash}
              title="Organized Channels"
              description="Create channels for teams, projects, or topics. Public or private, you're in control."
              delay={0.2}
            />
            <FeatureCard
              icon={Building2}
              title="Organizations"
              description="Multi-tenant architecture with team workspaces, roles, and permissions."
              delay={0.3}
            />
            <FeatureCard
              icon={SmilePlus}
              title="Emoji Reactions"
              description="Express yourself with reactions. Quick acknowledgments without cluttering the chat."
              delay={0.4}
            />
            <FeatureCard
              icon={ImageIcon}
              title="Rich Media Sharing"
              description="Share images, files, and links with secure presigned URLs and instant previews."
              delay={0.5}
            />
            <FeatureCard
              icon={Users}
              title="Team Presence"
              description="See who's online, away, or offline. Real-time presence indicators across your workspace."
              delay={0.6}
            />
            <FeatureCard
              icon={Pencil}
              title="Rich Text Editor"
              description="Format messages with markdown, code blocks, lists, and more. Express ideas clearly."
              delay={0.7}
            />
            <FeatureCard
              icon={Clock}
              title="Infinite Scroll"
              description="Seamlessly browse message history with reverse infinite scroll. No pagination needed."
              delay={0.8}
            />
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section id="ai" className="py-24 md:py-32 relative overflow-hidden">
        {/* AI-specific background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-200 rounded-full bg-primary/10 blur-[150px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-6">
                <Bot className="size-3.5" />
                AI-Powered
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Intelligence built into{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-emerald-400">
                  every conversation
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Continuum&apos;s AI doesn&apos;t just assist—it transforms how
                your team communicates. Summarize lengthy threads, compose
                better messages, and never miss what matters.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Sparkles className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Thread Summarization</h3>
                    <p className="text-sm text-muted-foreground">
                      Catch up on long discussions instantly. AI distills key
                      points, decisions, and action items.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Pencil className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">AI Composer</h3>
                    <p className="text-sm text-muted-foreground">
                      Fix grammar, adjust tone, or expand ideas with one click.
                      Write better messages, faster.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <AtSign className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Smart Mentions</h3>
                    <p className="text-sm text-muted-foreground">
                      AI suggests who to loop in based on conversation context
                      and expertise.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* AI demo card */}
              <div className="rounded-2xl border border-primary/30 bg-card/50 p-6 backdrop-blur-xl shadow-2xl shadow-primary/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-10 rounded-lg bg-linear-to-br from-primary to-primary/60 flex items-center justify-center">
                    <Sparkles className="size-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">AI Summary</h4>
                    <p className="text-xs text-muted-foreground">
                      Generated just now
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg bg-muted/30 p-4">
                    <h5 className="text-sm font-medium mb-2 text-primary">
                      Key Decisions
                    </h5>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="size-4 text-primary shrink-0 mt-0.5" />
                        Launch date confirmed for March 15th
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="size-4 text-primary shrink-0 mt-0.5" />
                        New pricing tiers approved by finance
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="size-4 text-primary shrink-0 mt-0.5" />
                        Marketing to prepare announcement
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-muted/30 p-4">
                    <h5 className="text-sm font-medium mb-2 text-primary">
                      Action Items
                    </h5>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li>@sarah - Finalize landing page copy</li>
                      <li>@mike - Update API documentation</li>
                      <li>@team - Review changelog draft</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Summarized from 47 messages
                  </span>
                  <Button size="sm" variant="outline">
                    View Full Thread
                  </Button>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-linear-to-r from-primary/20 via-primary/10 to-transparent blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 md:py-32 border-y border-border/50 bg-card/20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground mb-6">
              <Shield className="size-3.5" />
              Enterprise-Grade Security
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Built on trust, secured by design
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your conversations are protected with industry-leading security
              practices and compliance standards.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Arcjet Protection",
                description: "XSS, SQL injection, and attack prevention",
              },
              {
                icon: Users,
                title: "OAuth & Magic Links",
                description: "Secure authentication via Kinde",
              },
              {
                icon: Zap,
                title: "Rate Limiting",
                description: "Protect against abuse and DDoS",
              },
              {
                icon: Globe,
                title: "Edge Deployment",
                description: "Global CDN via Vercel",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="mx-auto mb-4 size-12 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground">
                  <item.icon className="size-6" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start free, scale as you grow. No hidden fees, no surprises.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              name="Starter"
              price="$0"
              description="For small teams getting started"
              features={[
                "Up to 10 team members",
                "5 channels",
                "7-day message history",
                "Basic AI summarization",
                "Community support",
              ]}
              delay={0}
            />
            <PricingCard
              name="Pro"
              price="$12"
              description="For growing teams"
              features={[
                "Unlimited team members",
                "Unlimited channels",
                "Unlimited message history",
                "Full AI capabilities",
                "Priority support",
                "Custom integrations",
                "Advanced analytics",
              ]}
              popular
              delay={0.1}
            />
            <PricingCard
              name="Enterprise"
              price="Custom"
              description="For large organizations"
              features={[
                "Everything in Pro",
                "SSO & SAML",
                "99.99% SLA",
                "Dedicated support",
                "Custom contracts",
                "On-premise option",
                "Compliance certifications",
              ]}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border border-primary/30 bg-linear-to-b from-primary/10 to-transparent p-12 md:p-16 text-center overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 size-150 rounded-full bg-primary/20 blur-[120px]" />
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to transform how your team communicates?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of teams already using Continuum. Start your free
              trial today—no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8">
                Start Free Trial
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-16 bg-card/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="size-8 rounded-lg bg-linear-to-br from-primary to-primary/60 flex items-center justify-center">
                  <MessageSquare className="size-4 text-primary-foreground" />
                </div>
                <span className="font-display text-xl font-bold tracking-tight">
                  Continuum
                </span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs mb-6">
                AI-powered team communication for modern teams. Real-time,
                intelligent, and built for scale.
              </p>
              <div className="flex items-center gap-4">
                <CreditCard className="size-5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  Secure payments via Stripe
                </span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    API Reference
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Continuum. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Discord
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
