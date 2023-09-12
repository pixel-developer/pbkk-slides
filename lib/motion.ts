export function moveTo(direction: "left" | "right" | "top" | "bottom") {
  switch (direction) {
    case "left":
      return {
        x: "-1500px",
      };
    case "right":
      return {
        x: "1500px",
      };
    case "top":
      return {
        y: "-1500px",
      };
    case "bottom":
      return {
        y: "1500px",
      };
    default:
      break;
  }
}
