import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';


export default class IndecisionApp extends React.Component{
    state = {
        subtitle: "Put your life in the hands of a computor",
        options: []
    }

    handleDeleteOptions = () => {
        this.setState(()=>({ options: [] }));
    }

    //remove one option from the list
    handleOneDelte = (optionToRemove) => {
        this.setState((prevState) => ({ 
            options: prevState.options.filter((option) => (optionToRemove !== option))
        }));
    }

    handleSelectOption = () => {
        alert(this.state.options[ Math.floor(Math.random() * this.state.options.length)]);
    }

    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value to add items';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exist';
        } 

        this.setState((privState)=>({
            options: privState.options.concat([option])
        }));
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
    /********************************************/

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