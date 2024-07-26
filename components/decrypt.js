export const decryptText = (text) => {
  const mappings = { enter: "e", imes: "i", ai: "a", ober: "o", ufat: "u" };
  return text.replace(/(enter|imes|ai|ober|ufat)/g, (match) => mappings[match]);
};
