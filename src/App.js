import "./App.css";
import Analytics from "./components/Analytics";
import Features from "./components/Features";
import Homepage from "./components/Homepage";
import NavigationBar from "./components/NavigationBar";
import { changePageColor } from "./app/actions";
import { connect } from "react-redux";
import Management from "./components/Management";
import Reviews from "./components/Reviews";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import About from "./components/About";
import Evidence from "./components/Evidence";
import Articles from "./components/Articles";
import Subscription from "./components/Subscription";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const App = ({
  pageColor,
  changePageColor,
  lightColor,
  greenColor,
  darkColor,
}) => {

  const [evidenceRef, inView] = useInView({
    threshold: 0.5, 
  });

  useEffect(() => {
    if (inView) {
      // Play animation when Evidence component is in view
      // Implement your animation logic here
    }
  }, [inView]);
  useEffect(() => {
    changePageColor(darkColor);
  }, [changePageColor, darkColor]);

  return (
    <div style={{ backgroundColor: pageColor, minHeight: "100vh" }}>
      <NavigationBar />
      <Homepage />
      <Features />
      <Analytics />
      <Management />
      <Reviews />
      <Pricing />
      <Evidence />
      <Articles />
      <Subscription />
      <About />
      <Footer />
      <div className="fixed bottom-4 right-4">
        <button
          className="bg-white border-2 text-black px-4 py-2 rounded-lg"
          onClick={() => changePageColor(lightColor)}
        >
          Light
        </button>
        <button
          className="bg-gray-900 text-white px-4 py-2 rounded-lg ml-2"
          onClick={() => changePageColor(darkColor)}
        >
          Dark
        </button>
        <button
          className="bg-green-700 text-white px-4 py-2 rounded-lg ml-2"
          onClick={() => changePageColor(greenColor)}
        >
          Green
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pageColor: state.theme.pageColor,
    greenColor: state.theme.greenColor,
    darkColor: state.theme.darkColor,
    lightColor: state.theme.lightColor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePageColor: (color) => dispatch(changePageColor(color)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
