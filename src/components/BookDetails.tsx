import type { Book } from "../types/book"

type BookDetailsProps = {
    book: Book | null
};

export function BookDetails({book} : BookDetailsProps) {
    return book === null ? (
        <p>Виберіть книгу зі списку</p>
    ) : (
        <div className='flex flex-col justify-center border border-white/15 m-5 p-3 rounded-lg gap-3 mb-5 bg-cyan-600/10'>
            <h1 className='font-bold text-xl'>{book.title}</h1>
            <p>Автор: {book.author}</p>
            <p>Рік: {book.year}</p>
            <p>Жанр: {book.genre}</p>
        </div>
    )
}