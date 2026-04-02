function SummaryCard({ title, amount }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p style={{ fontSize: "22px", fontWeight: "bold" }}>
        ₹{amount}
      </p>
    </div>
  );
}

export default SummaryCard;