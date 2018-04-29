```
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
interface AjaxRequest {
  url?: string;
  requestCount?: number;
  method?: string;
}
interface AjaxResponse {
  url?: string;
  requestCount?: number;
  response?: string;
}
@Injectable()
export class HttpInterceptor {
  public ajaxStart = new BehaviorSubject<AjaxRequest>({});
  public ajaxStop = new BehaviorSubject<AjaxResponse>({});
  private requestQueue: Array<any> = [];
  constructor() {
    this.bootstrapAjaxInterceptor();
  }
  public getRequestQueue() {
    return this.requestQueue;
  }
  private bootstrapAjaxInterceptor() {
    const _self = this;
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (xhrMethod, requestUrl) {
      this.addEventListener('readystatechange', xhr => {
        switch (this.readyState) {
          case 1: _self.onAjaxStart(xhrMethod, requestUrl); break;
          case 4: _self.onAjaxStop(this.responseURL, this.response); break;
          default: // Nothing to handle here
        }
      }, false);
      originalOpen.apply(this, arguments);
    };
  }
  onAjaxStart(xhrMethod, requestUrl) {
    this.requestQueue.push(requestUrl.replace(/\?.*/, ''));
    this.ajaxStart.next({
      url: requestUrl,
      requestCount: this.requestQueue.length,
      method: xhrMethod
    });
  }
  onAjaxStop(responseURL, response) {
    const responseUrl = responseURL.split(/\?/)[0];
    this.requestQueue.forEach((urlEndpoint, i) => {
      if (new RegExp(`${urlEndpoint}$`).test(responseUrl)) {
        return this.requestQueue.splice(i, 1);
      }
    });
    this.ajaxStop.next({
      url: responseUrl,
      requestCount: this.requestQueue.length,
      response: response
    });
  }
}
```
