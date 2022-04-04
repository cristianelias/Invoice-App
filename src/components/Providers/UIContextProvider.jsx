// Dependencies
import { useState } from "react";

// Context
import UIContext from "../../state/UIContext";

const UIContextProvider = ({ children }) => {
  const [creditsModalOpen, setCreditsModalOpen] = useState(false);

  return (
    <UIContext.Provider value={{ creditsModalOpen, setCreditsModalOpen }}>
      {children}
    </UIContext.Provider>
  );
};
export default UIContextProvider;
