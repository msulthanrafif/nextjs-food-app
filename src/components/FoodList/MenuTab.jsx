import React from 'react'

const MenuTab = () => {
    return (
        <>
            <div className="mb-3">
                <ul className="nav nav-underline border-bottom border-secondary">
                    <li className="nav-item me-3">
                        <a className="nav-link" href="#">Hot Dishes</a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link" href="#">Cold Dishes</a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link" href="#">Soup</a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link" href="#">Grill</a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link" href="#">Appetizer</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Dessert</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MenuTab