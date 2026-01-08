import { LucideIcon } from "lucide-react";

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureItem = ({ icon: Icon, title, description }: FeatureItemProps) => {
  return (
    <div className="flex flex-col items-center text-center gap-4 px-4 py-6 border rounded-lg"
         style={{
           borderColor: "var(--surface-border)"
         }}>
      <div
        className="flex items-center justify-center w-14 h-14 rounded-full mb-2"
        style={{ backgroundColor: "var(--primary)", color: "var(--background-color)" }}
      >
        <Icon className="w-7 h-7" />
      </div>

      <h3 className="text-lg font-semibold" style={{ color: "var(--primary)" }}>
        {title}
      </h3>

      <p className="text-sm text-white">
        {description}
      </p>
    </div>
  );
};

export default FeatureItem;
