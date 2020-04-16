export default function dedent(text: string, spaces: number) {
  let lines = text.split("\n");
  return lines.map((line) => line.slice(spaces)).join("\n");
}
