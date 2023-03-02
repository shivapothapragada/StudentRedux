

const initialState = {
    students: [],
    loading: false,
    error: null,
};


export const Reducers = (state = initialState, action) => {

    switch (action.type) {

        case "ADD_STUDENTS":

            return { ...state, students: [...state.students, action.payload], loading: false }

        case "VIEWALL_STUDENTS":

            return { ...state, students: action.payload, loading: true }

        case "DELETE_STUDENTS":

            return { ...state, students: action.payload, loading: true }

    }

}


