import React from 'react';
const AppContext = React.createContext();
export default AppContext;
const AppProvider = ({ children }) => {
const sharedValue = "Hello from Context!";
return (
    <AppContext.Provider value={sharedValue}>
    {children}
    </AppContext.Provider>
);
};
export { AppContext, AppProvider };