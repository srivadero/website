import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
  public async homepage({ view  }: HttpContextContract){
    return view.render('welcome')
  }

  public async processForm({ request, response }: HttpContextContract){
    const data = request.all()
    console.log(data)
    return response.redirect().toRoute('homepage')
  }
}
