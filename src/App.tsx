//import { useState } from 'react'
import './App.css'
import List from './List'

function App() {
  

  return (<>
  <div className="absolute">
    <div id="navbar" className="backdrop-blur-sm content-center flex gap-3">
      <h1 className="p-2 m-4 text-xl text-center">Moovys.binge</h1>
    <div className="backdrop:blur-sm text-green-600 m-4">
      <input className="p-2 m-4 bg-[#101010]" type="text" placeholder="Search for movies, TV shows..." id="search-input"/>
      <button className="search-btn">Search</button>
    </div>
    </div>
  </div>
    <List/>
  <footer>
    <p>&copy; 2024 Moovys. All Rights Reserved.</p>
  </footer>
  </>);
}

export default App
