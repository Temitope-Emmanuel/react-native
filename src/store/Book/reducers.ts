import {Action,ActionTypes,BookState} from "./types"

const initialState:BookState = {
    book:[]
}

export function bookReducer(state = initialState,action:Action):BookState {
    switch(action.type){
        case ActionTypes.LOAD_BOOK:
            return {
                book:[...state.book]
            }
        case ActionTypes.CREATE_BOOK:
            return {
                book:[...state.book,action.payload]
            }
        case ActionTypes.UPDATE_BOOK:{
            const filteredBook = [...state.book]
            const foundIdx = filteredBook.findIndex(item => item.id === action.payload.id)
            const newBook = Object.assign({},filteredBook[foundIdx],action.payload)
            filteredBook.splice(foundIdx,1,action.payload)
            return {
                book:[...filteredBook]
            }
        }
        case ActionTypes.DELETE_BOOK:{
            const filteredBook = state.book.filter(item => item.id === action.payload.id)
            return {
                book:[...filteredBook]
            }
        }
        default:
            return state;
    }
}