import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, Menu, MessageSquare, X } from "lucide-react";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "AI", href: "#ai" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#" },
];

interface LandingNavProps {
  mobileMenuOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export default function LandingNav({
  mobileMenuOpen,
  onToggle,
  onClose,
}: LandingNavProps) {
  return (
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
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
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
              onClick={onToggle}
            >
              {mobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl"
        >
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={onClose}
              >
                {link.label}
              </a>
            ))}
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
  );
}
