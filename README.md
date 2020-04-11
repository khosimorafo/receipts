receipts
========

A servlet to send receipts to printer or sms.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/receipts.svg)](https://npmjs.org/package/receipts)
[![Downloads/week](https://img.shields.io/npm/dw/receipts.svg)](https://npmjs.org/package/receipts)
[![License](https://img.shields.io/npm/l/receipts.svg)](https://github.com/khosimorafo/receipts/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g receipts
$ receipts COMMAND
running command...
$ receipts (-v|--version|version)
receipts/0.0.0 linux-x64 node-v10.16.0
$ receipts --help [COMMAND]
USAGE
  $ receipts COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`receipts help [COMMAND]`](#receipts-help-command)
* [`receipts sender [FILE]`](#receipts-sender-file)
* [`receipts validator [FILE]`](#receipts-validator-file)

## `receipts help [COMMAND]`

display help for receipts

```
USAGE
  $ receipts help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `receipts sender [FILE]`

describe the command here

```
USAGE
  $ receipts sender [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/sender.ts](https://github.com/khosimorafo/receipts/blob/v0.0.0/src/commands/sender.ts)_

## `receipts validator [FILE]`

describe the command here

```
USAGE
  $ receipts validator [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/validator.ts](https://github.com/khosimorafo/receipts/blob/v0.0.0/src/commands/validator.ts)_
<!-- commandsstop -->
