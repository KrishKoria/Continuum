import { motion } from "motion/react";
import { PricingCard } from "@/components/landing/landing-parts";

const pricingTiers = [
  {
    name: "Starter",
    price: "$0",
    description: "For small teams getting started",
    features: [
      "Up to 10 team members",
      "5 channels",
      "7-day message history",
      "Basic AI summarization",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$12",
    description: "For growing teams",
    features: [
      "Unlimited team members",
      "Unlimited channels",
      "Unlimited message history",
      "Full AI capabilities",
      "Priority support",
      "Custom integrations",
      "Advanced analytics",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "SSO & SAML",
      "99.99% SLA",
      "Dedicated support",
      "Custom contracts",
      "On-premise option",
      "Compliance certifications",
    ],
  },
];

export default function PricingSection() {
  return (
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
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={tier.name}
              name={tier.name}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              popular={tier.popular}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
