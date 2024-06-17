import { createServer } from "node:http";
import { jokes } from "./lib/data";

const server = createServer((request, response) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
  };

  if (request.url === "/api/bad-jokes") {
    response.writeHead(200, headers);
    response.end(JSON.stringify(jokes));
    return;
  }

  if (request.url === "/api/bad-jokes/0") {
    const joke = jokes.find((joke) => joke.id === "0");

    response.writeHead(200, headers);
    response.end(JSON.stringify(joke));
    return;
  }

  if (request.url.startsWith("/api/bad-jokes/")) {
    const id = request.url.split("/")[3];
    const joke = jokes.find((joke) => joke.id === id);

    response.writeHead(200, headers);
    response.end(JSON.stringify(joke));
    return;
  }

  response.writeHead(404, headers);
  response.end("not found.");
});

server.listen(8000, () => {
  console.log(`Server up and running http://localhost:8000`);
});
