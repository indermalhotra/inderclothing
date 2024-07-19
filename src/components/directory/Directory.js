import CategoryItem from "../category-item/category-item";

function Directory({category}) {
  return (
    <div className="categories-container">
      {category.map((categ) => (
        <CategoryItem
          key={categ.id}
          title={categ.title}
          imgURL={categ.imgURL}
        />
      ))}
    </div>
  );
}

export default Directory;
