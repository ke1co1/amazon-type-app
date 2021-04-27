import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i.gadgets360cdn.com/large/best_movies_on_amazon_prime_august_2020_1597408336879.jpg"
          alt=""
        />

        <div className="row__container">
          <div className="home__row">
            <Product
              id="123456"
              title="The Lean Startup"
              price={29.99}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLDGCIreAxtmYES-b0drzc9kxKX5KwHC37Y7tNeuJIxQXCl6TOkQMiDPzxgwnq2IpBrpKtQ8ED&usqp=CAc"
              rating={4}
            />
            <Product
              id="2345678"
              title="Kenwood Stand Mixer"
              price={239.99}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw3M5upQNiIwnHdgx6ONZpSrk1275YgfENzDEfUTmycABpNVmQJI-_Ugpi4c-4Xbnwf3dB4Bk&usqp=CAc"
              rating={4}
            />
          </div>

          <div className="home__row">
            <Product
              id="90822222"
              title="Fitbit Charge 4"
              price={129.98}
              rating={4}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-NDwS0LoQqdjPCX4tk-cGSijfT8JQ6mHf_7uV2JV-UaNOyegU-0o0Ecc-RGVT9WKVIG5OK7U&usqp=CAc"
            />
            <Product
              id="90823333"
              title="Amazon Echo | Smart speacker with Alexa"
              price={42.39}
              rating={4}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtDljHv-vXfIIFwJOKMkmltUSYXtAHhhiVNxqlVvutDUCqyVyXkAa5I4IxfDikPBoT0hkJvM&usqp=CAc"
            />
            <Product
              id="90824444"
              title="New Apple iPad Pro"
              price={929.99}
              rating={4}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGuGrPmFJE0-S7QLyRcSP-fuFhP04ts_XeQ&usqp=CAU"
            />
          </div>

          <div className="home__row">
            <Product
              id="90825555"
              title="Samsung LC49rg90ssuxen 49' Curved LED Gaming Monitor"
              price={1094.98}
              rating={4}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJBUDWJMn-y5o0to72qLYTOFWANNipzo8ig&usqp=CAU"
            />
          </div>
          <div className="home__row">
            <Product
              id="123456"
              title="The Lean Startup"
              price={29.99}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLDGCIreAxtmYES-b0drzc9kxKX5KwHC37Y7tNeuJIxQXCl6TOkQMiDPzxgwnq2IpBrpKtQ8ED&usqp=CAc"
              rating={4}
            />
            <Product
              id="2345678"
              title="Kenwood Stand Mixer"
              price={239.99}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw3M5upQNiIwnHdgx6ONZpSrk1275YgfENzDEfUTmycABpNVmQJI-_Ugpi4c-4Xbnwf3dB4Bk&usqp=CAc"
              rating={4}
            />
          </div>

          <div className="home__row">
            <Product
              id="90822222"
              title="Fitbit Charge 4"
              price={129.98}
              rating={4}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-NDwS0LoQqdjPCX4tk-cGSijfT8JQ6mHf_7uV2JV-UaNOyegU-0o0Ecc-RGVT9WKVIG5OK7U&usqp=CAc"
            />
            <Product
              id="90823333"
              title="Amazon Echo | Smart speacker with Alexa"
              price={42.39}
              rating={4}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtDljHv-vXfIIFwJOKMkmltUSYXtAHhhiVNxqlVvutDUCqyVyXkAa5I4IxfDikPBoT0hkJvM&usqp=CAc"
            />
            <Product
              id="90824444"
              title="New Apple iPad Pro"
              price={929.99}
              rating={4}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGuGrPmFJE0-S7QLyRcSP-fuFhP04ts_XeQ&usqp=CAU"
            />
          </div>

          <div className="home__row">
            <Product
              id="90825555"
              title="Samsung LC49rg90ssuxen 49' Curved LED Gaming Monitor"
              price={1094.98}
              rating={4}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJBUDWJMn-y5o0to72qLYTOFWANNipzo8ig&usqp=CAU"
            />
          </div>
          <div className="home__row">
            <Product
              id="123456"
              title="The Lean Startup"
              price={29.99}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLDGCIreAxtmYES-b0drzc9kxKX5KwHC37Y7tNeuJIxQXCl6TOkQMiDPzxgwnq2IpBrpKtQ8ED&usqp=CAc"
              rating={4}
            />
            <Product
              id="2345678"
              title="Kenwood Stand Mixer"
              price={239.99}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw3M5upQNiIwnHdgx6ONZpSrk1275YgfENzDEfUTmycABpNVmQJI-_Ugpi4c-4Xbnwf3dB4Bk&usqp=CAc"
              rating={4}
            />
          </div>

          <div className="home__row">
            <Product
              id="90822222"
              title="Fitbit Charge 4"
              price={129.98}
              rating={4}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-NDwS0LoQqdjPCX4tk-cGSijfT8JQ6mHf_7uV2JV-UaNOyegU-0o0Ecc-RGVT9WKVIG5OK7U&usqp=CAc"
            />
            <Product
              id="90823333"
              title="Amazon Echo | Smart speacker with Alexa"
              price={42.39}
              rating={4}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtDljHv-vXfIIFwJOKMkmltUSYXtAHhhiVNxqlVvutDUCqyVyXkAa5I4IxfDikPBoT0hkJvM&usqp=CAc"
            />
            <Product
              id="90824444"
              title="New Apple iPad Pro"
              price={929.99}
              rating={4}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGuGrPmFJE0-S7QLyRcSP-fuFhP04ts_XeQ&usqp=CAU"
            />
          </div>

          <div className="home__row">
            <Product
              id="90825555"
              title="Samsung LC49rg90ssuxen 49' Curved LED Gaming Monitor"
              price={1094.98}
              rating={4}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJBUDWJMn-y5o0to72qLYTOFWANNipzo8ig&usqp=CAU"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
