import React from 'react';

const Option = (props) => (
    <div className='option'>
        <p className='option__text'>
            {props.count}. {props.text}
        </p>
        <button 
            className='button button--link'
            onClick={(e) => {
                props.delete(props.text);
            }}
        >Remove</button>
    </div>
);

export default Option;