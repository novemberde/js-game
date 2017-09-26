var Block=function(width,height,x,y,speedCount){
	this.span;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.velX=5;
	this.st;
	this.img;
	this.speedCount=speedCount;
	this.opacity=0.8;
	
	this.init=function(){
		this.span=document.createElement("span");
		this.span.style.position="absolute";
		this.span.style.left=this.x+"px";
		this.span.style.top=this.y+"px";
		this.span.style.zIndex="2";

		this.span.style.width=this.width+"px";
		this.span.style.height=this.height-10+"px";
		this.span.style.opacity=this.opacity;

		this.img=document.createElement("img");
		this.img.src="./images/Cloud_SU.png";
		this.img.style.top="-10px";
		this.img.style.left="-2px";
		this.img.style.position="absolute";
		this.img.style.height=this.height+20+"px";
		this.img.style.width=this.width+10+"px";
		this.span.appendChild(this.img);

		
		content.appendChild(this.span);

		this.move();
	}

	this.move=function(){

		var me=this;

		this.x-=this.velX;
		
		if(this.x<-this.width){
			content.removeChild(this.span);
			clearTimeout(this.st);
			return;
		}
		//disapearEndLine(this.x<-this.width, this.span,this.st)
		
		this.span.style.left=this.x+"px";

		this.st=setTimeout(function(){
			me.move();
		},(100/speedCount));
	}
}