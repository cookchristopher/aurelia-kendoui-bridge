import {customElement} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {TemplateGatherer} from '../common/template-gatherer';
import {OptionsBuilder} from '../common/options-builder';
import {Util} from '../common/util';

@customElement(`${constants.elementPrefix}col`)
@generateBindables('GridColumn')
@inject(TemplateGatherer, OptionsBuilder, Util, Element)
export class Col {

  constructor(templateGatherer, optionsBuilder, util, element) {
    this.templateGatherer = templateGatherer;
    this.optionsBuilder = optionsBuilder;
    this.util = util;
    this.element = element;
  }

  beforeOptionsBuild() {
    let templates = this.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.templateGatherer.useTemplates(this, 'GridColumn', templates);
  }

  // recursively get options of all nested columns that we can pass to Kendo
  afterOptionsBuild(options) {
    let columns = this.util.getChildrenVMs(this.element, `${constants.elementPrefix}col`);
    if (columns && columns.length > 0) {
      options.columns = [];

      columns.forEach(col => {
        options.columns.push(this.optionsBuilder.getOptions(col, 'GridColumn'));
      });
    }
  }
}
