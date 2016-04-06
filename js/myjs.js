$(function () {
    var slider = mui("#slider");
    slider.slider({
        interval: 2500
    });
    swipeBack: true;

    mui('.mui-scroll-wrapper').scroll();
    $("#bottomPopover").css({ "left": 0 })

    //打开新窗口事件
    function open(id, url) {
        var obj = document.getElementById(id);
        obj && obj.addEventListener("tap", function () {
            mui.openWindow({
                url: url,
                id: id
            })
        })
    };

    open("nav01", "/waterHome/index.html");
    open("nav02", "/waterHome/order/order_nocomplete.html");
    open("nav03", "/waterHome/waterticket/waterticket.html");
    open("nav04", "/waterHome/my/my.html");
    open("gopay", "/waterHome/order/pay.html");
    open("yatongservice","/waterHome/order/serviceitem2.html")
    open("xuzhi2","/waterHome/order/serviceitem.html")
    open("yhqxz","/waterHome/order/serviceitem.html")

	
	mui(".jd_category_right").on('tap','.jd_category_right_con ul>li.mui-table-view-cell>a',function(){
		mui.openWindow({
			url:"/waterHome/waterticket/goods_detail.html"
		})
	});
    
	mui(".tzshr").on('tap','.axj',function(){
			mui.openWindow({
				url:"/waterHome/my/myaddress.html"
			})
	});
	mui(".addressMain").on('tap','.createaddress',function(){
			mui.openWindow({
				url:"/waterHome/my/newshr.html"
			})
	});
	mui(".addressMain").on('tap','.linkreg',function(){
			mui.openWindow({
				url:"/waterHome/register/register.html"
			})
	});
	mui(".goods_detail_bottom").on('tap','.goods_detail_bottom_r a',function(){
			mui.openWindow({
				url:"/waterHome/order/order.html"
			})
	});
})

			




























