// import React from 'react'

import { createContext, useState } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const context = createContext();

// eslint-disable-next-line react/prop-types
export default function CartContext({children}) {

    const [cart, setCart] = useState([])

  return (
    
    <context.Provider value={{cart, setCart}}>

        {children}

    </context.Provider>

  )
}
