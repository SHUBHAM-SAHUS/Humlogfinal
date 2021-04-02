import React from "react";

import App from "../App.js";




export const PublicRouterLayout = ({ children }) => (
  
  <>
    {children}   
  </>

 
);

export const PrivateRouterLayout = ({ children }) => <App>{children}</App>;
