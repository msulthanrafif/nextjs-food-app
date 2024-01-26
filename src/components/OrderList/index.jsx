import SelectorOrder from "./SelectorOrder"
import TotalOrder from "./TotalOrder"
import ItemOrder from "./ItemOrder"
import "./OrderList.css"

const OrderList = () => {
    return (
        <>
            <div className="d-flex flex-column align-item-start p-2 rounded-3 h-100" style={{ backgroundColor: "#1F1D2B" }}>
                <div className="p-2 fw-semibold fs-3">
                    Orders #{Math.floor(Math.random() * 500) + 100}
                </div>

                <SelectorOrder />

                <ItemOrder />

                <TotalOrder />
            </div>
        </>
    )
}
export default OrderList