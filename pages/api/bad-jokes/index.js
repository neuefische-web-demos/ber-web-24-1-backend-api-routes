import { jokes } from "@/lib/data";

export default function handler(request, response) {
  console.log("inside api/bad-jokes");
  response.json(jokes);
}
