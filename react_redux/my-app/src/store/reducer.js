const initalState ={
    age:22,
    history:[],
    userName:''
}


const reducer=(state=initalState,action)=>{
    const newState={...state};

    switch(action.type)
    {
        case "Age_UP":
            return{
            
            userName:action.val
            }
        
    }
    switch(action.type)
    {
        case 'Age_DOWN':
            return{
                ...state,
                age:state.age - action.val,
                history:state.history.concat({
                    age:state.age - action.val
                })
            }

    }
    
    
    return newState;

}  


export default reducer