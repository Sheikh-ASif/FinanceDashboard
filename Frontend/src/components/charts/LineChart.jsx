import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function CustomLineChart({ data }) {
  return (
    <div className="card">
      <h3>Balance Trend</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="balance" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomLineChart;