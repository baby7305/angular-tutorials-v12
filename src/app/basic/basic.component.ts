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
    $(function () {
      $("#myButton1").click(function () {		//响应单击按钮“显示原始文本”
        $("#p2")[0].className = "font-weight-normal";
      });
      $("#myButton2").click(function () {		//响应单击按钮“显示加细文本”
        $("#p2")[0].className = "font-weight-light";
      });
    });
  }

}
