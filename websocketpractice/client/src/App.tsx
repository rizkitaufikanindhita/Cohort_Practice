import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [datas, setDatas] = useState("");
  const [messageClient, setMessageClient] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      console.log("connection berhasil dibuat");
      setSocket(socket);
    };

    socket.onmessage = (message) => {
      console.log(`data yang diterima: ${message.data}`);
      setDatas(message.data);
    };
  }, []);

  if (!socket) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>"Hi There"</div>
      <div>{datas}</div>
      <input onChange={(e) => setMessageClient(e.target.value)}></input>
      <button onClick={() => socket.send(messageClient)}>Send</button>
    </>
  );
}

export default App;
