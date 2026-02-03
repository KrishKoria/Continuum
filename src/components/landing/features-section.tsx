import { motion } from "motion/react";
import {
  Building2,
  Clock,
  Hash,
  ImageIcon,
  MessageSquare,
  Pencil,
  SmilePlus,
  Users,
  Zap,
} from "lucide-react";
import { FeatureCard } from "@/components/landing/landing-parts";
import type { ElementType } from "react";

type FeatureItem = {
  icon: ElementType;
  title: string;
  description: string;
  delay: number;
};

const features: FeatureItem[] = [
  {
    icon: Zap,
    title: "Real-time Messaging",
    description:
      "Instant message delivery powered by Cloudflare Durable Objects. See who's typing, online, and engaged.",
    delay: 0,
  },
  {
    icon: MessageSquare,
    title: "Threaded Conversations",
    description:
      "Keep discussions organized with threaded replies. Never lose context in busy channels.",
    delay: 0.1,
  },
  {
    icon: Hash,
    title: "Organized Channels",
    description:
      "Create channels for teams, projects, or topics. Public or private, you're in control.",
    delay: 0.2,
  },
  {
    icon: Building2,
    title: "Organizations",
    description:
      "Multi-tenant architecture with team workspaces, roles, and permissions.",
    delay: 0.3,
  },
  {
    icon: SmilePlus,
    title: "Emoji Reactions",
    description:
      "Express yourself with reactions. Quick acknowledgments without cluttering the chat.",
    delay: 0.4,
  },
  {
    icon: ImageIcon,
    title: "Rich Media Sharing",
    description:
      "Share images, files, and links with secure presigned URLs and instant previews.",
    delay: 0.5,
  },
  {
    icon: Users,
    title: "Team Presence",
    description:
      "See who's online, away, or offline. Real-time presence indicators across your workspace.",
    delay: 0.6,
  },
  {
    icon: Pencil,
    title: "Rich Text Editor",
    description:
      "Format messages with markdown, code blocks, lists, and more. Express ideas clearly.",
    delay: 0.7,
  },
  {
    icon: Clock,
    title: "Infinite Scroll",
    description:
      "Seamlessly browse message history with reverse infinite scroll. No pagination needed.",
    delay: 0.8,
  },
];

export default function FeaturesSection() {
  return (
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
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
