import { FaRegTrashAlt } from "react-icons/fa";

const Item = ({ item, handleCheckInput, handleDelete }) => {
  return (
    <div>
      <li className="item" key={item.id}>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => handleCheckInput(item.id)}
        />
        <label
          style={item.checked ? { textDecoration: "line-through" } : null}
          onDoubleClick={() => handleCheckInput(item.id)}
        >
          {item.item}
        </label>
        <FaRegTrashAlt
          onClick={() => handleDelete(item.id)}
          role="button"
          tabIndex="0"
          aria-label={`Delete ${item.item}`}
        />
      </li>
    </div>
  );
};

export default Item;
