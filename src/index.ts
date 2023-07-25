import fs from 'fs';
// We recive an array and number from arguments and return an array of arrays with the pairs of numbers that sum the target number.
// console.log("Recived arguments: ", process.argv);
if(process.argv[2] == '--file'  ){
    console.log("File: ", process.argv[3]);
    const filePath = process.argv[3];
    fs.readFile(filePath, 'utf8' , (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        const dataFile = data.split("\n");
        const numbers = dataFile[0].split(",").map((number: string) => parseInt(number));
        const target = parseInt(dataFile[1]);
        console.log("Numbers: ", numbers);
        console.log("Target: ", target);
    })
} else {
  const numbers = process.argv[2].split(",").map((number) => parseInt(number));
  const target = parseInt(process.argv[3]);
  console.log("Numbers: ", numbers);
  console.log("Target: ", target);
}
