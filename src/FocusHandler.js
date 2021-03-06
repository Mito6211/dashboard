import React, { useEffect } from "react";

const FocusHandler = ({ functions: { onFocus, onBlur } }) => {
    useEffect(() => {
        window.addEventListener("focus", onFocus);
        window.addEventListener("blur", onBlur);

        return () => {
            window.removeEventListener("focus", onFocus);
            window.removeEventListener("blur", onBlur);
        };
    });

    return <></>;
};

export default FocusHandler;
