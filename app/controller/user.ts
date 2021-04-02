import { Controller } from 'egg';
import NormalUserRule from '../validate/NormalUserRule'
export default class UserController extends Controller {
  public async register() {
    const { ctx } = this;
    try {
      ctx.validate(NormalUserRule, ctx.request.body);
      ctx.body = "注册2"
    } catch (e) {
      console.log(e)
    }
  }
}