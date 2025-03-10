import Home from "./pages/home.jsx";
import LoadingScreen from "./components/features/loading-screen/loading-screen.jsx";

export default function App() {

  return <section>
    <Home />
    <LoadingScreen id={"loading-screen"} />
  </section>
}
