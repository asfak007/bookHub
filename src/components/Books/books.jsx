import React, {useEffect, useState} from 'react';
import ShortBar from "../Sortbar/ShortBar.jsx";
import BookCards from "./BookCards.jsx";

const Books = () => {
    const [books, setBook] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => {
                setBook(data);
            });
    }, []);
    return (
        <>
            <div className="col-9">
                <ShortBar/>
                <div className="movie-list">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <BookCards/>
                        {books.map((book) => (
                            <BookCards key={book.id} book={book} />

                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Books;