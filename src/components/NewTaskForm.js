import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim() === "") {
      setError("Task details cannot be empty");
      return;
    }
    setError("");
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory(categories[0]);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="task-text">
        Details
        <input
          id="task-text"
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-required="true"
        />
      </label>
      <label htmlFor="task-category">
        Category
        <select
          id="task-category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-required="true"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      {error && <p className="error">{error}</p>}
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;