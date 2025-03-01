import React, { useEffect, useState } from 'react'
import style from './Header.module.css'
import { FiMenu, FiFlag } from "react-icons/fi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import { IoPersonSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { setCombovalue } from '../Redux/ComboValue';
import { setShowMenu } from '../Redux/ShowMenu';
const baseurl = import.meta.env.VITE_BASE_URL;


export default function Header() {
    const dispatch = useDispatch()
    const [comanyList, setComapnyList] = useState([]);
    const showmenu = useSelector((state) => state.showmenu.value);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
        <div className={`${scrolled && style.scrolled} position-fixed  top-0 container-fluid d-flex justify-content-between col-12 shadow-sm `}>

            <div className='d-flex align-items-center col-2 justify-content-around '>
                {/* ------------------------------ Menu Icon ---------------------- */}

                <div onClick={hideMenu} className={`${style.mnuicon} fs-5 px-2  rounded-circle`}>
                    <FiMenu />
                </div>
                {/* -------------------------- Profile Icon -------------------- */}
                <div className={`${style.profile} py-1 px-2  rounded-circle text-primary`}>
                    <IoPersonSharp />

                </div>
                {/* ------------------------- Logo -------------------------- */}
                <div className={`${style.logo} d-flex  align-items-center justify-content-center `} >
                    <img src={logo} style={{ width: "50px" }} alt="" />
                    <h2 >Vertex
                        <span className=''>-</span>
                        R
                    </h2>

                </div>

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
