import React from 'react';
import { Link } from 'react-router-dom';

export const NavigateButton = ({ link, icon, className, onClick }) => {
    return (
        <Link to={link}>
            <button onClick={onClick} className={className}>
                {icon}
            </button>
        </Link>
    );
};