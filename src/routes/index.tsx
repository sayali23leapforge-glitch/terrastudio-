import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Marquee } from "@/components/site/Marquee";
import { Technology } from "@/components/site/Technology";
import { Impact } from "@/components/site/Impact";
import { Community } from "@/components/site/Community";
import { Campaign } from "@/components/site/Campaign";
import { Investors } from "@/components/site/Investors";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CarbonSmart Solutions Africa — Africa's Climate Future" },
      { name: "description", content: "Verified climate solutions restoring ecosystems, empowering communities and creating sustainable economic growth across Africa — through carbon markets, regenerative agriculture and digital MRV." },
      { property: "og:title", content: "CarbonSmart Solutions Africa" },
      { property: "og:description", content: "Building Africa's climate future through technology, carbon markets and regenerative innovation." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Technology />
        <Impact />
        <Community />
        <Campaign />
        <Investors />
      </main>
      <Footer />
    </div>
  );
}
