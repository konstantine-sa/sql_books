import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import classes from "./Books.module.scss";
import Book from "../../components/Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllBooks();
  }, []);

  return (
    <div>
      <h1>Book Shop</h1>
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          desc={book.desc}
          cover={book.cover}
          price={book.price}
        />
      ))}

      <button>
        <Link to="/add">Add new book</Link>
      </button>
    </div>
  );
};

export default Books;
