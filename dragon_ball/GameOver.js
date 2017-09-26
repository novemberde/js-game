var GameOver=function(width,height,x,y,score){
	this.span;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.flash=true;
	this.score=score;

	this.init=function(){
		this.span=document.createElement("span");
		this.span.style.width=this.width+"px";
		this.span.style.height=this.height+"px";
		this.span.style.fontStyle="italic";
		this.span.style.fontSize="50pt";
		this.span.style.textAlign="center";
		this.span.style.fontWeight="bold";
		this.span.style.zIndex="5";		//글자가 그림에 묻히지 않기 위해

		this.span.style.position="absolute";
		this.span.style.left=this.x+"px";
		this.span.style.top=this.y+"px";

		this.span.innerHTML="GAME OVER<br>SCORE: "+this.score+"<br><br><a style='font-size:20pt'>CONTINUE<br>PRESS ENTER<a>";
		
		this.move();

		return this.span;
	}

	this.move=function(){
		var me=this;

		this.span.style.display=(this.flash)? "block":"none";
		this.flash=!this.flash;


		setTimeout(function(){
			me.move();
		},500);
	}
}