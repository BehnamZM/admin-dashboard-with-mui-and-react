// import { Sidebar as Bar, Menu, MenuItem} from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css"

import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { tokens } from '../../theme'
import { Box } from '@mui/system';
import { IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import adminImg from "../../assets/client1.jpg"

import { GoHome } from 'react-icons/go'
import { MdPeopleOutline } from 'react-icons/md'
import { MdOutlineContacts } from 'react-icons/md'
import { BsNewspaper } from 'react-icons/bs'
import { CiUser } from 'react-icons/ci'
import { SlCalender } from 'react-icons/sl'
import { BsPatchQuestion } from 'react-icons/bs'
import { RiBarChartLine } from 'react-icons/ri'
import { FiPieChart } from 'react-icons/fi'
import { GiChart } from 'react-icons/gi'
import { TbChartBubble } from 'react-icons/tb'
import { MdOutlineMenuOpen } from 'react-icons/md'


const Item = ({ title, to, icon, selected, setSelected, isCollapsed, setIsCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Link
      to={to}
      style={{ textDecoration: 'none' }} >
      <Box

        display='flex'
        alignItems='center'
        cursor='pointer'
        justifyContent='start'
        gap='3px'
        active={selected === title}
        style={{
          color: colors.gray[100],
        }}
        onClick={() => setSelected(title)}
      >

        <IconButton sx={{
          fontSize: '20px'
        }}>
          {icon}
        </IconButton>

        {!isCollapsed &&
          <Typography
            sx={{
              "&:hover": {
                color: '#4cceac'
              },
              transition: 'all .5s ease'
            }}
            color={colors.gray[100]}>
            {title}
          </Typography>}
      </Box>
    </Link>
  );
};

function Sidebar() {
  const [selected, setSelected] = useState("dashboard")
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  return (
    <Box
      minHeight='100vh'
      width='fit-content'
      backgroundColor={colors.primary[400]}
      padding="15px"
      transition="all 1s ease"
    >
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        mb={2}
      >
        {!isCollapsed && <Typography
          variant='h5'
          color={colors.gray[100]}>
          مدیرها
        </Typography>}

        <IconButton
          onClick={() => setIsCollapsed(!isCollapsed)}>
          <MdOutlineMenuOpen />
        </IconButton>
      </Box>
      {!isCollapsed && (
        <Box
          m={2}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'>
          <Box>
            <img
              src={adminImg}
              alt="admin-image"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                objectFit: "cover"
              }} />
          </Box>
          <Box textAlign='center'>
            <Typography
              fontWeight='900'
              variant='h5'
              color={colors.gray[100]}>بهنام زارع
            </Typography>
            <Typography
              fontWeight='900'
              variant='h6'
              color={colors.greenAccent[500]}>بخش فرانت اند
            </Typography>
          </Box>
        </Box>
      )}
      <Box
        display='flex'
        flexDirection='column'
        gap='8px'
        justifyContent='center'>
        <Item
          title="داشبورد ادمین"
          to="/"
          icon={<GoHome />}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
        {!isCollapsed && <Typography
          variant="h6"
          color={colors.gray[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          اطلاعات
        </Typography>}
        <Item
          title="مدیریت تیم"
          to="/team"
          icon={<MdPeopleOutline />}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
        <Item
          title="ارتباطات"
          to="/contacts"
          icon={<MdOutlineContacts />}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
        <Item
          title="مانده فاکتورها"
          to="/invoices"
          icon={<BsNewspaper />}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />

        {!isCollapsed && <Typography
          variant="h6"
          color={colors.gray[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          صفحات
        </Typography>}
        <Item
          title="فرم کاربران"
          to="/form"
          icon={<CiUser />}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
        <Item
          title="تقویم"
          to="/calendar"
          icon={<SlCalender />}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
        <Item
          title="راهنمایی"
          to="/faq"
          icon={<BsPatchQuestion />}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />

        {!isCollapsed && <Typography
          variant="h6"
          color={colors.gray[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          جداول
        </Typography>}
        <Item
          title="نمودار میله ای"
          to="/bar"
          icon={<RiBarChartLine />}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
        <Item
          title="نمودار دایره ای"
          to="/pie"
          icon={<FiPieChart />}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
        <Item
          title="نمودار خطی"
          to="/line"
          icon={<GiChart />}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
        <Item
          title="نمودار جغرافیایی"
          to="/geography"
          icon={<TbChartBubble />}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
      </Box>
    </Box>

  )
}

export default Sidebar





// const Item = ({ title, to, icon, selected, setSelected }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   return (
//     <MenuItem
//       active={selected === title}
//       style={{
//         color: colors.gray[100],
//       }}
//       onClick={() => setSelected(title)}
//       icon={icon}
//     >
//       <Typography>{title}</Typography>
//       <Link to={to} />
//     </MenuItem>
//   );
// };

// function Sidebar() {
//   const theme = useTheme()
//   const colors = tokens(theme.palette.mode)
//   const [isCollapsed, setIsCollapsed] = useState(false)
//   const [selected, setSelected] = useState("dashboard")
//   return (
//     <Box
//     sx={{
//       "& .pro-sidebar-inner": {
//         background: `${colors.primary[400]} !important`,
//       },
//       "& .pro-icon-wrapper": {
//         backgroundColor: "transparent !important",
//       },
//       "& .pro-inner-item": {
//         padding: "5px 35px 5px 20px !important",
//       },
//       "& .pro-inner-item:hover": {
//         color: "#868dfb !important",
//       },
//       "& .pro-menu-item.active": {
//         color: "#6870fa !important",
//       },
//     }}>
//       <Bar collepsed={isCollapsed}>
//         <Menu iconShape="square">
//           <MenuItem
//             onClick={() => setIsCollapsed(!isCollapsed)}
//             icon={isCollapsed ? <MdOutlineMenuOpen /> : undefined}
//             style={{
//               color: colors.gray[100]
//             }}
//           >
//             {!isCollapsed && (
//               <Box
//                 display="flex"
//                 alignItems="center"
//                 justifyContent="spaceBetween"
//                 ml="15px"
//               >
//                 <Typography
//                   variant='h5'
//                   color={colors.gray[100]}>
//                   مدیرها
//                 </Typography>
//                 <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
//                   <MdOutlineMenuOpen />
//                 </IconButton>

//               </Box>
//             )}
//           </MenuItem>

//           {!isCollapsed && (
//             <Box
//               display='flex'
//               flexDirection='column'
//               alignItems='center'
//               justifyContent='center'>
//               <Box>
//                 <img
//                   src={adminImg}
//                   alt="admin-image"
//                   style={{
//                     width: "50px",
//                     height: "50px",
//                     borderRadius: "50%",
//                     objectFit: "cover"
//                   }} />
//               </Box>
//               <Box textAlign='center'>
//                 <Typography
//                   variant='h5'
//                   color={colors.gray[100]}>بهنام زارع
//                 </Typography>
//                 <Typography
//                   variant='h6'
//                   color={colors.greenAccent[500]}>بخش فرانت اند
//                 </Typography>
//               </Box>
//             </Box>
//           )}

//           <Box paddingLeft={isCollapsed ? undefined : '10%'}>
//             <Item
//               title="داشبورد ادمین"
//               to="/"
//               icon={<GoHome />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Typography
//               variant="h6"
//               color={colors.gray[300]}
//               sx={{ m: "15px 0 5px 20px" }}
//             >
//               اطلاعات
//             </Typography>
//             <Item
//               title="مدیریت تیم"
//               to="/team"
//               icon={<MdPeopleOutline />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="ارتباطات"
//               to="/contacts"
//               icon={<MdOutlineContacts />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="مانده فاکتورها"
//               to="/invoices"
//               icon={<BsNewspaper />}
//               selected={selected}
//               setSelected={setSelected}
//             />

//             <Typography
//               variant="h6"
//               color={colors.gray[300]}
//               sx={{ m: "15px 0 5px 20px" }}
//             >
//               صفحات
//             </Typography>
//             <Item
//               title="فرم کاربران"
//               to="/form"
//               icon={<CiUser />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="تقویم"
//               to="/calendar"
//               icon={<SlCalender />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="راهنمایی"
//               to="/faq"
//               icon={<BsPatchQuestion />}
//               selected={selected}
//               setSelected={setSelected}
//             />

//             <Typography
//               variant="h6"
//               color={colors.gray[300]}
//               sx={{ m: "15px 0 5px 20px" }}
//             >
//               جداول
//             </Typography>
//             <Item
//               title="Bar Chart"
//               to="/bar"
//               icon={<RiBarChartLine />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Pie Chart"
//               to="/pie"
//               icon={<FiPieChart />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Line Chart"
//               to="/line"
//               icon={<GiChart />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Geography Chart"
//               to="/geography"
//               icon={<TbChartBubble />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//           </Box>

//         </Menu>
//       </Bar>
//     </Box>
//   )
// }

// export default Sidebar