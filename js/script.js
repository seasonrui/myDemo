$(window).on('load',function(){

	waterfall();
	//鼠标滑过放大
	/*$('.content').mouseover(function(){
		$(this).animate({width:"120%"},50);
	})*/
	$.getJSON("./js/data.json",function(data){
		$.each(data,function(index,value){
			addHtml = "<div class='box'><div class='content'><a href='"+$(value).attr('show')+"' target='_blank'><img src='"+$(value).attr('src')+"'></a><div class='title'><a href='"+$(value).attr('show')+"' target='_blank'><h3>"+$(value).attr('title')+"</h3></a></div><div class='description'><p>主要技术："+$(value).attr('skill')+"</p><p>说明："+$(value).attr('description')+"<a href='"+$(value).attr('source-code')+"' target='_blank'>查看源代码</a></p></div></div></div>";
			$('.container').append(addHtml);
		});
		waterfall();
	});
});

function waterfall(){
	var $boxs= $('.box');
	var w = $boxs.eq(0).outerWidth();//获取的宽是包括padding和border
	var cols = Math.floor($('.container').width()/w);
	var hArr = [];
	$boxs.each(function(index,value){
		var h = $boxs.eq(index).outerHeight();
		if(index < cols){
			hArr.push(h);
		}else{
			var hMin = Math.min.apply(null,hArr);//计算数组最小值
			var minIndex = $.inArray(hMin,hArr);//$.inArray(value,arr)是工具函数，判断某个值在数组中的索引
			$(value).css({ //value是个dom对象，需要将dom对象转为jquery对象
				'position':'absolute',
				'left':minIndex*w + 'px',
				'top':hMin + 'px'
			})
			hArr[minIndex] += $boxs.eq(index).outerHeight();
			
		}
	})
	var hMax = Math.max.apply(null,hArr);//算出整个container的高度，因为box元素有float和absolute,父元素高度没法设置
	$('.container').css('height',hMax);
}
function checkScrollSlide(){
	var $lastBox = $('.box').last();
	var lastBoxDis = $lastBox.offset().top + Math.floor($lastBox.outerHeight()/2);

	var scrollDis = $(window).height() + $(window).scrollTop();//显示区域的高度和滚动条滚动的高度
	return (lastBoxDis < scrollDis) ? true : false;
}