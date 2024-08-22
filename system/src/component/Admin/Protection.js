import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Protection = ({role}) => {
    const userrole = localStorage.getItem('role');
    if (!userrole || userrole !==role){
        return <Navigate to="/" replace/>;
    }
  return <Outlet/>;
};

export default Protection
