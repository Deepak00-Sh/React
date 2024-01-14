import { useState } from "react";

export default function Form({ onAddItems }) {
  //Creating the state for controlling the elements of the form
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  //Event handler to handle the Add click
  function handleSubmit(e) {
    // This prevents the page to reload on form submit
    // e is the object with all the information about the current event
    e.preventDefault();

    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 25 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item...."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
