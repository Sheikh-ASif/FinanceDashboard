import { createContext, useContext, useState } from "react";
import { transactions as initialData } from "../Data/mockData";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(initialData);
  const [role, setRole] = useState("viewer");
  const [filter, setFilter] = useState("all");

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
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};