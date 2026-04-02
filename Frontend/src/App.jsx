import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insights";

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [role, setRole] = useState("viewer"); // for RBAC later

  return (
    <div className="app-container">
      
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">💰 Finance</h2>

        <nav>
          <button onClick={() => setActivePage("dashboard")}>
            Dashboard
          </button>
          <button onClick={() => setActivePage("transactions")}>
            Transactions
          </button>
          <button onClick={() => setActivePage("insights")}>
            Insights
          </button>
        </nav>

        {/* Role Switch (Important for assignment) */}
        <div className="role-switch">
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="viewer">Viewer</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {activePage === "dashboard" && <Dashboard />}
        {activePage === "transactions" && <Transactions role={role} />}
        {activePage === "insights" && <Insights />}
      </main>
    </div>
  );
}

export default App;