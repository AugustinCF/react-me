import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Tab from './components/tab/Tab'

 

const App = () => {
    return (
        <>
        <Header/>
        <Nav/>
        <About/>
        <Tab/>
        <Contact/>
        <Footer/>
 
        </>
    )
}
 
export default App