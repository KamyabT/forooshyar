"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "فروردین", مجموع: 5000000 },
  { month: "اردیبهشت", مجموع: 8000000 },
  { month: "خرداد", مجموع: 7500000 },
  { month: "تیر", مجموع: 12000000 },
  { month: "مرداد", مجموع: 15000000 },
  { month: "شهریور", مجموع: 13500000 },
];
const SalesChart = () => {
  return (
    <div className=" bg-background rounded-lg p-4 shadow-md">
      <div className="flex justify-between">
        <h2 className="text-[18px]">روند فروش</h2>
        <div>انتخاب بازه</div>
      </div>
      <div className="mt-4">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0611d7" stopOpacity={0.18} />
                <stop offset="100%" stopColor="#0611d7" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="مجموع"
              stroke="#0611d7"
              strokeWidth={2}
              fill="url(#salesGradient)"
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;
