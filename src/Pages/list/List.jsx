import "./list.scss"
import Navbar from '../../Components/Navbar/navBar';
import SideBar from '../../Components/SideBar/sideBar';
import DataTable from "../../Components/dataTable/DataTable";

const List = () => {
  return (
    <>
        <div className="list">
            <SideBar />
            <div className="listContainer">
                <Navbar />
                <DataTable />
            </div>
        </div>
    </>
  )
}

export default List;