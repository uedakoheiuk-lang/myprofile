"use client";

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
    {
        name: "Response Time (min)",
        before: 30,
        after: 3,
    },
    {
        name: "Monthly Hours",
        before: 50,
        after: 30,
    },
];

export function ImpactChart() {
    return (
        <div className="w-full h-[400px] bg-zinc-900/50 p-6 rounded-xl border border-white/10 my-8">
            <h3 className="text-xl font-bold mb-6 text-center text-white">Impact Analysis</h3>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#18181b', borderColor: '#333', color: '#fff' }}
                        itemStyle={{ color: '#fff' }}
                    />
                    <Legend />
                    <Bar dataKey="before" name="Before" fill="#ef4444" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="after" name="After" fill="#22c55e" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
