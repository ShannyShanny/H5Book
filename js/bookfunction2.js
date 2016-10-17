// JavaScript Document


function drag(ev)

{

var obj=this;

var mouseStart=[];

var objStart=[];

var oEvent=ev||event;

mouseStart.x=oEvent.clientX;

objStart.x=this.offsetLeft;

document.onmousemove=function(ev)

{

var oEvent=ev||event;

var l=oEvent.clientX-mouseStart.x+objStart.x;

var t=oEvent.clientY-mouseStart.y+objStart.y;

obj.style.left=l+'px';

return false;

};

document.onmouseup=function()

{

document.onmousemove=document.onmouseup=null;

startMove(obj);

};

return false;

}

function startMove(obj)

{

var oDrag=document.getElementById('book2');

var aDiv=oDrag.getElementsByTagName('div');

var iSpeed=0;

obj.timer=setInterval(function(){

obj.onmousedown=null;

obj.offsetLeft>=0?iSpeed+=10:iSpeed-=10;

var l=obj.offsetLeft+iSpeed;

if(l>obj.offsetWidth)

{

l=obj.offsetWidth;

moveDirection(iSpeed);

}

else if(l<-obj.offsetWidth)

{

l=-obj.offsetWidth;

moveDirection(iSpeed);

}

obj.style.left=l+'px';

},30);

function moveDirection(iSpeed)

{

for(i=0;i<aDiv.length;i++)

{

aDiv[i].style.zIndex=parseInt(aDiv[i].style.zIndex)+1;

if(aDiv[i]==obj)

{

obj.style.zIndex=parseInt(obj.style.zIndex)-aDiv.length;

}

}


clearInterval(obj.timer);

t=setInterval(function(){

obj.onmousedown=null;

var l=obj.offsetLeft-iSpeed;

if((iSpeed<0 && l>0) || (iSpeed>0 && l<0))

{

l=0;

clearInterval(t);

obj.onmousedown=drag;

}

obj.style.left=l+'px';

},30);

}

}

var book2flag = 0;
$(document).ready(function(){
$('#book2clickarea').bind('click',function(){
	if(book2flag == 0){ $('#book2function').fadeIn(1000); book2flag =1;}
	else{ document.getElementById('book2function').style.display="none"; book2flag =0;} 
	});
});

/*夜晚模式******************************************************************************/
var nightstyle3flag = 0;
function zhezhao3(){
	 var zhezhao3=document.getElementById("nightstyle3"); 
	 if(nightstyle3flag == 0){ zhezhao3.style.display="block";
	  document.getElementById('dayornightword').src = "book2img/wordnight.png";
	   document.getElementById('dayornightword2').src = "book2img/wordnight.png";
	  document.getElementById("dayornight3").src = "img/night.png";nightstyle3flag = 1; }
	 else{ 
	  document.getElementById('dayornightword2').src = "book2img/wordday.png";
	   document.getElementById('dayornightword').src = "book2img/wordday.png";
	  zhezhao3.style.display="none"; document.getElementById("dayornight3").src = "img/day.png"; nightstyle3flag = 0; }
	 }
	
var peoplereadflag = 0;
function changereadpic(){
	if(peoplereadflag==0){ document.getElementById('peopleread').src = "pics/video2.png";peoplereadflag=1;}
	else{ document.getElementById('peopleread').src = "pics/video1.png";peoplereadflag=0;}
}


function message1(){
	 document.getElementById("message1").style.display="block";   
	}
function message2(){ 
	 document.getElementById("message1").style.display="none"; 
	}	
function message3(){
	 document.getElementById("message2").style.display="block";   
	}
function message4(){ 
	document.getElementById("message2").style.display="none"; 
	}
function message5(){
	 document.getElementById("message3").style.display="block";   
	}
function message(){ 
	 document.getElementById("message3").style.display="none"; 
	}
function message9(){ document.getElementById("message5").style.display="block";}	
function message10(){document.getElementById("message5").style.display="none";}
var explainreadflag = 0;


function playvideo(){
	if(explainreadflag==0){
	var em = document.createElement("embed");
	em.autostart="1" ;
		em.id="explainvoice";
		em.src="voiceofbook/explain/han.mp3";   //你的声音地址
		em.height = 0;
		em.width = 0;
		document.documentElement.appendChild(em);
		document.getElementsByClassName('explainvideo').item(0).src="pics/video2.png";
		explainreadflag=1;}
	else{$('#explainvoice').remove();
	document.getElementsByClassName('explainvideo').item(0).src="pics/video1.png"; explainreadflag = 0;}
	}
function playvideo5(){
	if(explainreadflag==0){
	var em = document.createElement("embed");
	em.autostart="1" ;
		em.id="explainvoice";
		em.src="voiceofbook/explain/gongposhen.mp3";   //你的声音地址
		em.height = 0;
		em.width = 0;
		document.documentElement.appendChild(em);
		document.getElementById('explainvideo5').src="pics/video2.png";
		explainreadflag=1;}
	else{$('#explainvoice').remove();
	document.getElementById('explainvideo5').src="pics/video1.png"; explainreadflag = 0;}
	}	
/*	
var articlereadflag = 0;
function playarticlevideo(){
	if(articlereadflag==0){
	var em = document.createElement("embed");
	em.autostart="1" ;
		em.id="articlevoice";
		em.src="voiceofbook/chuhuayuan.mp3";   //你的声音地址
		em.height = 0;
		em.width = 0;
		document.documentElement.appendChild(em);
		document.getElementsByClassName('articlevideopic').item(0).src="pics/video2.png";
		articlereadflag=1;}
	else{$('#articlevoice').remove();
	document.getElementsByClassName('articlevideopic').item(0).src="pics/video1.png"; articlereadflag = 0;}
	}
*/
/********定时*************************/
var limitimeflag2 = 0;
function showtimedialog2(){
	if(limitimeflag2==0){
		document.getElementById('book2function').style.display = "none";
		$('#limittime2').fadeIn(1000); limitimeflag2 = 1;}
	else{ document.getElementById('limittime2').style.display = "none"; document.getElementById('book2function').style.display = "block"; limitimeflag2 = 0;}
	}
	
$(document).ready(function(){
$('#back2').bind('click',function(){
	  document.getElementById('limittime2').style.display = "none";
	  document.getElementById('book2function').style.display = "block";
	});
});


/********字体*************************/
var changewordflag = 0;
function changeword(){
	if(changewordflag==0){
		document.getElementById('book2function').style.display = "none";
		$('#changewordfont').fadeIn(1000); changewordflag = 1;}
	else{ document.getElementById('changewordfont').style.display = "none"; document.getElementById('book2function').style.display = "block"; changewordflag = 0;}
	}
	
$(document).ready(function(){
$('#back3').bind('click',function(){
	  document.getElementById('changewordfont').style.display = "none";
	  document.getElementById('book2function').style.display = "block";
	});
});
/********背景*************************/
var changewordbgflag = 0;
function changewordbackground(){
	if(changewordbgflag==0){
		document.getElementById('book2function').style.display = "none";
		$('#changewordbg').fadeIn(1000); changewordbgflag = 1;}
	else{ document.getElementById('changewordbg').style.display = "none"; document.getElementById('book2function').style.display = "block"; changewordbgflag = 0;}
	}
	
$(document).ready(function(){
$('#back6').bind('click',function(){
	  document.getElementById('changewordbg').style.display = "none";
	  document.getElementById('book2function').style.display = "block";
	});
});

	
function changetofont1(){
		document.getElementById('book2_img11').src="book2/竖2/1.png";
		document.getElementById('book2_img10').src="book2/竖2/2.png";
		document.getElementById('book2_img9').src="book2/竖2/3.png";
		document.getElementById('book2_img8').src="book2/竖2/4.png";
		document.getElementById('book2_img7').src="book2/竖2/5.png";
		document.getElementById('book2_img6').src="book2/竖2/6.png";
		document.getElementById('book2_img5').src="book2/竖2/7.png";
		document.getElementById('book2_img4').src="book2/竖2/8.png";
		document.getElementById('book2_img3').src="book2/竖2/9.png";
		document.getElementById('book2_img2').src="book2/竖2/10.png";
		//alert("设置成功");
		};
function changetofont2(){
		document.getElementById('book2_img11').src="book2/竖1/1.png";
		document.getElementById('book2_img10').src="book2/竖1/2.png";
		document.getElementById('book2_img9').src="book2/竖1/3.png";
		document.getElementById('book2_img8').src="book2/竖1/4.png";
		document.getElementById('book2_img7').src="book2/竖1/5.png";
		document.getElementById('book2_img6').src="book2/竖1/6.png";
		document.getElementById('book2_img5').src="book2/竖1/7.png";
		document.getElementById('book2_img4').src="book2/竖1/8.png";
		document.getElementById('book2_img3').src="book2/竖1/9.png";
		document.getElementById('book2_img2').src="book2/竖1/10.png";
		//alert("设置成功");
		};	
function changetofont3(){
		document.getElementById('book2_img11').src="book2/竖1/1.png";
		document.getElementById('book2_img10').src="book2/竖1/2.png";
		document.getElementById('book2_img9').src="book2/竖1/3.png";
		document.getElementById('book2_img8').src="book2/竖1/4.png";
		document.getElementById('book2_img7').src="book2/竖1/5.png";
		document.getElementById('book2_img6').src="book2/竖1/6.png";
		document.getElementById('book2_img5').src="book2/竖1/7.png";
		document.getElementById('book2_img4').src="book2/竖1/8.png";
		document.getElementById('book2_img3').src="book2/竖1/9.png";
		document.getElementById('book2_img2').src="book2/竖1/10.png";
		//alert("设置成功");
		};
function changetofont4(){
		document.getElementById('book2_img11').src="book2/竖4/1.png";
		document.getElementById('book2_img10').src="book2/竖4/2.png";
		document.getElementById('book2_img9').src="book2/竖4/3.png";
		document.getElementById('book2_img8').src="book2/竖4/4.png";
		document.getElementById('book2_img7').src="book2/竖4/5.png";
		document.getElementById('book2_img6').src="book2/竖4/6.png";
		document.getElementById('book2_img5').src="book2/竖4/7.png";
		document.getElementById('book2_img4').src="book2/竖4/8.png";
		document.getElementById('book2_img3').src="book2/竖4/9.png";
		document.getElementById('book2_img2').src="book2/竖4/10.png";
		//alert("设置成功");
		};			
/********搜索*************************/
var sousuoflag = 0;
function showsousuo(){
	if(sousuoflag==0){
		document.getElementById('book2function').style.display = "none";
		$('#sousuo').fadeIn(1000); sousuoflag = 1;}
	else{ document.getElementById('sousuo').style.display = "none"; document.getElementById('book2function').style.display = "block"; sousuoflag = 0;}
	}
	
$(document).ready(function(){
$('#back4').bind('click',function(){
	  document.getElementById('sousuo').style.display = "none";
	  document.getElementById('book2function').style.display = "block";
	});
});

/********跳转*************************/
var jumptoflag = 0;
function showjumpto(){
	if(jumptoflag==0){
		document.getElementById('book2function').style.display = "none";
		$('#changepage').fadeIn(1000); jumptoflag = 1;}
	else{ document.getElementById('sousuo').style.display = "none"; document.getElementById('book2function').style.display = "block"; jumptoflag = 0;}
	}
	
$(document).ready(function(){
$('#back5').bind('click',function(){
	  document.getElementById('changepage').style.display = "none";
	  document.getElementById('book2function').style.display = "block";
	});
});

function closefunction(){
	document.getElementById('book2function').style.display = 'none';
	document.getElementById('book3function').style.display = 'none';
	}