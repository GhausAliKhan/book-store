import BookDetails from './BookDetails';
import '../styles/bookList.css';
import FormAddBook from './FormAddBook';

function BookList() {
  const books = [
    {
      id: 1,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      category: 'Adventure',
      chapter: 4,
      percentage: 38,
    },
    {
      id: 2,
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      category: 'Historical novel',
      chapter: 9,
      percentage: 45,
    },
    {
      id: 3,
      title: 'Game of Thrones',
      author: 'George R. R. Martin',
      category: 'High Fantasy',
      chapter: 8,
      percentage: 85,
    },
  ];
  return (
    <>
      <div className="book-container">
        {books.map((book) => (
          <BookDetails key={book.id} book={book} />
        ))}
      </div>
      <div className="form-container">
        <FormAddBook />
      </div>
    </>
  );
}

export default BookList;
