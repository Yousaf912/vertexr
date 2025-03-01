import React, { useEffect } from 'react'
import Menu from './Menu/Menu'
import style from "./BodySection.module.css";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import ReportData from './ReportData/ReportData';
import TabSection from './TabSection/TabSection';
import GroupOpen from './SubGroupOpen/IsSubGroupOpen';
import FieldInput from "./CustomUI/FieldInput";


export default function BodySection() {
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  const isAuthenticated = userData && userData.userId && userData.authToken;
  const showmenu = useSelector((state) => state.showmenu.value);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }

  }, [])

  return (

    <div className={`d-flex mt-5 `}  >
      <div className={`${showmenu ?'col-2':'d-none' }`}>
        <Menu />
      </div>
      <div className={` ${showmenu ?'col-10':'col-12'} `}>
        <TabSection/>
        <GroupOpen name='form'>
          <FieldInput label={"name"} type='text'/>
          <FieldInput label={"Father Name"} type='date'/>
          <FieldInput label={"isActive"} type={true}/>
        </GroupOpen>
        <GroupOpen name='form data'>
          <ReportData />
        </GroupOpen>
      </div>

    </div>

  )
}


