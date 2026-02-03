import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import type { ElementType, ReactNode } from "react";

export function FloatingMessage({
  children,
  className,
  delay = 0,
  duration = 20,
  x = 0,
  y = 0,
}: {
  children: ReactNode;
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

export function PresenceDot({
  status,
}: {
  status: "online" | "away" | "offline";
}) {
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

export function MessageBubble({
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

export function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: {
  icon: ElementType;
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

export function PricingCard({
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
