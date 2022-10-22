import { Box, IconButton, InputBase, useTheme } from "@mui/material"
import {useContext} from 'react'
import {ColorModeContext, tokens} from '../../theme'

// import icons from react-icons 
import {IoIosSearch} from 'react-icons/io'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {AiOutlineSetting} from 'react-icons/ai'
import {MdOutlineLightMode} from 'react-icons/md'
import {MdOutlineDarkMode} from 'react-icons/md'
import {MdPerson} from 'react-icons/md'





function Topbar() {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
        <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
          <IconButton sx={{ fontSize:"20px" }}>
            <IoIosSearch />
          </IconButton>
          <InputBase placeholder="سرچ کن" sx={{ ml: 2, flex: 1 }}/>
        </Box>
        <Box display="flex">
          <IconButton>
            <IoMdNotificationsOutline />
          </IconButton>
          <IconButton>
            <AiOutlineSetting />
          </IconButton>
          <IconButton>
            <MdPerson />
          </IconButton>
          <IconButton 
          onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? 
            <MdOutlineLightMode /> : <MdOutlineDarkMode />}
          </IconButton>
        </Box>
      </Box>
    </>
  )
}

export default Topbar