import { FastifyReply, FastifyRequest } from "fastify"
import { CreateNutritionService } from "../services/create-nutrition-service"

export interface DataRequestDTO {
  age: string
  name: string
  goal: string
  level: string
  height: string
  weight: string
  gender: string
}

export class CreateNutritionController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, age, height, weight, level, goal, gender } = request.body as DataRequestDTO

    const createNutritionService = new CreateNutritionService()
    const nuntrition = await createNutritionService.execute({name,age,height,weight,level,goal,gender})
    
    reply.send(nuntrition)
  }
}
