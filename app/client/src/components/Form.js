import { useEffect, useState } from "react";

export const Form = () => {
  const [form, setForm] = useState({
    amount: 0,
    description: "",
    date: "",
  });
  const [transactionData, setTransactionData] = useState([]);
  const fetchTransactions = async () => {
    const res = await fetch("http://localhost:4000/transaction");
    const data = await res.json();
    setTransactionData(data.data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);
  console.log(transactionData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(form);
    const res = await fetch("http://localhost:4000/transaction", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "content-type": "application/json" },
    });
    const data = await res.json();
    //console.log(res);
    console.log(data);
    if (res.ok) {
      fetchTransactions();
    }
  };

  const handleInput = (e) => {
    //console.log(e.target.value);

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="amount"
          value={form.amount}
          placeholder="Enter transaction amount"
          onChange={handleInput}
        />
        <input
          type="text"
          name="description"
          value={form.description}
          placeholder="Enter transaction details"
          onChange={handleInput}
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleInput}
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      <div>
        {transactionData.map((each) => (
          <>
            <span> {each.amount} </span>
            <span> {each.description} </span>
            <span> {each.date} </span>
            <br />
          </>
        ))}
      </div>
    </div>
  );
};
