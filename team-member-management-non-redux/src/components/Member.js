const Member = ({ task, onToggle }) => {
  let adminTag = task.isAdmin ? '(Admin)' : '';
  return (
    <div
      className={`task ${task.isAdmin && 'admin'}`}
      onClick={() => onToggle(task.id)}
    >
      <h3 >
        {task.firstName + " " + task.lastName + " " + adminTag}
      </h3>
      <p>{task.contactNo}</p>
      <p>{task.email}</p>
    </div>
  )
}

export default Member
