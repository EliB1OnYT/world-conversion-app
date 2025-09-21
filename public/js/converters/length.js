export const units = ["m", "km", "ft", "mi"];

export function convert(val, from, to) {
  const toMeters = { m:1, km:1000, ft:0.3048, mi:1609.34 };
  return (val * toMeters[from] / toMeters[to]).toFixed(4);
}
