import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import InfoSection from "./components/top/info/InfoSection";
import KeyvisualSection from "./components/top/keyvisual/KeyvisualSection";
import { APIContextProvider } from "./components/context/dataContext";
function App() {
  return (
    <>
      <Header />
      <main>
        <APIContextProvider>
          <KeyvisualSection />
          <InfoSection />
        </APIContextProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;
