import { useState } from "react";
import type { Book } from "../types/book"

type BookListProps = {
    books: Book[],
    onSelectBook: (book: Book) => void,
    onDeleteBook: (id: string) => void
};

export function BookList({books, onSelectBook, onDeleteBook} : BookListProps) {
    const [filterQuery, setFilterQuery] = useState("");
    const filteredBooks = books.filter(b => b.author.toLowerCase().includes(filterQuery.toLowerCase()) || b.title.toLowerCase().includes(filterQuery.toLowerCase()));
    return(
        <>
        <div className='flex flex-col justify-center items-center border border-white/15 m-5 p-3 rounded-lg gap-3 mb-5 bg-cyan-600/10'>
            <div className="bg-purple-400/40 rounded-md p-1">
                <input type="text" placeholder="Пошук" onChange={(e) => setFilterQuery(e.target.value)}/>
            </div>
            {filteredBooks.map(book => (
            <button key={book.id} className={`flex flex-row w-1/3 border border-white/15 mx-5 px-8 py-3 rounded-lg gap-8 mb-5 bg-blue-600/10 hover:bg-purple-600/30 transition duration-300 justify-center`}
            onClick={() => onSelectBook(book)}>
                <h1 className='font-bold text-xl'>{book.title}</h1>
                <p>Автор: {book.author}</p>
                <button className="rounded-xl bg-red-600/25 p-3" onClick={() => onDeleteBook(book.id)}>Видалити</button>
            </button>
            ))}
        </div>        
        </>
    )
}