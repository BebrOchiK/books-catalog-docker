import { useState } from 'react';
import './App.css'
import { type Book } from './types/book';
import { BookList } from './components/BookList';
import { BookDetails } from './components/BookDetails';
import { BookForm } from './components/BookForm';

function App() {
  const bookList: Book[] = [
    {
      id: '1',
      title: 'Кобзар',
      author: 'Тарас Шевченко',
      year: 1840,
      genre: 'Поезія',
    },
    {
      id: '2',
      title: 'Тіні забутих предків',
      author: 'Михайло Коцюбинський',
      year: 1911,
      genre: 'Повість',
    },
    {
      id: '3',
      title: 'Тигролови',
      author: 'Іван Багряний',
      year: 1944,
      genre: 'Пригодницький роман',
    },
  ];

  const [books, setBooks] = useState<Book[]>(bookList);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  function handleAdd(title: string, author: string, year: number, genre: string) {
    const newBook: Book = {id: Date.now().toString(), title, author, year, genre};
    setBooks(prev => [...prev, newBook]);
  }

  function handleSelect(book: Book) {
        setSelectedBook(book);
  }

  function handleDelete(id: string) {
    setBooks(prev => prev.filter(t => t.id !== id));
  }


  return (
    <>
      <BookList books={books} onSelectBook={handleSelect} onDeleteBook={handleDelete}/>
      <BookDetails book={selectedBook} />
      <BookForm onAdd={handleAdd} />
    </>
  )
}

export default App
