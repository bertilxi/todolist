import { deepMerge } from "grommet/utils";
import { grommet } from "grommet";

export const theme = deepMerge(grommet, {
  rounding: 6,
  spacing: 20,
  global: {
    colors: {
      brand: "#0052CC"
    },
    font: {
      family: "Poppins",
      size: "18px",
      height: "20px"
    }
  }
});
