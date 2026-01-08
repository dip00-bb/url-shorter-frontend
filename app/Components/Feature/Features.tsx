
import { Shield, Link, BarChart3, Users } from "lucide-react";
import FeatureItem from "./FeatureItem";

const Features = () => {
  return (
    <section className="py-20" >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "var(--primary)" }}>
          Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <FeatureItem
            icon={Shield}
            title="Secure Authentication"
            description="Your account and data are protected with secure login."
          />

          <FeatureItem
            icon={Link}
            title="Unique Short Links"
            description="Generate short URLs (6–8 characters) for easy sharing."
          />

          <FeatureItem
            icon={BarChart3}
            title="Track Clicks"
            description="Monitor how many times your URLs are visited."
          />

          <FeatureItem
            icon={Users}
            title="Dashboard"
            description="Manage all your short URLs in one clean interface."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
