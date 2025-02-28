import React, { useState } from 'react'
import style from './Header.module.css'
import { FiMenu,FiFlag } from "react-icons/fi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import { TiWorld } from "react-icons/ti";

export default function Header() {
    const [combovalue, setcomboValue] = useState('UAE');
    const [showCombo, setShowCombo] = useState(false)
    const comboOption = [{country:"UAE",icon:<FiFlag/>},{country:"UAE",icon:<FiFlag/>},{country:"UAE",icon:<FiFlag/>},{country:"UAE",icon:<FiFlag/>},]
    const getvalu = (value) => {
        setcomboValue(value)
    }
    return (
        <div className="container-fluid d-flex justify-content-between col-12 shadow ">
            <div className={`${style.logo} d-flex  align-items-center col-2 gap-2`} >
                <img src={logo} style={{width:"60px"}} alt="" />
                <h2 >Vertex
                    <span className=''>-</span>
                    R
                </h2>
                <div className={`${style.mnuicon} fs-5`}>
                    <FiMenu />
                </div>
            </div>

            {/* -------------------- Logout button and select country ---------------- */}
            <div className='col-3 d-flex justify-content-end gap-3 align-items-center'>
                
                <select className={`${style.combo}`} name="" id="">
                    {comboOption.map((item) => (
                        <div>
                            {item.icon}<option value="">{item.country}</option>
                        </div>
                    ))}
                </select>


                {/* ====================== Logout button ---------------------------------------- */}

                <div className={`${style.logout_btn} fs-4`}  style={{ color: '#006ac2' }}>
                <RiLogoutCircleRLine />
                {/* <FontAwesomeIcon icon="fa-sharp-duotone fa-solid fa-map" /> */}
                </div>
            </div>





        </div>
    )
}
