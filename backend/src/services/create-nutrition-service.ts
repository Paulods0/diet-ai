import { DataRequestDTO } from "../controllers/create-nutrition-controller"
import { GoogleGenerativeAI } from "@google/generative-ai"

export class CreateNutritionService {
  async execute({
    age,
    gender,
    goal,
    height,
    level,
    name,
    weight,
  }: DataRequestDTO) {
    try {
      const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY!)
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

      const response = await model.generateContent(
        `Crie uma dieta completa para uma pessoa de nome: ${name}, do sexo: ${gender}, com peso atual: ${weight}kg, altura: ${height},idade: ${age} anos, e com foco e objectivo: ${goal}, atualmente nível de atividade: ${level}. Ignore todo e qualquer outro parâmetro que não seja os passados. Retorne em json com as respectivas propriedades: propiedade nome, o nome da pessoa, propiedade sexo com sexo, propiedade idade, propriedade altura, propriedade peso, propriedade objectivo com o objectivo atual,propriedade refeições com um array contendo dentro cada objecto sendo uma refeição da dieta e dentro de cada refeição a propriedade horário com horário da refeição, propriedade nome com nome e a propriedade alimentos com array contendo os alimentos dessa refeição e pode incluir uma propriedade como suplementos contendo array com sugestão de suplemento que é indicado para o sexo dessa pessoa e o objectivo dela e não retorne nenhuma observação além além das passadas no prompt, retorne em json e nenhuma propriedade pode ter acento.`
      )
      console.log(JSON.stringify(response, null, 2))

      if (response.response && response.response.candidates) {
        const jsonText = response.response.candidates[0]?.content.parts[0]
          .text as string
        const REGEX_01 = /```\w*\n/g
        const REGEX_02 = /\n```/g

        let jsonString = jsonText
          .replace(REGEX_01, "")
          .replace(REGEX_02, "")
          .trim()

        let jsonObject = JSON.parse(jsonString)

        return { data: jsonObject }
      }

      return { ok: true }
    } catch (error) {
      console.error("Error JSON: ", error)
      throw new Error("Failed to create.")
    }
  }
}
