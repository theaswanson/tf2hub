export class TrashcanService {
  build(binds: string[], bindKey: string): string {
    const commands = this.getCommands(binds, bindKey);
    return commands.join("\n");
  }

  private getCommands(binds: string[], bindKey: string) {
    return this.messageCommands(binds)
      .concat(this.dicerollCommands(binds))
      .concat(this.setupCommands(binds, bindKey));
  }

  private setupCommands(binds: string[], bindKey: string) {
    const setup = [
      'alias "tc_dice" "tc_result; tc_cycle"',
      'alias "tc_result" "tc_msg_1"',
    ];
    if (binds.length > 1) {
      setup.push('alias "tc_cycle" "tc_diceroll_2"');
    }
    setup.push(`bind "${bindKey}" "tc_dice"`);
    return setup;
  }

  private dicerollCommands(binds: string[]) {
    const dicerolls: string[] = [];
    binds.forEach((_bind, index) => {
      const dicerollNumber = index + 1;
      const nextDicerollNumber =
        dicerollNumber === binds.length ? 1 : dicerollNumber + 1;
      const diceroll = `alias "tc_diceroll_${dicerollNumber}" "alias tc_result tc_msg_${dicerollNumber}; alias tc_cycle tc_diceroll_${nextDicerollNumber}"`;
      dicerolls.push(diceroll);
    });
    return dicerolls;
  }

  private messageCommands(binds: string[]) {
    const messages: string[] = [];
    binds.forEach((bind, index) => {
      const message = `alias "tc_msg_${index + 1}" "say ${bind}"`;
      messages.push(message);
    });
    return messages;
  }
}
