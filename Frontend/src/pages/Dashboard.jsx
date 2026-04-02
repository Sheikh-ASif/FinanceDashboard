import SummaryCard from "../components/Cards/SummaryCard";
import CustomLineChart from "../components/charts/LineChart";
import CustomPieChart from "../components/charts/PieChart";

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

  // Line Chart Data (running balance)
  let runningBalance = 0;
  const lineData = allTransactions.map((t) => {
    runningBalance += t.type === "income" ? t.amount : -t.amount;
    return {
      date: t.date,
      balance: runningBalance,
    };
  });

  // Pie Chart Data
  const pieData = groupByCategory(allTransactions);

  return (
    <div>
      <h1>Dashboard</h1>

      {/* Cards */}
      <div className="cards">
        <SummaryCard title="Total Balance" amount={balance} />
        <SummaryCard title="Income" amount={income} />
        <SummaryCard title="Expenses" amount={expenses} />
      </div>

      {/* Charts */}
      <div className="cards">
        <CustomLineChart data={lineData} />
        <CustomPieChart data={pieData} />
      </div>
    </div>
  );
}

export default Dashboard;