import { useAppContext } from "../Context/AppContext";
import TransactionTable from "../components/transactions/TransactionTable";

function Transactions() {
  const {
    transactions,
    filter,
    setFilter,
    role,
  } = useAppContext();

  return (
    <div>
      <h1>Transactions</h1>

      {/* Filter */}
      <div style={{ marginBottom: "15px" }}>
        <label>Filter: </label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* Admin Button */}
      {role === "admin" && (
        <button style={{ marginBottom: "10px" }}>
          ➕ Add Transaction
        </button>
      )}

      {/* Table */}
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default Transactions;