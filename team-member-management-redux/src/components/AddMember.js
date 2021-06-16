import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { add, Delete, update, toggleAddTask, updateIndex } from '../actions/membersActions'

const AddMember = ({ teamMemberDataEdit }) => {
  const memberData = {
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
    isAdmin: false,
  }

  const dispatch = useDispatch();

  const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const PHONE_REGEX = /^\d{10}$/

  useEffect(() => {
    if (teamMemberDataEdit > 0) {
      fetchMember(teamMemberDataEdit)
    }
  }, [teamMemberDataEdit])

  const fetchMember = async (teamMemberDataEdit) => {
    let membersData = await JSON.parse(localStorage.getItem('members'));
    let res = await membersData.filter(member => member['teamMemberDataEdit'] === teamMemberDataEdit)
    console.log('fetchMember in ADDMEMBER', res);
    let resultDataObject = res[0]
    console.log('fetchedMember in ADDMEMBER.JS', res[0]);

    document.getElementsByClassName('add-form')[0][0]['value'] = resultDataObject['firstName']
    document.getElementsByClassName('add-form')[0][1]['value'] = resultDataObject['lastName']
    document.getElementsByClassName('add-form')[0][2]['value'] = resultDataObject['email']
    document.getElementsByClassName('add-form')[0][3]['value'] = resultDataObject['contactNo']
    document.getElementsByClassName('add-form')[0][4]['checked'] = !resultDataObject['isAdmin']
    document.getElementsByClassName('add-form')[0][5]['checked'] = resultDataObject['isAdmin']
  }

  const onDelete = (teamMemberDataEdit) => {
    dispatch(Delete(teamMemberDataEdit))
    dispatch(toggleAddTask(JSON.parse(localStorage.getItem('showAddTask'))))
    dispatch(updateIndex(0))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    let formDataObject = e.target
    memberData.firstName = formDataObject[0]['value']
    memberData.lastName = formDataObject[1]['value']
    memberData.email = formDataObject[2]['value']
    memberData.contactNo = formDataObject[3]['value']
    memberData.isAdmin = formDataObject[5]['checked'] ? true : false;

    if (memberData.firstName.length === 0 || memberData.lastName.length === 0 || memberData.email.length === 0 || memberData.contactNo.length === 0) {
      alert('Please fill all the fields');
      return;
    }

    if (EMAIL_REGEX.test(memberData.email) && PHONE_REGEX.test(memberData.contactNo)) {
      if (teamMemberDataEdit > 0) {
        memberData['teamMemberDataEdit'] = teamMemberDataEdit;
        dispatch(update(memberData))
      }
      else {
        dispatch(add(memberData))
      }
      dispatch(toggleAddTask(JSON.parse(localStorage.getItem('showAddTask'))))
      dispatch(updateIndex(0))
      memberData.firstName = '';
      memberData.lastName = '';
      memberData.email = ''
      memberData.contactNo = '';
      memberData.isAdmin = false;
    }
    else {
      if (!EMAIL_REGEX.test(memberData.email)) {
        alert('Enter valid email!')
      }
      else if (!PHONE_REGEX.test(memberData.contactNo)) {
        alert('Enter valid phone number!')
      }
    }
  }

  const setRadio = (e) => {
    console.log('radio value', e);
    if (e.target.id === 'regular') {
      e.target.checked = true;
      document.getElementById('admin').checked = false;
    }
    else {
      e.target.checked = true;
      document.getElementById('regular').checked = false;
    }
  }

  return (
    <form className='add-form' onSubmit={(e) => onSubmit(e)}>
      <div className='form-control'>
        <label style={{ fontWeight: 'bold' }}>Info</label>
        <input
          type='text'
          id="firstName"
          placeholder='Enter First Name'
        />
        <input
          type='text'
          id="lastName"
          placeholder='Enter Last Name'
        />
        <input
          type='text'
          id="email"
          placeholder='Enter Email'
        />
        <input
          type='text'
          id="contactNo"
          placeholder='Enter Contact.No'
        />
      </div>
      <label style={{ fontWeight: 'bold' }}>Role</label>
      <div id="block_container">
        <div id="bloc1">Regular -Can't delete members</div>
        <div id="bloc2"><input
          type='radio'
          id='regular'
          onChange={(e) => !setRadio(e)}
        /></div>
      </div>
      <div id="block_container">
        <div id="bloc1">Admin - Can delete members</div>
        <div id="bloc2"><input
          type='radio'
          id='admin'
          onChange={(e) => setRadio(e)}
        /></div>
      </div>
      <div id="block_container">
        <input type='delete' value='Delete' className='btn btn-delete' onClick={() => onDelete(teamMemberDataEdit)} />
        <input type='submit' value={teamMemberDataEdit === 0 ? 'Save' : 'Update'} className='btn btn-save' />
      </div>
    </form>
  )
}

export default AddMember

