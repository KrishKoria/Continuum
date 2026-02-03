import { motion } from "motion/react";
import { Globe, Shield, Users, Zap } from "lucide-react";

const securityItems = [
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
];

export default function SecuritySection() {
  return (
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
          {securityItems.map((item, i) => (
            <motion.div
              key={item.title}
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
  );
}
