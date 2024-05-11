import { Header } from "./components/Header/Header";
import { Main } from "./components/pages/main/Main";

function App() {
  return (
    <>
      <Header />
      <div className="container px-6 py-6 min-h-screen">
        <Main />
      </div>
    </>
  );
}

export default App;
