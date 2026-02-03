import { CreditCard, MessageSquare } from "lucide-react";

type FooterColumn = {
  title: string;
  links: string[];
};

const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "Changelog"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API Reference", "Blog", "Community"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Privacy", "Terms"],
  },
];

const socialLinks = ["Twitter", "GitHub", "Discord"];

export default function LandingFooter() {
  return (
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

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Continuum. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            {socialLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
