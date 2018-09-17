import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <section>
  <Header />
  <div style={{ color: `purple`, fontSize: `72px` }}>Hello Gatsby!</div>
  <h1>some test stuff!</h1>
  <Link to="/contact/">Contact</Link>

</section>
)
