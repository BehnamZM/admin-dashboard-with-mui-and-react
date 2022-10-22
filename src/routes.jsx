import Dashboard from "./scenes/dashboard/Dashboard"
import Team from "./scenes/Team/Team"
import Contacts from "./scenes/Contacts/Contacts"
import Invoices from "./scenes/Invoices/Invoices"
import Form from "./scenes/form/Form"
// import Calender from "./scenes/calencer/Calender"
import Faq from "./scenes/faq/Faq"
import PieScreen from "./scenes/pieScreen/PieScreen"
import LineScreen from "./scenes/lineScreen/LineScreen"
import GeoScreen from "./scenes/geoScreen/GeoScreen"
import BarScreen from "./scenes/barScreen/BarScreen"



let routes = [
  {path: '/' , element: <Dashboard />},
  {path: '/team' , element: <Team />},
  {path: '/contacts' , element: <Contacts />},
  {path: '/invoices' , element: <Invoices />},
  {path: '/form' , element: <Form />},
  // {path: '/calender' , element: <Calender />},
  {path: '/faq' , element: <Faq />},
  {path: '/pie' , element: <PieScreen />},
  {path: '/line' , element: <LineScreen />},
  {path: '/geography' , element: <GeoScreen />},
  {path: '/bar' , element: <BarScreen />},
]


export default routes