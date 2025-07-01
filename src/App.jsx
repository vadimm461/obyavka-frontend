import { useEffect, useState } from "react";
import { fetchWelcome } from "./api";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getWelcomeMessage = async () => {
      const data = await fetchWelcome();
      if (data) {
        setMessage(data);
      }
    };

    getWelcomeMessage();
  }, []);

  return (
    <div>
      <h1>Главная страница</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;