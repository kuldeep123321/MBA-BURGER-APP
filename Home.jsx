import React from 'react'
import Header from '../layout/Header'
import Founder from "./Founder.jsx"
import Footer from "../layout/Footer"
import Menu from "./Menu.jsx"
export const Home = () => {
  return <>
    <section className="home">
    <div>
      <h1>MBA burger Wala</h1>
      <p>Give yourself a tasty burger</p>
    </div>
    <a href="#menu">Explore Menu</a>
  </section>

  <Founder/>
  <Menu/>
  <Footer/>
  </>
}
export default Home