$(window).on('load',function(){
	waterfall();

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
			var hMin = Math.min.apply(null,hArr);
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