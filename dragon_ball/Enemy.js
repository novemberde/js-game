//악당을 생성하는 개체
var Enemy=function(width,height,x,y,srcMon){
	this.span;
	this.width=width;
	this.height=height;
	this.x=x;					//x축 좌표
	this.y=y;					//y축 좌표
	this.stepX=5;
	this.img;
	this.srcCount=1;
	this.src;
	this.srcMon=srcMon;
	this.st;
	this.enemyKillFlag=true;

	this.init=function(){
		this.span=document.createElement("span");
		this.span.style.width=this.width-60+"px";	//충돌하는 부위 설정.
		this.span.style.height=this.height-20+"px";
		this.span.style.position="absolute";
		this.span.style.left=this.x+this.posX+"px";
		this.span.style.top=this.y+"px";

		this.img=document.createElement("img");
		this.img.style.width=this.width+"px";		//충돌하는 부위를 제외하고 이미지크기는 잘 나와야한다.
		this.img.style.height=this.height+"px";
		this.img.style.position="absolute";
		this.img.style.left=-40+"px";
		this.img.style.top=-20+"px";
		this.img.src=(this.srcMon)+(this.srcCount)+".png";

		this.span.appendChild(this.img);
	//생성될때 총알이 날아간다. 방향은 랜덤방향!
		var enemyBullet=new EnemyBullet(bulletSize,bulletSize,this.x,this.y,"<img src='./images/pa.png'>");
		content.appendChild(enemyBullet.init());

		this.move();

		return this.span;
	}

	this.move=function(){
		var me=this;
		this.x-=this.stepX;
		this.span.style.left=this.x+"px";

		if((this.x<-this.width&&this.enemyKillFlag)){
			content.removeChild(this.span);
			clearTimeout(this.st);
			return;
		}
		
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