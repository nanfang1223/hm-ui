import hmButton from "./HM-Button.vue";
const components = [hmButton];
const install = function (Vue) {
  // 注册所有的组件
  components.forEach((item) => {
    Vue.component(item.name, item);
  });
};
// 判断是否直接引入文件,如果是,就不用调用Vue.use()
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default { install };
