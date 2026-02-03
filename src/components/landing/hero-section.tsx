import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import type { MotionValue } from "motion/react";
import { ArrowRight, ChevronRight, Hash, Sparkles } from "lucide-react";
import {
  FloatingMessage,
  MessageBubble,
  PresenceDot,
} from "@/components/landing/landing-parts";
import type { RefObject } from "react";

interface HeroSectionProps {
  heroRef: RefObject<HTMLDivElement | null>;
  heroY: MotionValue<number>;
  heroOpacity: MotionValue<number>;
}

export default function HeroSection({
  heroRef,
  heroY,
  heroOpacity,
}: HeroSectionProps) {
  return (
    <section ref={heroRef} className="relative pt-32 pb-24 md:pt-40 md:pb-32">
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="mx-auto max-w-7xl px-6"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-125 hidden lg:block"
          >
            <div className="absolute inset-0 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-xl overflow-hidden shadow-2xl shadow-primary/5">
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
  );
}
