'use strict';
import type { RecursiveKeyValuePair } from "tailwindcss/types/config";

import { colors } from "./colors";

// named export
export {
  colors
};

// default export
const MaiColors = {
  colors
};
namespace MaiColors {
  export interface Color extends RecursiveKeyValuePair {
    50:  string,
    100: string,
    200: string,
    300: string,
    400: string,
    500: string,
    600: string,
    700: string,
    800: string,
    900: string,
  }
  
  export interface Colors extends RecursiveKeyValuePair {
    chocolate:  Color,
    cider:      Color,
    citrus:     Color,
    mint:       Color,
    strawberry: Color
  }
};
export default MaiColors;