import React from 'react'

const InputSearch = () => {
    return (
        <>
            <div className="collapse navbar-collapse" id="navbarsExample07">
                <div className="container"></div>
                <div className="container col-6">
                    <form role="search">
                        <input className="form-control" type="search" placeholder="Search for food, coffe, etc.." />
                    </form>
                </div>
            </div>
        </>
    )
}

export default InputSearch