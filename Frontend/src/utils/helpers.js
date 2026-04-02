export function calculateBalance(transactions) {
  return transactions.reduce((total, t) => {
    return t.type === "income"
      ? total + t.amount
      : total - t.amount;
  }, 0);
}

export function calculateIncome(transactions) {
  return transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
}

export function calculateExpenses(transactions) {
  return transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);
}

export function groupByCategory(transactions) {
  const result = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      result[t.category] =
        (result[t.category] || 0) + t.amount;
    }
  });

  return Object.entries(result).map(([name, value]) => ({
    name,
    value,
  }));
}

export function generateLineData(transactions) {
  let balance = 0;

  return transactions.map((t) => {
    balance += t.type === "income" ? t.amount : -t.amount;

    return {
      date: t.date,
      balance,
    };
  });
}

export function filterTransactions(transactions, type) {
  if (type === "all") return transactions;

  return transactions.filter((t) => t.type === type);
}

export function searchTransactions(transactions, query) {
  return transactions.filter((t) =>
    t.category.toLowerCase().includes(query.toLowerCase())
  );
}

export function sortTransactions(transactions, key) {
  const sorted = [...transactions];

  if (key === "amount") {
    return sorted.sort((a, b) => b.amount - a.amount);
  }

  if (key === "date") {
    return sorted.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  }

  return transactions;
}

export function getTopSpendingCategory(transactions) {
  const categoryTotals = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  let topCategory = "";
  let maxAmount = 0;

  for (let category in categoryTotals) {
    if (categoryTotals[category] > maxAmount) {
      maxAmount = categoryTotals[category];
      topCategory = category;
    }
  }

  return {
    category: topCategory,
    amount: maxAmount,
  };
}