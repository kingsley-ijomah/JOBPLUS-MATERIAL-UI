import Tabs from '@material-ui/core/Tabs';
import { useState } from 'react';
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
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";

const drawerWidth = '100%';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiIconButton-root': {
      paddingRight: 0,
    }
  },
  container: {
    ...theme.container,
    padding: '0',
    '& h6': {
      ...theme.fonts.bold,
    }
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
    '& .MuiButtonBase-root': {
      marginLeft: '13px',
    }
  },
  icons: {
    fontSize: '29px',
    // marginLeft: '13px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  hamburger: {
    fontSize: '2rem',
    marginRight: '15px',
  },
}));

export default function Navbar({ props }) {
  const classes = useStyles();

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const routes = [
    { name: 'Home', link: '/' },
    { name: 'Job Listings', link: '/job-listings' },
    { name: 'Job Applications', link: '/job-applications' }
  ];

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.container}>
          <Hidden mdUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon className={classes.hamburger} />
            </IconButton>
          </Hidden>

          <Typography component="h6">JOBPLUS</Typography>

          <Hidden smDown>
            <Tabs>
              {routes.map((route, index) => (
                <Tab
                  key={`${route}${index}`}
                  className={classes.tabs}
                  label={route.name}
                  component={Link}
                  to={route.link}
                />
              ))}
            </Tabs>
          </Hidden>

          <Box className={classes.iconsWrap}>
            <IconButton size="small" component={Link} to={'/search'} edge="start" color="inherit">
              <SearchIcon className={classes.icons} />
            </IconButton>
            <IconButton size="small" component={Link} to={'/notifications'} edge="start" color="inherit">
              <Badge color="error" overlap="circle" variant="dot">
                <NotificationsNoneIcon className={classes.icons} />
              </Badge>
            </IconButton>
            <IconButton size="small" component={Link} to={'/saved-jobs'} edge="start" color="inherit" >
              <Badge badgeContent={2} classes={{ badge: classes.badge }}>
                <StarBorderIcon className={classes.icons} />
              </Badge>
            </IconButton>
            <IconButton size="small" component={Link} to={'/profile'} edge="start" color="inherit">
              <PersonOutlineIcon className={classes.icons} />
            </IconButton>
            <IconButton size="small" component={Link} to={'/login'} edge="start" color="inherit">
              <ExitToAppIcon className={classes.icons} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {routes.map((route, index) => (
            <ListItem key={`${route}${index}`} component={Link} to={route.link} button>
              <ListItemText primary={route.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>

    </Box>
  )
}