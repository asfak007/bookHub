import React from 'react';
import BookReating from "./BookReating.jsx";

const BookCards = ({book}) => {

    return (
        <>
            <div className="col">
                <div className="card">
                    <img
                        src="./assets/cover/book-1.jpg"
                        className="card-img-top"
                        alt="..."
                        style={{width: "100%", height: 300, objectFit: "cover"}}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Speaking JavaScript</h5>
                        <p className="card-text">By Sumon barai</p>
                        <p className="card-text">price $50</p>
                        <BookReating/>
                    </div>
                    <div className="card-footer">
                        <button type="button" className="btn btn-success">
                            <i className="bi bi-heart"/> Favorite
                        </button>
                        <button type="button" className="btn m-1 btn-success">
                            <i className="bi bi-cart2"/> Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookCards;