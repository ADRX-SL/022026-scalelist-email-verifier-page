import { Globe, Users, CheckCircle } from "lucide-react";

const FeatureCard = ({
  title,
  icon: Icon,
  bullets,
}: {
  title: string;
  icon: React.ElementType;
  bullets: string[];
}) => (
  <div className="rounded-2xl bg-card p-8">
    {/* Image placeholder */}
    <div className="mb-6 flex h-48 items-center justify-center rounded-xl bg-muted">
      <Icon className="h-16 w-16 text-muted-foreground/40" />
    </div>
    <h3 className="mb-4 text-xl font-bold text-foreground">{title}</h3>
    <ul className="space-y-3">
      {bullets.map((b, i) => (
        <li key={i} className="flex items-start gap-3 text-muted-foreground">
          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Features = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-primary">
          Reveal verified emails and mobile numbers on any site or profile
        </p>
        <h2 className="mx-auto mb-12 max-w-3xl text-center text-4xl font-extrabold tracking-tight text-foreground">
          Find Contact Information & Build Targeted Lists Anywhere
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <FeatureCard
            title="On Professional Profiles"
            icon={Users}
            bullets={[
              "Find emails and phone numbers on Professional profiles instantly",
              "Push leads to your CRM, CSV, or the tool of your choice in one-click",
            ]}
          />
          <FeatureCard
            title="On Any Website"
            icon={Globe}
            bullets={[
              "Extract emails and mobile numbers from any company website",
              "Effortless List Building: Export leads instantly to your CRM or CSV",
              "Bulk-find contacts from company team pages",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
