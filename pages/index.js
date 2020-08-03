import Layout from "../componet/Layout";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {increment} from "../store/action/CounterAction";

const Home = () => {
     const dispatch = useDispatch();

     const tick = () => {
        setInterval(()=> {
            dispatch(increment());
        }, 5000)
     };

     useEffect(tick, []);

     return (
         <Layout>
             <p>Hello world!</p>
         </Layout>
      )
};

export default Home;
