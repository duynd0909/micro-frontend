import("react_service/web-components");

declare module JSX {
  namespace JSX {
    interface IntrinsicElements {
      "react-service": any;
    }
  }
}
const ReactService = () => {
  return <react-service></react-service>;
};
export default ReactService