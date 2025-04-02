const { readFileSync } = require("fs");
const { join, resolve } = require("path");

const getSecrets = () => JSON.parse(readFileSync(join(resolve(), 'secrets.json')).toString())
export const secrets = getSecrets();
