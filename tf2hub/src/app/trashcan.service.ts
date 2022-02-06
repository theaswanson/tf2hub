import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrashcanService {

  constructor() { }

  build(binds: string[], bindKey: string): string {
    let commands = this.getCommands(binds, bindKey);
    return commands.join('\n');
  }

  private getCommands(binds: string[], bindKey: string) {
    return this.messageCommands(binds)
      .concat(this.dicerollCommands(binds))
      .concat(this.setupCommands(binds, bindKey));
  }

  private setupCommands(binds: string[], bindKey: string) {
    let setup = [
      'alias \"tc_dice\" \"tc_result; tc_cycle\"',
      'alias \"tc_result\" \"tc_msg_1\"',
    ];
    if (binds.length > 1) {
      setup.push('alias \"tc_cycle\" \"tc_diceroll_2\"');
    }
    setup.push(`bind \"${bindKey}\" \"tc_dice\"`);
    return setup;
  }

  private dicerollCommands(binds: string[]) {
    let dicerolls = [];
    binds.forEach((bind, index) => {
      let dicerollNumber = index + 1;
      let nextDicerollNumber = dicerollNumber === binds.length ? 1 : dicerollNumber + 1;
      let diceroll = `alias \"tc_diceroll_${dicerollNumber}\" \"alias tc_result tc_msg_${dicerollNumber}; alias tc_cycle tc_diceroll_${nextDicerollNumber}\"`;
      dicerolls.push(diceroll);
    });
    return dicerolls;
  }

  private messageCommands(binds: string[]) {
    let messages = [];
    binds.forEach((bind, index) => {
      let message = `alias \"tc_msg_${index + 1}\" \"say ${bind}\"`;
      messages.push(message);
    });
    return messages;
  }
}
