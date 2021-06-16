import Member from './Member'

const Members = ({members, onToggle}) => {
    return (
      <div className='membersListHeight'>
        {members.map((member, index) => (
          <Member 
          key={index} member={member}
          onToggle={onToggle} 
          />
        ))}
      </div>
    )
  }

export default Members;
