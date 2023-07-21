
import React from "react";
import { Link } from "react-router-dom";
import './404.css';
  
 
function Error404 () {
    return (
        <div className="p404">
            <div className="page404">
            <div className="container404">
            <h1>404</h1>
            </div>
            
             <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <Link to ="/" className="lin">
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}

export default Error404;