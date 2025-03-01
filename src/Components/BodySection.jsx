import React, { useEffect } from 'react'
import Menu from './Menu/Menu'
import Header from './Header/Header'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import ReportData from './ReportData/ReportData';


export default function BodySection() {
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  const isAuthenticated = userData && userData.userId && userData.authToken;
  const showmenu = useSelector((state) => state.showmenu.value);
  const navigate = useNavigate()
  useEffect(()=>{
if(!isAuthenticated){
navigate('/login')
}

  },[])
  
  return (
    <div className='col-12 d-flex '>
      <div className={`${showmenu?'col-2':'col-1'}`}>
        <Menu />
      </div>
      <div className={`${showmenu?'col-10':'col-11'}`}>
        <Header/>
        <ReportData/>
      </div>
    </div>
  )
}


