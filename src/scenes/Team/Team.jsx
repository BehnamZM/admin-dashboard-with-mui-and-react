
import { teamData } from '../../components/Data/TeamData'
import { tokens } from '../../theme'
import { useTheme, Box, Typography } from '@mui/material'
import Header from '../../components/Header'
import { DataGrid } from '@mui/x-data-grid'
import { RiAdminLine } from 'react-icons/ri'
import { MdSell } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'

const Team = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns = [
    {
      field: "id",
      headerName: "آیدی",
      headerAlign: "center",
      align: "center"
    },
    {
      field: "name",
      headerName: "نام",
      cellClassName: "column-name",
      flex: 1,
      headerAlign: "center",
      align: "center"
    },
    {
      field: "phone",
      headerName: "شماره تماس",
      headerAlign: "center",
      align: "center",
      flex: 1
    },
    {
      field: "email",
      headerName: "ایمیل",
      flex: 1,
      headerAlign: "center",
      align: "center"
    },
    {
      field: "age",
      headerName: "سن",
      type: "number",
      headerAlign: "center",
      align: "center"
    },
    {
      field: "access",
      headerName: "سطح دسترسی",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            cursor="pointer"
            width="70%"
            padding="5px"
            borderRadius="3px"
            display="flex"
            justifyContent="center"
            m="0 auto"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "seller"
                  ? colors.greenAccent[700]
                  : colors.greenAccent[800]
            }
          >
            {access === "admin" && <RiAdminLine />}
            {access === "seller" && <MdSell />}
            {access === "user" && <AiOutlineUser />}
            <Typography color={colors.gray[100]} fontSize="10px" ml="1px">
              {access === "admin"
                ? "مدیر"
                : access === "user"
                  ? "کاربر"
                  : "فروشنده"}
            </Typography>
          </Box>
        )
      }
    },
  ]
  return (
    <Box m="20px" 
    >
      <Header title='اعضای تیم' subTitle=' مدیریت اعضا در این بخش است' />
      <Box height="75vh" mt="10px" 
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700],
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[200]} !important`,
        },
      }}>
        <DataGrid rows={teamData} columns={columns} />
      </Box>
    </Box>
  )
}

export default Team