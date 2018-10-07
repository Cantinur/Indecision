import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import registerServiceWorker from './registerServiceWorker';

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computor</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    render(){
        return(
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
                <p>Options component here</p>
            </div>
        );
    }
}

class AddOption extends React.Component{
    render(){
        return(
            <div>
                <p>Add Option Component here</p>
            </div>
        );
    }
}

const jsx = (
    <div>
        <Header/>
        <Action/>
        <Options/>
        <AddOption/>
    </div>
);

ReactDOM.render(jsx, document.getElementById("root"));