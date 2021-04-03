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
      ctx.success({})
    } catch (e) {
      if (e.errors) {
        ctx.error(400, e.errors);
      } else {
        ctx.error(400, e.message);
      }
    }
  }
  private validateUserInfo() {
    const { ctx } = this;
    const data = ctx.request.body
    switch (data.registerType) {
      case RegisterTypeEnum.Email:
        ctx.validate(EmailUserRule, data);
        ctx.helper.verifyImageCode(data.captcha);
        break;
      case RegisterTypeEnum.Phone:
        ctx.validate(PhoneUserRule, data);
        ctx.helper.verifyImageCode(data.captcha);
        break;
      case RegisterTypeEnum.Normal:
        ctx.validate(NormalUserRule, data);
        ctx.helper.verifyImageCode(data.captcha);
        break;
      default:
        throw new Error("不存在此类型")
    }
  }
}