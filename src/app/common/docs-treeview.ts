
import { Component, Input, Directive, HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Broadcaster } from './broadcaster';

@Component({
  selector: "[ng2v-tree]",
  template: `
    <li ng2v-folder [item]="item" class="ng2v-tree-{{item.type}}" *ngFor="let item of items">
      <i class="ng2v-tree-icon" [attr.data-type]="fileType(item)"></i>
      <span class="ng2v-tree-item-name">{{item.name}}</span>
      <ul class="ng2v-tree-content" ng2v-tree [children]="children" [data]="item[children]"></ul>
    </li>
  `
})
export class Ng2vTreeComponent {

  @Input('data') items: Array<Object>;
  @Input('children') children: string;
  
  public fileType(item) {
    return item.type === 'file' ? item.path.split(/\./).pop() : '';
  }
}

@Directive({
  selector: '[ng2v-folder]',
  host: { '[attr.aria-expanded]': 'isExpanded' },
})
export class Ng2vFileHeader {

  public isExpanded: boolean = false;
  constructor(private broadcaster: Broadcaster) { }

  @Input() item: any;

  @HostListener('click', ['$event'])
  folderClick(evt) {
    this.isExpanded = !this.isExpanded;
    this.broadcaster.broadcast('select', this.item);
    evt.stopPropagation();
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [Ng2vTreeComponent, Ng2vFileHeader],
  exports: [Ng2vTreeComponent, Ng2vFileHeader],
  providers: [Broadcaster]
})
export class Ng2vTreeModule { }