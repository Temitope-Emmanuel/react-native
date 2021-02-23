import {createStore,combineReducers} from "redux"
import {bookReducer} from "./Book/reducers"

const rootReducer = combineReducers({
    book:bookReducer
})

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(){
    const store = createStore(
        rootReducer
    )
    return store
}