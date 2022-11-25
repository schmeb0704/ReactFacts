import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'

export default ()=>{
  const [darkMode, setDarkMode] = React.useState(false)
  function handleChange(){
    setDarkMode(prevTheme => !prevTheme)
  }
  return(
    <>
      <div className="container">
        <Navbar darkMode = {darkMode} toggleDarkMode={handleChange}/>
        <Main darkMode = {darkMode}/>
      </div>
    </>
  )
}
