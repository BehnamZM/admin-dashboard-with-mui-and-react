
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'

const Header = ({ title, subTitle }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box mb="20px">
      <Typography
        variant="h3"
        mb="3px"
        fontWeight="900"
        color={colors.gray[100]}>
        {title}
      </Typography>
      <Typography
        variant="h6"
        fontWeight="200"
        color={colors.greenAccent[400]}>
        {subTitle}
      </Typography>
    </Box>
  )
}

export default Header