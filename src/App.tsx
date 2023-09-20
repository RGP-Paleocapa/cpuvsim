import './App.css'
import Footer from './cpuvsim/components/static/Footer'
import Header from './cpuvsim/components/static/Header'
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
