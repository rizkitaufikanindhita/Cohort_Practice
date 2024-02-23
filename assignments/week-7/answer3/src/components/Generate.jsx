import { Fragment } from "react";
import useAppStore from "../store";

const Generate = () => {
  const length = useAppStore((state) => state.length);
  const makeid = (length) => {
    let result = "";
    const characters = [
      "word ",
      "cmon ",
      "her ",
      "love ",
      "hey ",
      "you ",
      "child ",
      "home ",
      "house ",
      "love ",
      "life ",
      "man ",
      "woman ",
      "boy ",
      "girl ",
      "wife ",
      "husband ",
      "son ",
      "da ",
      "street ",
      "street ",
      "road ",
      "road ",
      "avenue ",
      "avenue ",
      "boulevard ",
      "boulevard ",
      "road ",
      "school ",
      "college ",
      "university ",
      "high school ",
      "college ",
      "university ",
      "high school ",
      "high school ",
      "high school ",
      "robert ",
      "laptop ",
      "computer ",
      "phone ",
      "tablet ",
      "ipad ",
      "iphone ",
      "android ",
      "android ",
      "android ",
      "android ",
      "android ",
      "android ",
      "office ",
      "game ",
      "adventure ",
      "world ",
      "city ",
      "country ",
      "continent ",
    ];
    for (let i = 0; i < length; i++) {
      let char = characters[Math.floor(characters.length * Math.random())];
      result += char;
    }
    return result;
  };

  const result =
    length <= 150 ? makeid(length) : "Tidak bisa lebih dari 150 kata";

  return (
    <Fragment>
      <div>{result}</div>
    </Fragment>
  );
};

export default Generate;
