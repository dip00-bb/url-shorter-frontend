

interface DashboardCardProps {
    title: string;
    count: string;
}

const DashboardCard = ({
    title,
    count,
}: DashboardCardProps) => {
    return (
        <div className="flex flex-col items-center text-center gap-3 px-4 ">
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>

            <p className="text-sm text-gray-600 max-w-xs">
                {count}
            </p>
        </div>
    );
};

export default DashboardCard;