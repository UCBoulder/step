import { Plugin } from 'ckeditor5/src/core';
import { Widget } from 'ckeditor5/src/widget';
import InsertStepCommand from './insertstepcommand';

// cSpell:ignore step insertstepcommand

/**
 * CKEditor 5 plugins do not work directly with the DOM. They are defined as
 * plugin-specific data models that are then converted to markup that
 * is inserted in the DOM.
 *
 * CKEditor 5 inserts:
 * <step>
 *    Step Text
 * </step>
 *
 * This file has the logic for defining the step model, and for how it is
 * converted to standard DOM markup.
 */
export default class Step extends Plugin {
  static get requires() {
    return [Widget];
  }

  init() {
    this.editor.commands.add(
      'insertStep',
      new InsertStepCommand(this.editor),
    );
  }
}
