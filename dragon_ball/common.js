/*앞으로 자주 사용할 함수를 정의해놓자. 생산성 up*/
//0~max값까지 랜덤값 반환하는 함수.
function getRandom(max){
	var n	= Math.floor(Math.random()*max);
	return n;
}

//min~max 까지의 랜덤값 반환하는 함수
function getRandomByRange(min,max){
	var r=Math.random();
	var num=Math.floor(r*(max+1-min)+min);
	return num;
}

function hitTest(me, target) {
//두물체간 충돌 여부 판단 span 또는 div
	me_x= parseInt(me.style.left);
	me_y= parseInt(me.style.top);
	me_width=parseInt(me.style.width);
	me_height=parseInt(me.style.height);

	target_x= parseInt(target.style.left);
	target_y= parseInt(target.style.top);
	target_width=parseInt(target.style.width);
	target_height=parseInt(target.style.height);

	var result1=(me_x >= target_x) && (me_x <= (target_x+target_width));
	//나의 x좌표위치가 타겟의 x range 내에 있는지 판단 
	var result2=(me_x+me_width >= target_x) && (me_x+me_width <= (target_x+target_width));
	//나의 가로폭이 타겟의 가로폭 내에 있는지 판단

	var result3=(me_y >= target_y) && (me_y <= (target_y+target_height));
	//나의 y좌표위치가 타겟의 세로폭 내에 있는지 판단
	var result4=(me_y+me_height >= target_y) && (me_y+me_height <= (target_y+target_height));
	//나의 y폭이 타겟의 세로폭 내에 있는지 판단

	return (result1 || result2) && (result3 || result4);
}