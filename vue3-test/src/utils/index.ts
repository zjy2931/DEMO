function debounce( func:any, ms = 1000) {
    let timer:number;
    return function (this:any,...args:Array<any>) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        func.apply(this, args)
      }, ms)
    }
  }
  
  // 测试
  const task = function(this:any){ console.log('run task',this) }
  const debounceTask = debounce(task, 1000)
  const user = {
    debounceTask : debounceTask
  }


  window.addEventListener('scroll',()=>{
    user.debounceTask()
  })
  