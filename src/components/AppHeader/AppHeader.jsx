import React from "react";
import { useSelector } from "react-redux";
import { Wrapper } from "./AppHeader.styles";

function AppHeader() {
    return (
        <Wrapper>
            alga <span>Shopping</span>
        </Wrapper>
    )
}
export default AppHeader;