import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Link } from 'react-router-dom';
//import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
//import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
//import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
//import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">        
        <div className="items_container">
          <ul>
            <p className="title">MAIN</p>
            <Link to="/">
            <li>
              <DashboardIcon className="icon" />
              <span>DashBoard</span>
            </li>
            </Link>
            <p className="title">LISTS</p>
            <Link to="/users">
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
            </Link>
            <Link to="/payments">              
            <li>
              <CreditCardIcon className="icon" />
              <span>Payments</span>
            </li>
            </Link>
            {/* <li>
              <LocalShippingIcon className="icon" />
              <span>Orders</span>
            </li>
            <li>
              <StoreIcon className="icon" />
              <span>Delivery</span>
            </li> */}
            <p className="title">USEFUL</p>
            <li>
              <InsertChartIcon className="icon" />
              <span>Stats</span>
            </li>
            <li>
              <NotificationsNoneIcon className="icon" />
              <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p> 
            <li>
              <SettingsApplicationsIcon className="icon" />
              <span>System Health</span>
            </li>
            <li>
              <SettingsApplicationsIcon className="icon" />
              <span>Logs</span>
            </li>
            <li>
              <SettingsApplicationsIcon className="icon" />
              <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Profile</span>
            </li>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>                      
            {/* <p className="title">THEMES</p>
            <div className="color_container">
              <li className="colorOption"></li>
              <li className="colorOption"></li>
            </div> */}
          </ul>
        </div>
      </div>
    </>
  )
}

export default SideBar

// .bottom{
//   display: flex;
//   align-items: center;
//   margin: 10px;

//   .colorOption{
//       width: 20px;
//       height: 20px;
//       border-radius: 5px;
//       border: 1px solid #7451f8;
//       cursor: pointer;
//       margin: 5px;

//       &:nth-child(1){
//           background-color: whitesmoke;
//       }
//       &:nth-child(2){
//           background-color: #333;
//       }
//       &:nth-child(3){
//           background-color: darkblue;
//       }
//   }
// }