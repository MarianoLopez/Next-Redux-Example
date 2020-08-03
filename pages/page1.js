import Layout from "../componet/Layout";
import React from "react";
import Typography from "@material-ui/core/Typography";
import MyCounter from "../componet/MyCounter";

const Page1 = () => {

  return (
        <Layout title="Page1">
            <Typography>Page1!</Typography>
            <MyCounter/>
        </Layout>
  )
};

export default Page1;
