export const employeeReducer = (state, action) => {
    var list = JSON.parse(localStorage.getItem('employee'))
    switch (action.type) {
        case 'INSERT':
            list.push(action.payload)
            localStorage.setItem('employee', JSON.stringify(list))
            return { list, currentIndex: -1 }
        case 'UPDATE':
            list[state.currentIndex] = action.payload
            localStorage.setItem('employee', JSON.stringify(list))
            return { list, currentIndex: -1 }

        case 'UPDATE-INDEX':
            return { list, currentIndex: action.payload }

        case 'DELETE':
            list.splice(action.payload, 1)
            localStorage.setItem('employee', JSON.stringify(list))
            return { list, currentIndex: -1 }
        default:
            return state;
    }

}



export default employeeReducer