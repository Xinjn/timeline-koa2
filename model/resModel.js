// 基础模型数据(工厂模型)
class BaseModel {
  constructor(data, message) {
    // 2个参数：data对象 + message字符串
    // 1个参数：message = data = 字符串
    if (typeof data === "string") {
      this.message = data;
      data = null;
      message = null;
    }

    if (data) {
      this.data = data;
    }

    if (message) {
      this.message = message;
    }
  }
}

// 成功模型数据
class SuccessModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    this.errno = 0;
  }
}

// 失败模型数据
class ErrorModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    this.errno = -1;
  }
}

module.exports = {
  SuccessModel,
  ErrorModel,
};
