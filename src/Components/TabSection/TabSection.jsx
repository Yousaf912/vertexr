import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosListBox } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import style from './TabSection.module.css'
import { removeTab } from '../Redux/TabsData';


export default function TabSection() {
    const tabData = useSelector((state) => state.TabData.values) ;
    const dispatch = useDispatch()
    
    const removTab = (value)=>{
        dispatch(removeTab(value))
    }

    return (
        <div className='d-flex'>
            {tabData.length != 0 && tabData.map((item, i) => {
                return (
                    <div className={`${style.tab} d-flex align-items-center ms-3 py-1 mb-2`} key={i}>      
                       <div className={`${style.list_icon} `}> </div>
                        <span className='ms-1' style={{fontSize:'11px'}}>{item}</span>
                        <RxCross2 onClick={()=>removTab(item)} className='text-danger' />

                    </div>
                )
            })}
        </div>
    )
}
