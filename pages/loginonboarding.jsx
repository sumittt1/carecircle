import { useState } from "react";

export default function LoginOnboarding({ onComplete }) {
  const [role, setRole] = useState("");
  const [form, setForm] = useState({ name: "", age: "", gender: "" });

  const submit = () => {
    if (!form.name || !form.age || !form.gender) return alert("Fill all fields");

    const data = { role, data: form };
    localStorage.setItem("careCircleUser", JSON.stringify(data));
    onComplete(data);
  };

  if (!role) {
    return (
      <div className="container">
        <h1>Welcome to CareCircle</h1>
        <button className="liquid-btn" onClick={() => setRole("guardian")}>
          Guardian
        </button>
        <button className="liquid-btn" onClick={() => setRole("patient")}>
          Patient
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Age" onChange={e => setForm({ ...form, age: e.target.value })} />
      <select onChange={e => setForm({ ...form, gender: e.target.value })}>
        <option value="">Gender</option>
        <option>male</option>
        <option>female</option>
      </select>
      <button className="liquid-btn" onClick={submit}>Continue</button>
    </div>
  );
}