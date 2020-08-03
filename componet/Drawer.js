import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {Home, MenuBook} from "@material-ui/icons";
import Link from 'next/link'
import {default as MDrawer} from "@material-ui/core/Drawer"
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

const Drawer = ({children, title = "Home"}) => {
    const classes = useStyles();
    const [state] = useState({
        title,
        items: [{
            name: "Home",
            icon: <Home/>,
            url: "/"
        },{
            name: "Page1",
            icon: <MenuBook/>,
            url: "/page1"
        },{
            name: "Page2",
            icon: <MenuBook/>,
            url: "/page2"
        }]
    });

    const Items = () => {
        return (
            <List>
                {state.items.map(item => (
                    <Link href={item.url} key={item.name}>
                    <ListItem button key={item.name}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItem>
                    </Link>
                ))}
            </List>
        );
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        {state.title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <MDrawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left">
                <div className={classes.toolbar} />
                <Divider/>
                <Items/>
                <Divider/>
            </MDrawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    );
};

export default Drawer;
