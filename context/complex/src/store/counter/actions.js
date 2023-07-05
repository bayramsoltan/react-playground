const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
const COUNTER_DECREMENT = 'COUNTER_DECREMENT';
const COUNTER_RESET = 'COUNTER_RESET';

export const increment = () =>{
    return{
        type:COUNTER_INCREMENT

}
};

export const decrement = ()=>({type:COUNTER_DECREMENT});
export const reset = ()=>({type:COUNTER_RESET});
