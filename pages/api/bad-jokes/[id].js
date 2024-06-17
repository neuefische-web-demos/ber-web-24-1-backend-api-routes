import { jokes } from "@/lib/data";

export default function handler(request, response) {
  const { id } = request.query;
  const joke = jokes.find((joke) => joke.id === id);

  if (!joke) {
    response.status(400).json({ status: "not found" });
    return;
  }

  response.json(joke);
}
