import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insights";

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [role, setRole] = useState("viewer");

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div>
          <h2 className="logo">💰 Finance</h2>

          <nav className="nav">
            <button
              className={`nav-item ${activePage === "dashboard" ? "active" : ""}`}
              onClick={() => setActivePage("dashboard")}
            >
              📊 Dashboard
            </button>

            <button
              className={`nav-item ${activePage === "transactions" ? "active" : ""}`}
              onClick={() => setActivePage("transactions")}
            >
              💳 Transactions
            </button>

            <button
              className={`nav-item ${activePage === "insights" ? "active" : ""}`}
              onClick={() => setActivePage("insights")}
            >
              📈 Insights
            </button>
          </nav>
        </div>

        <div className="role-switch">
          <span className="role-label">Role</span>

          <div className="role-toggle">
            <button
              className={`role-btn ${role === "viewer" ? "active" : ""}`}
              onClick={() => setRole("viewer")}
            >
              👁 Viewer
            </button>

            <button
              className={`role-btn ${role === "admin" ? "active" : ""}`}
              onClick={() => setRole("admin")}
            >
              🛠 Admin
            </button>
          </div>
        </div>
      </aside>

      <main className="main-content">
        {activePage === "dashboard" && <Dashboard />}
        {activePage === "transactions" && <Transactions />}
        {activePage === "insights" && <Insights />}
      </main>
    </div>
  );
}

export default App;