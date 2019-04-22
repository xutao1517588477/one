$("#section_header_ul li").mouseenter(function(){
	list_num1=$(this).index();
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
$("#section_header_ul li").mouseleave(function(){
	list_num1=$(this).index(); 
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