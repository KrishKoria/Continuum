export default function LogosSection() {
  return (
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
  );
}
