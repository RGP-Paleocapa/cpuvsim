// import './App.css'
import Footer from '@components/layout/Footer'
import Header from '@components/layout/Header'
import AppRoutes from './Routes'
import ScrollToTopButton from '@/components/utils/ScrollToTopButton'
import ScrollToTop from '@/components/utils/ScrollToTop'

const App = () => {
  return (
    <div className='bg-slate-100 dark:bg-slate-900 min-h-screen pt-16'>
      <Header />
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <ScrollToTop />
        <AppRoutes />
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default App
