export const units = ["sqm", "sqft", "acre", "hectare"];

export function convert(val, from, to) {
  const toSqm = { sqm: 1, sqft: 0.092903, acre: 4046.86, hectare: 10000 };

  // Convert val to number
  const num = parseFloat(val);
  if (isNaN(num)) return "Invalid number input";

  // Check if units exist
  if (!toSqm[from] || !toSqm[to]) return "Invalid unit";

  return (num * toSqm[from] / toSqm[to]).toFixed(4);
}
