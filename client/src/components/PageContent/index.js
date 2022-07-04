import React from "react";

//this is a toggle
const PageContent = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default PageContent;