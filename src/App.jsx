import "./App.css";
import Analytics from "./components/Analytics";
import Features from "./components/Features";
import Homepage from "./components/Homepage";
import NavigationBar from "./components/NavigationBar";
import { setDarkColor, setGreenColor } from "./app/Features/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import Management from "./components/Management";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Evidence from "./components/Evidence";
import Articles from "./components/Articles";
import Subscription from "./components/Subscription";
import Reviews from "./components/Reviews";
import getColors from "./components/color/colorUtilities";

const App = () => {
  const dispatch = useDispatch();

  const pageColor = useSelector((state) => state.theme.pageColor);
  const colors = getColors(pageColor);

  const handleColorChange = (color) => {
    switch (color) {
      case "green":
        dispatch(setGreenColor());
        break;
      case "dark":
        dispatch(setDarkColor());
        break;
      default:
        break;
    }
  };

  return (
    <div
      style={{
        backgroundColor: pageColor === "green" ? "#07282c" : "#1f2937",
      }}
    >
      <NavigationBar colors={colors} />
      <Homepage colors={colors} />
      <Features colors={colors} />
      <Analytics colors={colors} />
      <Management colors={colors} />
      <Reviews colors={colors} />
      <Pricing colors={colors} />
      <Evidence colors={colors} />
      <Articles colors={colors} />
      <Subscription colors={colors} />
      <Footer colors={colors} />

      <div className="fixed bottom-4 right-4">
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-lg ml-2"
          onClick={() => handleColorChange("dark")}
        >
          Dark
        </button>
        <button
          className="bg-green-700 text-white px-4 py-2 rounded-lg ml-2"
          onClick={() => handleColorChange("green")}
        >
          Green
        </button>
      </div>
    </div>
  );
};

export default App;
