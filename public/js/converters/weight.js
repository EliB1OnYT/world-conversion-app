export const units = ["kg", "g", "lb", "oz"];

export function convert(val, from, to) {
  const toKg = { kg: 1, g: 0.001, lb: 0.453592, oz: 0.0283495 };

  // Convert val to number
  const num = parseFloat(val);
  if (isNaN(num)) return "Invalid number input";

  // Check if units exist
  if (!toKg[from] || !toKg[to]) return "Invalid unit";

  return (num * toKg[from] / toKg[to]).toFixed(4);
}
