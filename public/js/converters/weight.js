export const units = ["kg", "g", "lb", "oz"];

export function convert(val, from, to) {
  const toKg = { kg:1, g:0.001, lb:0.453592, oz:0.0283495 };
  return (val * toKg[from] / toKg[to]).toFixed(4);
}
