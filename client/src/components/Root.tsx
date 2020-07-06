import React from 'react'
import App from './App'
import Router from './Router'

// todo: add redux store wrapping

export default function Root() {
    return (
        <Router>
            <App />
        </Router>
    )
}
