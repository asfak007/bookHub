import React from 'react';

const Actions = () => {
    return (
        <>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"/>
            </button>
            <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarTogglerDemo02"
            >
                <form className="d-flex me-2" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-success" type="submit">
                        Search
                    </button>
                </form>
                <div className="me-2">
                    <button className="btn btn-success" type="submit">
                        +Add
                    </button>
                </div>
                <div className="position-relative" role="button">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-success">
            +99
          </span>
                    <i className="bi bi-cart2 bg-success p-2 rounded-2 text-white"/>
                </div>
            </div>
        </>
    );
};

export default Actions;