import type { StatsCardProps } from "@/types";
import { MoveLeft } from "lucide-react";

const StatsCard = ({ title, Icon, value, color, IconBg }: StatsCardProps) => {
  return (
    <div className="flex flex-col bg-background gap-2 rounded-lg p-4 shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-muted-foreground text-[14px] font-bold">{title}</p>
          <p className="font-extrabold text-[22px]">{value}</p>
        </div>
        <div className={`p-3 rounded-xl`} style={{ backgroundColor: IconBg }}>
          <span className="bg-green w-full h-full">
            <Icon size={30} color={color} />
          </span>
        </div>
      </div>
      <div>
        <a href="#" className="flex align-center cursor-pointer">
          <span className="me-2 text-primary font-medium">مشاهده</span>
          <span className="flex align-center">
            <MoveLeft strokeWidth={1.5} size={24} color="#0611d7"/>
          </span>
        </a>
      </div>
    </div>
  );
};

export default StatsCard;
