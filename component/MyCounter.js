import {useSelector} from "react-redux";
import Typography from "@material-ui/core/Typography";
import React from "react";

const MyCounter = () => {
    let counter = useSelector(state => state.counter);

    return  (
        <Typography>Counter from store: {counter}</Typography>
    );
};

export default MyCounter;