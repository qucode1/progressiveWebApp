import React from 'react'

import styles from './App.css'
import Header from '../Header/Header'

const App = () => (
  <div>
    <Header />
    <h1 className={styles.heading}>Hello World</h1>
    <p>Testing seperate Components and CSS Modules</p>
  </div>
)
export default App
