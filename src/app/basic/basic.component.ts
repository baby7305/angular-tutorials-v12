import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $("#myfadein").click(function () {//淡入显示百度窗口
          $('IFrame').fadeIn('slow');
      });
      $("#myfadeout").click(function () {//淡出隐藏百度窗口
          $('IFrame').fadeOut('slow');
      });
  });
  }

}
