import React, { useState, useEffect } from "react";
import { Button, Container, Card } from "react-bootstrap";

// Danh sách quotes fake tự định nghĩa
const fakeQuotes = [
  { content: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { content: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { content: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
  { content: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { content: "You only live once, but if you do it right, once is enough.", author: "Mae West" }
];

// Danh sách màu sắc cho hiệu ứng đổi màu
const colors = ["#ff6b6b", "#6b5b95", "#feb236", "#d64161", "#ff7b25", "#6a0572", "#009688", "#f4a261"];

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const RandomQuoteMachine = () => {
  const [quote, setQuote] = useState(fakeQuotes[0]);
  const [bgColor, setBgColor] = useState(getRandomItem(colors));

  const fetchQuote = () => {
    setQuote(getRandomItem(fakeQuotes));
    setBgColor(getRandomItem(colors));
  };

  useEffect(() => {
    fetchQuote(); // Gọi 1 lần khi load trang
  }, []);

  return (
    <Container 
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: bgColor, transition: "background-color 0.5s ease" }}
    >
      <Card id="quote-box" className="p-4 text-center shadow-lg" style={{ backgroundColor: "white", borderRadius: "15px" }}>
        <Card.Body>
          <Card.Text id="text" className="fs-4" style={{ color: bgColor, transition: "color 0.5s ease" }}>
            "{quote.content}"
          </Card.Text>
          <Card.Subtitle id="author" className="text-muted mb-3">- {quote.author}</Card.Subtitle>
          <Button 
            id="new-quote" 
            variant="primary" 
            onClick={fetchQuote}
            style={{ backgroundColor: bgColor, borderColor: bgColor, transition: "background-color 0.5s ease" }}
          >
            New Quote
          </Button>
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text="${quote.content}" - ${quote.author}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light ms-2"
            style={{ color: bgColor, borderColor: bgColor, transition: "color 0.5s ease" }}
          >
            Tweet
          </a>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RandomQuoteMachine;
