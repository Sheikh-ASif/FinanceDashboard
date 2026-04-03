import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insights";
import Login from "./pages/Login";
import { useAppContext } from "./context/AppContext";

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const { user, logout } = useAppContext();

  // 🔐 If not logged in → show login
  if (!user) {
    return <Login />;
  }

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

        <div>
          <p style={{ marginBottom: "10px" }}>👤 {user.email}</p>

          <button onClick={logout} className="logout-btn">
            🚪 Logout
          </button>
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