import classes from "./Book.module.scss";

const Book = ({ id, title, desc, img, price }) => {
  return (
    <div className={classes.book}>
      {img && <img className={classes.cover} src={img} alt=""></img>}
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.desc}>{desc}</p>
      <span className={classes.price}>{price}</span>
    </div>
  );
};

export default Book;
