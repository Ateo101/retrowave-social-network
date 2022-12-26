import React from "react";
import store, {storeType} from "./redux/store";

type ProviderPropsType = {
    store: storeType
    children: any
}

const StoreContext = React.createContext(store)

export const Provider = (props:ProviderPropsType) => {
    return <StoreContext.Provider value={props.store}> {props.children} </StoreContext.Provider>
}

export default StoreContext;