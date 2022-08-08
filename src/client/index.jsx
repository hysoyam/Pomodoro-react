import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { App } from './../shared/App';

window.addEventListener('load', () => {
    hydrateRoot(<App />, document.getElementById('root'))
}) 