import * as React from "react";

import {CustomButtonContainer} from "./primary-button.styles";

const Button = ({children, ...props}) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
);

export default Button;