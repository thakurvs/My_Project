import { createContext, useContext } from "react";

export const Themecontext = createContext({   //create context here by using createContext hook and insert some default values in it 
    themeMode : 'light',
    lightTheme : () => {},
    darkTheme : () => {},
})

export const ThemeProvider = Themecontext.Provider;  //create a context provider 

export default function useTheme(){
    return useContext(Themecontext);      //here we have the acess of each variable and method provided inside the context 
}