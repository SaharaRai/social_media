import React from "react";

// if (process.env.NODE_ENV === 'development') {
const whyDidYouRender = require("@welldone-software/why-did-you-render");
whyDidYouRender(React, {
  trackAllPureComponents: true,
});
// }

//Notice: The library should NEVER be used in production because it slows down React
