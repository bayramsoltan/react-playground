const counterReducer = ({counter:0},{type:COUNTER_INCREMENT}) =>{
    if(action.type === COUNTER_INCREMENT){
        return{
            ...state,
            counter: state.counter + 1
        }
    }
}

setState(prev =>{
    return{
        ...prev,
        counter:prev.counter + 1
    }
})