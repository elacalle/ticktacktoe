import Keyboard from "./Keyboard";

export default (prompt = '') :Promise<string> => {
  return new Keyboard().read(prompt);
};