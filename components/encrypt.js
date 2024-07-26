export const encryptText = (text) => {
  const mappings = { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat" };
  return text.replace(/[aeiou]/g, (match) => mappings[match]);
};
