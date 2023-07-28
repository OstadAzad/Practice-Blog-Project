import React, { useEffect, useState } from "react";
import Layout from "../MasterLayout/Layout.jsx";
import { useParams } from "react-router-dom";
import { postDetails } from "../APIRequest/APIRequest.js";
import Loader from "../Components/Loader.jsx";
import BlogDetails from "../Components/BlogDetails.jsx";

const DetailsPage = () => {

    let {detailsID} = useParams();

    const [list, Setlist] = useState(null);

    useEffect(()=>{
        (async()=>{
        let res = await postDetails(detailsID);
        Setlist(res);
        })()
    },[detailsID])
    return (
        <Layout>
            {list===null?<Loader/>:<BlogDetails list={list}></BlogDetails>}
        </Layout>
    );
};

export default DetailsPage;