import React from "react";
import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import CreateSetForm from "../../components/createform/CreateSetForm"
const New = () => {
    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <CreateSetForm />
            </div>
        </div>

    )
}

export default New;
