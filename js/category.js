/**
 * Created by zhousg on 2016/1/8.
 */
window.onload= function(){
    leftCategory();
    rightCategory();
};
/*左侧滑动*/
var iScroll = null;
var iScrollRight = null;
var leftCategory = function(){

    iScroll = itcast.iScroll({
        swipeDom:document.getElementsByClassName('jd_category_left')[0],
        swipeType:'y',
        swipeDistance:100
    });

    /*点击*/
    var liList = iScroll.childDom.getElementsByTagName('li');

    /*点击事件*/
    itcast.tap(iScroll.childDom,function(e){
        for(var i = 0 ; i < liList.length ; i ++){
            liList[i].className = " ";
            /*给每个li索引*/
            liList[i].index = i;
        }
        /*取到我们的当前点击的li*/
        var li  = e.target.parentNode;
        li.className = "now";

        /*计算移动的位置*/
        /*将要定位的位置*/
        var translateY = -li.index * 50;

        /*如果满足在我们定位区间内  就用我们计算的值来做定位*/
        if(translateY > iScroll.minPostion){
            iScroll.setTranslate(translateY);
        }else{
            iScroll.setTranslate(iScroll.minPostion);
        }

        /*模拟加载效果*/
        var rightCon = document.querySelector('.jd_category_right_con');
        rightCon.style.transition = "none";
        rightCon.style.webkitTransition = "none";

        var items = document.querySelectorAll('.mui-table-view');
        var rightTranslateY = items[li.index].offsetTop-45;

        iScrollRight.currPostion = -rightTranslateY;
        iScrollRight._changeTranslate(-rightTranslateY);

    })
}

/*右侧*/
var rightCategory = function(){
    var $box = document.getElementsByClassName('jd_category_right')[0];
    iScrollRight = itcast.iScroll({
        swipeDom:$box,
        swipeType:'y',
        swipeDistance:100
    });

    /*标题浮动*/
    /*获取所有的列表栏*/
    var box = document.querySelector('.jd_category_right_con');
    /*大盒子高度*/
    var h = box.offsetHeight;
    console.log(h);
    /*获取所有的列表栏的标题*/
    var items = box.querySelectorAll('.mui-table-view');
    var getCurrItem = function(translateY){
        var currItem = null;
        for(var i = 0 ; i < items.length ; i ++){
            var top = items[i].offsetTop-45;
            items[i].top = top;
            items[i].index = i;
            if(Math.abs(translateY)>=top){
                currItem = items[i];
            }
        }
        return currItem;
    };
    var clear = function(){
        for(var i = 0 ; i < items.length ; i ++) {
            items[i].querySelector('.hengtiao').style.transform = "none";
            items[i].querySelector('.hengtiao').style.webkitTransform = "none";
            /*兼容 老版本webkit内核浏览器*/
        }
    }


    //var itemTit = item.querySelector('.hengtiao');
    /*盒子高度*/
    //var itemTitHeight = 36;
    var setPosition = function(){
        var translateY = iScrollRight.childDom.style.transform;
        translateY = translateY?translateY.replace('translateY(',"").replace('px)',""):'';
        console.log(translateY);
        if(translateY <=0){
            var currItem = getCurrItem(translateY);
            clear();
            var currTit = currItem.querySelector('.hengtiao');
            currTit.style.transform = "translateY("+(-translateY-currItem.top)+"px)";
            currTit.style.webkitTransform = "translateY("+(-translateY-currItem.top)+"px)";

            var index = currItem.index;
            /*点击*/
            var liList = iScroll.childDom.getElementsByTagName('li');
            for(var i = 0 ; i < liList.length ; i ++){
                liList[i].className = " ";
                /*给每个li索引*/
                liList[i].index = i;
                if(i == index){
                    liList[i].className = "now";
                    /*将要定位的位置*/
                    var y = -liList[i].index * 50;

                    /*如果满足在我们定位区间内  就用我们计算的值来做定位*/
                    if(y > iScroll.minPostion){
                        iScroll.setTranslate(y);
                    }else{
                        iScroll.setTranslate(iScroll.minPostion);
                    }
                }
            }

        }
    }
    $box.addEventListener('touchmove',function(){
        setPosition();

    });
    itcast.transitionEnd(iScrollRight.childDom,function(){
        setPosition();
    });


};