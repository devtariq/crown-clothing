import './category-item.style.scss';

const CategoryItem = ({category}) => {
  const {imageUrl, title} = category;
  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{backgroundImage: `url(${imageUrl})`}}
      ></div>
      <div className='category-body-container'>
        <h2>{title}</h2>
        <a href='#'>Shop Now</a>
      </div>
    </div>
  );
};

export default CategoryItem;