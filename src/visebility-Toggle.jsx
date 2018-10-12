import React from 'react';
import ReactDOM from 'react-dom';


class ToggleVisibility extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            visible: false
        }

        this.handleSwitch = this.handleSwitch.bind(this);
    }

    handleSwitch(){
        this.setState((prevState)=>{
            return {
                visible: !prevState.visible
            };
        });
    }

    render(){
        const visible = this.state.visible;
        return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleSwitch}>
                {visible ? "Hide details" : "Show details"}
            </button>
            {visible && (
                <div>
                    <p>Hello </p>
                </div>
            )}
        </div>
        );
    }
}
ReactDOM.render(<ToggleVisibility/>, document.getElementById("root"));

// let visible = false;

// const toggleVisibility = () => {
//     visible = !visible;
//     render();
// }

// let render = () =>{
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visible ? "Hide details" : "Show details"}
//             </button>
//             {visible && (
//                 <div>
//                     <p>Hello </p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(jsx, document.getElementById("root"));
// }