import { Header, Footer, Home, Contacts, Skills, Portfolio, About } from "./components/index"




function App() {


  return (
    <>
    <Header/>
    <main>
      <Home/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contacts/>
      <div className="container">
         <h1>React Portfolio</h1>
      </div>
    </main>
    <Footer/>
    </>
  )
}

export default App
