/*import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {StatusCmp} from './status.component';
import {StatusObservable} from '../shared/status.observable';

export function main() {
  describe('Status Component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then(rootTC => {
            rootTC.detectChanges();

            let status_instance = rootTC.debugElement.componentViewChildren[0].componentInstance;
            let status_DOM_Element = rootTC.debugElement.componentViewChildren[0].nativeElement;

            expect(DOM.querySelectorAll(status_DOM_Element, 'h3')[0].textContent).toEqual('');

            aboutInstance.newName = 'Minko';
            aboutInstance.addName();
            rootTC.detectChanges();

            expect(nameListLen()).toEqual(5);
            expect(DOM.querySelectorAll(aboutDOMEl, 'li').length).toEqual(nameListLen());

            expect(DOM.querySelectorAll(aboutDOMEl, 'li')[4].textContent).toEqual('Minko');
          });
      }));
  });
}

@Component({
  providers: [StatusObservable],
  selector: 'test-cmp',
  template: '<div><status></status></div>',
  directives: [StatusCmp]
})
class TestComponent {}
*/
