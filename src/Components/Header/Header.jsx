import React, { useEffect, useState } from 'react'
import style from './Header.module.css'
import { FiMenu, FiFlag } from "react-icons/fi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";

import { TiWorld } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import { setCombovalue } from '../Redux/ComboValue';
import { setShowMenu } from '../Redux/ShowMenu';
const baseurl = import.meta.env.VITE_BASE_URL;


export default function Header() {
    const dispatch = useDispatch()
    const [comanyList, setComapnyList] = useState([]);
    const showmenu = useSelector((state) => state.showmenu.value);


    const getComboValue = (e) => {
        dispatch(setCombovalue(e.target.value))
    }


    useEffect(() => {
        const userdata = JSON.parse(sessionStorage.getItem('userData'))
        const fetchData = async () => {
            await fetch(`${baseurl}user/user_company`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${userdata.authToken}`,
                    'Content-Type': 'application/json'
                }

            }).then(async (res) => {
                const fnalResponse = await res.json();
                setComapnyList(fnalResponse.data)
            })
        }
        fetchData();

    }, [])

    const hideMenu = () => {
        dispatch(setShowMenu(!showmenu))

    }


    return (
        <div className="py-2 container-fluid d-flex justify-content-between col-12 shadow-sm ">

            <div onClick={hideMenu} className={`${style.mnuicon} fs-5`}>
                <FiMenu />
            </div>
            {/* -------------------- select country ---------------- */}
            <div className='col-3 d-flex justify-content-end gap-3 align-items-center'>

                <select onChange={getComboValue} className={`${style.combo}`} >
                    {comanyList.length != 0 && comanyList.map((item, i) => {
                        return (
                            <option key={i} value={item.companyName}>{item.company}</option>
                        )
                    })}
                </select>


                {/* ====================== Logout button ---------------------------------------- */}

                <div className={`${style.logout_btn} fs-4`} style={{ color: '#006ac2' }}>
                    <RiLogoutCircleRLine />
                    {/* <FontAwesomeIcon icon="fa-sharp-duotone fa-solid fa-map" /> */}
                </div>
            </div>





        </div>
    )
}
