/**
 * @file defines InsertstepCommand, which is executed when the step
 * toolbar button is pressed.
 */
// cSpell:ignore stepediting

import { Command } from 'ckeditor5/src/core';

export default class InsertStepCommand extends Command {
  execute() {
    const { model } = this.editor;

    model.change(writer => {
      writer.insertText('[step]Step Text[/step]', model.document.selection.getFirstPosition());
    });
  }
}
