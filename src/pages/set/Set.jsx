import React from "react";
import "./set.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import StickerTable from "../../components/stickertable/StickerTable";
import { useParams } from "react-router-dom";

const Set = () => {
    // const queryParameters = new URLSearchParams(window.location.search)
    const { id } = useParams();
    return (
        <div className="set">
            <Sidebar />
            <div className="setContainer">
                <Navbar />
                <StickerTable id={id} />
            </div>
        </div>
    )
}

export default Set;
