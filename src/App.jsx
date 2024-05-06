import React from 'react';
import Header from "./components/Header/Header.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";
import ShortBar from "./components/Sortbar/ShortBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Books from "./components/Books/books.jsx";

const App = () => {
    return (
        <div>
            <Header/>
            <main>
                <section className="container mt-2">
                    <div className="row">
                       <SideBar/>
                        <Books/>
                    </div>
                </section>
            </main>
            <Footer/>

        </div>
    );
};

export default App;