import Pages from "./components/pages/pages";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
AOS.init();
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Pages />
    </>
  );
}

export default App;
