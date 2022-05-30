import hmButton from "./HM-Button.vue";
const components = [hmButton];
const install = function (Vue) {
  // 注册所有的组件

  components.forEach((item) => {
    console.log("item", item.name);

    Vue.component(item.name, item);
  });
};

export default { install };
