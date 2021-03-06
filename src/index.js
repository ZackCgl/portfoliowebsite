import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript ></ColorModeScript>
      
      <App />
      
 
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
