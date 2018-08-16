import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  // moduleId: module.id,
  selector: 'app-tab-series-movie',
  templateUrl: './tab-series-movie.component.html',
  styleUrls: ['./tab-series-movie.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TabSeriesMovieComponent implements OnInit {

  hotMovieSeriesOnWeek: any[] = [
      {'Id': 1, 'name': 'Đại chiến robot', 'el_name': 'Transformer movie hd', 'viewer': 12.000, 'review': [false, false, true, true, true]},
      {'Id': 2, 'name': 'Đại chiến robot', 'el_name': 'Transformer movie hd', 'viewer': 923.123, 'review': [true, true, true, true, true]},
      {'Id': 3, 'name': 'Đại chiến robot', 'el_name': 'Transformer movie hd', 'viewer': 734.123, 'review': [true, true, true, true, true]},
      {'Id': 4, 'name': 'Đại chiến robot', 'el_name': 'Transformer movie hd', 'viewer': 734.123, 'review': [true, true, true, true, true]},
      {'Id': 5, 'name': 'Đại chiến robot', 'el_name': 'Transformer movie hd', 'viewer': 734.123, 'review': [true, true, true, true, true]},
      {'Id': 6, 'name': 'Đại chiến robot', 'el_name': 'Transformer movie hd', 'viewer': 734.123, 'review': [true, true, true, true, true]},
      {'Id': 7, 'name': 'Đại chiến robot', 'el_name': 'Transformer movie hd', 'viewer': 734.123, 'review': [true, true, true, true, true]},
      {'Id': 8, 'name': 'Đại chiến robot', 'el_name': 'Transformer movie hd', 'viewer': 734.123, 'review': [true, true, true, true, true]},
      {'Id': 9, 'name': 'Đại chiến robot', 'el_name': 'Transformer movie hd', 'viewer': 734.123, 'review': [true, true, true, true, true]},
      {'Id': 10, 'name': 'Đại chiến robot', 'el_name': 'Transformer movie hd', 'viewer': 734.123, 'review': [true, true, true, true, true]},
  ];

    setStarTable(record: any, data: any) {
    const tableList = this.hotMovieSeriesOnWeek.find(function (obj: any) {
        return obj.Id === record.Id;
    });
    for (let i = 0; i <= 4; i++) {
      if ( i <= data) {
        tableList.review[i] = false;
      } else {
        tableList.review[i] = true;
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }


}
