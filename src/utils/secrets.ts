// Import the Secret Manager client and instantiate it:
const { SecretManagerServiceClient } = require("@google-cloud/secret-manager");
const client = new SecretManagerServiceClient();

const project_id = process.env["PROJECT_ID"];

async function testFunction(isOK: boolean) {
  if (isOK === true) {
    return "OK";
  } else {
    throw new Error("not OK");
  }
}

async function getSecret(key: string, version: string) {
  const parent = `projects/${project_id}/secrets/${key}`;
  const name = `${parent}/versions/${version}`;
  console.info(`Retrieving.... ${name}`);
  const [result] = await client.accessSecretVersion({
    name: name
  });

  // Extract the payload as a string.
  const payload = result.payload.data.toString("utf8");
  console.info(`Payload: ${payload}`);
  return payload;
}

module.exports = {
  testFunction,
  getSecret
};

/*
export default class Secrets {
  constructor() {}

  
  async set(key: string, value: string, cb: (result: any) => void) {
    const parent = `projects/${project_id}/secrets/${key}`;
    const payload = Buffer.from(value, "utf8");
    const [result] = await client.addSecretVersion({
      parent: parent,
      payload: {
        data: payload
      }
    });

    console.log(`Added secret version ${result.name}`);
    return result;
  }

  async get(key: string, version: string, cb: (result: any) => void) {
    const parent = `projects/${project_id}/secrets/${key}`;
    const name = `${parent}/versions/${version}`;
    const [result] = await client.accessSecretVersion({
      name: name
    });

    // Extract the payload as a string.
    const payload = result.payload.data.toString("utf8");
    console.info(`Payload: ${payload}`);
    return payload;
  }
  
}*/
