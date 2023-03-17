import("vue_service/web-components");

declare module JSX {
  namespace JSX {
    interface IntrinsicElements {
      "vue-service": any;
    }
  }
}
const VueService = () => {
  return <vue-service></vue-service>;
};
export default VueService