import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import registerServiceWorker from './registerServiceWorker';

//STATLESS functional component
//We should just have state for some coponents

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            subtitle: "Put your life in the hands of a computor",
            options: props.options
        }

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleSelectOption = this.handleSelectOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handleDeleteOptions(){
        this.setState(()=>{
            return{
                options: []
            };
        });
    }

    handleSelectOption(){
        alert(this.state.options[ Math.floor(Math.random() * this.state.options.length)]);
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add items';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exist';
        } 

        this.setState((privState)=>{
            return{
                options: privState.options.concat([option])
            };
        });
    }

    render(){
        let state = this.state;
        
        return(
            <div>
                <Header subtitle={state.subtitle}/>
                <Action 
                    handleSelectOption= {this.handleSelectOption}
                    hasOptions={state.options.length > 0}
                />
                <Options 
                    options={state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption= {this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps={
    options: []
}

const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps ={
    title: 'Indecision'
}

const Action = (props) => {
    return(
        <div>
        <button 
            onClick={props.handleSelectOption}
            disabled= {!props.hasOptions}
        >
        What should I do?
        </button>
        </div>
    );
}

const Options = (props) => {
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all Items</button>
            <ol>
                {
                    props.options.map((option) => <li key={option}><Option text={option} /></li>)
                }
            </ol>                
        </div>
    );
}

const Option = (props) => {
    return(
        <div>
            <p>{props.text}</p>
        </div>
    );
}

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error:undefined
        }
    }
    handleAddOption(element){
        element.preventDefault();
        const option = element.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(()=>{
            return {error}
        });
    }

    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("root"));