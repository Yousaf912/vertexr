import React, { useEffect, useState } from 'react'
import style from './Menu.module.css'
import { useDispatch, useSelector } from 'react-redux'
const baseurl = import.meta.env.VITE_BASE_URL;
import { IoMdSearch } from "react-icons/io";
import { SiHiveBlockchain } from "react-icons/si";
import { setTabsData } from '../Redux/TabsData';



export default function Menu() {
  const selectedCompany = useSelector((state) => state.combovalue.value);
  const [menuData, setMenuData] = useState([]);
  const [showLi, setShowLi] = useState(false);
  const [showSublist, SetShowSubList] = useState('')
  const showmenu = useSelector((state) => state.showmenu.value);
const dispatch = useDispatch()





  useEffect(() => {
    const userdata = JSON.parse(sessionStorage.getItem('userData'));

    const fetechMenuData = async () => {

      await fetch(`${baseurl}user/menu`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${userdata.authToken}`,
          'Content-Type': 'application/json',
          'company': `${selectedCompany}`
        }
      }).then(async (res) => {
        const fnal = await res.json();
        setMenuData(fnal.data.modules)
      })
    }
    fetechMenuData()
  }, [selectedCompany])


  const setTabData =(value)=>{
    dispatch(setTabsData(value))
  }

  return (
    <div className={`${style.main} ${showmenu? style.open :style.close} shadow-sm  px-3`}>

      {/* --------------------------- Menu Input ------------------------------ */}
      <div className={`${style.search_inpt} rounded-3 d-flex justify-content-around align-items-center mt-4`}>
        <IoMdSearch className='fs-4 ' />
        <input className='py-1' type="text" placeholder='Search .....' />
      </div>
      {/* ------------------------------- Menu List ------------------------ */}


      <div className=' mt-4'>
        {menuData.length != 0 &&
          menuData.map((val, i) => {
            return (
              <div key={i} className={`${style.allmenu}`} >
                <div onClick={() => setShowLi(val.moduleName)} className={`${style.mainMenu}`}>
                  <div className='d-flex align-items-center p-1 ps-2 '>
                    <SiHiveBlockchain style={{ color: "blue" }} />
                    <span className='ms-2'>{val.moduleName}</span>

                  </div>

                </div>
                <div className='ms-3'>
                  {val.groups.length != 0 &&
                    val.groups.map((item, i) => {
                      return (
                        <>
                          <div onClick={() => SetShowSubList(item.groupName)} key={i} className={`${style.subgroup} rounded-3 p-1`} style={showLi == val.moduleName ? { display: "block" } : { display: "none" }}>
                            <span style={{ listStyle: "none", width: "100%" }} className=''><SiHiveBlockchain style={{ color: 'blue' }} /></span>
                             <span> {item.groupName}</span>

                          </div>

                          <div className='ms-3'>
                            {item.menus.length != 0 &&
                              item.menus.map((menu, i) => {
                               
                                return (
                                  <>
                                    <div onClick={()=>setTabData(menu.menuName)} key={i} className={`${style.subgroup} rounded-3 p-1`} style={showSublist == item.groupName ? { display: "block" } : { display: "none" }} >
                                      <span style={{ listStyle: "none", width: "100%" }} className=''><SiHiveBlockchain style={{ color: 'blue' }} /></span>
                                       <span> {menu.menuName}</span>
                                    </div>
                                  </>
                                )
                              })
                            }

                          </div>
                        </>

                      )
                    })
                  }

                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
