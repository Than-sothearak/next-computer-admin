"use client";
import { useState } from "react";

export default function AddTransaction({ setTransactions }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense");

  const addTransaction = () => {
    const parsedAmount = parseFloat(amount);
    
    if (!category.trim() || isNaN(parsedAmount) || parsedAmount <= 0) {
      alert("Please enter a valid category and amount.");
      return;
    }

    setTransactions((prev) => [
      ...prev,
      { 
        id: Date.now(), 
        type, 
        category, 
        amount: parsedAmount, 
        date: new Date().toISOString().split("T")[0] 
      },
    ]);

    // Reset fields to empty strings instead of undefined
    setAmount("");
    setCategory("");
    setType("expense");
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Category"
        className="border p-2 mr-2 text-black "
        value={category} // Ensures controlled input
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        className="border p-2 mr-2 text-black "
        value={amount} // Ensures controlled input
        onChange={(e) => setAmount(e.target.value)}
      />
      <select 
        value={type} 
        onChange={(e) => setType(e.target.value)} 
        className="p-2 border text-black "
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <button 
        onClick={addTransaction} 
        className="ml-2 bg-blue-500 text-primarytext px-4 py-2"
      >
        Add
      </button>
    </div>
  );
}
