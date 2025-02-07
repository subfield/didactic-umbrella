import Datastore from "nedb";
import path from "path";
import fs from "fs";

export const createDB = (dbName: string) => {
  const srcPath = path.resolve(__dirname, "../../");
  
  const dbFolderPath = path.join(srcPath, "src/localDB/stores");
  if (!fs.existsSync(dbFolderPath)) {
    fs.mkdirSync(dbFolderPath);
  }

  return new Datastore({
    filename: `${dbFolderPath}/${dbName}.db`,
    autoload: true,
  })
}