"use client"

import { createContext, FC, ReactNode, useContext, useState } from "react"

interface FormsContextType {}

const defaultContext: FormsContextType = {}

const FormsContext = createContext<FormsContextType>(defaultContext)

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJpbnZlc3RvckBleGFtcGxlLmNvbSIsInJvbGUiOiJJTlZFU1RPUiIsImlhdCI6MTcxNzYwMzEzNiwiZXhwIjoxNzIwMTk1MTM2fQ.9q-YC36KKI3h6G6Z76BZMtKS2OHYpDuyK8ViAzP0VXQ"

const FormsProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [itemsType, setItemsType] = useState<
    "investors" | "startups" | "projects"
  >("investors")
    const [filter, setFilter] = useState<FilterType>({})
    const [items, setItems] = useState<ItemsType>([])

    const updateItems = async () => {}

    const contextValue: FormsContextType = {}

    return (
        <FormsContext.Provider value={contextValue}>
            {children}
        </FormsContext.Provider>
    )
}

const useFormsContext = (): FormsContextType => useContext(FormsContext)

export { FormsProvider, useFormsContext }
