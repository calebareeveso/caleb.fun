import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";


export default function Main({ children, ...props }:any) {
    return (
        <main className="wrapper ">
        <div className="max-w-2xl mx-auto container px-4">
          <div className="container mx-auto">
       {children}
       </div>
      </div>
       </main>
  );
}