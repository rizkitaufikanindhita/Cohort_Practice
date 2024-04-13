"use strict";
var dataTypes;
(function (dataTypes) {
    dataTypes[dataTypes["Integer"] = 4] = "Integer";
    dataTypes[dataTypes["Long"] = 8] = "Long";
    dataTypes[dataTypes["Float"] = 4] = "Float";
    dataTypes[dataTypes["Double"] = 8] = "Double";
    dataTypes[dataTypes["Character"] = 1] = "Character";
})(dataTypes || (dataTypes = {}));
const checkDataTypes = (char) => {
    if (char == "Integer") {
        return dataTypes.Integer;
    }
    else if (char == "Long") {
        return dataTypes.Long;
    }
    else if (char == "Float") {
        return dataTypes.Float;
    }
    else if (char == "Double") {
        return dataTypes.Double;
    }
    else {
        return dataTypes.Character;
    }
};
console.log(checkDataTypes("Double"));
