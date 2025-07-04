import React from 'react';

export const SecondaryButton = ({title, onClick }) => {
    return (
        <button onClick={onClick} className='btnSecond'>
            {title}
        </button>
    );
};