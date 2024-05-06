import React from 'react';
import ShortBar from "../Sortbar/ShortBar.jsx";
import BookCards from "./BookCards.jsx";

const Books = () => {
    return (
        <>
            <div className="col-9">
                <ShortBar/>
                <div className="movie-list">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <BookCards/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Books;