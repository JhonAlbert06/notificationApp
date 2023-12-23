import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  LocalNotifications,
  ScheduleOptions,
} from '@capacitor/local-notifications';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  users = <any>[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/users')
      .subscribe((res) => {
        console.log(res);
        this.users = res;
      });

    this.post();
  }

  // How i can make  a post request
  async post() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const data = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };

    try {
      const response = await this.http.post(url, data).toPromise();
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

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
