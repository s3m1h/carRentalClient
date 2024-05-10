import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

const AdminBase = ({ children }) => {

  const { user } = useAuth();

  if (!user || user.roles[0] !== 'ROLE_ADMIN') {
    return <>Böyle bir sayfa yok</>
  }
  return (
    <div>{children}</div>
  )
}

export default AdminBase