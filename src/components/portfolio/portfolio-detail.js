import React from "react";

export default function(props) {
    return (
        <div>
            <h2>Portfolio Detail for {props.history.location.pathname}</h2>
        </div>
    );
}