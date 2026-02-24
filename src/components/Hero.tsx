import { Star, ArrowRight, Globe, Triangle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const RatingBadge = ({ rating, platform, icon }: { rating: string; platform: string; icon: "google" | "capterra" }) => (
  <div className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm">
    {icon === "google" ? (
      <Globe className="h-4 w-4 text-muted-foreground" />
    ) : (
      <Triangle className="h-4 w-4 fill-orange-500 text-orange-500" />
    )}
    <span className="font-medium text-foreground">{rating} on {platform}</span>
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  </div>
);

const BrowserMockup = () => (
  <div className="relative w-full max-w-md">
    {/* Browser window */}
    <div className="rounded-xl border border-border bg-white shadow-xl overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-gray-50 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="ml-4 flex-1 rounded-md bg-gray-200 px-3 py-1 text-xs text-muted-foreground" />
      </div>
      {/* Page content - LinkedIn-like placeholders */}
      <div className="p-6 space-y-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-3">
            <div className="h-12 w-12 rounded-md bg-gray-200 shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-3 w-3/4 rounded bg-gray-200" />
              <div className="h-3 w-1/2 rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Extension panel - overlaid on right */}
    <div className="absolute top-12 -right-4 w-64 rounded-xl border border-border bg-white shadow-2xl overflow-hidden">
      {/* Extension header */}
      <div className="flex items-center gap-2 px-4 pt-4 pb-2">
        <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-[10px] font-bold text-primary-foreground">
          S
        </div>
        <span className="font-semibold text-sm text-foreground">Scalelist</span>
        <div className="ml-auto flex gap-1">
          <div className="h-4 w-4 rounded bg-gray-200" />
          <div className="h-4 w-4 rounded bg-gray-200" />
        </div>
      </div>

      {/* Profile */}
      <div className="px-4 py-3 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gray-200 shrink-0" />
        <div>
          <p className="font-bold text-sm text-foreground">Daniel Scott</p>
          <p className="text-xs text-muted-foreground">Support Advisor at Zapier</p>
        </div>
      </div>

      {/* Push to Hubspot */}
      <div className="mx-4 flex items-center justify-between rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground">
        <span>Push to Hubspot</span>
        <ArrowRight className="h-3 w-3" />
      </div>

      {/* Add to list button */}
      <div className="px-4 py-3">
        <Button className="w-full gap-2 rounded-full">
          <Play className="h-4 w-4 fill-primary-foreground" /> Add to list
        </Button>
      </div>

      {/* Contact details */}
      <div className="px-4 pb-2">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Contact Details</p>
        <p className="text-sm font-medium text-primary">danielscott@zapier.com</p>
        <p className="text-sm text-foreground mt-0.5">+1 78 617 74 86</p>
      </div>

      {/* Company info */}
      <div className="px-4 py-3 border-t border-border">
        <div className="flex items-center gap-2 mb-1">
          <div className="h-5 w-5 rounded bg-orange-500" />
          <span className="font-semibold text-sm text-foreground">Zapier</span>
        </div>
        <p className="text-xs text-muted-foreground">Zapier, founded in 2011 by Wade Foster, Bryan Helmig, and Mike Knoop...</p>
      </div>
    </div>
  </div>
);

const TrustBar = () => {
  const logos = ["ElevenLabs", "CLOUDERA", "stripe", "J.P.Morgan", "ORACLE NetSuite", "BD"];
  return (
    <div className="border-y border-border bg-white py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          {logos.map((logo) => (
            <span key={logo} className="text-lg font-semibold tracking-wide text-muted-foreground/60">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-8">
        <div className="mx-auto max-w-6xl px-6">
          {/* Rating badges */}
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <RatingBadge rating="4.8 / 5" platform="Google" icon="google" />
            <RatingBadge rating="4.9 / 5" platform="Capterra" icon="capterra" />
          </div>

          <div className="grid items-start gap-16 lg:grid-cols-[1fr,auto]">
            {/* Left content */}
            <div className="pt-4">
              <h1 className="mb-6 text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.1] tracking-tight text-foreground">
                <span className="whitespace-nowrap">Get the best emails and</span><br />
                mobile numbers,<br />
                Anywhere
              </h1>
              <p className="mb-10 max-w-lg text-lg text-muted-foreground">
                Find verified professional emails and phone numbers from professional profiles and any website.
              </p>
              <div className="mb-10 flex flex-wrap items-center gap-4">
                <Button size="lg" className="gap-2 rounded-full px-8 text-base">
                  Download Chrome Extension <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 text-base">
                  Talk to Sales
                </Button>
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/50">
                7000+ companies save time using Scalelist
              </p>
            </div>

            {/* Right - Browser mockup */}
            <div className="flex justify-center lg:justify-end">
              <BrowserMockup />
            </div>
          </div>
        </div>
      </section>
      <TrustBar />
    </>
  );
};

export default Hero;
