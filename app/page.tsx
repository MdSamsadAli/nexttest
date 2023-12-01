import Script from "next/script";
import React from "react";

const page = () => {
  return (
    <>
      <Script src="/js/all.js" />
      <Script src="/script/new.js" />
      <h1>heoll</h1>
    </>
  );
};

export default page;
