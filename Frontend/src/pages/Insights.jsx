import { useAppContext } from "../Context/AppContext";

function Insights() {
  const { allTransactions } = useAppContext();

  // Calculate category spending
  const categoryTotals = {};

  allTransactions.forEach((t) => {
    if (t.type === "expense") {
      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  // Find highest spending category
  let highestCategory = "";
  let highestAmount = 0;

  for (let category in categoryTotals) {
    if (categoryTotals[category] > highestAmount) {
      highestAmount = categoryTotals[category];
      highestCategory = category;
    }
  }

  return (
    <div>
      <h1>Insights</h1>

      <div className="card">
        <h3>Top Spending Category</h3>
        <p>
          {highestCategory} (₹{highestAmount})
        </p>
      </div>

      <div className="card" style={{ marginTop: "20px" }}>
        <h3>Observation</h3>
        <p>
          You are spending the most on <b>{highestCategory}</b>.
          Try to manage it for better savings.
        </p>
      </div>
    </div>
  );
}

export default Insights;