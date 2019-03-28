import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sentry Test Appp';

    onClickError(event?: KeyboardEvent) {
    throw Error('I am going to be seen in Sentry');
  }

}
