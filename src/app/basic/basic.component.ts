import { Component, OnInit } from '@angular/core';

declare var layui: any;
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    layui.use(['dropdown', 'util'], function () {
      var dropdown = layui.dropdown
        , util = layui.util
        , $ = layui.jquery;

      // @ts-ignore
      //菜单点击事件
      dropdown.on('click(demo1)', function (options) {
        // @ts-ignore
        var thisElem = $(this);
        console.log(thisElem, options);
      });


      util.event('lay-active', {
        normal: function () {
          $('#demo-box').children().addClass('layui-col-md3').removeClass('layui-col-md4');
          $('#demo-box').find('.layui-menu').removeClass('layui-menu-lg');
        }
        , lg: function () {
          $('#demo-box').children().addClass('layui-col-md4').removeClass('layui-col-md3')
          $('#demo-box').find('.layui-menu').addClass('layui-menu-lg');
        }
      });
    });
  }

}
