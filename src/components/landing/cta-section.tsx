import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-primary/30 bg-linear-to-b from-primary/10 to-transparent p-12 md:p-16 text-center overflow-hidden"
        >
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
  );
}
