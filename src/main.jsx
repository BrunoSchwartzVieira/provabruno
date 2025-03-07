import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app.jsx";

import "./index.css";

function Main() {
  const [cafeCount, setCafeCount] = useState(0);

  const addCafe = () => {
    setCafeCount((prevCount) => prevCount + 1);
  };

  const removeCafe = () => {
    setCafeCount((prevCount) => {
      if (prevCount > 0) {
        console.log(`Você removeu um café! Total: ${prevCount - 1}`);
        return prevCount - 1;
      } else {
        console.log("Você não tem cafés para remover!");
        return prevCount;
      }
    });
  };

  return (
    <StrictMode>
      <App />
      <button onClick={addCafe}>Adicionar café</button>
      <button onClick={removeCafe}>Remover café</button>
      <p>Cafés: {cafeCount}</p>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Main />);

export { App };

export default App;
