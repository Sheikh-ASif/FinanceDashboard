import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function LineChart({ data }) {
  return (
    <div className="card">
      <h3 className="chart-title">Balance Trend</h3>

      <ResponsiveContainer width="100%" height={300}>
        <ReLineChart data={data}>
          
          {/* Grid */}
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(150,150,150,0.2)"
          />

          {/* X Axis */}
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            stroke="#888"
          />

          {/* Y Axis */}
          <YAxis
            tick={{ fontSize: 12 }}
            stroke="#888"
          />

          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: "10px",
            }}
            formatter={(value) => `₹${value}`}
          />

          {/* Line */}
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#aa3bff"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </ReLineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChart;