var EnemyBullet=function(width,height,x,y,img){	//img 형식 "<img src='./images/pa.png'>"
	this.span;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.velX=-5;		//총알속도
	this.velY=0;
	this.img=img;
	this.directionY=[-5,-3,-1,0,1,3,5];		//총알 위아래 방향.
	this.st;
	
	this.init=function(){
		this.span=document.createElement("span");
		this.span.style.position="absolute";
		this.span.style.left=this.x+"px";
		this.span.style.top=this.y+25+"px";

		this.span.style.width=this.width+"px";
		this.span.style.height=this.height+"px";

		this.span.innerHTML=this.img;
		this.span.style.fontSize=this.width+"px";
		this.span.style.color="red";

		this.velY=this.directionY[getRandom(this.directionY.length)];

		this.move();
		return this.span;
	}

	this.move=function(){
		var me=this;

		this.x+=this.velX;
		this.y+=this.velY;	//방향은 랜덤으로 나온다

		//x축의 한계점을 넘어가면 사라진다. 메모리의 효율성을 위해.
		if(this.x<0){
			this.removeBullet();
			return;
		}
		
		if(hitTest(this.span, man.span)){
	//히어로와 충돌하면 HP가 닳는다.
			this.removeBullet();

			man.hitByEnemy-=5;
			man.status="i";
			man.spanHPto0.style.left=man.width-5+man.hitByEnemy+"px";

			return;
		}
		this.span.style.left=this.x+"px";
		this.span.style.top=this.y+"px";

		this.st=setTimeout(function(){
			me.move();
		},30);
	}

	this.removeBullet=function(){
		clearTimeout(this.st);
		content.removeChild(this.span);
	}
}