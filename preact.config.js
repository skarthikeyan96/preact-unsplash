import Dotenv from "dotenv-webpack";
export default (config) => {
  config.plugins.push(new Dotenv({path: "./.env"}));
  // process is not defined
  config.node.process = 'mock';
};
