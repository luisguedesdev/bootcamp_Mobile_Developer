import fastify from "fastify";
import cors from "@fastify/cors"

const server = fastify({ logger: true });

server.register(cors, {
  origin: "*",
  methods:[]
})

const teams = [
  {
    id: 1,
    name: "Red Bull Racing",
    base: "Austria",
  },
  {
    id: 2,
    name: "Ferrari",
    base: "Italy",
  },
  {
    id: 3,
    name: "McLaren",
    base: "United Kingdom",
  },
  {
    id: 4,
    name: "Mercedes",
    base: "Germany",
  },
  {
    id: 5,
    name: "Aston Martin",
    base: "United Kingdom",
  },
  {
    id: 6,
    name: "Alpine",
    base: "France",
  },
  {
    id: 7,
    name: "Sauber (Kick Sauber)",
    base: "Switzerland",
  },
  {
    id: 8,
    name: "Williams",
    base: "United Kingdom",
  },
  {
    id: 9,
    name: "Haas",
    base: "United States",
  },
  {
    id: 10,
    name: "RB (Visa Cash App RB F1 Team)",
    base: "Italy",
  },
];

const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Lando Norris", team: "McLaren" },
  { id: 3, name: "Charles Leclerc", team: "Ferrari" },
  { id: 4, name: "Oscar Piastri", team: "McLaren" },
  { id: 5, name: "Lewis Hamilton", team: "Ferrari" },
  { id: 6, name: "George Russell", team: "Mercedes" },
  { id: 7, name: "Andrea Kimi Antonelli", team: "Mercedes" },
  { id: 8, name: "Yuki Tsunoda", team: "Red Bull Racing" },
  { id: 9, name: "Lance Stroll", team: "Aston Martin" },
  { id: 10, name: "Fernando Alonso", team: "Aston Martin" },
  { id: 11, name: "Pierre Gasly", team: "Alpine" },
  { id: 12, name: "Jack Doohan", team: "Alpine" },
  { id: 13, name: "Gabriel Bortoleto", team: "Sauber / Kick Sauber" },
  { id: 14, name: "Nico Hülkenberg", team: "Sauber / Kick Sauber" },
  { id: 15, name: "Alexander Albon", team: "Williams" },
  { id: 16, name: "Carlos Sainz Jr.", team: "Williams" },
  { id: 17, name: "Oliver Bearman", team: "Haas" },
  { id: 18, name: "Esteban Ocon", team: "Haas" },
];

server.get("/teams", async (request, response) => {
  response.type("application/json").code(200);
  return { teams };
});

server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200);
  return { drivers };
});

interface DriverParams {
  id: string;
}

server.get<{ Params: DriverParams }>(
  "/drivers/:id",
  async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id);
    if (!driver) {
      response.type("application/json").code(404);
      return { message: "Driver not found" };
    } else {
      response.type("application/json").code(200);
      return { driver };
    }
  }
);

server.listen({ port: 3333 }, () => {
  console.log("Server running on port 3333");
});
