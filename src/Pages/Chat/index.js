import { useState, useEffect, useRef } from "react";
import { TextField, Button, Box, Paper, Typography } from "@mui/material";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: "User1", text: "Hello!" },
    { id: 2, user: "User2", text: "Hi! How are you?" }
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: messages.length + 1, user: "You", text: input }]);
      setInput("");
    }
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 400, mx: "auto", p: 2, height: 400, display: "flex", flexDirection: "column", marginTop:5 }}>
      <Box sx={{ flex: 1, overflowY: "auto", p: 1 }}>
        {messages.map((msg) => (
          <Box key={msg.id} sx={{ mb: 1, p: 1, borderRadius: 1, bgcolor: msg.user === "You" ? "primary.light" : "grey.300" }}>
            <Typography variant="body2" fontWeight="bold">{msg.user}:</Typography>
            <Typography variant="body1">{msg.text}</Typography>
          </Box>
        ))}
        <div ref={chatEndRef} />
      </Box>
      <Box sx={{ display: "flex", p: 1, borderTop: 1, borderColor: "grey.300" }}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <Button variant="contained" color="primary" sx={{ ml: 1 }} onClick={sendMessage}>
          Send
        </Button>
      </Box>
    </Paper>
  );
};

export default ChatBox;
