import { Header, Footer, Home, Contacts, Skills, Focus, Portfolio, Touch, About, ScrollTop } from "./components/index"




function App() {


  return (
    <>
    <Header/>
    <main>
      <Home/>
      <About/>
      <Skills/>
      <Focus/>
      <Portfolio/>
      <Touch/>
      <Contacts/>
    </main>
    <Footer/>
    <ScrollTop/>
    </>
  )
}

export default App
