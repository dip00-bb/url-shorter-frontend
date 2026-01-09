import FeatureItem from "../Feature/FeatureItem";
import { UserPlus, Link, BarChart3 } from "lucide-react";

const HowItWorks = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-(--primary)">
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <FeatureItem
            icon={UserPlus}
            title="Sign Up & Login"
            description="Create an account and log in to start shortening your URLs."
          />

          <FeatureItem
            icon={Link}
            title="Paste Your Long URL"
            description="Enter your long URL and instantly generate a short link."
          />

          <FeatureItem
            icon={BarChart3}
            title="Share & Track Clicks"
            description="Share your short link and track how many times it’s visited."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
