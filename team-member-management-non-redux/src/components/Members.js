import { useEffect } from 'react'

import Member from './Member'

const Members = ({ members, onDelete, onToggle }) => {

  useEffect(() => {
    const fetchMembers = async () => {
      const res = await fetch('http://localhost:5000/members')
      const data = await res.json()
      return data
    }
    fetchMembers()
  }, [])

  return (
    <div className='membersListHeight'>
      {members.map((task, index) => (
        <Member key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  )
}

export default Members;
