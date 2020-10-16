import React, { Fragment } from "react";
import Link from "next/link";
import Layout from "../layouts"

export default function AboutPage() {
    return (
        <Layout>
        <h1 style={{ color: 'red' }}> About Page </h1>
        <h4> Under Construction</h4>
        <Link href="/about">
          <a>About</a>
        </Link>
      </Layout>
    );
  }
  