function keyEvent(){

	window.addEventListener("keydown",function(){
		var key=event.keyCode;
		if(key==13){location.href="./intro.html";}
		if(onOff==false){	//enter키룰 제외한 모든키는 먹지 않는다. 재시작 가능.
			return;
		}

		if(key==32){
			if(countJump>=jumpLimit){
				return;
			}
			man.status="j";
			man.velY=-4.3;
			man.jumping=true;
			countJump++;
		}

		if(key==38){	//위아래 에너지파
			bulletVelY=-10;
		}else if(key==40){
			bulletVelY=10;
		}

		if(key==17){
			if(bulletInterval>3||bulletInterval==0){
				bulletInterval=0;
				var bullet=new Bullet(bulletSize,bulletSize,man.x+parseInt(man.span.style.width),man.y,bulletVelY);
				man.status="e";
				content.appendChild(bullet.init());
			}
			bulletInterval++;
		}
		
		if(key==37){
			man.status="r";
			man.velX=-2;
		}else if(key==39){
			man.status="";
			man.velX=2;
		}
	});
	window.addEventListener("keyup",function(){
		if(onOff==false){return;}	//r버튼을 제외한 모든키는 먹지 않는다

		var key=event.keyCode;
		
		if(key==17){bulletInterval=0;}

		if(key==37||key==39||key==17){
			man.status="s";
			man.velX=0;
			bulletVelY=0;
		}

		if(key==32){
			man.status="s";
			man.jumping=false;
		}
	});
}