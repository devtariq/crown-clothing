import CategoryItem from "../category-item/category-item.component";
import './directory.style.scss'

const Directoy = ({categories}) =>  {
	return (
    <div className='categories-container'>
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
}

export default Directoy;
