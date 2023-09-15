import React from "react";

const ItemKeyComponent = ({ myKey, state, handlerClick }) => {
    return (
    <div
        className={state ? "disablediv" : ""}
        onClick={() => {
        handlerClick(myKey);
        }}
    >
        {myKey}
    </div>
    );
};

export default ItemKeyComponent;