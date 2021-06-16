import { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Members from './components/Members'
import AddMember from './components/AddMember'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAddTask, updateIndex } from './actions/membersActions'

const App = () => {

  const members = useSelector((state) => state.members)
  const showAddTask = useSelector((state) => state.showAddTask)
  const teamMemberDataEdit = useSelector((state) => state.teamMemberDataEdit)
  const dispatch = useDispatch();

  const fetchMembers = async () => {
    if (localStorage.getItem('members') === null) {
      localStorage.setItem('members', JSON.stringify([]))
    }

    if (localStorage.getItem('showAddTask') === null) {
      localStorage.setItem('showAddTask', JSON.stringify(false))
    }

    if (localStorage.getItem('teamMemberDataEdit') === null) {
      localStorage.setItem('teamMemberDataEdit', JSON.stringify(0))
    }

  }

  useEffect(() => {
    fetchMembers();
  }, [members, showAddTask, teamMemberDataEdit]);

  const routeToEdit = (id) => {
    dispatch(updateIndex(id))
    dispatch(toggleAddTask(showAddTask))
  }

  const toggleSetAddMember = () => {
    dispatch(toggleAddTask(JSON.parse(localStorage.getItem('showAddTask'))))
    dispatch(updateIndex(0))
  }

  return (
    <Router>
      <div className='container'>
        <Header
          onAdd={() => toggleSetAddMember()}
          showAdd={showAddTask}
          teamCount={members.length}
          teamMemberDataId={teamMemberDataEdit}
        /><Route
          path='/'
          exact
          render={() => (
            <>
              {showAddTask &&
                <AddMember
                  teamMemberDataEdit={teamMemberDataEdit}
                />}

              {(!showAddTask && members.length > 0) &&
                <Members
                  members={members}
                  onToggle={routeToEdit}
                />
              }

            </>
          )}
        />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
