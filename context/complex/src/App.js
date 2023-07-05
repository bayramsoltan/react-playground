import React, { useState } from 'react'
import AppRouter from './router/router'

const App = () => {

    const [counterState,dispatchCounter] = useReducer(counterReducer, counterInitialState);

  return (
    <>
    <StoreContext.Provider value={{counterState,dispatchCounter}}>
        <AppRouter />
    </StoreContext.Provider>
    </>
  )
}

export default App