//不依赖css和图片的代码
$(function(){});

//依赖css和图片的代码
//这里不支持$(window).load(function(){});简写
window.onload=function(){
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
	//因为要和定时器共享list_num2，所以不在click绑定的函数里声明。
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
		}else if(list_num2==1){
			p1.html("BETTER EDUCATION FOR A");
			p2.html("BETTER WORLD");
		}else if(list_num2==2){
			p1.html("TIPS TO SUCCEED IN");
			p2.html("EDUCATION");
		}else if(list_num2==3){
			p1.html("BETTER EDUCATION FOR A");
			p2.html("BETTER WORLD");
		};
		$(this).addClass("active");
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
	function nav(){
		$("#header_nav").css("display","block");
		$("#header_nav_close").click(function(){
			$("#header_nav").css("display","none");
		});
		$("#header_nav").click(function(){
			$("#header_nav").css("display","none");
		});
		$("#header_article").click(function(e){
			e.stopPropagation();
		});
	};
	$("#header_section_button").click(function(){
		nav();
	});
	$("#section_section_two_ul li>div>a").click(function(){
		var list_num3=$(this).parent().parent().index();
		$("#header_article_image").attr("src",$(this).prev().children().attr("src"));
		$("#header_article_title").html($(this).text());
		$("#header_article_slot").html($(this).next().html());
		nav();
	});
	//添加数字动态增加至指定值功能
	var timer2=setInterval(function(){
		var $li1=$("#section_section_one_ul").children().first();
		var $li2=$("#section_section_one_ul").children().first().next();
		var $li3=$("#section_section_one_ul").children().first().next().next();
		var $li4=$("#section_section_one_ul").children().last();
		if($li1.children().children().first().html()<2500){
			$li1.children().children().first().html(Number($li1.children().children().first().html())+1);
		}
		if($li2.children().children().first().html()<150){
			$li2.children().children().first().html(Number($li2.children().children().first().html())+1);
		}
		if($li3.children().children().first().html()<3421){
			$li3.children().children().first().html(Number($li3.children().children().first().html())+1);
		}
		if($li4.children().children().first().html()<210){
			$li4.children().children().first().html(Number($li4.children().children().first().html())+1);
		}
	},10);

};




