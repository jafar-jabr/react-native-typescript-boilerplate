/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

/**
 *
 * @param relativeName
 * @param procedure
 * @returns {boolean}
 */
const fileProcessor = (relativeName, procedure) => {
  try {
    const folderPath = path.join(process.cwd(), ...relativeName.split('/'));
    fs.readdirSync(folderPath, { withFileTypes: true }).map((subDir) => {
      if (subDir.isFile()) {
        procedure(relativeName, subDir);
      } else {
        const subPath = `${relativeName}/${subDir.name}`;
        fileProcessor(subPath, procedure);
      }
      return true;
    });
    return true;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn(err);
    return false;
  }
};

const filesProcedure = (dataDire, dataFile) => {
  const filePath = `${process.cwd()}/${dataDire}/${dataFile.name}`;
  if (dataFile.name.startsWith('node_modules_')) {
    fs.unlinkSync(filePath);
  }
};

const solveDuplication = () => {
  try {
    const pF = `${process.cwd()}/android/app/src/main/res/drawable-mdpi/shared_assets_images_logo.png`;
    fs.unlinkSync(pF);
    // eslint-disable-next-line no-empty
  } catch {}
  const dirPath = process.argv[2];
  fileProcessor(dirPath, filesProcedure);
};
solveDuplication();
