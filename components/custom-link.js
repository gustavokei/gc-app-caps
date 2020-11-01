import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// https://flaviocopes.com/nextjs-active-link/
// Using the router to detect the active link in Next.js

const CustomLink = ({ href, children }) => {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} active`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};
export default CustomLink;
