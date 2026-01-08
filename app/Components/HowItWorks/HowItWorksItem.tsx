import { LucideIcon } from "lucide-react";

interface HowItWorksItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const HowItWorksItem = ({
  icon: Icon,
  title,
  description,
}: HowItWorksItemProps) => {
  return (
    <div className="flex flex-col items-center text-center gap-3 px-4 ">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100">
        <Icon className="w-7 h-7 text-(--primary)" />
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 max-w-xs">
        {description}
      </p>
    </div>
  );
};

export default HowItWorksItem;
