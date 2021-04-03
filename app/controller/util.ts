import { Controller } from 'egg';

export default class UtilController extends Controller {
    public async createImageCode() {
        const { ctx } = this;
        ctx.body = ctx.helper.createImageCode();
    }
}