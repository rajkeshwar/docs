
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CODE_SNIPPETS } from '../code-snippets';
import { Broadcaster } from '../common/broadcaster';
import { Router, ActivatedRoute } from '@angular/router';

declare var require: any;
declare var PR: any;

@Component({
  selector: 'docs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public treeJson: any;
  public snippets: any;
  public selectedFilePath: string;
  public breadcrumbs: string[];

  @ViewChild('markdown') markdown: ElementRef;

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private broadcaster: Broadcaster) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(query => {
      // Show the selected page if not show the first page.
      this.selectedFilePath = query.p ? query.p : Object.keys(CODE_SNIPPETS)[0];
      this.snippets = CODE_SNIPPETS[this.selectedFilePath];
      this.breadcrumbs = this.createBreadcrumbs(this.selectedFilePath);
      setTimeout(_ => this.runPrettyPrint(), 10);
    });

    this.http.get('assets/data/tree-view.json')
      .subscribe(treeJson => {
        this.treeJson = [treeJson];
        setTimeout(_ => document.querySelector('[ng2v-folder]').setAttribute('aria-expanded', 'true'), 100);
      });

    this.broadcaster.on('select')
      .subscribe((item: any) => {
        if (item.type === 'file') {
          this.snippets = CODE_SNIPPETS[item.path];
          setTimeout(_ => this.runPrettyPrint(), 10);
          this.router.navigate(['/main'], { queryParams: { p: item.path } });
        }
      })
  }

  public runPrettyPrint() {
    Array.from(document.querySelectorAll('pre')).forEach(pre => {
      pre.classList.add('prettyprint');
      PR.prettyPrint();
    })
  }

  public createBreadcrumbs(selectedFilePath) {
    const tokens = selectedFilePath.split(/\//);
    return tokens.splice(1, tokens.length - 2);
  }
}
