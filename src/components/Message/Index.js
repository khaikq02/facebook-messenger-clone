import React from "react";
import "./style.css";
import { Card, CardContent, Typography } from "@mui/material";

function Message({ message, userName }) {
  const isUser = userName === message.userName;

  return (
    <div className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {message.userName}: {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
