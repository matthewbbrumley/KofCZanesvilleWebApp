// components/ui/CardList.js

export default function CardList({ items, renderItem }) {
  if (!items || items.length === 0) {
    return (
      <div className="card-list-empty">
        No items found.
      </div>
    );
  }

  return (
    <section className="card-list">

      {items.map((item) => (
        <div key={item.id}>
          {renderItem(item)}
        </div>
      ))}

    </section>
  );
}ok