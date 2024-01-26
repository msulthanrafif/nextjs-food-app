import React from 'react'
import ItemDetail from './ItemDetail'
import { MasterFood } from '@/app/api/data/MasterFood'
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// const getProducts = async () => {
//     const respond = await prisma.product.findMany({
//         select: {
//             id: true,
//             name: true,
//             price: true,
//             stock: true
//         }
//     })
//     return respond
// }

const ItemOrder = async () => {
    // const products = await getProducts()
    // console.log(products);
    return (
        <>
            <table className="table-dark w-100 p-2" style={{ fontSize: "14px" }}>
                <thead className='border-bottom'>
                    <tr>
                        <th scope="col" colSpan={3}>Item</th>
                        <th scope="col" colSpan={2} className='text-center'>Qty</th>
                        <th scope="col" className='text-center'>Price</th>
                    </tr>
                </thead>

                {/* {products.map((product, index) => (
                    <tbody key={index}>
                        <ItemDetail {...product} />
                    </tbody>
                ))} */}

                {MasterFood.data.map(function (item, i) {
                    return (
                        <tbody key={i}>
                            <ItemDetail {...item} />
                        </tbody>
                    )
                })}

            </table >

            {/* <div className="d-flex flex-row">
                <div className="me-auto d-flex flex-row p-1 mt-2 w-100">
                    <div className="me-2">
                        <Image src={data.image} alt='' className='order-image' />
                    </div>
                    <div className="p-0 d-flex flex-column align-item-center">
                        <div className="p-0 fw-medium me-1">
                            {data.name}
                        </div>
                        <div className="p-0">
                            Rp. {data.price}
                        </div>
                    </div>
                    <div className="p-0 ms-auto">
                        <input
                            className='form-control-sm text-white'
                            type="text"
                            placeholder={data.stock}
                            style={{ width: "2.2rem", background: "#2D303E" }} />
                    </div>
                </div>
                <div className="p-2 fs-6">
                    Rp. {data.price}
                </div>
            </div>
            <div className="d-flex">
                <div className="w-100 p-2">
                    <div className="p-0">
                        <input className='form-control-sm' type="text" />
                    </div>
                </div>
                <div className="p-2 btn btn-outline-warning flex-shrink-1">
                    <Image src={DeleteIcon} alt="delete icon" />
                </div>
            </div> */}
        </>
    )
}

export default ItemOrder