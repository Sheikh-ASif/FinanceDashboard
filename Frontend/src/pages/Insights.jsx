import { useAppContext } from "../Context/AppContext";

function Insights() {
  const { allTransactions } = useAppContext();

  const categoryTotals = {};

  allTransactions.forEach((t) => {
    if (t.type === "expense") {
      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  let highestCategory = "";
  let highestAmount = 0;

  for (let category in categoryTotals) {
    if (categoryTotals[category] > highestAmount) {
      highestAmount = categoryTotals[category];
      highestCategory = category;
    }
  }

  return (
    <div className="insights">
      <h1 className="page-title">Insights</h1>

      <div className="cards">
        <div className="card insight-card">
          <h3>Top Spending Category</h3>
          <p className="insight-value">
            {highestCategory || "No data"} 
          </p>
          <span className="insight-amount">
            ₹{highestAmount.toLocaleString()}
          </span>
        </div>

        <div className="card insight-card">
          <h3>Observation</h3>
          <p className="insight-text">
            You are spending the most on{" "}
            <span className="highlight">
              {highestCategory || "N/A"}
            </span>. Try to optimize this for better savings.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Insights;