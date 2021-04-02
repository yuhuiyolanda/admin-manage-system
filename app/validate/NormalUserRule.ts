export default {
    username: {
        type: 'string',
        format: /^[0-9a-zA-Z]{6,}$/, 
        required: true,
        message:"请输入6位以上的数字或字母"
    }
}