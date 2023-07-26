// import fs from "fs";
import fsPromises from "fs/promises";
import { InputPairs } from "./inputPairs.interface";

export const getInputFromArgs = async (argv: string[]): Promise<InputPairs> => {
  let inputPairs: InputPairs; 
  if (argv[2] == "--file") {
    inputPairs = await getFromFile(argv);
  } else {
    inputPairs = readFromConsole(argv);    
  }
  return inputPairs;
};

const readFromConsole = (argv: string[]): InputPairs => {
  const inputPairs: InputPairs = { numbers: [], target: 0 };
  const numbers = argv[2].split(",");
  inputPairs.numbers = numbers.map((number) => parseInt(number));
  inputPairs.target = parseInt(argv[3]);
  return inputPairs;
};

const getFromFile = async (argv: string[]): Promise<InputPairs> => {
  // console.log("File: ", process.argv[3]);
  try {
    const inputPairs: InputPairs = { numbers: [], target: 0 };
    const filePath = argv[3];
    const data = await fsPromises.readFile(filePath, "utf8")
    const dataFile = data.split(" ");
    inputPairs.numbers = dataFile[0]
      .split(",")
      .map((number: string) => parseInt(number));
    inputPairs.target = parseInt(dataFile[1]);
    return inputPairs;
  }catch(error){
    console.log("Error reading file: ", error);
    throw error;
  }
};
