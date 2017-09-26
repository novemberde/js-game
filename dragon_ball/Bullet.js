var Bullet=function(width,height,x,y,bulletVelY){
	this.span;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y+25;
	this.velX=20;		//총알속도
	this.velY=bulletVelY;
	this.st;
	this.stHitTest;

	this.init=function(){
		this.span=document.createElement("span");
		this.span.style.position="absolute";
		this.span.style.left=this.x+"px";
		this.span.style.top=this.y+"px";

		this.span.style.width=this.width+"px";
		this.span.style.height=this.height+"px";

		this.span.innerHTML="<img src='./images/pa.png'>";
		this.span.style.fontSize=this.width+"px";
		this.span.style.color="red";

		this.move();
		this.hitTest();
		return this.span;
	}

	this.move=function(){
		var me=this;

		this.x+=this.velX;
		this.y+=this.velY;
		//한계점을 넘어가면 사라진다. 메모리의 효율성을 위해.
		if(this.x>screenW){
			this.removeBullet();
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
		clearTimeout(this.stHitTest);
		content.removeChild(this.span);
	}

	this.hitTest=function(){	//검사하는 시간이 부족하여 에러가 생긴다. 히트테스트는 빠른시간안에 검사하여 총알이 다시 생성되기 전에 마쳐야한다.
		var me=this;

		for(var i=0;i<enemy.length;i++){
			if(hitTest(this.span, enemy[i].span)){
		//점수를 측정한다.
				score+=10;
				scoreBox.span.innerHTML="SCORE: "+score;
		//적과 충돌하면 총알과 적이 사라진다.
				this.removeBullet();
				content.removeChild(enemy[i].span);
				enemy[i].enemyKillFlag=false;
				enemy.splice(i,1);
				return;
			}
		}
		
		if(onKingEnemy==false){		//왕이 생성되었을때
			if(hitTest(this.span, kingEnemy.span)){
		
				score+=10;//점수를 측정한다.
				scoreBox.span.innerHTML="SCORE: "+score;
		
				this.removeBullet();//적과 충돌하면 총알과 적이 사라진다.
		
				kingEnemyCount++;//10대이상을 맞으면 죽는다.
				if(kingEnemyCount>kingEnemyLevel){	//kingEnemyLevel은 맞는 횟수. 초기값 10.
	//					content.removeChild(kingEnemy[i].span);	//킹에너미 객체에서 이미 제거함. 두번은 필요없다.
	//					kingEnemy.splice(i,1);					//스플라이스를 하면 갑자기 길이가 줄어들어 오류가 나타난다.

					kingEnemy.killed=true;
					onKingEnemy=true;
	

					kingEnemyCount=0;
					kingEnemyLevel+=5;				//시간이 지날수록 왕이 세진다.
				}
				return;
			}
		}

		this.stHitTest=setTimeout(function(){
			me.hitTest();
		},1);
	}
}