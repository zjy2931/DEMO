class Payment {
    method
    alipay
    wxpay
    jdpay
      // 构造函数
    constructor(payMethod) {
        this.isInWx = true
        this.alipay = new Ali(this)
        this.wxpay = new Wx(this)
        this.jdpay = new Jd(this)
        this.method = this[payMethod]||this.alipay;
    }
    pay(){
        //支付
       this.method.pay()
    }
}

// 支付方法的抽象
class Method {
    // 支付
    pay(){
      console.log('开始支付')
    }
}

// 支付宝支付
class Ali extends Method {
    // 吹风机对象的引用
    payment;
    constructor(payment) {
      super();
      this.payment = payment;
    }
    // 开关机按钮
    pay(){
        //支付宝支付
        console.log(this.payment.isInWx?'微信内':'微信外')
        console.log('支付宝支付')
    }
}

// 支付宝支付
class Wx extends Method {
    // 吹风机对象的引用
    payment;
    constructor(payment) {
      super();
      this.payment = payment;
    }
    // 开关机按钮
    pay(){
        //支付宝支付
        console.log(this.payment.isInWx?'微信内':'微信外')
        console.log('微信支付')
    }
}

// 支付宝支付
class Jd extends Method {
    // 吹风机对象的引用
    payment;
    constructor(payment) {
      super();
      this.payment = payment;
    }
    // 开关机按钮
    pay(){
        //支付宝支付
        console.log(this.payment.isInWx?'微信内':'微信外')
        console.log('京东支付')
    }
}


const payment = new Payment('wxpay')
payment.pay()
console.log(payment)