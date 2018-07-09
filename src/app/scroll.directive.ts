import { Directive, HostListener, Output, EventEmitter } from "@angular/core"

@Directive({
    selector: '[scrollTracker]'
})
export class ScrollTrackerDirective {
    
    @Output() endReachedEmitter = new EventEmitter<boolean>();

    constructor() {}
    
    @HostListener('window:scroll', ['$event']) onScroll(event) {
        let tracker = event.target.documentElement;
        let limit = tracker.scrollHeight - tracker.clientHeight;
        if (tracker.scrollTop === limit) {
          this.endReachedEmitter.emit(tracker);
        }
      }
}