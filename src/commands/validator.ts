import { Command, flags } from "@oclif/command";

import Twilio from "../utils/twilio";
let t = new Twilio();

export default class Validator extends Command {
  static description = "Check the validity of a mobile number";

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    number: flags.string({ char: "n", description: "Number to validate" }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" })
  };

  static args = [{ name: "number" }];

  async run() {
    const { args, flags } = this.parse(Validator);

    const number = flags.number || args.number;

    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.number}`);
    }

    this.log(`Validating mobile number ${number}`);

    t.validate(number, result => {
      this.log("Result is", result);
    });
  }
}
