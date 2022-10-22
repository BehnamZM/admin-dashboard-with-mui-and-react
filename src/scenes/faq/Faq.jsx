import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { tokens } from "../../theme";
import {MdExpandMore} from 'react-icons/md'

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="راهنمایی" subTitle="سوالاتی که در مورد پروژه دارید" />

      <Accordion>
        <AccordionSummary expandIcon={<MdExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            این پروژه شامل چه بخش هایی میشه؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            این پروژه بخش ui یه cms به صورت spa هست که شامل صفحات مختلف و انواع نمودارها و کار با بخش های مختلف پکیج mui و همچنین حالت روز و شب هست.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<MdExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            این داشبورد ادمین با چی طراحی شده؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            این پروژه به کمک React, Mui, Nivo-chart, react-icons,... طراحی شده
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<MdExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            این پروژه با کدوم فریم ورک css طراحی شده؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            material UI
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<MdExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            کی این داشبورد رو طراحی کرده؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            من بهنام زارع توسعه دهنده فرانت اند در سطح جوینور هستم.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<MdExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            طراح این داشبورد به چیا تسلط داره؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            html, css, js, react, bootstrap, sass, mui
          </Typography>
        </AccordionDetails>
      </Accordion>
      

    </Box>
  );
};

export default FAQ;
