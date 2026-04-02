function TransactionRow({ t }) {
  return (
    <tr>
      <td>{t.date}</td>
      <td>₹{t.amount}</td>
      <td>{t.category}</td>
      <td
        style={{
          color: t.type === "income" ? "green" : "red",
        }}
      >
        {t.type}
      </td>
    </tr>
  );
}

export default TransactionRow;