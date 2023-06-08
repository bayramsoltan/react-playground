import React from 'react'
import Kisi from './c8/Kisi'
import Cards from './c9/StudentCard'
import StudentCard from './c9/StudentCard'
import Header from './c10/Header'
import Alisveris from './hw/Alisveris'

const App = () => {
  return (
    <div>
      {/* <Kisi/> <Header/>*/}
      <Alisveris/>
      <Rating
      style={{ maxWidth: 180 }}
      value={3}
      readOnly
    />
    </div>
  )
}

export default App