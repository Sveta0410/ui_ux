import React from "react";

const Layout = ({ children }) => {
    return (
    <div style={{width: '100%', backgroundImage: 'url(D:/sveta/ui/src/components/back.jpg)' }}>
    {children}
    </div>
    );
    };
export default Layout;