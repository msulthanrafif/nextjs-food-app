const DropDown = () => {
    return (
        <>
            <div className="dropdown">
                <button className="btn btn-dark btn-outline-light dropdown-toggle" type="button">
                    Dine In
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Take It</a></li>
                    <li><a className="dropdown-item" href="#">Delivery</a></li>
                </ul>
            </div>
        </>
    )
}
export default DropDown