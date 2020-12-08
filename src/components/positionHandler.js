const positionHandler = (position) => {
  switch (position) {
    case "C":
      return "Center";
      break;
    case "F":
      return "Foward";
    case "G":
      return "Guard";
    default:
      return position;
  }
};

export default positionHandler;
