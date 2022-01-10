import React from 'react'
import './TheWormhole.css'

function Bookworms() {
    var open = false;

    const toggle = () => {
        let container = document.getElementById('explanation-container');

        if (open) {
            container.style.display = "none";
            open = false;
            return;
        }
        open = true;
        container.style.display = "block";
    }

    return (
        <div className="project-container">
            <h2>The Wormhole <span>(The name comes from the term 'bookworm').</span></h2>
            <h3 className="links"><a href="https://thewormhole.herokuapp.com/">Website</a> \\ <a href="http://github.com/azhhng/the-wormhole">Github</a></h3>
            <h3>I made The Wormhole since I was tired of using Goodreads.</h3>
            <div className="reason-container" id="reason-container" onClick={() => toggle()}>
                <h3>There were a number of reasons I wanted to create my own book cataloguer instead of using Goodreads: (click to expand or minimize)</h3>
            </div>
            <div className="explanation-container" id="explanation-container" style={{ display: "none" }}>
                <ul>
                    <li>The website design is very old and unaesthetic (mobile version is better).</li>
                    <li>When creating a list of books, the name you give it gets converted to an uncapitalized string with dashes instead of spaces. Ex. "My Favorite Books" will become "my-favorite-books". Gross!</li>
                    <li>The website is very unintuitive. Ex. To change my book progress I can ONLY do it on the homepage.</li>
                    {/* <li>When adding a book to one of your custom list, it is required that you add it to one of their 3 default lists first: Read, Want to Read, or Currently Reading. What if I want to make a list called "Books I Will Never Read"? I would be forced to put books in one of those three lists first, which defeats the purpose of my custom list.</li> */}
                </ul>
            </div>
            <h3>However, the BIGGEST reason I wanted to create a better book cataloguer was because Goodreads does not allow half-star ratings.</h3>
            <div className="technologies-container">
                <h3>Frontend: <span className="technology">React.js, Javascript, HTML & CSS</span></h3>
                <h3>Backend: <span className="technology">PostgreSQL, Express.js, Node.js, Google Books API, Typescript, SQL</span></h3>
            </div>
            <h3 className="next-link"><a href="/social-robots">Next Project(Social Robots) --&gt;</a></h3>
        </div>
    )
}

export default Bookworms
