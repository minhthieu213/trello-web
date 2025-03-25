import Box from '@mui/material/Box'
import DashboardIcon from '@mui/icons-material/Dashboard'
import Chip from '@mui/material/Chip'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import FilterListIcon from '@mui/icons-material/FilterList'
import { upperCaseFirstLetter } from '~/utils/upperCase'

const BOARD_CHIP_STYLE = {
  color: 'white',
  backgroundColor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root':{
    color: 'white'
  },
  '&:hover':{
    bgcolor: 'primary.50'
  }
}

function BoardBar({ board }) {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      borderBottom: '1px solid white',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      '&::-webkit-scrollbar-track': { m: 2 }
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={BOARD_CHIP_STYLE}
          icon={<DashboardIcon />}
          label={board?.title}
          clickable/>

        <Chip
          sx={BOARD_CHIP_STYLE}
          icon={<VpnLockIcon />}
          label={upperCaseFirstLetter(board?.type)}
          clickable/>

        <Chip
          sx={BOARD_CHIP_STYLE}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable/>

        <Chip
          sx={BOARD_CHIP_STYLE}
          icon={<BoltIcon />}
          label="Automation"
          clickable/>

        <Chip
          sx={BOARD_CHIP_STYLE}
          icon={<FilterListIcon />}
          label="Filter"
          clickable/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'white' } }}
          variant="outlined"
          startIcon={<PersonAddIcon />}>Invite</Button>
        <AvatarGroup
          max={4}
          sx={{
            gap: '10px', '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color:'white',
              cursor: 'pointer',
              '&:first-of-type': {
                bgcolor: '#a4b0de' } } }}>
          <Tooltip title="Minh Thieu">
            <Avatar alt="Minh Thieu" src="https://avatars.githubusercontent.com/u/190623775?v=4" />
          </Tooltip>
          <Tooltip title="Met5raduong">
            <Avatar alt="Remy Sharp" src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/8d98b962751485b53d6290837168c37e~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=a4ee6d50&x-expires=1742785200&x-signature=zpYpNDZHCTYFRLUHy5TAl%2Bx0Mug%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"/>
          </Tooltip>
          <Tooltip title="QuynhShyn">
            <Avatar alt="Remy Sharp" src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/dfbe709dcf119121645f1686af4063f4~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=6cf0c7a6&x-expires=1742785200&x-signature=QyEf7P6O92smVJqHbjwEbzznZgs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1" />
          </Tooltip>
          <Tooltip title="Minh Thieu">
            <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/190623775?v=4" />
          </Tooltip>
          <Tooltip title="Minh Thieu">
            <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/190623775?v=4" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar