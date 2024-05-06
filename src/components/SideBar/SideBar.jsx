import React from 'react';

const SideBar = () => {
    return (
        <>
            <div className="col-3">
                <aside>
                    <ul className="list-unstyled fs-6">
                        <li
                            className="bg-success p-3 m-1 text-white rounded-1"
                            role="button"
                        >
                            <i className="bi bi-fire"/> All
                        </li>
                        <li className="p-3 m-1" role="button">
                            <i className="bi bi-fire"/> Trending
                        </li>
                        <li className="p-3 m-1" role="button">
                            <i className="bi bi-folder-symlink-fill"/> New Release
                        </li>
                        <li className="p-3 m-1" role="button">
                            <i className="bi bi-calendar"/> Coming Soon
                        </li>
                        <li className="p-3 m-1" role="button">
                            <i className="bi bi-heart"/> Favorite
                        </li>
                    </ul>
                </aside>
            </div>
        </>
    );
};

export default SideBar;