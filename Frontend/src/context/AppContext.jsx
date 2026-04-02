import { createContext, useContext, useState } from "react";
import { transactions as initialData } from "../data/mockData";

// Create Context
const AppContext = createContext();

// Custom Hook (clean usage)
export const useAppContext = () => useContext(AppContext);

// Provider Component
export const AppProvider = ({ children }) => {
  // Global State
  const [transactions, setTransactions] = useState(initialData);
  const [role, setRole] = useState("viewer");
  const [filter, setFilter] = useState("all");

  // Add Transaction (Admin Feature)
  const addTransaction = (newTransaction) => {
    setTransactions((prev) => [
      { id: Date.now(), ...newTransaction },
      ...prev,
    ]);
  };

  // Delete Transaction (Optional)
  const deleteTransaction = (id) => {
    setTransactions((prev) =>
      prev.filter((t) => t.id !== id)
    );
  };

  // Filtered Transactions
  const filteredTransactions =
    filter === "all"
      ? transactions
      : transactions.filter((t) => t.type === filter);

  return (
    <AppContext.Provider
      value={{
        transactions: filteredTransactions,
        allTransactions: transactions,
        addTransaction,
        deleteTransaction,
        role,
        setRole,
        filter,
        setFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};