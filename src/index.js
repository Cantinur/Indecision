import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import registerServiceWorker from './registerServiceWorker';

class IndecisionApp extends React.Component{
    render(){
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computor";
        const options = ['Thing One', 'Thing Two', 'Thing Three'];
        
        return(
            <div>
                <Header 
                    title={title}
                    subtitle={subtitle}
                />
                <Action />
                <Options 
                    options={options}
                />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    handleClick(){
        alert("CLICK!!!");
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>
                What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    handleRemoveAll(){
        alert("LETS REMOVE ALL");
    }

    render(){
        return(
            <div>
                <button onClick={this.handleRemoveAll}>Remove all Items</button>
                <ol>
                    {
                        this.props.options.map((option) => <li key={option}><Option text={option} /></li>)
                    }
                </ol>                
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

class AddOption extends React.Component{
    handleAddOption(element){
        element.preventDefault();
        const option = element.target.elements.option.value.trim();
        if (option){
            alert(option);
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById("root"));