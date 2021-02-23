import { IBook } from "../../core/models/Book"
import {LoadBook,ActionTypes, CreateBook, DeleteBook} from "./types"


export function fetchBooks():LoadBook {
    return {
        type:ActionTypes.LOAD_BOOK
    }
}

export function addBook(book:IBook):CreateBook {
    return {
        type:ActionTypes.CREATE_BOOK,
        payload:book
    }
}
export function deleteBook(book:Pick<IBook,"id">):DeleteBook {
    return{
        type:ActionTypes.DELETE_BOOK,
        payload:book
    }
}