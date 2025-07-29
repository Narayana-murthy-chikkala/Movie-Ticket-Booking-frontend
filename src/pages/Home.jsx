import React from "react";
import Hero from "../components/Hero";
import Featuredsection from "../components/Featuredsection";
import Trailers from "../components/Trailers";
import Reviews from "../components/Reviews";

const Home=()=>{
  return(
    <div>
      <Hero/>
      <br/>
      <Featuredsection/>
      <br/>
      <Trailers />
      <br />
      <Reviews/>
      <br/>
    </div>
  )
}
export default Home