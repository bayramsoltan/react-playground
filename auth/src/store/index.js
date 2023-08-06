import { useContext, useReducer, createContext} from "react";
import { counterInitialState} from "./counter/counter-initial-state";
import { counterReducer } from "./counter/counter-reducer";
import { authReducer } from "./auth/auth-reducer";
import { authInitialState } from "./auth/auth-initial-state";

//bos bir merkezi state olusturuldu
const StoreContext = createContext();


//componentlerde merkezi state e erisimi kolaylastirmak icin kendi hook umuzu yazdik
export const useStore = ()=> useContext(StoreContext);

export const StoreProvider = ({children}) =>{

//useReducer hook una reducer ve initialState parametre olarak verilir...
//useReducer fonksiyonu ise geriye setter ve getter lari doner

const [counterState, dispatchCounter] = useReducer(counterReducer, counterInitialState)
const [authState, dispatchAuth] = useReducer(authReducer, authInitialState);

    return (
        <StoreContext.Provider value={{}}>
            {children}
        </StoreContext.Provider>
    )
}