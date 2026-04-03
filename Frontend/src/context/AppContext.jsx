import { createContext, useContext, useState, useEffect } from "react";
import { transactions as initialData } from "../Data/mockData";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(initialData);
  const [role, setRole] = useState("viewer");
  const [filter, setFilter] = useState("all");

  // 🔐 Auth State
  const [user, setUser] = useState(null);

  // ✅ Load user from localStorage safely
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (err) {
      console.error("Error parsing user:", err);
      localStorage.removeItem("user");
    }
  }, []);

  // ✅ UPDATED Login (accepts full object now)
  const login = (userData) => {
    if (!userData || !userData.email) return;

    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // ✅ Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // 💰 Transactions
  const addTransaction = (newTransaction) => {
    setTransactions((prev) => [
      { id: Date.now(), ...newTransaction },
      ...prev,
    ]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  const filteredTransactions =
    filter === "all"
      ? transactions
      : transactions.filter((t) => t.type === filter);

  const value = {
    transactions: filteredTransactions,
    allTransactions: transactions,
    addTransaction,
    deleteTransaction,
    role,
    setRole,
    filter,
    setFilter,

    // 🔐 Auth
    user,
    login,
    logout,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};