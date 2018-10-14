import React from 'react';

const Option = (props) => (
    <div>
        {props.text}
        <button 
            onClick={(e) => {
                props.delete(props.text);
            }}
        >Remove</button>
    </div>
);

export default Option;