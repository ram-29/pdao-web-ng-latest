import { Component, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    $('.carousel').carousel();
    $('a.fancybox-carousel').fancybox({
      thumbs: {
        autoStart: true
      }
    });
    $('.fancybox-happenings').fancybox({
      thumbs: {
        autoStart: true
      },
      caption: function (instance, item) {
        const caption = $(this).data('caption') || '';
        const mCaption = `
          <h4 class="text-primary">Happenings</h4>
          ${caption}<br />
          <a class="btn btn-primary pull-right" href="/happenings">Read More</a>
          <div class="clearfix"></div>
        `;
        return mCaption;
      }
    });

  }

}
