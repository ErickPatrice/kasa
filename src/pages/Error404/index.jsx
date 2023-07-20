
import React from "react";
import { Link } from "react-router-dom";
import './404.css';
import hommeperdu from "../../assets/images/hommeperdu.webp"
 

function Error404 () {
    return (
        <div className="p404">
            <div className="page404">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <Link to ="/" className="lin">
                Retournez sur la page d'accueil
            </Link>
        </div>
    )
}

export default Error404;