// 导入library文件夹下的所有组件
// 批量导入需要使用一个函数 require.context(dir,deep,matching)
// 参数：1. 目录  2. 是否加载子目录  3. 加载的正则匹配
const importFn = require.context('./', false, /\.vue$/)
export default {
    install (app) {
        // 在app上进行扩展，app提供 component directive 函数
        // 如果要挂载原型 app.config.globalProperties 方式
        // app.component(XtxSkeleton.name, XtxSkeleton)


        // 批量注册全局组件
        importFn.keys().forEach(key => {
            // 导入组件
            const component = importFn(key).default
            // 注册组件
            app.component(component.name, component)
        })
    }
}
