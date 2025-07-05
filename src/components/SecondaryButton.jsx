import React from 'react';

export const SecondaryButton = ({title, onClick, className}) => {
    return (
        <button onClick={onClick} className={className}>
            {title}
        </button>
    );
};