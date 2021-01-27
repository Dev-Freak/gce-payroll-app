export const formatTaxTableHeader = (text) => {
  const textPieces = text.split("_");

  var finalText = "";
  for (const piece of textPieces) {
    finalText += `${piece.substr(0, 1).toUpperCase()}${piece.substr(1)} `;
  }

  return finalText.trim();
};
