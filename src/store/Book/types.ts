import {IBook} from "../../core/models/Book"

export interface BookState {
    book:IBook[]
}

export enum ActionTypes {
    LOAD_BOOK = "[BOOK] LOAD_BOOK",
    CREATE_BOOK = "[BOOK] CREATE_BOOK",
    UPDATE_BOOK = "[BOOK] UPDATE_BOOK",
    DELETE_BOOK = "[BOOK] DELETE_BOOK",
}

export interface LoadBook {
    type:ActionTypes.LOAD_BOOK
}
export interface UpdateBook {
    type:ActionTypes.UPDATE_BOOK,
    payload:IBook
}
export interface CreateBook {
    type:ActionTypes.CREATE_BOOK,
    payload:IBook
}
export interface DeleteBook {
    type:ActionTypes.DELETE_BOOK,
    payload:Pick<IBook,"id">
}

export type Action = LoadBook | UpdateBook | CreateBook | DeleteBook