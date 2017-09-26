var Score=function(width,height,x,y){
	this.span;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;

	this.init=function(){
		this.span=document.createElement("span");
		this.span.style.width=this.width+"px";
		this.span.style.height=this.height+"px";
		this.span.style.fontStyle="italic";
		this.span.style.fontSize="25pt";

		this.span.style.position="absolute";
		this.span.style.left=this.x+"px";
		this.span.style.top=this.y+"px";

		return this.span;
	}
}