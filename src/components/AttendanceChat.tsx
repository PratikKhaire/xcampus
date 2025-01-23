"use client";

import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "mon",
    present: 40,
    absent: 60,
  },
  {
    name: "Tue",
    present: 37,
    absent: 80,
  },
  {
    name: "Web",
    present: 20,
    absent: 98,
  },
  {
    name: "Thu",
    present: 80,
    absent: 60,
  },
  {
    name: "Fri",
    present: 60,
    absent: 50,
  },
];

const AttendanceChat = () => {
  return (
    <div className=" bg-white rounded-lg p-4 h-full">
      <div>
        <h1 className=" text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" axisLine={false} />
          <YAxis />
          <Tooltip />
          <Legend
            align=" left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#FAE27C"
            legendType="cicle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            legendType="cicle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChat;
