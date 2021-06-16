const Member = ({ member, onToggle }) => {
  let adminTag = member.isAdmin ? '(Admin)' : '';
  return (
    <div
      className={`task ${member.isAdmin && 'admin'}`}
      onClick={() => onToggle(member.teamMemberDataEdit)}
    >
      <h3 >
        {member.firstName + " " + member.lastName + " " + adminTag}
      </h3>
      <p>{member.contactNo}</p>
      <p>{member.email}</p>
    </div>
  )
}

export default Member
