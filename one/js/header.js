$(function(){
    $.ajax({
        url:"header.html",
        type:"get",
        success: function(html) {
            //console.log(html);
            $(`
            <link rel="stylesheet" href="./css/font-awesome.css"/>
			<link rel="stylesheet" href="./css/bootstrap.css">
			<script src="./js/popper.min.js"></script>
			<script src="./js/bootstrap.min.js"></script>
            <link rel="stylesheet" href="css/header.css" />
            `).appendTo("head");
            $(html).replaceAll("#header");
        }
    });
});