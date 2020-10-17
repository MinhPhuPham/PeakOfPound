import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'jateams-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'admin-dashbroad';
}
