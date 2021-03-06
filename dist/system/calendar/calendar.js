'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.calendar.min'], function (_export, _context) {
  "use strict";

  var inject, customElement, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, Calendar;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_kendoCalendarMin) {}],
    execute: function () {
      _export('Calendar', Calendar = (_dec = customElement(constants.elementPrefix + 'calendar'), _dec2 = generateBindables('kendoCalendar'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function Calendar(element, widgetBase, viewResources) {
          _classCallCheck(this, Calendar);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoCalendar').linkViewModel(this).useValueBinding();
        }

        Calendar.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Calendar.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Calendar.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Calendar.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        Calendar.prototype.unbind = function unbind() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Calendar;
      }()) || _class) || _class) || _class));

      _export('Calendar', Calendar);
    }
  };
});