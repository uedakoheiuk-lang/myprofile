"use client";

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
    { name: "Repetitive Inquiries", value: 60 },
    { name: "Complex Inquiries", value: 25 },
    { name: "Other Tasks", value: 15 },
];

const COLORS = ["#ef4444", "#f59e0b", "#3b82f6"];

export function IssueChart() {
    return (
        <div className="w-full h-[400px] bg-zinc-900/50 p-6 rounded-xl border border-white/10 my-8">
            <h3 className="text-xl font-bold mb-6 text-center text-white">Inquiry Breakdown</h3>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{ backgroundColor: '#18181b', borderColor: '#333', color: '#fff' }}
                        itemStyle={{ color: '#fff' }}
                    />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
