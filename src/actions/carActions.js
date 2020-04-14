export const addNewFeature = () =>{
    console.log('addNewFeat running:')
    return{
        type: 'ADD_NEW_FEATURE'
    };
}

export const removeFeature = () =>{
    console.log('removeFeat running:')
    return{
        type: 'REMOVE_FEATURE'
    };
}


export const buyItem = () => {
    console.log('buyItem running')
    return{
        type: 'BUY_ITEM'
    }
}