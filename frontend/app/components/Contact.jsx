import { FaEdit, FaTrash } from 'react-icons/fa';
import {deleteContact} from './../apis';

const Contact = ({ contact, index, onDeleteContact }) => {
  const { id, first_name, last_name, email, phone_number } = contact;

  const handleDelete = async () => {
    const isConfirmed = window.confirm('Are you sure you want to delete this contact?');
    if (isConfirmed) {
      const deleted = await deleteContact(id);
      if (deleted) {
        onDeleteContact(id); 
        alert('Contact deleted successfully!');
      } else {
        console.error('Failed to delete contact.');
      }
    }
  };

  return (
    <tr>
      <td className='font-semibold'>{index + 1}</td>
      <td>{`${first_name} ${last_name}`}</td>
      <td>{phone_number}</td>
      <td>{email}</td>
      <td >
        <button className='flex mb-1 justify-center items-center gap-6 text-blue-800'>Edit <FaEdit /></button>
        <button onClick={handleDelete} className='flex justify-center items-center gap-2 text-red-700'>Delete <FaTrash /></button>
      </td>
    </tr>
  );
};

export default Contact;
