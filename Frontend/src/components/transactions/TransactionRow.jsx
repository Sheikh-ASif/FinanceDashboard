function TransactionRow({ t }) {
  const isIncome = t.type === "income";

  return (
    <tr className="transaction-row">
      
      
      <td className="td-date">
        {new Date(t.date).toLocaleDateString()}
      </td>

     
      <td
        className={`td-amount ${
          isIncome ? "income-text" : "expense-text"
        }`}
      >
        {isIncome ? "+" : "-"} ₹{t.amount.toLocaleString()}
      </td>

      
      <td>
        <span className="category-badge">
          {t.category}
        </span>
      </td>

      
      <td>
        <span
          className={`status-badge ${
            isIncome ? "income" : "expense"
          }`}
        >
          {isIncome ? "▲ Income" : "▼ Expense"}
        </span>
      </td>
    </tr>
  );
}

export default TransactionRow;