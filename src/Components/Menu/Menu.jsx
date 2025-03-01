import React, { useEffect, useState } from 'react'
import style from './Menu.module.css'
import { useSelector } from 'react-redux'
const baseurl = import.meta.env.VITE_BASE_URL;
import { IoMdSearch } from "react-icons/io";
import { SiHiveBlockchain } from "react-icons/si";
import logo from "../../assets/logo.png";


export default function Menu() {
  const selectedCompany = useSelector((state) => state.combovalue.value);
  const [menuData, setMenuData] = useState([]);
  const [showLi, setShowLi] = useState(false);
   const showmenu = useSelector((state)=>state.showmenu.value);

  useEffect(() => {
    const userdata = JSON.parse(sessionStorage.getItem('userData'));

    const fetechMenuData = async () => {
      console.log(selectedCompany);

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

  return (
    <div className={`${style.main} shadow-sm  px-3`}>
      <div className={`${style.logo} d-flex  align-items-center justify-content-center `} >
        <img src={logo} style={{ width: "60px" }} alt="" />
        {showmenu &&  <h2 >Vertex
          <span className=''>-</span>
          R
        </h2>}
       
      </div>
      {showmenu &&
       <div className={`${style.search_inpt} rounded-3 d-flex justify-content-around align-items-center mt-4`}>
       <IoMdSearch className='fs-4 ' />
       <input className='py-1' type="text" placeholder='Search .....' />
     </div> }
     
      <div className=' mt-4'>
        {menuData.length != 0 &&
          menuData.map((val, i) => {
            return (
              <div className={`${style.allmenu}`} >
                <div onClick={() => setShowLi(val.moduleName)} className={`${style.mainMenu}`}>
                  <div className='d-flex align-items-center p-1 ps-2 '>
                    <SiHiveBlockchain style={{ color: "blue" }} />
                    {showmenu &&   <span className='ms-2'>{val.moduleName}</span> }
                  
                  </div>

                </div>
                <div className='ms-3'>
                  {val.groups.length != 0 &&
                    val.groups.map((item, i) => {
                      return (
                        <div key={i} className={`${style.subgroup} rounded-3 p-1`} style={showLi == val.moduleName ? { display: "block" } : { display: "none" }}>
                          <span style={{ listStyle: "none", width: "100%" }} className=''><SiHiveBlockchain style={{color:'blue'}} /></span>
                         {showmenu && <span> {item.groupName}</span> } 
                        </div>
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
