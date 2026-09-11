import React, { Suspense, lazy } from 'react'
import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import './App.css'

import Container from './pages/index'
import Loading from './pages/Loading'
const Home = lazy(() => import('./pages/Home'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const Service = lazy(() => import('./pages/Service'))
const Career = lazy(() => import('./pages/Career'))
const ContactUs = lazy(() => import('./pages/ContactUs'))
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const SignUp = lazy(() => import('./pages/SignUp'))
const PageNotFound = lazy(() => import('./pages/PageNotFound'))

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<Container />} >
      <Route
        index
        element={<Home />} 
      />
      <Route
        path='about-us'
        element={<AboutUs />} 
      />
      <Route
        path='services'
        element={<Service />} 
      />
      <Route
        path='career'
        element={<Career />} 
      />
      <Route
        path='contact-us'
        element={<ContactUs />} 
      />
      <Route
        path='t&c'
        element={<TermsAndConditions />} 
      />
      <Route
        path='privacy-policy'
        element={<PrivacyPolicy />} 
      />
    </Route>
    <Route 
      path='/sign-up' 
      element={<SignUp />}  
    />
    <Route
      path='*'
      element={<PageNotFound />}
    />
  </>
))

function App() {
  return (
    <AnimatePresence mode='wait' exitBeforeEnter>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </AnimatePresence>
  )
}

export default App