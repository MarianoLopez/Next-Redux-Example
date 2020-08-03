import Layout from "../component/Layout";
import React from "react";
import Typography from "@material-ui/core/Typography";
import MyCounter from "../component/MyCounter";

const Page2 = () => {
  return (
        <Layout title="Page2">
            <Typography>Page2!</Typography>
            <MyCounter/>
        </Layout>
  )
};

export default Page2;
