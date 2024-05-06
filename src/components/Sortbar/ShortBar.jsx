import React from 'react';

const ShortBar = () => {
    return (
        <>
            <div className="d-flex justify-content-between p-2">
                <div className="fs-4">Sort</div>
                <div>
                    <select className="px-4 py-2 border-2 rounded border-success">
                        <option disabled="" value="" selected="">
                            None
                        </option>
                        <option value="">Ascending</option>
                        <option value="">descending</option>
                        <option value="">price Low to High</option>
                        <option value="">price High to Low</option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default ShortBar;