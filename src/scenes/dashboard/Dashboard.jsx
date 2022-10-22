import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { transactionsData } from "../../components/Data/TransactionsData";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeoChart";
import BarChart from "../../components/BarChart";
import StarBox from "../../components/StarBox";
import ProgressCircle from "../../components/Progress";
import Header from "../../components/Header"

import {TfiEmail} from "react-icons/tfi"
import {IoMdDownload} from "react-icons/io"
import {MdPointOfSale} from "react-icons/md"
import {IoIosPersonAdd} from "react-icons/io"
import {GiTrafficLightsOrange} from "react-icons/gi"


function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box
      mb="20px" 
      display="flex" 
      justifyContent="space-between" 
      alignItems="center">
        <Header 
        title="داشبورد ادمین" 
        subTitle="به پنل مدیریت خوش آمدید." />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.gray[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <IoMdDownload sx={{ mr: "10px" }} />
            دانلود گزارش ها
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StarBox
            title="12,361"
            subtitle="ایمیلهای ارسال شده"
            progress="0.75"
            increase="+14%"
            icon={
              <TfiEmail
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StarBox
            title="431,225"
            subtitle="تعداد فروش"
            progress="0.50"
            increase="+21%"
            icon={
              <MdPointOfSale
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StarBox
            title="32,441"
            subtitle="مشتریان جدید"
            progress="0.30"
            increase="+5%"
            icon={
              <IoIosPersonAdd
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StarBox
            title="1,325,134"
            subtitle="ترافیک دریافت شده"
            progress="0.80"
            increase="+43%"
            icon={
              <GiTrafficLightsOrange
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.gray[100]}
              >
                درآمد حاصله:
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                   57,934,232 تومان  
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <IoMdDownload
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.gray[100]}
            p="15px"
          >
            <Typography color={colors.gray[100]} variant="h5" fontWeight="600">
              تراکنش های اخیر:
            </Typography>
          </Box>
          {transactionsData.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.gray[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.gray[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
                fontSize="12px"
              >
                {transaction.cost} تومان  
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            پویش ها
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              درآمد حاصله: 5,565,640 تومان
            </Typography>
            <Typography>شامل مخارج و هزینه های متفرقه اضافی میباشد.</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            تعداد فروش
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            ترافیک مبتنی بر نقشه
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard
