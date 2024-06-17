import { createServer } from "node:http";
import { jokes } from "./lib/data";

const server = createServer((request, response) => {
  if (request.url === "/api/bad-jokes") {
    response.end(JSON.stringify(jokes));
    return;
  }

  if (request.url === "/api/bad-jokes/0") {
    const joke = jokes.find((joke) => joke.id === "0");
    response.end(JSON.stringify(joke));
    return;
  }

  if (request.url.startsWith("/api/bad-jokes/")) {
    const id = request.url.split("/")[3];

    const joke = jokes.find((joke) => joke.id === id);
    response.end(JSON.stringify(joke));
    return;
  }

  response.end("not found.");
}, {});

server.listen(8000, () => {
  console.log(`Server up and running http://localhost:8000`);
});
