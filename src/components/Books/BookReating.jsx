import React from 'react';

const BookReating = (rating) => {

    //rating is not a array. transfer it an array and fill it with undefined value by rating value. It like is rating is 4 then the array has 4 undefine value.
    const starCount = new Array(rating).fill(undefined);

    return (
        <>
            <div className="ratting">
                <i className="bi bi-star-fill"/>
                <i className="bi bi-star-fill"/>
                <i className="bi bi-star-fill"/>
                <i className="bi bi-star-fill"/>
            </div>
        </>
    );
};

export default BookReating;