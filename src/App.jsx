// import React from 'react'
import { SocialNetworks } from './components/socialNetworks/SocialNetworks'
import { NavBar } from './components/navBar/NavBar'
import { Home } from './components/home/Home'
import { Footer } from './components/footer/Footer'
import { Counter } from './components/counter/Counter'
import { Routes, Route, redirect } from 'react-router-dom';
import { NotFound } from './components/notfound/NotFound'

export const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/social-networks' element={<SocialNetworks />} />
                <Route path='/counter/1' element={<Counter key={1} increment={5} decrement={5} />} />
                <Route path='/counter/2' element={<Counter key={2} initialValue={0} increment={10} decrement={10} />} />
                <Route path='*' element={<NotFound/>} />
            </Routes>
            <Footer />
        </>
    )
}
