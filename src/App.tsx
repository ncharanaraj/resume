import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/HeaderContainer";
import Main from "./components/main/Main";
import AppLayout from "./components/ui/AppLayout";

function App() {
  return (
    <AppLayout>
      <Header />
      <Main />
      <Footer />
    </AppLayout>
  );
}

export default App;
