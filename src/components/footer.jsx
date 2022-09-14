import React from "react";

const date = new Date().getFullYear();
function Footer() {
    return (
        <div className="footer">
            <p className="footer-p">©️ {date} Pulindu de Silva</p>
        </div>
    )
}

export default Footer;