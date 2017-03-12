
/**
 * 主函数
 */
(function() {

    /**
     * 内容JSON
     */
    var demoContent = [
        {
            demo_link: 'http://seasonrui.github.io/2016-baidu-ife/section4/questionnaire/',
            img_link: 'http://7xojds.com1.z0.glb.clouddn.com/questionnaire.png',
            code_link: 'https://github.com/seasonrui/2016-baidu-ife/tree/master/section4/questionnaire-source',
            title: '微型调查问卷'
        },
        {
            demo_link: 'http://seasonrui.github.io/2016-baidu-ife/section3/task37/UI%E7%BB%84%E4%BB%B6%E4%B9%8B%E6%B5%AE%E5%87%BA%E5%B1%82.html',
            img_link: 'http://7xojds.com1.z0.glb.clouddn.com/dialog.png',
            code_link: 'https://github.com/seasonrui/2016-baidu-ife/tree/master/section3/task37',
            title: 'UI组件之浮出层组件'
        },
        {
            demo_link: 'https://seasonrui.github.io/2017-baidu-ife/css3%E5%AE%9E%E7%8E%B03D%E8%BD%AE%E6%92%AD%E5%9B%BE/%E8%87%AA%E5%8A%A8%E6%92%AD%E6%94%BE/',
            img_link: 'http://7xojds.com1.z0.glb.clouddn.com/Carousel.gif',
            code_link: 'https://github.com/seasonrui/2017-baidu-ife/tree/master/css3%E5%AE%9E%E7%8E%B03D%E8%BD%AE%E6%92%AD%E5%9B%BE',
            title: 'css3实现3D轮播图'
        },
        {
            demo_link: 'http://seasonrui.github.io/2016-baidu-ife/section3/task38/UI%E7%BB%84%E4%BB%B6%E4%B9%8B%E6%8E%92%E5%BA%8F%E8%A1%A8%E6%A0%BC.html',
            img_link: 'http://7xojds.com1.z0.glb.clouddn.com/form-sort.png',
            code_link: 'https://github.com/seasonrui/2016-baidu-ife/tree/master/section3/task38',
            title: 'UI组件之排序表格'
        },
        {
            demo_link: 'http://seasonrui.github.io/2016-baidu-ife/section2/task35/%E5%90%AC%E6%8C%87%E4%BB%A4%E7%9A%84%E5%B0%8F%E6%96%B9%E5%9D%97%EF%BC%88%E4%B8%89%EF%BC%89.html',
            img_link: 'http://7xojds.com1.z0.glb.clouddn.com/box.png',
            code_link: 'https://github.com/seasonrui/2016-baidu-ife/tree/master/section2/task35',
            title: '听指令的小方块'
        },
        {
            demo_link: 'http://seasonrui.github.io/2016-baidu-ife/section2/task31/%E8%A1%A8%E5%8D%95%EF%BC%88%E4%B8%89%EF%BC%89%E8%81%94%E5%8A%A8.html',
            img_link: 'http://7xojds.com1.z0.glb.clouddn.com/form-link.png',
            code_link: 'https://github.com/seasonrui/2016-baidu-ife/tree/master/section2/task31',
            title: '表单联动'
        },

        {
            demo_link: 'http://seasonrui.github.io/2016-baidu-ife/section2/task30/%E8%A1%A8%E5%8D%95%EF%BC%88%E4%BA%8C%EF%BC%89%E5%8D%95%E4%B8%AA%E8%A1%A8%E5%8D%95%E9%A1%B9%E7%9A%84%E6%A3%80%E9%AA%8C.html',
            img_link: 'http://7xojds.com1.z0.glb.clouddn.com/form-validate.png',
            code_link: 'https://github.com/seasonrui/2016-baidu-ife/tree/master/section2/task30',
            title: '表单验证'
        },
        {
            demo_link: 'http://seasonrui.github.io/ife/2015_spring/task/task0002/work/task0002_4.html',
            img_link: 'http://7xojds.com1.z0.glb.clouddn.com/3.png',
            code_link: 'https://github.com/seasonrui/ife/tree/master/2015_spring/task/task0002/work',
            title: '输入框提示'
        },
        {
            demo_link: 'http://seasonrui.github.io/2016-baidu-ife/section2/task22/javascript%E5%92%8C%E6%A0%91%EF%BC%88%E4%B8%80%EF%BC%89.html',
            img_link: 'http://7xojds.com1.z0.glb.clouddn.com/tree.png',
            code_link: 'https://github.com/seasonrui/2016-baidu-ife/tree/master/section2/task22',
            title: 'javascript和树'
        },
        {
            demo_link: 'http://seasonrui.github.io/2016-baidu-ife/section1/task8/%E5%93%8D%E5%BA%94%E5%BC%8F%E7%BD%91%E6%A0%BC%EF%BC%88%E6%A0%85%E6%A0%BC%E5%8C%96%EF%BC%89%E5%B8%83%E5%B1%80.html',
            img_link: 'http://7xojds.com1.z0.glb.clouddn.com/grid.png',
            code_link: 'https://github.com/seasonrui/2016-baidu-ife/tree/master/section1/task8',
            title: '响应式网格（栅格化）布局'
        },
        {
            demo_link: 'http://seasonrui.github.io/ife/2015_spring/task/task0002/work/task0002_1.html',
            img_link: 'http://7xojds.com1.z0.glb.clouddn.com/1.png',
            code_link: 'https://github.com/seasonrui/ife/tree/master/2015_spring/task/task0002/work',
            title: '处理兴趣爱好'
        },
        {
            demo_link: 'http://seasonrui.github.io/ife/2015_spring/task/task0002/work/task0002_2.html',
            img_link: 'http://7xojds.com1.z0.glb.clouddn.com/2.png',
            code_link: 'https://github.com/seasonrui/ife/tree/master/2015_spring/task/task0002/work',
            title: '倒计时'
        },
        {
            demo_link: 'http://seasonrui.github.io/2016-baidu-ife/section1/task10/flex%E5%B8%83%E5%B1%80%E7%BB%83%E4%B9%A0',
            img_link: 'http://7xojds.com1.z0.glb.clouddn.com/flex.png',
            code_link: 'https://github.com/seasonrui/2016-baidu-ife/tree/master/section1/task10',
            title: 'flex布局'
        },
        {
            demo_link: 'http://seasonrui.github.io/2016-baidu-ife/section1/task5/%E9%9B%B6%E5%9F%BA%E7%A1%80HTML%E5%8F%8ACSS%E7%BC%96%E7%A0%81%EF%BC%88%E4%BA%8C%EF%BC%89.html',
            img_link: 'http://7xojds.com1.z0.glb.clouddn.com/html.png',
            code_link: 'https://github.com/seasonrui/2016-baidu-ife/tree/master/section1/task5',
            title: 'html css基础练习'
        }];

    contentInit(demoContent) //内容初始化
    waitImgsLoad() //等待图片加载，并执行布局初始化
}());



/**
 * 内容初始化
 */
function contentInit(content) {
    var htmlStr = ''
    for (var i = 0; i < content.length; i++) {
        htmlStr +=
            '<div class="content">' +
            '   <h4><small>' + content[i].title + '</small></h4>' + 
            '   <div class="detail clearfix">' +
            '       <a href="' + content[i].demo_link + '">' +
            '           <img src="' + content[i].img_link + '"></a><div class="code"><a href="' + content[i].code_link + '">Code</a></div>' +
            '   </div>' +
            '</div>'
    }
    var gallary = document.querySelector('.gallary')
    gallary.innerHTML = htmlStr;
}

/**
 * 等待图片加载
 */
function waitImgsLoad() {
    var imgs = document.querySelectorAll('.gallary img')
    var totalImgs = imgs.length
    var count = 0
    for (var i = 0; i < totalImgs; i++) {
        if (imgs[i].complete) {
            //console.log('complete');
            count++
        } else {
            imgs[i].onload = function() {
                count++
                if (count == totalImgs) {
                    initGallary()
                }
            }
        }
    }
    if (count == totalImgs) {
        initGallary()
    }
}

/**
 * 初始化布局
 */

function initGallary() {
    var msnry = new Masonry('.gallary', {
        // options
        itemSelector: '.content',
        columnWidth: 280,
        isFitWidth: true,
        gutter: 50,
    })
}
