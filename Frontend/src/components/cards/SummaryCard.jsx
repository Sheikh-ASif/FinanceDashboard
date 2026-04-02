function SummaryCard({ title, amount, icon, color = "#aa3bff", trend }) {
  return (
    <div className="card summary-card">
      
     
      <div className="card-header">
        <div
          className="icon-box"
          style={{ background: `${color}20`, color }}
        >
          {icon}
        </div>
        <p className="card-title">{title}</p>
      </div>

      
      <h2 className="card-amount">
        ₹{amount.toLocaleString()}
      </h2>

      {/* Trend (optional) */}
      {trend && (
        <p
          className="card-trend"
          style={{
            color: trend > 0 ? "green" : "red",
          }}
        >
          {trend > 0 ? "▲" : "▼"} {Math.abs(trend)}%
        </p>
      )}
    </div>
  );
}

export default SummaryCard;