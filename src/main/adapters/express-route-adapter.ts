import { Controller, HttpRequest } from '../../presentation/protocols'
import { Request, RequestHandler, Response } from 'express'

export const adaptRoute = (controller: Controller): RequestHandler => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      body: request.body
    }
    const httpResponse = await controller.handle(httpRequest)
    response.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
