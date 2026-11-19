import { useState } from "react";

type BookFormProps = {
    onAdd: (title: string, author: string, year: number, genre: string) => void;
}

export function BookForm({onAdd} : BookFormProps) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState(0);
    const [genre, setGenre] = useState("");

    function handleSubmit(title: string, author: string, year: number, genre: string) {
        if (title.trim() === "") {
            return;
        }
        onAdd(title, author, year, genre);
        setTitle("");
        setAuthor("");
        setYear(0);
        setGenre("");
    }

    return (
        <>
        <div className='flex flex-col border border-white/15 m-5 p-3 rounded-lg gap-3 mb-5 bg-cyan-600/10'>
            <h1 className="text-2xl font-bold">Нова книга</h1>
            <input placeholder="Назва" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input placeholder="Автор" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <input placeholder="Рік" type="number" value={year} onChange={(e) => setYear(Number(e.target.value))} />
            <input placeholder="Жанр" value={genre} onChange={(e) => setGenre(e.target.value)} />
            <button className="mx-70 rounded-xl p-3 bg-cyan-600/10 hover:scale-105 transition duration-300" onClick={() => handleSubmit(title, author, year, genre)}>Додати книгу</button>
        </div>
        </>
    )
}