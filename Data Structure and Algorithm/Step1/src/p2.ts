enum dataTypes {
  "Integer" = 4,
  "Long" = 8,
  "Float" = 4,
  "Double" = 8,
  "Character" = 1,
}

const checkDataTypes = (char: string) => {
  if (char == "Integer") {
    return dataTypes.Integer;
  } else if (char == "Long") {
    return dataTypes.Long;
  } else if (char == "Float") {
    return dataTypes.Float;
  } else if (char == "Double") {
    return dataTypes.Double;
  } else {
    return dataTypes.Character;
  }
};

console.log(checkDataTypes("Double"));
