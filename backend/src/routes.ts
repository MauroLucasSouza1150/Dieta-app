import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateNutritionController } from "./controllers/CreateNutritionController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
    let responseText =
      '```json\n{\n  "nome": "Lucas",\n  "sexo": "Masculino",\n  "idade": 24,\n  "altura": 1.82,\n  "peso": 72,\n  "objetivo": "Hipertrofia",\n  "refeicoes": [\n    {\n      "horario": "08:00",\n      "nome": "Café da Manhã",\n      "alimentos": [\n        "2 fatias de pão integral",\n        "2 ovos mexidos",\n        "1 banana",\n        "200ml de leite desnatado",\n        "2 colheres de sopa de aveia"\n      ]\n    },\n    {\n      "horario": "10:00",\n      "nome": "Lanche da Manhã",\n        "alimentos": [\n          "1 iogurte grego natural com granola"\n        ]\n    },\n    {\n      "horario": "13:00",\n      "nome": "Almoço",\n      "alimentos": [\n        "150g de frango grelhado",\n        "1 xícara de arroz integral",\n        "1 xícara de brócolis",\n        "Salada verde a vontade"\n      ]\n    },\n    {\n      "horario": "15:00",\n      "nome": "Lanche da Tarde",\n      "alimentos": [\n        "1 batata doce média",\n        "1 scoop de proteína do soro do leite"\n      ]\n    },\n    {\n      "horario": "19:00",\n      "nome": "Jantar",\n      "alimentos": [\n        "150g de carne vermelha magra",\n        "1 xícara de batata doce",\n        "1 xícara de espinafre"\n      ]\n    },\n    {\n      "horario": "21:00",\n      "nome": "Lanche da Noite",\n      "alimentos": [\n        "Caseína micelar"\n      ]\n    }\n  ],\n  "suplementos": [\n    "Creatina",\n    "BCAA",\n    "Glutamina",\n    "Proteína do soro do leite"\n  ]\n}\n```';

    try {
      let jsonString = responseText
        .replace(/```\w*\n/g, "")
        .replace(/\n```/g, "")
        .trim();

      let jsonObject = JSON.parse(jsonString);

      return reply.send({ data: jsonObject });
    } catch (error) {
      console.log(error);
    }
  });

  fastify.post(
    "/create",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateNutritionController().handle(request, reply);
    }
  );
}
