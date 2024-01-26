import Image from "next/image";
import "./FoodList.css"

const FoodCard = (data) => {
    return (
        <>
            <div className="card text-center">
                <Image src={data.image} alt={data.name} className="card-img-top" />
                <div className="card-body">
                    <p className="card-title mx-3">
                        {data.name}
                    </p>
                    <p className="card-text">
                        Rp. {data.price}
                    </p>
                    <p className="card-text text-white text-opacity-50">
                        {data.stock} Bowls available
                    </p>
                </div>
            </div>
        </>
    )
}

export default FoodCard