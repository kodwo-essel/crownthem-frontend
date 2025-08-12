import './App.css'
import Navbar from './components/custom/Navbar'
import Footer from './components/custom/Footer'

function App() {

  return (
    <div className="flex min-h-svh flex-col">
      <Navbar/>
      <main className="flex-1">
        {/* Page content goes here */}
      </main>
      <Footer/>
    </div>
  )
}

export default App
