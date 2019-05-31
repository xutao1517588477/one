//给#section_header_ul li设置在鼠标进入时的动态效果
$("#section_header_ul li").mouseenter(function(){
	//将当前列表元素下标赋值给list_num1
	//变量声明尽量局部
	var list_num1=$(this).index();
	//给当前元素更换页面内容及样式
	if(list_num1==0){
		$(this).html('<div><i class="fa fa-graduation-cap d-block" style="color: #F8B239"></i>WHO WE ARE<hr style="background-color: #FFFFFF" />EMPHASIZE</div>');
	}else if(list_num1==1){
		$(this).html('<div><i class="fa fa-book d-block" style="color: #F8B239"></i>WHAT WE DO<hr style="background-color: #FFFFFF" />EMPHASIZE</div>');
	}else if(list_num1==2){
		$(this).html('<div><i class="fa fa-soccer-ball-o d-block" style="color: #F8B239"></i>ACTIVITIES<hr style="background-color: #FFFFFF" />EMPHASIZE</div>');
	}else if(list_num1==3){
		$(this).html('<div><i class="fa fa-shield d-block" style="color: #F8B239"></i>EXPERIENCE<hr style="background-color: #FFFFFF" />EMPHASIZE</div>');
	}
});
//给#section_header_ul li设置在鼠标离开时的动态效果
$("#section_header_ul li").mouseleave(function(){
	//将当前列表元素下标赋值给list_num1
	var list_num1=$(this).index();
	//给当前元素更换页面内容及样式
	if(list_num1==0){
		$(this).html('<div><i class="fa fa-graduation-cap"></i><hr />WHO WE ARE</div>');
	}else if(list_num1==1){
		$(this).html('<div><i class="fa fa-book"></i><hr />WHAT WE DO</div>');
	}else if(list_num1==2){
		$(this).html('<div><i class="fa fa-soccer-ball-o"></i><hr />ACTIVITIES</div>');
	}else if(list_num1==3){
		$(this).html('<div><i class="fa fa-shield"></i><hr />EXPERIENCE</div>');
	}
});
//设置#header_section的文字轮播效果-点击时
//因为要和定时器共享list_num2，所以在全局声明。
var list_num2=1;
$("#header_section>div:nth-child(2)>ul>li").click(function(){
	//将当前列表元素下标赋值给list_num2
	list_num2=$(this).index();
	var p1=$("#p1");
	var p2=$("#p2");
	//清除#header_section>div:nth-child(2)>ul>li上的class=active
	$("#header_section>div:nth-child(2)>ul>li[class=active]").removeClass("active");
	if(list_num2==0){
		p1.html("THE BEST PLACE FOR");
		p2.html("EDUCATION");
		$(this).addClass("active");
	}else if(list_num2==1){
		p1.html("BETTER EDUCATION FOR A");
		p2.html("BETTER WORLD");
		$(this).addClass("active");
	}else if(list_num2==2){
		p1.html("TIPS TO SUCCEED IN");
		p2.html("EDUCATION");
		$(this).addClass("active");
	}else if(list_num2==3){
		p1.html("BETTER EDUCATION FOR A");
		p2.html("BETTER WORLD");
		$(this).addClass("active");
	}
});
//设置#header_section的文字轮播效果-定时模拟点击
var timer1=setInterval(function(){
	//:nth-child()不支持变量
	if(list_num2<3){
		$("#header_section>div:nth-child(2)>ul>li[class=active]").next().click();
	}else{
		$("#header_section>div:nth-child(2)>ul>li:first-child").click();
	}
	list_num2=list_num2%4;
},1000);
