import React from 'react';

import List from './List.jsx';
import Footer from './Footer.jsx';

import '../css/base.css';
import '../css/index.css';

export default class App extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <section className="todoapp">    
                    <List />
                    <Footer />
                </section>
                <footer className="info">
                    <p>Double-click to edit a todo</p>
                    <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
                    <p>Created by <a href="http://todomvc.com">you</a></p>
                    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
                </footer>
            </div>
        )
    }
};
