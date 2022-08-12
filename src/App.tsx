/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Main } from './components/Main';
import { store } from './store/store';
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Header } from './components/Header';
import { Stats } from './components/Stats';
import style from './app.module.css'
import  './main.css'

function App() {
  const [isMoundted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    isMoundted ?
      <Provider store={store}>
        <BrowserRouter >
          <div className={style.app}>

            <Header />

            <main className={style.main}>
              <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/stats' element={<Stats />} />
              </Routes >
            </main>

          </div>
        </BrowserRouter>
      </Provider > : null
  )
}

export default App;
