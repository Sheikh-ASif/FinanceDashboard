import { useState } from "react";
import TransactionRow from "./TransactionRow";

function TransactionTable({ transactions }) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  
  let filtered = transactions.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  
  if (sortBy === "amount") {
    filtered = [...filtered].sort((a, b) => b.amount - a.amount);
  }

  if (sortBy === "date") {
    filtered = [...filtered].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  }

  return (
    <div className="card table-card">

     
      <div className="table-controls">

        
        <input
          type="text"
          placeholder="🔍 Search category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        
        <div className="sort-buttons">
          <button
            className={sortBy === "date" ? "active" : ""}
            onClick={() => setSortBy("date")}
          >
            📅 Date
          </button>

          <button
            className={sortBy === "amount" ? "active" : ""}
            onClick={() => setSortBy("amount")}
          >
            💰 Amount
          </button>

          <button
            className={sortBy === "" ? "active" : ""}
            onClick={() => setSortBy("")}
          >
            🔄 Reset
          </button>
        </div>
      </div>

     
      <h3 className="table-title">Recent Transactions</h3>

      
      {!filtered.length ? (
        <p className="empty-state">No transactions found 🚫</p>
      ) : (
        <div className="table-wrapper">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Type</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((t) => (
                <TransactionRow key={t.id} t={t} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default TransactionTable;