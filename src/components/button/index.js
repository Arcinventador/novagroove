import React from 'react';

function Button({ btnText, type }) {
    return (
        <button className='pri-btn' type={type}>
            {btnText}
        </button>
    );
}

export default Button;