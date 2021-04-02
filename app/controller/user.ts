import { Controller } from 'egg';
import NormalUserRule from '../validate/NormalUserRule'
import EmailUserRule from '../validate/EmailUserRule'
import PhoneUserRule from '../validate/PhoneUserRule'
const enum RegisterTypeEnum {
  Phone = "phone",
  Email = "email",
  Normal = "normal"
}
export default class UserController extends Controller {
  public async create() {
    const { ctx } = this;
    try {
      this.validateUserInfo();
      ctx.body = "注册"
    } catch (e) {
      console.log(e)
      if (e.errors) {
        ctx.body = e.errors;
      } else {
        ctx.body = e.message;
      }
    }
  }
  private validateUserInfo() {
    const { ctx } = this;
    const data = ctx.request.body
    switch (data.registerType) {
      case RegisterTypeEnum.Email:
        ctx.validate(EmailUserRule, data);
        break;
      case RegisterTypeEnum.Phone:
        ctx.validate(PhoneUserRule, data);
        break;
      case RegisterTypeEnum.Normal:
        ctx.validate(NormalUserRule, data);
        break;
      default:
        throw new Error("不存在此类型")
    }
  }
}