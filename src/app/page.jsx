import FoodList from "@/components/FoodList"
import DateTime from "@/components/Header/DateTime"
import InputSearch from "@/components/Header/InputSearch"
import OrderList from "@/components/OrderList"
import Sidebar from "@/components/Sidebar"

const Home = () => {
  return (
    <main className="d-flex justify-content-between text-white">

      <div>
        <Sidebar />
      </div>

      <div className="w-100 p-3">
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="pb-0 fw-semibold fs-3">
                    Made Resto
                  </div>
                  <DateTime />
                </div>
              </div>
              <InputSearch />
            </div>
          </nav>
        </div>

        <div>

          <FoodList />

        </div>

      </div>

      <div className="w-50">
        <OrderList />
      </div>

    </main>
  )
}

export default Home
