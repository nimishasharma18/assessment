import React from "react"
import { Button } from "react-bootstrap"

//components
import data from "./data"

//styles
import './displayTable.scss'

const DisplayTable = () => {
  return (
    <div className='tab-segment'>
      <div className='tab-container'>
        <table className='content-table'>
          <tr className='content-table-header '>
            <th colSpan={1} className="content-table-heading ">Rank</th>

            <th colSpan={2}>Name</th>
            <th colSpan={2}></th>
            <th colSpan={1}>Price</th>
            <th colSpan={1}>VWAP (24Hr)</th>
            <th colSpan={1}>Market Cap</th>
            <th colSpan={1}>Supply</th>
            <th colSpan={1}>Volume (24Hr)</th>
            <th colSpan={1}>Change (24Hr)</th>
          </tr>
          {data.map(item => {
            return (
              <><tr className='content-values'>
                <td colSpan={1}>{item.rank}</td>
                <td colSpan={2} className="text-start ps-5">
                  <img src={item.name.icon} width={30} height={30} /> &nbsp; &nbsp;
                  <div className='asset-value-names'>
                    <a>{item.name.assetName}

                      <p>{item.name.abbreviation}</p>
                    </a>
                  </div>
                </td>
                <td colSpan={2} className="name-colspan"></td>
                <td colSpan={1}>{item.price}</td>
                <td colSpan={1}>{item.marketCap}</td>
                <td colSpan={1}>{item.vWap}</td>
                <td colSpan={1}>{item.supply}</td>
                <td colSpan={1}>{item.volume}</td>
                <td colSpan={1}> {item.change}</td></tr></>


            )
          })}

        </table>
      </div>
      <Button className='view-more-btn'>
        View More
      </Button>
    </div>
  )
}

export default DisplayTable;