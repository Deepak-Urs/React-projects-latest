import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

import { FaTimes } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import Button from './Button'

const Header = ({ title, subTitle, onAdd, showAdd, teamCount,teamMemberDataId }) => {
  const location = useLocation()

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
        /> : <FaPlus
        style={{ color: 'steelblue', cursor: 'pointer' }}
        onClick={onAdd}
      />}
    </header>
      <div>
        {showAdd ? addTeamMemberSubtitle : listScreenSubTitle }
      </div>
      </div>
  )
}

Header.defaultProps = {
  title: 'Team Members',
  // subTitle: 
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header
