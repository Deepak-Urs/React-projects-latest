import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Members from './components/Members'
import AddMember from './components/AddMember'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [members, setMembers] = useState([])

  const [teamMemberDataEdit, setTeamMemberDataEdit] = useState(0)

  useEffect(() => {
    const getMembers = async () => {
      const membersFromServer = await fetchMembers()
      setMembers(membersFromServer)
    }

    getMembers()
  }, [])

  // Fetch Tasks
  const fetchMembers = async () => {
    const res = await fetch('http://localhost:5000/members')
    const data = await res.json()

    return data
  }

  // Add Task
  const addMember = async (member) => {
    if (member.saveMode === 'Save') {
      delete member.saveMode;
      delete member.teamMemberDataId;
      const res = await fetch('http://localhost:5000/members', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(member),
      })

      const data = await res.json()
      setMembers([...members, data])
      setShowAddTask(!showAddTask)
    }
    else {
      // Update task
      delete member.saveMode;

      const res = await fetch(`http://localhost:5000/members/${member.teamMemberDataId}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(member),
      })

      const data = await res.json()

      const index = members.findIndex((obj)=> obj.id === data.id);
      members[index] = data
      setMembers(members)
      setShowAddTask(!showAddTask)
    }
  }

  // Delete Task
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/members/${id}`, {
      method: 'DELETE',
    })
    
    res.status === 200
      ? setMembers(members.filter((task) => task.id !== id))
      : alert('Error in deleting the member!')
    setShowAddTask(!showAddTask)
  }

  const routeToEdit = async (id) => {
    setTeamMemberDataEdit(id)
    setShowAddTask(!showAddTask)
  }

  const toggleSetAddMember = () => {
    setShowAddTask(!showAddTask);
    fetchMembers()
    setTeamMemberDataEdit(0)
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
              {showAddTask && <AddMember onAdd={addMember} teamMemberDataId={teamMemberDataEdit} onDelete={deleteTask} />}
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

export default App
