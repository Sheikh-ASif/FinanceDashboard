import TransactionRow from "./TransactionRow";

function TransactionTable({ transactions }) {
  if (!transactions.length) {
    return <p>No transactions found</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Type</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((t) => (
          <TransactionRow key={t.id} t={t} />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;