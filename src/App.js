import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import "./App.css";
import { FormControl, InputLabel, Input } from "@mui/material";
import Message from "./components/Message/Index";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(prompt("Please enter your name: "));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello {userName}!</h1>

      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

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

      {messages.map((message) => (
        <Message text={message} />
      ))}
    </div>
  );
}

export default App;
