var Hero=function(width,height,x,y){
	this.span;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.st;
	this.img;
	this.heroSrc=1;
	this.status="s";	//동작변수

	this.gravity=0.08;	//중력을 주기위한 변수;
	this.velX=0;			//x축 이동을 위한 변수
	this.velY=0;			//중력가속도를	주기위한 변수
	this.jumping=false;

	this.spanHP;	//HP를 나타내는 상태바
	this.spanHPto0;
	this.hitByEnemy=0;

	this.st;

	this.init=function(){
		this.span=document.createElement("span");
		this.span.style.position="absolute";
		this.span.style.left=this.x+"px";
		this.span.style.top=this.y+"px";
//		this.span.style.background="yellow";
	
	//스팬의 크기는 작게하고 오버플로우를 없애면 그림이 정지한 상태로 움직일 수 있다.
	//스팬의 아랫부문과 이미지의 아랫부분의 위치를 통일시켜야 튕기지 않는 효과가 남.
		this.span.style.width=this.width-45+"px";
		this.span.style.height=this.height+"px";


		this.img=document.createElement("img");
		this.img.src="./images/1.png";
		this.img.style.position="absolute";
		this.img.style.left="-30px";
		this.img.style.width=this.width+10+"px";
		this.img.style.height=this.height+12+"px";

		//HP생성.
		this.spanHP=document.createElement("span");
		this.spanHP.style.position="absolute";
		this.spanHP.style.left=-30+"px";
		this.spanHP.style.top=this.y-5+"px";
		this.spanHP.style.width=this.width-5+"px";
		this.spanHP.style.height=5+"px";
		this.spanHP.style.background="yellow";
		this.spanHP.style.overflow="hidden";
		this.spanHP.style.border="1px solid #000000";

		//닳는 HP생성.
		this.spanHPto0=document.createElement("span");
		this.spanHPto0.style.position="absolute";
		this.spanHPto0.style.left=this.width-5+"px";
		this.spanHPto0.style.top=-1+"px";
		this.spanHPto0.style.width=this.width-5+"px";
		this.spanHPto0.style.height=5+"px";
		this.spanHPto0.style.background="red";
		this.spanHPto0.style.border="1px solid #000000";
		
		
		this.span.appendChild(this.spanHP);
		this.spanHP.appendChild(this.spanHPto0);
		this.span.appendChild(this.img);

		this.move();
		this.walkHero();
		
		return this.span;
	}

	this.move=function(){
		var me=this;

		this.velY+=this.gravity;
		this.y+=this.velY;
		this.x+=this.velX;

		if(this.velY > 0){
			this.jumping=false;
		}

		if(this.x<0){
			this.x=0;
		}

		if(this.y>700||parseInt(this.spanHPto0.style.left)<0){	//게임이 끝나는 조건. 떨어지거나 피가 다 닳았을때
			this.y=700;
			content.removeChild(this.span);
			clearTimeout(this.st);
		
		//게임 오버
			gameover=new GameOver(500,400,100,100,score);
			content.appendChild(gameover.init());

			onOff=false;

			return;
		}
		
		//생성된 벽돌의 수만큼 충돌검사.
		for(var a=0;a<block.length;a++){
			for(var i=0;i<block[a].length;i++){
				if(hitTest(this.span, block[a][i].span)&&this.jumping==false){
					this.velY=0;
					this.x-=(block[a][i].velX/6);
					this.y=parseFloat(block[a][i].span.style.top)-this.height;
				}
			}
		}

		this.span.style.top=this.y+"px";
		this.span.style.left=this.x+"px";

		this.st=setTimeout(function(){
			me.move();
		},7);
	}

	this.walkHero=function(){
		var me=this;

		//생성된 적들의 수만큼 충돌검사
		for(var i=0;i<enemy.length;i++){
			if(hitTest(this.span, enemy[i].span)){
				this.hitByEnemy-=1;
				this.spanHPto0.style.left=this.width-5+this.hitByEnemy+"px";
				this.status="i";	//아파하는 사진
			}
		}
		
		this.img.src="./images/"+this.status+this.heroSrc+".png";
		this.heroSrc++;
		if(this.heroSrc>8){this.heroSrc=1;}
		
		this.st=setTimeout(function(){
			me.walkHero();
		},90);
	}
}