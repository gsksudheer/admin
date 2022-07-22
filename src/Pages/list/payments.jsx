import "./list.scss"
import Navbar from '../../Components/Navbar/navBar';
import SideBar from '../../Components/SideBar/sideBar';
import DataTable from "../../Components/dataTable/DataTable";
import Table from '../../Components/table/Table';

const Payments = () => {
  return (
    <>
        <div className="list">
            <SideBar />
            <div className="listContainer">
                  <Navbar />
                  <div>
                  <Table />
                  </div>
            </div>
        </div>
    </>
  )
}

export default Payments;