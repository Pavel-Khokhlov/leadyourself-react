import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import GetGuidePopup from "./GetGuidePopup";

const App = () => {
  const [isGuidePopupOpen, setIsGuidePopupOpen] = useState(false);

  const handleEsc = (e) => {
    if (e.keyCode === 27) {
      closeAllPopups();
    }
  };

  const handleGetGuideClick = () => {
    setIsGuidePopupOpen(true);
    window.addEventListener("keydown", handleEsc);
  };

  const handleGetGuide = () => {
    closeAllPopups();
  };

  const closeAllPopups = () => {
    setIsGuidePopupOpen(false);
    window.removeEventListener("keydown", handleEsc);
  };

  return (
    <>
      <Header />
      <Main onGetGuideClick={handleGetGuideClick} />
      <Footer />
      <GetGuidePopup
        isOpen={isGuidePopupOpen}
        //button={uxSaveBtn}
        onClose={closeAllPopups}
        onGetGuide={handleGetGuide}
      />
    </>
  );
};

export default App;
