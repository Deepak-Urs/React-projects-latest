const initialState = {
    showAddTask: false,
    teamMemberDataEdit: 0,
    members: []
}

const allReducers = (state = initialState, action) => {
    var members = JSON.parse(localStorage.getItem('members'))

    switch (action.type) {
        case 'ADD':
            let newMember = action.payload;
            newMember['teamMemberDataEdit'] = members.length + 1;
            members.push(newMember);
            localStorage.setItem('members', JSON.stringify(members));
            return { ...state, members: JSON.parse(localStorage.getItem('members')) }

        case 'UPDATE':
            members.map(member => {
                if (member.teamMemberDataEdit == action.payload.teamMemberDataEdit) {
                    member['firstName'] = action.payload['firstName']
                    member['lastName'] = action.payload['lastName']
                    member['email'] = action.payload['email']
                    member['contact'] = action.payload['contact']
                    member['isAdmin'] = action.payload['isAdmin']
                }
            })
            localStorage.setItem('members', JSON.stringify(members));
            console.log('Before updating state:', JSON.parse(localStorage.getItem('members')));
            return { ...state, members: JSON.parse(localStorage.getItem('members')) }

        case 'DELETE':
            let newMembersList = members.filter(member => member.teamMemberDataEdit !== action.payload)
            members = newMembersList;
            localStorage.setItem('members', JSON.stringify(members));
            return { ...state, members: members }

        case 'UPDATE_INDEX':
            localStorage.setItem('teamMemberDataEdit', JSON.stringify(action.payload));
            return { ...state, teamMemberDataEdit: action.payload }

        case 'TOGGLE_ADD_TASK':
            if (action.payload === true) {
                localStorage.setItem('showAddTask', JSON.stringify(false))
                return { ...state, showAddTask: false }
            }
            else {
                localStorage.setItem('showAddTask', JSON.stringify(true))
                return { ...state, showAddTask: true }
            }


        default:
            return state;
    }
}

export default allReducers;