import { IS_BROWSER } from "fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
  theme: {
    fontFamily: {
      title: "Raleway",
      sans: "Lucida Grande"
    }
  },
  darkMode: "class",
  mode: "silent",
};
if (IS_BROWSER) setup(config);
