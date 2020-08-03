import Head from "next/head";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Drawer from "./Drawer";

const Layout = ({children, title}) => {
    return (
        <Drawer title={title}>
            <Grid container spacing={2}>
                <Grid item>
                    <Head>
                        <title>My Next Test App</title>
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    </Head>
                </Grid>
                <Grid>
                    {children}
                </Grid>
            </Grid>
        </Drawer>
    );
};

export default Layout;