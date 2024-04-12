import React from 'react'
import {useNavigate, Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { loginReducer } from "../../redux/authSlice"; 

const ProtectedRoute = ({children, allowedRoles}) => {

  const data = useSelector((state) => state.auth.data);
  const role = useSelector((state) => state.auth.role);
  const token = useSelector((state) => state.auth.token);

  const navigate = useNavigate();

  const isAllowed = allowedRoles.includes(role);

  const accessibleRoute = token && isAllowed ? children : <Navigate to='/login' replace={true} />

  return accessibleRoute;
}

export default ProtectedRoute