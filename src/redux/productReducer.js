import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant"

export const productData = (data=[], action) => {
    switch(action.type){
        // case PRODUCT_LIST : 
        //             // console.log(action)
        //             return [action.data];
        case SET_PRODUCT_LIST : 
                    console.log('action', action)
                    return [action.data];
        default : return '';
    }
}