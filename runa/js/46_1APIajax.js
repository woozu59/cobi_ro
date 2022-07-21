// 청주시청 추출데이터
(function($) {
	'use strict';

	var $window = $(window);

	$(function() {
		$('table.responsive').not($('.prettyprint').children()).each(function() {
            var RowSpanExist = $(this).find('td, th').is('[rowspan]'),
                TheadExist = $(this).find('thead').length;
            if((RowSpanExist==false) && (TheadExist!=0)){//rowspan�� �놁쓣 寃쎌슦留� �ㅽ뻾 (rowspan�� �덉쑝硫� 吏��먮텋媛�)
                $(this).children('tbody').children('tr').find('th, td').each(function() {
                    var ThisIndex = $(this).index(),
                        TheadText = $(this).parents('tbody').siblings('thead').find('th').eq(ThisIndex).text();
                    $(this).attr('data-content', TheadText);
                });
                $(this).children('tfoot').children('tr').find('th, td').each(function() {
                    var ThisIndex = $(this).index(),
                        TheadText = $(this).parents('tfoot').siblings('thead').find('th').eq(ThisIndex).text();
                    $(this).attr('data-content', TheadText);
                });
            };
		});
	});
})(window.jQuery);

// 공공API 보건복지부 코로나19 감염 현황
http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=gptlfeF0tckKWZugnRmyvS4wuIp7K2dDyLC9SjDzp%2BIk8HEEiN8OH9m9Xm1%2BH%2FIvBWPxcRBQ8mhpUGvA9n9yVA%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20210901&endCreateDt=20210902

/* Javascript 샘플 코드 */


let xhr = new XMLHttpRequest();
let url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=gptlfeF0tckKWZugnRmyvS4wuIp7K2dDyLC9SjDzp%2BIk8HEEiN8OH9m9Xm1%2BH%2FIvBWPxcRBQ8mhpUGvA9n9yVA%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20210901&endCreateDt=20210902'; /*URL*/
var queryParams = '?' + encodeURIComponent('ServiceKey') + '='+'서비스키'; /*Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
queryParams += '&' + encodeURIComponent('startCreateDt') + '=' + encodeURIComponent('20200410'); /**/
queryParams += '&' + encodeURIComponent('endCreateDt') + '=' + encodeURIComponent('20200410'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');