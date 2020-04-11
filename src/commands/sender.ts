import { Command, flags } from "@oclif/command";

import Twilio from "../utils/twilio";
let t = new Twilio();

export default class Sender extends Command {
  static description = "Sends message to a mobile number";

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --number=VALUE)
    number: flags.string({
      char: "n",
      description: "Mobile number to send message to."
    }),
    // flag with a value (-n, --number=VALUE)
    message: flags.string({ char: "m", description: "Message to de sent." }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" })
  };
  static args = [{ name: "number" }, { name: "message" }];

  async run() {
    const { args, flags } = this.parse(Sender);

    const number = flags.number || args.number || "278334140n2";
    const message = flags.message || "FakeMessage";

    if (args.number && flags.force) {
      this.log(`you input --force and --file: ${number}`);
    }

    this.log(`Sending message to my mobile...${number}`);

    t.send(number, message, result => {
      this.log(result);
    });
  }
}
