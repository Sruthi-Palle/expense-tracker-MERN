import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    amount: 0,
    description: "",
    date: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(form);
    const res = await fetch("http://localhost:4000/transaction", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "content-type": "application/json" },
    });
    const data = await res.json();
    console.log(res);
    console.log(data);
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
    </div>
  );
}

export default App;
