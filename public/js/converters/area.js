export const units = ["sqm", "sqft", "acre", "hectare"];

export function convert(val, from, to) {
  const toSqm = { sqm:1, sqft:0.092903, acre:4046.86, hectare:10000 };
  return (val * toSqm[from] / toSqm[to]).toFixed(4);
}
