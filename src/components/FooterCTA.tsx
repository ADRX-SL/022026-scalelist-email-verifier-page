import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterCTA = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl bg-card p-12 text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-2xl font-bold text-primary-foreground">
            S
          </div>
          <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-foreground">
            Try our data quality for free!
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 text-base">
              Get started for free
            </Button>
            <Button size="lg" variant="outline" className="gap-2 rounded-full px-8 text-base">
              Talk to Sales <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
