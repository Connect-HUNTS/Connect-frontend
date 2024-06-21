"use client"

import React, {
    createContext,
    FC,
    ReactNode,
    useContext,
    useState,
} from "react"

import { InvestorType } from "types/InvestorType"
import { StartupType } from "types/StartupType"
import { PartnersType } from "types/PartnerType"

type FormType = "investors" | "startups" | "projects";

type FilterType<T extends FormType> = T extends "investors"
  ? InvestorType
  : T extends "startups"
    ? StartupType
    : T extends "projects"
      ? PartnersType
      : never;

type ItemsType<T extends FormType> = T extends "investors"
  ? InvestorType[]
  : T extends "startups"
    ? StartupType[]
    : T extends "projects"
      ? PartnersType[]
      : never;

interface FormsContextType<T extends FormType> {
  itemsType: FormType;
  // filter: FilterType<T>;
  items: ItemsType<T>;
  setInitData: (i: ItemsType<T>) => void;
}

const defaultContext: FormsContextType<"investors"> = {
    itemsType: "investors",
    // filter: {},
    items: [],
    setInitData: (i) => null,
}

const FormsContext =
  createContext<FormsContextType<"investors">>(defaultContext)

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJpbnZlc3RvckBleGFtcGxlLmNvbSIsInJvbGUiOiJJTlZFU1RPUiIsImlhdCI6MTcxNzYwMzEzNiwiZXhwIjoxNzIwMTk1MTM2fQ.9q-YC36KKI3h6G6Z76BZMtKS2OHYpDuyK8ViAzP0VXQ"

const FormsProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [itemsType, setItemsType] = useState<FormType>("investors")
    // const [filter, setFilter] = useState<FilterType<typeof itemsType>>()
    const [items, setItems] = useState<ItemsType<typeof itemsType>>([])

    const changeType = (newType: FormType) => {
        setItemsType(newType)
        setItems([] as ItemsType<typeof newType>)
    }

    // const changeFilter = (newFilter: FilterType<typeof itemsType>) => {
    //     setFilter(newFilter)
    //     setItems([] as ItemsType<typeof itemsType>)
    // }

    const updateItems = async () => {}

    const setInitData = (data: ItemsType<typeof itemsType>) => {
        setItems(data)
    }

    const contextValue: FormsContextType<typeof itemsType> = {
        itemsType,
        items,
        setInitData,
    }

    return (
        <FormsContext.Provider value={contextValue}>
            {children}
        </FormsContext.Provider>
    )
}

const useFormsContext = <T extends FormType>(): FormsContextType<T> => {
    const context = useContext(
    FormsContext as React.Context<FormsContextType<T> | undefined>,
    )
    if (!context) {
        throw new Error("useFormsContext must be used within a FormsProvider")
    }
    return context
}

export { FormsProvider, useFormsContext }
