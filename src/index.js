import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import registerServiceWorker from './registerServiceWorker';

//State Functional Components
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOptions = this.handlePickOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state= {
            options: props.options
        }
    }

    handleAddOption(option){
        if (!option){
            return "Enter a valid value to add item";
        }else if (this.state.options.indexOf(option) > -1){
            return "This option already exist";
        }

        this.setState((privSatet)=>{
            return {
                options: privSatet.options.concat([option])
            }
        });
    }

    handleDeleteOptions(){
        this.setState(() => {
            return{
                options: []
            };
        });
    }

    handlePickOptions(){
        const randumNumber = Math.floor(Math.random()* this.state.options.length);
        alert(this.state.options[randumNumber]);
    }

    render(){
        const sub = "Put your life in the hands of a computer";

        return (
        <div>
            <Header subtitle = {sub}/>
            
            <Action 
                hasOptions={this.state.options.length > 1}
                handlePick={this.handlePickOptions}
            />
            
            <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
            />

            <AddOption
                handleAddOption={this.handleAddOption}
            />
        </div>
        );
    }
};

IndecisionApp.defaultProps={
    options: []
};

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state={
            error:undefined
        };
    }

    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        e.target.elements.option.value = "";
        const error = this.props.handleAddOption(option);
        this.setState(()=> {
            return {error};
        });

    }

    render(){
        return (
        <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
        );
    }
};


//Statless Functional Component
//Stupid and simple, should not know of any state
const Header = (props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps={
    title: "Indecision"
}

const Action = (props)=>{
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}>
            What should I do?
            </button>
        </div>
    );
};

const Options=(props)=>{
    return (
        <div>
            <p>Options Here</p>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            <ol>
                {[props.options.map((item) => <Option key={item} optionText={item} />)]}
            </ol>
        </div>
    );
};

const Option=(props)=>{
    return (
        <li>{props.optionText}</li>
    );
};

ReactDOM.render(<IndecisionApp/>, document.getElementById("root"));
registerServiceWorker();