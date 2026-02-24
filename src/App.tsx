import Logo from "./components/Logo/Logo";
import Search from "./components/Search/Search";
import Modal from "./components/Modal/Modal";
import "./App.css";

const App = () => {
  return (
    <>
      <header>
        <Logo />
        <Search />
      </header>
      <main>
        <Modal />
      </main>
    </>
  );
};

export default App;
