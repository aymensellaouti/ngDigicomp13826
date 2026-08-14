import { Injectable } from "@angular/core";
import { LoggerService } from "./logger";

@Injectable({
  providedIn: 'root'
})
export class SayHelloService {
  constructor(
    private loggerService: LoggerService
  ) {}
  hello() {
    this.loggerService.log('Hello :D');
  }
}
