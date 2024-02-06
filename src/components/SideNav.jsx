import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Cake } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SpeedIcon from '@mui/icons-material/Speed';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DashBoard from './DashBoard';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'white', // Change background color to white
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Add box shadow
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [expandedAccordion, setExpandedAccordion] = React.useState(false);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpandedAccordion(isExpanded ? panel : false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar sx={{ display : "flex", justifyContent : "space-between"}}>
                    <IconButton
                        color="black"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ color: 'black' }}>
                        Manage Bakery <ArrowForwardIosIcon sx={{fontSize : "15px"}}/>  <span style={{fontWeight : "bold"}}>DashBoard</span> 
                    </Typography>

                    {/* Add the icons at the right side corner */}
                    <List>
                    <IconButton >
                        <SearchIcon />
                    </IconButton>
                    <IconButton >
                        <MailOutlineIcon />
                    </IconButton>
                    <IconButton >
                        <NotificationsNoneIcon />
                    </IconButton>
                    <IconButton >
                        <PersonOutlineIcon />
                    </IconButton>
                    <IconButton >
                        <ExitToAppIcon />
                    </IconButton>
                    </List>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        background: 'linear-gradient(180deg, #E2F8FF 0%, #EFF1FC 68.23%, #FCE9F9 100%)',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <Typography variant="h6" sx={{ color: theme.palette.text.primary, mr: 3, fontWeight: 'bold' }}>
                        <Cake sx={{ fontSize: 30, marginBottom: -0.8, color: "#8CE1FF" }} /> Cup Cake
                    </Typography>

                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>

                <button style={{ marginLeft: "15px", border: "none", marginTop: "15px", padding: "20px 10px", fontSize: "18px", cursor: "pointer", background: "#1DC4FF", color: "white", fontWeight: "bold", borderRadius: '5px', width: '80%' }}>
                    <span style={{ background: "white", color: "black", padding: "4px 10px", borderRadius: "5px", marginRight: "10px" }}>20</span> New Orders
                </button>



                <List sx={{ mt: "10px" }}>
                    <Accordion sx={{ background: '#E2F8FF', border: "0%" }} elevation={0}>
                        <AccordionSummary
                            expandIcon={<ArrowForwardIosIcon sx={{ fontSize: "20px" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Manage Bakery</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List sx={{ marginTop: 0, paddingTop: 0 }}>
                                {['DashBoard', 'Order History', 'Products', 'Employees'].map((text, index) => (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {
                                                    index === 0 ? <SpeedIcon /> :
                                                        index === 1 ? <ContentPasteIcon /> :
                                                            index === 2 ? <FastfoodIcon /> :
                                                              index === 3 ? <PersonIcon/> :
                                                              <SpeedIcon/>
                                                }
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </AccordionDetails>
                    </Accordion>

                    {/* Second Accordion */}
                    <Accordion sx={{ background: '#E2F8FF', border: "0%" }} elevation={0}>
                        <AccordionSummary
                            expandIcon={<ArrowForwardIosIcon sx={{ fontSize: "20px" }} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Manage Users</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                            <Typography>
                                Add your content for Accordion 2 here.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* Third Accordion */}
                    <Accordion sx={{ background: '#E2F8FF', border: "0%" }} elevation={0}>
                        <AccordionSummary
                            expandIcon={<ArrowForwardIosIcon sx={{ fontSize: "20px" }} />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography>Settings</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                            <Typography>
                                Add your content for Accordion 3 here.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Box>
                    <DashBoard/>
                </Box>
            </Main>
        </Box>
    );
}
