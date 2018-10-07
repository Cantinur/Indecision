import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

let app = {
    title: "Indecisiond",
    subtitle: "Put your life in the hands of a computor",
    options: []
};

const onFormSubit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value
    if (option){
        app.options.push(option);
        e.target.elements.option.value = "";
        render();
    };
};

const removeAll = () => {
    app.options = [];
    render();
};

const makeDesition = ()=> {
    const randumNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randumNum];
    alert(option);
    removeAll();
};


const render = () => {
    let template =(
    <div>
        {app && <h1>{app.title}</h1>}
        {app.subtitle && <h2>{app.subtitle}</h2>}
        
        <p>{app.options.length === 0 ? 
            "There are no options" : 
            "There are " + app.options.length + " items in the list"
        }</p>

        <button disabled={app.options.length < 1} onClick={makeDesition}>What should I do?</button>
        <button onClick={removeAll}>Remove all</button>
        

        <ol>
            {[app.options.map((item) => <li key={item}>{item}</li>)]}
        </ol>

        <form onSubmit={onFormSubit}>
            <input type="text" name="option" />
            <button>Add option</button>
        </form>
    </div>
    );

ReactDOM.render(template, document.getElementById("root"));
registerServiceWorker();
}

render();