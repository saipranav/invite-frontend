/*import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it,
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {InputEmailCmp} from './input-email.component';

export function main() {
  describe('Input Email Component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then((rootTC) => {
            let input_email_DOM_Element = rootTC.debugElement.componentViewChildren[0].nativeElement;

            expect(DOM.querySelectorAll(input_email_DOM_Element, 'input > .right')[0].textContent).toEqual('@listertechnologies.com');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  directives: [InputEmailCmp],
  template: '<div><input-email></input-email></div>'
})
class TestComponent {}
*/
