import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/styles';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  root: {

  },
  toolbarWrapper: {
    width: '900px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    margin: '0 auto',
  },
  tabs: {
    minWidth: 10,
    marginLeft: '10px'
  },
  badge: {
    backgroundColor: theme.palette.error.main,
    border: '1px white solid',
  },
  iconsWrap: {
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      paddingRight: '25px'
    },
  },
  icons: {
    fontSize: '29px',
    marginLeft: '13px'
  }
}));

export default function Navbar({ props }) {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbarWrapper}>
        <Hidden mdUp>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Hidden>

        <Typography variant="h7">JOBPLUS</Typography>

        <Hidden smDown>
          <Tabs>
            <Tab className={classes.tabs} label="Home" />
            <Tab className={classes.tabs} label="Job listing" />
            <Tab className={classes.tabs} label="Job applications" />
          </Tabs>
        </Hidden>

        <Box className={classes.iconsWrap}>
          <IconButton edge="start" color="inherit">
            <SearchIcon className={classes.icons} />
          </IconButton>
          <IconButton edge="start" color="inherit">
            <Badge color="error" overlap="circle" variant="dot">
              <NotificationsNoneIcon className={classes.icons} />
            </Badge>
          </IconButton>
          <IconButton edge="start" color="inherit" >
            <Badge badgeContent={2} classes={{ badge: classes.badge }}>
              <StarBorderIcon className={classes.icons} />
            </Badge>
          </IconButton>
          <IconButton edge="start" color="inherit">
            <PersonOutlineIcon className={classes.icons} />
          </IconButton>
          <IconButton edge="start" color="inherit">
            <ExitToAppIcon className={classes.icons} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}