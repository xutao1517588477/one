$(function(){
    $.ajax({
        url:"footer.html",
        type:"get",
        success: function(html) {
        	$(`<link rel="stylesheet" href="css/footer.css" />`).appendTo("head");
            $(html).replaceAll("#footer");
            //必须这么写，应为代码执行依赖请求结果
		    $(window).scroll(function(){
				//.scrollTop() 滚动条距顶距离
				if($(this).scrollTop()>=160){
					$("#nav").css("display","block");
				}else{
					$("#nav").css("display","none");
				}
			});
			$("#nav").click(function(){
				//调用动画来让滚动圆滑点
				$("html").animate({scrollTop:0},$(window).scrollTop());
			});
        }
    });
});
