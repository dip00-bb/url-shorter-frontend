import { ReactNode } from "react";


interface DashboardCardProps {
    children: ReactNode;
    count: string;
}

const DashboardCard = ({
    children,
    count,
}: DashboardCardProps) => {
    return (
        <div className="flex flex-col items-center text-center gap-3 px-4 py-1.5 border  border-(--surface-border)">
            <div>
                <h3 className="text-lg font-semibold text-(--primary)">{children}</h3>
            </div>

            <p className="text-xl text-gray-600 max-w-xs ">
                {count}
            </p>
        </div>
    );
};

export default DashboardCard;