import { Button } from "@mui/material";
import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello Wiliam Kieu!</h1>

      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={sendMessage}
        >
          Send Messenger
        </Button>
      </form>

      <ul>
        {messages.map((mess) => (
          <li>{mess}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
