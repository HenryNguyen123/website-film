import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';

AppContext.propTypes = {
    children: PropTypes.node
  };

export const Context = createContext()

export default function AppContext({children}) {

    const storeData = localStorage.getItem("movie_seen")
    const initialStateHistory = storeData ? JSON.parse(storeData) : []

    const [modal, setModal] = useState(false)
    const [dataId, setDataId] = useState()
    const [history, setHistory] = useState(initialStateHistory)


    useEffect(() => {
        localStorage.setItem("movie_seen", JSON.stringify(history))
    }, [history])


    return <Context.Provider value={{modal, setModal, dataId, setDataId, history, setHistory}}>{children}</Context.Provider>
}