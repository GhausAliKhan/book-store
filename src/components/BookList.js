import { useSelector } from 'react-redux';
import BookDetails from './BookDetails';
import '../styles/bookList.css';
import FormAddBook from './FormAddBook';

function BookList() {
  const { books } = useSelector((state) => state.books);
  return (
    <>
      <div className="book-container">
        {books.map((book) => (
          <BookDetails
            id={book.id}
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            chapter={book.chapter}
            percentage={book.percentage}
          />
        ))}
      </div>
      <div className="book-container">
        <FormAddBook />
      </div>
    </>
  );
}

export default BookList;
