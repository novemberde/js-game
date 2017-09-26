var CreateInterval=function(object){
	this.object=object;

	this.init=function(){
		var me=this;

		setTimeout(function(){
			me.init();
		},100);
	}
}