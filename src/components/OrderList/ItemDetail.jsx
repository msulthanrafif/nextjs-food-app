import React from 'react'
import Image from "next/image"
import { MasterFood } from '@/app/api/data/MasterFood'

const ItemDetail = (data) => {
    return (
        <>
            <tr>
                <td scope="col" rowSpan="2" className="align-middle">
                    <Image src={data.image} alt='' className='order-image' />
                </td>
                <td scope="col" colSpan={2} style={{ width: "140px" }}>
                    {data.name}
                </td>
                <td scope="col" rowSpan="2">
                    <input type="text" className="form-control" placeholder={data.id}
                        style={{ width: "35px" }} />
                </td>
                <td scope="col">
                    <button type="button" className="btn btn-sm btn-outline-warning">
                        <i className="bi bi-caret-up-fill"></i>
                    </button>
                </td>
                <td scope="col" rowSpan={2}>
                    Rp. {data.price * data.id}
                </td>
            </tr>
            <tr>
                <td scope="col" colSpan={2}>
                    Rp. {data.price}
                </td>
                <td scope="col">
                    <button type="button" className="btn btn-sm btn-outline-warning">
                        <i className="bi bi-caret-down-fill"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td colSpan="5">
                    <input type="" className="form-control" id="" placeholder="Order Note..." style={{ fontSize: "14px" }} />
                </td>
                <td>
                    <button type="button" className="btn btn-outline-warning ms-3">
                        <i className="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
        </>
    )
}

export default ItemDetail