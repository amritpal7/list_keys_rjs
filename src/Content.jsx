import ItemsList from "./ItemsList";

const Content = ({ items, handleCheckInput, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemsList
          items={items}
          handleCheckInput={handleCheckInput}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ color: "#333" }}>List is empty</p>
      )}
    </main>
  );
};

export default Content;
