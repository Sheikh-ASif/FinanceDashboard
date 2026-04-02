import SummaryCard from "../components/cards/SummaryCard";
import LineChart from "../components/charts/LineChart";
import PieChart from "../components/charts/PieChart";

import { useAppContext } from "../Context/AppContext";
import {
  calculateBalance,
  calculateIncome,
  calculateExpenses,
  groupByCategory,
} from "../utils/helpers";

function Dashboard() {
  const { allTransactions } = useAppContext();

  const balance = calculateBalance(allTransactions);
  const income = calculateIncome(allTransactions);
  const expenses = calculateExpenses(allTransactions);

  let runningBalance = 0;

  const lineData = allTransactions.map((t) => {
    runningBalance += t.type === "income" ? t.amount : -t.amount;
    return {
      date: t.date,
      balance: runningBalance,
    };
  });

  const pieData = groupByCategory(allTransactions);

  return (
    <div className="dashboard">
      <h1 className="page-title">Dashboard</h1>

      <div className="cards">
        <SummaryCard title="Total Balance" amount={balance} />
        <SummaryCard title="Income" amount={income} />
        <SummaryCard title="Expenses" amount={expenses} />
      </div>

      <div className="charts-grid">
        <LineChart data={lineData} />
        <PieChart data={pieData} />
      </div>
    </div>
  );
}

export default Dashboard;