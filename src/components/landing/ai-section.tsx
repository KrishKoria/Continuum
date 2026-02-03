import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { AtSign, Bot, Check, Pencil, Sparkles } from "lucide-react";

export default function AiSection() {
  return (
    <section id="ai" className="py-24 md:py-32 relative overflow-hidden">
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
              your team communicates. Summarize lengthy threads, compose better
              messages, and never miss what matters.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Sparkles,
                  title: "Thread Summarization",
                  description:
                    "Catch up on long discussions instantly. AI distills key points, decisions, and action items.",
                },
                {
                  icon: Pencil,
                  title: "AI Composer",
                  description:
                    "Fix grammar, adjust tone, or expand ideas with one click. Write better messages, faster.",
                },
                {
                  icon: AtSign,
                  title: "Smart Mentions",
                  description:
                    "AI suggests who to loop in based on conversation context and expertise.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="shrink-0 size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
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
                    {[
                      "Launch date confirmed for March 15th",
                      "New pricing tiers approved by finance",
                      "Marketing to prepare announcement",
                    ].map((text) => (
                      <li key={text} className="flex items-start gap-2">
                        <Check className="size-4 text-primary shrink-0 mt-0.5" />
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg bg-muted/30 p-4">
                  <h5 className="text-sm font-medium mb-2 text-primary">
                    Action Items
                  </h5>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {[
                      "@sarah - Finalize landing page copy",
                      "@mike - Update API documentation",
                      "@team - Review changelog draft",
                    ].map((text) => (
                      <li key={text}>{text}</li>
                    ))}
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

            <div className="absolute -inset-4 -z-10 rounded-3xl bg-linear-to-r from-primary/20 via-primary/10 to-transparent blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
