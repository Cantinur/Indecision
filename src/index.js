import React from 'react';
import ReactDOM from 'react-dom';
//import IndecisionApp from './components/IndecisionApp';

const Layout = (props)=>{
    return (
        <div>
            <p>Heder</p>
            {props.children}
            <p>Footer</p>
        </div>
    );
};

ReactDOM.render((
    <Layout> 
        <p>This is inline</p> 
    </Layout>
), document.getElementById("root"));