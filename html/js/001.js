// 状态模式
// 吹风机
class HairDryer {
  // 吹风机的状态
  state;
  // 关机状态
  offState;
  // 开机热风状态
  hotAirState;
  // 开机冷热风交替状态
  alternateHotAndColdAirState;
  // 开机冷风状态
  coldAirState;
  //开机弱风状态
  slowSate;
  //开机强风
  fastSate;

  // 构造函数
  constructor(state) {
    this.offState = new OffState(this);
    this.hotAirState = new HotAirState(this);
    this.alternateHotAndColdAirState = new AlternateHotAndColdAirState(this);
    this.coldAirState = new ColdAirState(this);
    this.slowSate = new SlowSate(this);
    this.fastSate = new FastSate(this);
    if (state) {
      this.state = state;
    } else {
      // 默认是关机状态
      this.state = this.offState;
    }
  }

  // 设置吹风机的状态
  setState(state) {
    this.state = state;
  }

  // 开关机按钮
  turnOnOrOff() {
    this.state.turnOnOrOff();
  }
  // 切换模式按钮
  switchMode() {
    this.state.switchMode();
  }
  switchSF() {
    this.state.switchSF()
  }
  // 获取吹风机的关机状态
  getOffState() {
    return this.offState;
  }
  // 获取吹风机的开机热风状态
  getHotAirState() {
    return this.hotAirState;
  }
  // 获取吹风机的开机冷热风交替状态
  getAlternateHotAndColdAirState() {
    return this.alternateHotAndColdAirState;
  }
  // 获取吹风机的开机冷风状态
  getColdAirState() {
    return this.coldAirState;
  }
}

// 抽象的状态
class State {
  // 开关机按钮
  turnOnOrOff() {
    console.log("---按下吹风机 [开关机] 按钮---");
  }
  // 切换模式按钮
  switchMode() {
    console.log("---按下吹风机 [模式切换] 按钮---");
  }
}

// 吹风机的关机状态
class OffState extends State {
  // 吹风机对象的引用
  hairDryer;
  constructor(hairDryer) {
    super();
    this.hairDryer = hairDryer;
  }
  // 开关机按钮
  turnOnOrOff() {
    super.turnOnOrOff();
    this.hairDryer.setState(this.hairDryer.getHotAirState());
    console.log("状态切换: 关闭状态 => 开机热风状态");
  }
  // 切换模式按钮
  switchMode() {
    console.log("===吹风机在关闭的状态下无法切换模式===");
  }
}

// 吹风机的开机热风状态
class HotAirState extends State {
  // 吹风机对象的引用
  hairDryer;
  constructor(hairDryer) {
    super();
    this.hairDryer = hairDryer;
  }
  // 开关机按钮
  turnOnOrOff() {
    super.turnOnOrOff();
    this.hairDryer.setState(this.hairDryer.getOffState());
    console.log("状态切换: 开机热风状态 => 关闭状态");
  }
  // 切换模式按钮
  switchMode() {
    super.switchMode();
    this.hairDryer.setState(this.hairDryer.getAlternateHotAndColdAirState());
    console.log("状态切换: 开机热风状态 => 开机冷热风交替状态");
  }
}

// 吹风机的开机冷热风交替状态
class AlternateHotAndColdAirState extends State {
  // 吹风机对象的引用
  hairDryer;
  constructor(hairDryer) {
    super();
    this.hairDryer = hairDryer;
  }
  // 开关机按钮
  turnOnOrOff() {
    super.turnOnOrOff();
    this.hairDryer.setState(this.hairDryer.getOffState());
    console.log("状态切换: 开机冷热风交替状态 => 关闭状态");
  }
  // 切换模式按钮
  switchMode() {
    super.switchMode();
    this.hairDryer.setState(this.hairDryer.getColdAirState());
    console.log("状态切换: 开机冷热风交替状态 => 开机冷风状态");
  }
}

// 吹风机的开机冷风状态
class ColdAirState extends State {
  // 吹风机对象的引用
  hairDryer;
  constructor(hairDryer) {
    super();
    this.hairDryer = hairDryer;
  }
  // 开关机按钮
  turnOnOrOff() {
    super.turnOnOrOff();
    this.hairDryer.setState(this.hairDryer.getOffState());
    console.log("状态切换: 开机冷风状态 => 关闭状态");
  }
  // 切换模式按钮
  switchMode() {
    super.switchMode();
    this.hairDryer.setState(this.hairDryer.getHotAirState());
    console.log("状态切换: 开机冷风状态 => 开机热风状态");
  }
}

class SlowSate extends Stae {
  // 吹风机对象的引用
  hairDryer;
  constructor(hairDryer) {
    super();
    this.hairDryer = hairDryer;
  }
  // 开关机按钮
  turnOnOrOff() {
    super.turnOnOrOff();
    this.hairDryer.setState(this.hairDryer.getOffState());
    console.log("状态切换: 开机冷风状态 => 关闭状态");
  }
  //

}
class FastSate extends State { }
const hairDryer = new HairDryer();
// 打开吹风机
hairDryer.turnOnOrOff();
// 切换模式
hairDryer.switchMode();
// 切换模式
hairDryer.switchMode();
// 切换模式
hairDryer.switchMode();
// 关闭吹风机
hairDryer.turnOnOrOff();
// 吹风机在关闭的状态下无法切换模式
hairDryer.switchMode();

export function debounce(fn, wait) {
  wait = wait || 100
  var timer = null
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)// 保证this的指向 和 参数的传递
    }, wait)
  }
}
console.log(debounce)
export default {
  install(Vue) {
    // 防止重复点击
    Vue.directive('debounce', {
      inserted(el, binding) {
        const fn = el.click
        el.click = debounce(fn.bind(el), binding.value || 3000)
      }
    })
  }
}


const json = {
  alternate: { 
   "ab_key": "Throw_manage_question", // Throw_domin_abKey 固定拼接
   "ab_group": "C", //从ab分组接口中获取
   "ab_uniq_user": "6168053c0413c1634207036", //从ab分组接口中获取
   "pagename": "管理课问卷" , //业务线 长轻问卷
   "tabname":100 //问题编号
  }
}