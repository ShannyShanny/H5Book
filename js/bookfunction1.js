// JavaScript Document
/*夜晚模式******************************************************************************/
var flag = 0;
function zhezhao(){
	 var zhezhao=document.getElementById("nightstyle"); 
	 var spic = document.getElementById("dayornight");
	 if(flag == 0){ zhezhao.style.display="block"; document.getElementById("dayornight").src = "img/night.png";flag = 1; }
	 else{ zhezhao.style.display="none"; document.getElementById("dayornight").src = "img/day.png"; flag = 0; }
	 }
	

/*翻页产生的声音*******************************************************************************/

function playSound(){
	var em = document.createElement("embed"); 
	em.autostart="1" ;
	em.src="sounds/02.mp3";   //你的声音地址
	em.height = 0;
	em.width = 0;
	document.documentElement.appendChild(em);
	}

	

/*书页跳转*******************************************************************************/	
function change(){
	//var txt = document.getElementById("input_a_num");
	var pagenum = document.getElementById("input_a_num").value;
	pagenum = parseInt(pagenum) + 1;
	$('.magazine').turn('page', pagenum);
			setTimeout(function(){
			setArrows() ;
			},300);
			
	}


		
	
/*文本框输入的设置*********************************************************************************/	
function changetextcolor1(){
		var txt = document.getElementById("input_a_num");
		if(txt.value=="请输入页数"){txt.style.color = "#000000";txt.value="";}
		else{txt.style.color = "#000000";};
	}
	
	


/*以下是右下角图标导航栏的js代码*****************************************************************************/
var flag2 = 0;		/*是否弹出相册的标识符*/
var flag3 = 0;		/*是否弹出相册的标识符*/
var flag4 = 0;		/*是否弹出时间设置对话框的标识符*/
var flag22 = 0;		/*背景变暗相册或者视频高亮度突出
/*弹出相册2*****************************************************************************/
function showphoto(){
	 var pics=document.getElementById("allpic");
	 var zhezhao2=document.getElementById("nightstyle2");
	 if(flag3 ==1){showvideo();}
	 if(flag4 ==1){showtimedialog();}
	 if(flag2 == 0 && flag3 ==0 && flag4 ==0){
		   pics.style.display="block"; flag2 = 1; zhezhao2.style.display="block"; flag22 = 1; }
	 else{ 
	 	   pics.style.display="none"; flag2 = 0; zhezhao2.style.display="none"; flag22 = 0;}
	}
	
/*弹出视频3*****************************************************************************/
function showvideo(){
	 var zhezhao2=document.getElementById("nightstyle2");
	 var videos=document.getElementById("allvideo");
	 if(flag2 ==1){showphoto();}
	 if(flag4 ==1){showtimedialog();}
	 if(flag2 == 0 && flag3 ==0 && flag4 ==0){
		  var em = document.createElement("embed");
		  em.autostart="1" ;
		  em.id="articlevideo";
		  em.src="video/1.mp4";   //你的声音地址
		  em.height = "100%";
		  em.width = "100%";
		  document.getElementById('allvideo').appendChild(em);
		  videos.style.display="block"; flag3 = 1;zhezhao2.style.display="block"; flag22 = 1; }
	 else{
		 $('#articlevideo').remove();
		 videos.style.display="none"; flag3 = 0;zhezhao2.style.display="none"; flag22 = 0; }
	}

/*弹出时间设置对话框4*****************************************************************************/	
function showtimedialog(){
	 var zhezhao2=document.getElementById("nightstyle2");
	 var timelimit=document.getElementById("timelimit");
	 if(flag3 ==1){showvideo();}
	 if(flag2 ==1){showphoto();}
	 if(flag2 == 0 && flag3 ==0 && flag4 ==0){
		  timelimit.style.display="block"; flag4 = 1;zhezhao2.style.display="block"; flag22 = 1;
		   }
	 else{timelimit.style.display="none"; flag4 = 0;zhezhao2.style.display="none"; flag22 = 0; }
	}
	
/*弹出左边菜单*****************************************************************************/	
var flag5 = 0;	
function openleftmenu(){
	//var leftmenu = document.getElementById('mulu');
	 if(flag5 == 0){
		  $('#mulu').fadeIn(1000); flag5 = 1; }
	 else{ 
	 	   $('#mulu').fadeOut(500); flag5 = 0; }
	}
	

/**背景高亮度显示************************************************************/
function changebackgroud1(){document.getElementById('fcenter1').style.background = 'none'; document.getElementById('fcenter1').style.cursor = 'pointer';}
function changebackgroud2(){document.getElementById('fcenter1').style.background = 'none';}
function changebackgroud3(){document.getElementById('fcenter2').style.background = 'none'; document.getElementById('fcenter2').style.cursor = 'pointer';}
function changebackgroud4(){document.getElementById('fcenter2').style.background = 'none';}
function changebackgroud5(){document.getElementById('fcenter3').style.background = 'none'; document.getElementById('fcenter3').style.cursor = 'pointer';}
function changebackgroud6(){document.getElementById('fcenter3').style.background = 'none';}


/*由左边目录指定跳转*******************************************************************************/	
$(document).ready(function(){
$('#mulu ul li').bind('click',function(){
	//var mulu = document.getElementById('mulu');
	//var pagenum = mulu.getElementsByTagName("span"); 
	
	//var pagenum = document.getElementsByClassName("spannum").item(0).innerHTML;
    var pagenum=$(this).attr("value"); //获取每个li的value值
　　 //alert(pagenum);
	$('.magazine').turn('page', pagenum);
			setTimeout(function(){
			setArrows() ;
			},300);
	
	});
	});
	
/*
var r1 = 0;
var r2 = 0;
var r3 = 0;
var r4 = 0;
$(document).ready(function(){
$('#articlepic1').bind('click',function(){
	var r1 = 0;
	var r2 = 0;
	var r3 = 0;
	var r4 = 0;
	if(r1==0){
	document.getElementById('articlepic1').src="pics/video2.png";r1=1;
	document.getElementById('articlepic2').src="pics/video1.png";r2=0;
	document.getElementById('articlepic3').src="pics/video1.png";r3=0;
	document.getElementById('articlepic4').src="pics/video1.png";r4=0;
	}
	else{
	document.getElementById('articlepic1').src="pics/video1.png";r1=0;}
	});
$('#articlepic2').bind('click',function(){
	if(r2==0){
	document.getElementById('articlepic2').src="pics/video2.png";r2=1;
	document.getElementById('articlepic1').src="pics/video1.png";r1=0;
	document.getElementById('articlepic3').src="pics/video1.png";r3=0;
	document.getElementById('articlepic4').src="pics/video1.png";r4=0;}
	else{
	document.getElementById('articlepic2').src="pics/video1.png";r2=0;}
	});
$('#articlepic3').bind('click',function(){
	if(r3==0){
	document.getElementById('articlepic3').src="pics/video2.png";r3=1;
	document.getElementById('articlepic2').src="pics/video1.png";r2=0;
	document.getElementById('articlepic1').src="pics/video1.png";r1=0;
	document.getElementById('articlepic4').src="pics/video1.png";r4=0;}
	else{
	document.getElementById('articlepic3').src="pics/video1.png";r3=0;}
	});
$('#articlepic4').bind('click',function(){
	if(r4==0){
	document.getElementById('articlepic4').src="pics/video2.png";r4=1;
	document.getElementById('articlepic2').src="pics/video1.png";r2=0;
	document.getElementById('articlepic3').src="pics/video1.pyng";r3=0;
	document.getElementById('articlepic1').src="pics/video1.png";r1=0;}
	else{
	document.getElementById('articlepic4').src="pics/video1.png";r4=0;}
	});
});
*/

