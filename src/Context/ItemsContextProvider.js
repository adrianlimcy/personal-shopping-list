import React from 'react'
import withDatafetching from '../withDataFetching'

export const ItemsContext = React.createContext()

const ItemsContextProvider = ({ children, data }) => (
    <ItemsContext.Provider value={{ items: data }}>
        { children }
    </ItemsContext.Provider>
)

export default withDatafetching({
    dataSource: 'https://my-json-server.typicode.com/PacktPublishing/React-Projects/items'
}) (ItemsContextProvider)
