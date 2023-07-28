import React, { useEffect, useState } from "react";
import Layout from "../MasterLayout/Layout.jsx";
import BlogList from "../Components/BlogList.jsx";
import { postNewest } from "../APIRequest/APIRequest.js";
import Loader from "../Components/Loader.jsx";


const HomePage = () => {

const [list, Setlist] = useState(null);

useEffect(()=>{
    (async()=>{
    let res = await postNewest();
    Setlist(res);
    })()
},[])

    return (
        <Layout>
            {list===null?<Loader/>:<BlogList list={list}></BlogList>}
        </Layout>
    );
};

export default HomePage;