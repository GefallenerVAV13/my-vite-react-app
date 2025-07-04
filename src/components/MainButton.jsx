import React from 'react';

export const MainButton = ({title, className, onClick }) => {
    return (
        <button onClick={onClick} className={className}>
            {title}
        </button>
    );
};