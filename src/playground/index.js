import React from 'react';
import ReactDOM from 'react-dom';

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            subtitle: "Put your life in the hands of a computor",
            options: []
        }

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleSelectOption = this.handleSelectOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleOneDelte = this.handleOneDelte.bind(this);
    }

    /*****************LIFECYCLE********************/
    //This is only in class based components
    //JSON.stringfy({}) -> This returns a string however,
    componentDidMount(){
        try{
            const json = localStorage.getItem('optons');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({options}));
                console.log("Fetch Data: " + options);
            }
        }catch(e){
            console.log(e);
        }
    }

    componentDidUpdate(privProps, privState){
        if(privState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('optons', json);
            console.log("Save data: " + json);
        }
    }

    handleDeleteOptions(){
        this.setState(()=>({ options: [] }));
    }
    /********************************************/

    //remove one option from the list
    handleOneDelte(optionToRemove){
        this.setState((prevState) => ({ 
            options: prevState.options.filter((option) => (optionToRemove !== option))
        }));
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

        this.setState((privState)=>({
            options: privState.options.concat([option])
        }));
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
                    handleOneDelte = {this.handleOneDelte}
                />
                <AddOption 
                    handleAddOption= {this.handleAddOption}
                />
            </div>
        );
    }
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
            {props.options.length === 0 && <p>Please add an option</p>}
                {
                    props.options.map((option) => (
                        <Option 
                            key={option}
                            text={option}
                            delete= {props.handleOneDelte}
                        />
                    ))
                }          
        </div>
    );
}

const Option = (props) => {
    return(
        <div>
            {props.text}
            <button 
                onClick={(e) => {
                    props.delete(props.text);
                }}
            >Remove</button>
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
        this.setState(() => ({error}));
        if (!error){
            element.target.elements.option.value = '';
        }
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