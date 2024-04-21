import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => {
    setThemeMode("dark")
  }

  const lightTheme = () => {
    setThemeMode("light")
  }

  useEffect (()=>{
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }) 

  //In ThemeProvider methods of context provider through props
  return (
    <>
      <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <h2 className='bg-blue-500 text-white p-2 text-3xl' style={{marginTop:'-1.5rem'}}>Toggle Background Color</h2>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-1" style={{marginTop:'-5rem'}}>
                <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
