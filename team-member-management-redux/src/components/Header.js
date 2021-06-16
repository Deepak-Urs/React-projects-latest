import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { FaTimes } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'

const Header = ({ title, onAdd, showAdd, teamCount, teamMemberDataId }) => {

  const editHeaderTitle = teamMemberDataId === 0 ? <h3>Add a team member</h3> : <h3>Edit a team member</h3>
  const addTeamMemberSubtitle = teamMemberDataId === 0 ? <h3>Set email, location and role</h3> : <h3>Edit email, location and role</h3>

  const listScreenSubTitle = teamCount ? <h3>You have {teamCount} team members</h3> : <h3>No team members!</h3>
  return (
    <div>
      <header className='header'>
        <h1>{showAdd ? editHeaderTitle : title}</h1>
        {showAdd ? <FaTimes
          style={{ color: 'steelblue', cursor: 'pointer' }}
          onClick={onAdd}
        ><Link to="/addMember" /></FaTimes> : <FaPlus
          style={{ color: 'steelblue', cursor: 'pointer' }}
          onClick={onAdd}
        ><Link to="/addMember" /></FaPlus>}
      </header>
      <div>
        {showAdd ? addTeamMemberSubtitle : listScreenSubTitle}
      </div>
    </div>
  )
}

Header.defaultProps = {
  title: 'Team Members',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
