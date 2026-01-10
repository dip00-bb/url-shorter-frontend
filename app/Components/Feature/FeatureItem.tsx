import { LucideIcon } from "lucide-react";

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureItem = ({ icon: Icon, title, description }: FeatureItemProps) => {
  return (
    <div
      className="flex flex-col items-center text-center gap-4 px-4 py-6 border rounded-lg
             cursor-pointer transition-all duration-300 ease-in-out
             hover:-translate-y-1 hover:shadow-lg"
      style={{
        borderColor: "var(--surface-border)"
      }}
    >
      <div
        className="flex items-center justify-center w-14 h-14 rounded-full mb-2
               transition-colors duration-300"
        style={{ backgroundColor: "var(--primary)", color: "var(--background-color)" }}
      >
        <Icon className="w-7 h-7" />
      </div>

      <h3
        className="text-lg font-semibold transition-colors duration-300"
        style={{ color: "var(--primary)" }}
      >
        {title}
      </h3>

      <p className="text-sm text-white transition-colors duration-300">
        {description}
      </p>
    </div>

  );
};

export default FeatureItem;
