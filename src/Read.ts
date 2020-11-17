import Keyboard from "./Keyboard"

export default () :Promise<string> => {
  return new Keyboard().read();
}