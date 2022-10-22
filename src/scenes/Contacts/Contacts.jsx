

import { contactsData } from '../../components/Data/ContactsData'
import { tokens } from '../../theme'
import { useTheme, Box } from '@mui/material'
import Header from '../../components/Header'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'


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
      field: "city",
      headerName: "شهر",
      headerAlign: "center",
      align: "center"
    },
    {
      field: "address",
      headerName: "آدرس",
      headerAlign: "center",
      align: "center",
      flex: 1
    },
    {
      field: "zipCode",
      headerName: "زیپ کد",
      headerAlign: "center",
      align: "center"
    },
    {
      field:"registrarId",
      headerName: "آیدی رجیستر"
    },
  ]
  return (
    <Box m="20px" 
    >
      <Header 
      title='ارتباطات' 
      subTitle='در این بخش ارتباطات برای آینده مدیریت میشود.' />

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
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${colors.greenAccent[100]} !important`,
        },
      }}>
        <DataGrid 
        rows={contactsData} 
        columns={columns} 
        components={{Toolbar: GridToolbar}} />
      </Box>
    </Box>
  )
}

export default Team