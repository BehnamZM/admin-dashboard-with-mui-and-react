
import { invoicesData } from '../../components/Data/InvoicesData'
import { tokens } from '../../theme'
import { useTheme, Box, Typography } from '@mui/material'
import Header from '../../components/Header'
import { DataGrid } from '@mui/x-data-grid'

const Invoices = () => {
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
      field: "date",
      headerName: "تاریخ",
      flex: 1,
      headerAlign: "center",
      align: "center"
    },
    {
      field: "cost",
      headerName: "هزینه",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell:(params) => (
        <Typography color={colors.greenAccent[500]}>
           {params.row.cost} تومان  
        </Typography>
      )
    },

  ]
  return (
    <Box m="20px" 
    >
      <Header 
      title='فاکتورها' 
      subTitle=' در این بخش لیست فاکتورها قرار میگیرد.' />
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
        <DataGrid 
        rows={invoicesData} 
        columns={columns} 
        checkboxSelection
        />
      </Box>
    </Box>
  )
}

export default Invoices