$.fn.extend({
    makladPopup: function(options) {
        options = $.extend( {}, $.makladPopup.defaults, options );

        this.each(function() {
            new $.makladPopup(this,options);
        });
        return this;
    }
});

$.makladPopup = function(ele, options) {
	var item_name = "makladPopup-"+options.id;
	var html_container = "<div id='"+item_name+"' class='ui-draggable maklad-popup'><div><h6 class='title'>"+options.title+"</h6><div class='close'><img src='images/close.png'></div><div class='content-iframe'><iframe src='"+options.url+"'></iframe></div></div></div>";

	//init
	$(ele).click(function(e){
		e.preventDefault();
		//add html container
		$('body').append(html_container);
		//set width and height
		$("#"+item_name).width(options.width + 20);
		$("#"+item_name).height(options.height + 45);
		$("#"+item_name+" .content-iframe iframe").width(options.width);
		$("#"+item_name+" .content-iframe iframe").height(options.height);

		//make content draggable
		$("#"+item_name).draggable();
		//open
        $("#"+item_name).css('display', 'block');
        //close
	    $("#"+item_name+" .close").click(function(){
	        $("#"+item_name).remove();
	        return;
	    });
    });
};

// option defaults
$.makladPopup.defaults = {
	id: "maklad",
	width: 620,
	height: 400,
	url: "http://mostafa.maklad.itdschools.com/",
	title: ""
};