import { Component } from '@angular/core';
import {
  LocalNotifications,
  ScheduleOptions,
} from '@capacitor/local-notifications';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  async notification() {
    let options: ScheduleOptions = {
      notifications: [
        {
          id: 1,
          title: 'Jhon`s Notification',
          body: 'This is a notification',
          largeBody: 'This is a large body',
          summaryText: 'Summary text',
        },
      ],
    };

    try {
      await LocalNotifications.schedule(options);
    } catch (e) {
      console.log(e);
    }
  }
}
