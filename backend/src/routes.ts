import {
  FastifyReply,
  FastifyRequest,
  FastifyInstance,
  FastifyPluginOptions,
} from "fastify"
import { CreateNutritionController } from "./controllers/create-nutrition-controller"

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get(
    "/teste",
    async (request: FastifyRequest, reply: FastifyReply) => {
      let textResponse =
        '```json\n{\n  "nome": "Paulo Luguenda",\n  "sexo": "Masculino",\n  "idade": 24,\n  "altura": 1.80,\n  "peso": 56,\n  "objetivo": "Hipertrofia",\n  "refeicoes": [\n    {\n      "horario": "08:00",\n      "nome": "Café da Manhã",\n      "alimentos": [\n        "2 fatias de pão integral",\n        "2 ovos mexidos com azeite",\n        "1 banana",\n        "1 copo de leite desnatado"\n      ]\n    },\n    {\n      "horario": "10:30",\n      "nome": "Lanche da Manhã",\n        "alimentos": [\n          "1 iogurte grego com granola"\n        ]\n    },\n    {\n      "horario": "13:00",\n      "nome": "Almoço",\n      "alimentos": [\n        "150g de frango grelhado",\n        "1 xícara de arroz integral",\n        "1 xícara de brócolis cozido",\n        "Salada verde com azeite e vinagre"\n      ]\n    },\n    {\n      "horario": "16:00",\n      "nome": "Lanche da Tarde",\n      "alimentos": [\n        "1 batata doce média",\n        "1 scoop de whey protein"\n      ]\n    },\n    {\n      "horario": "20:00",\n      "nome": "Jantar",\n      "alimentos": [\n        "150g de peixe grelhado",\n        "1 xícara de batata doce cozida",\n        "1 xícara de espinafre cozido"\n      ]\n    }\n  ],\n  "suplementos": [\n    "Whey Protein",\n    "Creatina",\n    "BCAA"\n  ]\n}\n```'

      try {
        const REGEX_01 = /```\w*\n/g
        const REGEX_02 = /\n```/g

        let jsonString = textResponse
          .replace(REGEX_01, "")
          .replace(REGEX_02, "")
          .trim()

        let jsonObject = JSON.parse(jsonString)

        reply.send({ data: jsonObject })
      } catch (error) {
        console.error(error)
      }
    }
  )

  fastify.post("/create", (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateNutritionController().handle(request, reply)
  })
}
