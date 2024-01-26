import React from 'react'

const TotalOrder = () => {
    return (
        <>
            <div className="d-flex justify-content-between mb-2">
                <div>Discount</div>
                <div>price</div>
            </div>
            <div className="d-flex justify-content-between mb-3">
                <div>Subtotal</div>
                <div>price</div>
            </div>
            <div className="btn btn-warning text-light fw-bolder w-100">
                Continue to Payment
            </div>
        </>
    )
}

export default TotalOrder