const CategoryCard = ({ category }: { category: { name: string; image: string; description: string } }) => {
  return (
    <a
      href={`/category/${category.name.toLowerCase()}`}
      className="category-card"
    >
      <div className="category-image-container">
        <img
          src={category.image || "/placeholder.svg"}
          alt={category.name}
          className="category-image"
        />
        <div className="category-overlay">
          <h3 className="category-title">{category.name}</h3>
          <p className="category-description">{category.description}</p>
        </div>
      </div>
    </a>
  );
};

export default CategoryCard;
