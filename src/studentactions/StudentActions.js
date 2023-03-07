import { ADD_STUDENTS, DELETE_STUDENTS, VIEWALL_STUDENTS } from "../actions/Action"


export const addStudents = (student) => {
    return {
        type: ADD_STUDENTS, payload: student
    }
}

export const viewAllStudents = () => {
    return {
        type: VIEWALL_STUDENTS
    }

}


export const deleteStudents = (id) => {
    return {
        type: DELETE_STUDENTS, payload: id
    }
}
