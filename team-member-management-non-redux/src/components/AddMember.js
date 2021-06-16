import { useEffect, useState } from 'react'

const AddMember = ({ onAdd, teamMemberDataId, onDelete }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [contactNo, setContactNo] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)
  const [saveMode, setSaveMode] = useState('Save')

  const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const PHONE_REGEX = /^\d{10}$/

  useEffect(() => {
    const fetchMember = async () => {
      const res = await fetch(`http://localhost:5000/members/${teamMemberDataId}`)
      const data = await res.json()
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setEmail(data.email);
      setContactNo(data.contactNo);
      setIsAdmin(data.isAdmin);
      setSaveMode('Update')
      return data
    }

    const resetMember = () => {
      setFirstName('')
      setLastName('')
      setEmail('')
      setContactNo('')
      setIsAdmin('')
      setSaveMode('Save')
    }

    if (teamMemberDataId !== 0) { fetchMember() }
    else { resetMember() }
  }, [teamMemberDataId])

  const onSubmit = (e) => {

    if (firstName.length === 0 || lastName.length === 0 || email.length === 0 || contactNo.length === 0) {
      alert('Please fill all the fields');
      return;
    }

    if (teamMemberDataId) {
      setSaveMode('Update')
    }


    if (EMAIL_REGEX.test(email) && PHONE_REGEX.test(contactNo)) {
      onAdd({ firstName, lastName, email, contactNo, isAdmin, saveMode, teamMemberDataId })

      setFirstName('')
      setLastName('')
      setEmail('')
      setContactNo('')
      setIsAdmin(false)
    }
    else {
      if (!EMAIL_REGEX.test(email)) {
        alert('Enter valid email!')
      }
      else if (!PHONE_REGEX.test(contactNo)) {
        alert('Enter valid phone number!')
      }
    }

  }

  return (
    <form className='add-form' >
      <div className='form-control'>
        <label style={{ fontWeight: 'bold' }}>Info</label>
        <input
          type='text'
          placeholder='Enter First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Enter Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Enter Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='text'
          placeholder='Enter Contact.No'
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
        />
      </div>
      <label style={{ fontWeight: 'bold' }}>Role</label>
      <div id="block_container">
        <div id="bloc1">Regular -Can't delete members</div>
        <div id="bloc2"><input
          type='radio'
          checked={!isAdmin}
          onChange={(e) => setIsAdmin(false)}
        /></div>
      </div>
      <div id="block_container">
        <div id="bloc1">Admin - Can delete members</div>
        <div id="bloc2"><input
          type='radio'
          checked={isAdmin}
          onChange={(e) => setIsAdmin(true)}
        /></div>
      </div>
      <div id="block_container">

        <input type='delete' value='Delete' className='btn btn-delete' onClick={() => onDelete(teamMemberDataId)} />
        <input type='button' value={saveMode} className='btn btn-save' onClick={onSubmit}/>
      </div>
    </form>
  )
}

export default AddMember
