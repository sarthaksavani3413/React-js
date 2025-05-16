import React from 'react';
import Light_dark from './Light_Dark';

const ComponentA = ({ theme, LightMode, DarkMode }) => {
    return (
        <div className='theme'>
            <button onClick={LightMode}>Light Mode</button>
            <button onClick={DarkMode}>Dark Mode</button>
        </div>
    );
};

const A = Light_dark(ComponentA);
export default A;