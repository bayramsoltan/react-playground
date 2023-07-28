import { COUNTER_DOWN, COUNTER_SET, COUNTER_UP } from "../types";
import {counterInitialState} from "./counter-initial-state";


export const counterReducer = (state = counterInitialState, action) =>{
    if (action.type === COUNTER_UP) {
        const newState = {...state, counter: state.counter+1}
        // olusturulan yeni state return edildiginde mevcut state guncellenmis olur.
        return newState;
    }else if (action.type === COUNTER_DOWN){

    }
    else if(action.type === COUNTER_SET){

    }

    // Bu satır hic bir if case ine  girmediğininde geriye mevcut state i göndersin diye yazıldı
    // eger olmazsa tume state ucar.
    return state;
}