import Layout from "../componet/Layout";
import React from "react";
import Typography from "@material-ui/core/Typography";
import MyCounter from "../componet/MyCounter";

const Page2 = () => {
  return (
        <Layout title="Page2">
            <Typography>Page2!</Typography>
            <MyCounter/>
        </Layout>
  )
};

export default Page2;
