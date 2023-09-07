import Search from "./components/Search";
import Header from "./components/Header";
// import Board from "./components/Board";
import BadgeProvider from "./context/BadgeContext";
import "./assets/App.css";

const App = () => {
  return (
    <>
      <BadgeProvider>
        <Header />
        <div className="container flex-direction-column">
          <Search />
          {/* <Board /> */}
        </div>
      </BadgeProvider>
    </>
  );
};

export default App;
