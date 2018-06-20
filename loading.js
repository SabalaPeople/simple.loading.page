
    // use document.body.classList.add("loading");
	// or $('body').addClass('loading');
	window.onload = function (){
		let pathName = document.location.pathname;
		let index = pathName.substr(1).indexOf("/");
		let result = pathName.substr(0,index+1);
	    
		let imgPath = result + '/img/ajax-loader.gif';
		let str = '';
		str += '<div class="modal">';
		str += '<div align="center" style="height:50%;"></div>';
		str += '<div align="center" id="waitingMsg"></div>';
		str += '<div><img src="' + imgPath + '"/></div>';
		str += '</div>';
		
		document.body.innerHTML += str;
		
	}