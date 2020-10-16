import React from "react"
import Layout from "../layouts"
import Link from "next/link";
//import Tabs from "../components/Tabs"

const home = props => {
  return (
    <Layout>
       <div>
      <img src={require('../image/picture1.jpg')} class="img-thumbnail"/>
      </div>
      </Layout>
 
  )
}
export default home