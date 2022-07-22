import './homepage.scss';
//import PageSizeAuto from '../../Components/ex/file';

//Components
import Navbar from '../../Components/Navbar/navBar';
import SideBar from '../../Components/SideBar/sideBar';
import Widget from '../../Components/widget/Widget';
import Featured from '../../Components/features/Featured';
import Chart from '../../Components/chart/Chart';
import Table from '../../Components/table/Table';
import Table_List from '../../Components/tables/Table_List';

const HomePage = () => {
  return (
      <>
        <div className="homePage">
            <Navbar />
            <div className="children">
              <SideBar />
              <div className="info_container">
                <div className="widgets">
                  <Widget type="users" />
                  <Widget type="students" />
              <Widget type="team" />
              <Widget type="admin" />
                </div>
               
                <div className="graphical_container">
                  <Featured />
                  <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                </div>
                {/* <div className="listContainer">
                  <h3 className="listTitle">Last Transection</h3>
                  <Table />
                </div>
                <div>
                  <Table_List />
                </div>
                <div>
                  <PageSizeAuto />
                </div> */}
              </div>
            </div>
        </div>
    </>
  )
}

export default HomePage