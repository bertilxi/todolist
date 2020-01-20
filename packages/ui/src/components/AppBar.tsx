import { Box } from "grommet";
import React from "react";

export const AppBar: React.FC = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    pad={{ horizontal: "medium", vertical: "small" }}
    {...props}
  />
);
