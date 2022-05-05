import React, {  useState } from "react";

export const MainContext = React.createContext();

const MainContextProvider = ({ children }) => {
    const [visible, setVisible] = useState(false);

    return (
        <MainContext.Provider
            value={{
                visible,
                setVisible,
            }}
        >
            {children}
        </MainContext.Provider>
    );
};

export default MainContextProvider;
