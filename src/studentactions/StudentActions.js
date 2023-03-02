import { ADD_STUDENTS, DELETE_STUDENTS, VIEWALL_STUDENTS } from "../actions/Action"


export const addStudents = (student) => {
    return {
        type: ADD_STUDENTS, payload: student
    }
}

export const viewAllStudents = (student) => {
    return {
        type: VIEWALL_STUDENTS, payload: student
    }

}


export const deleteStudents = (id) => {
    return {
        type: DELETE_STUDENTS, payload: id
    }
}
