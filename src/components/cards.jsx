import React from "react";

function Cards(props) {
    return (
        <div className="term">
            <dt>
                <span className="emoji" role="img" aria-label="Tense Biceps">
                    {props.icon}
                </span>
                <span>{props.title}</span>
            </dt>
            <dd>
                {props.definition}
            </dd>
        </div>
    )
}

export default Cards;