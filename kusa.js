(function( $ ){
  $.fn.kusa = function(options) {
      var windowWidth = $(window).width();
      var windowHeight = $(window).height();

      var defaults = {
          matflg : false,
          setchar : 'w',
          color : '#00ff00',
          direction : 0 
      };

      var setting = $.extend(defaults, options);
	  var matflg = setting.matflg;
      var setchar = setting.setchar;
	  var color = setting.color;
	  var direction = setting.direction; // 0:横 1:縦
	  if(matflg){
	      setchar = String.fromCharCode(111+Math.random()*33);
	  }
      this.css("height",windowHeight);
      this.css("position","relative");
      var myelm = this;

      var j = 0;
      setInterval(function(){
          var strlen = Math.round(Math.random()*30) + 3;
          var toprand = Math.round(Math.random()* windowHeight);
    	  var size = 27; 
          var boxstr;
		  if(matflg){
		      boxstr = String.fromCharCode(0x3041+Math.random()*80);
		  } else {
		      boxstr = "";
		  }

          var i = 0;
          for(i = 0; i < strlen; i++){
	  		if(matflg){
            	boxstr = boxstr + String.fromCharCode(0x3041+Math.random()*80);
			} else {
            	boxstr = boxstr + setchar;
			}
          }
          if(direction == 0){
			  myelm.append("<div class='wbox' style='position:absolute;top:"+toprand+"px;left:0px;color:"+color+";font-size:"+size+"px;'>"+boxstr+"</div>");
			  $(".wbox").animate(
					{"left":windowWidth + "px"}, 
					{duration: 6000, 
					 easing: 'swing',
					 complete: function(){ this.remove(); }
					});
		 } else {
			  myelm.append("<div class='wbox' style='position:absolute;top:0px;left:"+toprand+"px;color:"+color+";font-size:"+size+"px;'>"+boxstr+"</div>");
			  $(".wbox").animate(
					{"top":windowWidth + "px"}, 
					{duration: 6000, 
					 easing: 'swing',
					 complete: function(){ this.remove(); }
					});
		 }
      },100);
  };
})( jQuery );

