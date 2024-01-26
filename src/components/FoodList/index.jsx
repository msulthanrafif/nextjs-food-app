import FoodCard from "./FoodCard"
import { MasterFood } from "@/app/api/data/MasterFood"
import MenuTab from "./MenuTab"
import './FoodList.css'
import DropDown from "./DropDown"

const FoodList = () => {
    return (
        <>
            <MenuTab />
            <div className="mb-5">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul className="nav col-12 col-lg-auto me-lg-auto justify-content-center">
                        <h4>Choose Dishes</h4>
                    </ul>
                    <DropDown />
                </div>
            </div>

            <div className="row">
                {MasterFood.data.map(function (item, i) {
                    return (
                        <div key={i} className="col-md-4 mb-5">
                            <FoodCard {...item} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default FoodList