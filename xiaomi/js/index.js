



window.onload = function(){
    var items = document.getElementsByClassName('item'); //图片
    var points = document.getElementsByClassName('point')
    var goPrevBtn = document.getElementById('goPrev');
    var goNextBtn = document.getElementById('goNext');
    
    var time = 0; //定时器自动轮播参数

    var index = 0 ;//index表示第几张图片在展示 --第index 张图片有active 这个类名

    var clearActive = function(){
        for( var i = 0; i < items.length; i++){
            items[i].className = 'item';
        }
        for( var i = 0; i < points.length; i++){
            points[i].className = 'point';
        }
    }

    //清除active
    var goIndex = function(){
        clearActive();
        console.log(index);
        items[index].className = 'item active';
        points[index].className = 'point active'
    }

    //按钮
    var goNext = function(){
        if(index < 4){
            index++;
        }else{
            index=0;
        }
        time = 0;
        goIndex();
    }
    
    //按钮
    var goPrev = function(){
        if(index == 0){
            index = 4;
        }else{
            index--;
        }
        time = 0;
        goIndex();
    }

    //监听事件
    goNextBtn.addEventListener('click',function(){
        goNext();
    })
    goPrevBtn.addEventListener('click',function(){
        goPrev();
    })

    for(var i = 0; i<points.length; i++){
        points[i].addEventListener('click',function(){
            var pointIndex = this.getAttribute('data-index');
            index = pointIndex;
            goIndex();
            time = 0;
        })
    }
    //计时轮播图2秒跳转
    
    setInterval(function(){
        time++;
        if(time == 20){
            goNext();
            time = 0;
        }
    }, 100);
}