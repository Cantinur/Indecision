import React from 'react';
import Option from './Option.js';

const Options = (props) => (
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

export default Options;