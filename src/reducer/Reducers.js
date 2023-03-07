

const initialState = {
    students: [],

};


export const Reducers = (state = initialState, action) => {

    switch (action.type) {

        case "ADD_STUDENTS":

            return { ...state, students: [state.students] }

        case "VIEWALL_STUDENTS":

            return { ...state, students: state.students }

        case "DELETE_STUDENTS":

            return { ...state, students: state.students }

    }

}


