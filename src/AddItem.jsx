import { FaPlus } from "react-icons/fa";
import { useRef } from "react";
const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        autoFocus
        ref={inputRef}
        id="addItem"
        placeholder="add items"
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        required
      />
      <button
        type="submit"
        aria-label="add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
