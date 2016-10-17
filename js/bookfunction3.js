// JavaScript Document




function startMove(obj)

{

var oDrag=document.getElementById('book3');

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





}

}



var book3flag = 0;
$(document).ready(function(){
$('#book3clickarea').bind('click',function(){
	if(book2flag == 0){ $('#book3function').fadeIn(1000); book2flag =1;}
	else{ document.getElementById('book3function').style.display="none"; book2flag =0;} 
	});
});

var limitimeflag3 = 0;
function showtimedialog3(){
	if(limitimeflag3==0){
		document.getElementById('book3function').style.display = "none";
		$('#limittime2').fadeIn(1000); limitimeflag3 = 1;}
	else{ document.getElementById('limittime2').style.display = "none"; document.getElementById('book3function').style.display = "block"; limitimeflag3 = 0;}
	}