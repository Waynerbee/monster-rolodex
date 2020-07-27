import React from "react";

import "./search-box.styles.css";

/* If the component does not require a "internal State" or a "lifecycle method", and only needs to render a html, use Function (gets some props and returns html) instead of Class */

export const SearchBox = ({ placeholder, handleChange }) => ( <
    input className = "search"
    type = "search"
    placeholder = { placeholder }
    /* we want this to dynamic, and allow it to be passed in as a prop  */
    onChange = { handleChange }
    />
);