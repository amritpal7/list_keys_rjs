import Item from "./Item";
const ItemsList = ({ items, handleCheckInput, handleDelete }) => {
  return (
    <div>
      <ul>
        {items.map(item => (
          <Item
            key={item.id}
            item={item}
            handleCheckInput={handleCheckInput}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;
