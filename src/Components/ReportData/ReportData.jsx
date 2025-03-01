import React from 'react'
import style from "./Report.module.css";
import { Add, Close, Download, Replay, RotateLeft, Save, CachedSharp, Visibility, Expand, Fullscreen, Square, GridView} from '@mui/icons-material';
import { data } from "../../data";
import { RxExitFullScreen } from 'react-icons/rx';
const ReportData = () => {
    const thead = Object.keys(data[0])
    const button = [
    <RotateLeft  sx={{fontSize:"1.2rem"}}/>,
    <Save  sx={{fontSize:"1.2rem"}}/>,
    <Download  sx={{fontSize:"1.2rem"}}/>,
    <Replay  sx={{fontSize:"1.2rem"}}/>,
    <Add  sx={{fontSize:"1.2rem"}}/>,
    <Close  sx={{fontSize:"1.2rem"}}/>,
    <CachedSharp  sx={{fontSize:"1.2rem"}}/>,
    <Visibility  sx={{fontSize:"1.2rem"}}/>,
]

  return (
    <div className={style.main}>
        <div className={style.iconBar}>
            {
                button.map((item) => (
                    <button>{item}</button>
                ))
            }
            <p>3123/12321</p>
        </div>
        <div className={style.filterBar}>
            <p>item Master</p>
            <div className={style.nestedFilter}>
                <div><Fullscreen fontSize='small'/></div>
                <div><Square fontSize='small' sx={{fontSize:"1rem"}}/><p>Filter on</p></div>
                <div><Square fontSize='small' sx={{fontSize:"1rem"}}/><p>Group on</p></div>
                <div><Fullscreen fontSize='small'/><p>Group on</p></div>
                <div><RxExitFullScreen fontSize='small'/><p>Collapse All</p></div>
                <div><GridView sx={{fontSize:"1rem"}} fontSize='small'/><p>Collapse All</p></div>
            </div>
        </div>
        <table className={style.table}>
                <thead className={style.thead}>
                    <tr>
                        {thead.map((item) => (
                            <td>{item.replace("_"," ")[0].toUpperCase()+item.replace("_"," ").slice(1)}</td>
                        ))}
                    </tr>
                </thead>
                <tbody className={style.tbody}>
                    {data.map((item) => (
                        <tr>
                            <td>{item.Item_Code}</td>
                            <td>{item.Item_Group}</td>
                            <td>{item.Item_Category}</td>
                            <td>{item.Item_Name}</td>
                            <td>{item.foreign_Name}</td>
                            <td>{item.UoM}</td>
                            <td>{item.Barcode}</td>
                            <td>{item.Retail_Price}</td>
                            <td>{item.Sellable}</td>
                            <td>{item.non_}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  )
}

export default ReportData