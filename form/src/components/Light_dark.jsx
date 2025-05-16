import React, { useState } from 'react';
import './theme.css'; // Make sure this has .light and .dark classes

const Light_dark = (WrappedComponent) => {
  return () => {
    const [theme, setTheme] = useState(false); // false = light, true = dark

    const LightMode = () => setTheme(false);
    const DarkMode = () => setTheme(true);

    return (
      <div className={theme ? 'dark' : 'light'}>
        <WrappedComponent
          theme={theme}
          LightMode={LightMode}
          DarkMode={DarkMode}
        />
      </div>
    );
  };
};

export default Light_dark;
