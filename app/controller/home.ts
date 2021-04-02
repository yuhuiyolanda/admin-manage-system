import { Controller } from 'egg';
import NormalUserRule from '../validate/NormalUserRule'
export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    try {
      ctx.validate(NormalUserRule, ctx.request.body);
      ctx.body = "注册"
    } catch (e) {
      console.log(e)
    }
  }
}



