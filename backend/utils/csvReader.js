import csv from "csvtojson";

const readCSV = async (csvFile) => {
  const records = await csv().fromFile(csvFile);
  return records;
};

export default readCSV;
