import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import AppRoutes from './Routes'

const App = () => {
  return (
    <div className='bg-slate-100 dark:bg-slate-900 min-h-screen'>
      <Header />
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  )
}

export default App
