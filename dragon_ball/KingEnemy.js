//보스몹을 생성
//bullet.js에서 몇대 이상을 충돌하면 사라지게 셋팅함.
var KingEnemy=function(width,height,x,y,srcMon){
	this.span;
	this.width=width;
	this.height=height;
	this.x=x;					//x축 좌표
	this.y=y;					//y축 좌표
	this.stepY=5;
	this.img;
	this.srcCount=1;
	this.src;
	this.srcMon=srcMon;
	this.st;
	this.bulletCount=0;			//총알을 쏘는 주기를 정한다.
	this.killed=false;

	this.init=function(){
		this.span=document.createElement("span");
		this.span.style.position="absolute";
		this.span.style.left=this.x+"px";
		this.span.style.top=this.y+"px";

	//스팬의 크기는 작게하고 오버플로우를 없애면 그림이 정지한 상태로 움직일 수 있다.
	//스팬의 아랫부문과 이미지의 아랫부분의 위치를 통일시켜야 튕기지 않는 효과가 남.
		this.span.style.width=this.width+"px";
		this.span.style.height=this.height+"px";

		this.img=document.createElement("img");
		this.img.src="./images/1.png";
		this.img.style.position="absolute";
		this.img.style.left="0px";
		this.img.style.width=this.width+10+"px";
		this.img.style.height=this.height+12+"px";

		this.span.appendChild(this.img);

		this.move();

		return this.span;
	}

	this.move=function(){
		var me=this;
		
		this.stepY=(this.y>600||this.y<100)? -this.stepY:this.stepY ;
		this.y+=this.stepY;
		this.span.style.top=this.y+"px";
		
		if(this.killed){	//this.x<-this.width||
		//kingEnemy가 죽으면 히어로의 생명력이 회복된다.
			man.hitByEnemy=0;		//맞는 에너지 초기화
			man.spanHPto0.style.left=man.width-5+"px";

			content.removeChild(this.span);
			clearTimeout(this.st);
			onKingEnemy=true;
			return;
		}

		//총알을 주기적으로 쏜다. 죽은 다음에도 쏜다. 이에 대한 해결책: 판별논리를 넣어 죽으면 동작하지 않도록! 실패
		if(this.bulletCount>10){

			var enemyBullet=new EnemyBullet(30,30,this.x,this.y,"<img src='./images/enemy/kingEnemyPa.png'>");
			content.appendChild(enemyBullet.init());
			this.bulletCount=0;
		}
		this.bulletCount++;
		
		this.img.src=(this.srcMon)+(this.srcCount)+".png";
		
		this.srcCount++;
		if(this.srcCount>11){
			this.srcCount=1;
		}
		

		this.st=setTimeout(function(){
			me.move();
		},90);
	}

}