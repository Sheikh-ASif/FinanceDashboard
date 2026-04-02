import { useAppContext } from "../Context/AppContext";
import TransactionTable from "../components/transactions/TransactionTable";
import Button from "../components/ui/Button";

function Transactions() {
  const { transactions, filter, setFilter, role } = useAppContext();

  return (
    <div className="transactions-page">
      <h1 className="page-title">Transactions</h1>

      <div className="filter-bar">
        <span className="filter-label">Filter</span>

        <div className="filter-pills">
          <span
            className={`pill ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </span>

          <span
            className={`pill ${filter === "income" ? "active" : ""}`}
            onClick={() => setFilter("income")}
          >
            Income
          </span>

          <span
            className={`pill ${filter === "expense" ? "active" : ""}`}
            onClick={() => setFilter("expense")}
          >
            Expense
          </span>
        </div>
      </div>

      {role === "admin" && (
        <div className="actions-bar">
          <Button>➕ Add Transaction</Button>
        </div>
      )}

      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default Transactions;