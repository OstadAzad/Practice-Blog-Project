import React, { useEffect, useState } from "react";
import Layout from "../MasterLayout/Layout.jsx";
import { useParams } from "react-router-dom";
import { postList } from "../APIRequest/APIRequest.js";
import Loader from "../Components/Loader.jsx";
import BlogList from "../Components/BlogList.jsx";


const CategoryPage = () => {

    let {categoryID} = useParams();

    const [list, Setlist] = useState(null);

    useEffect(()=>{
        (async()=>{
        let res = await postList(categoryID);
        Setlist(res);
        })()
    },[categoryID])

    return (
        <Layout>
           {list===null?<Loader/>:<BlogList list={list}></BlogList>}
        </Layout>
    );
};
export default CategoryPage;