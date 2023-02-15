import React from "react";
import './sidebar.scss'
import { Link, useNavigate } from "react-router-dom";
const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className="sidebar">
            <div className="top" onClick={() => navigate('/')}>
                <Link className="title" to="/">Tool Sticker</Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <Link className="menu" to="/"><li>Sticker</li></Link>

                    <Link className="menu" to="/new"><li>New</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar