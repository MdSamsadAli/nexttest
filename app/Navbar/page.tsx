"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

const My = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) {
    return null;
  }
  return (
    <>
      <Script src="js/main.js" />
      <Link href="/">Home</Link>
      <Link href="/header">About</Link>
      <Link href="/hero">Contact</Link>
    </>
  );
};

export default My;
