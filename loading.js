
    // use document.body.classList.add("loading");
	// or $('body').addClass('loading');
	window.onload = function (){
		let pathName = document.location.pathname;
		let index = pathName.substr(1).indexOf("/");
		let result = pathName.substr(0,index+1);
	    
		let imgPath = result + '/img/ajax-loader.gif';
		
		let modalDiv = document.createElement('div');
		modalDiv.classList.add('modal');
		
		let blankDiv = document.createElement('div');
		blankDiv.setAttribute('align', 'center');
		blankDiv.setAttribute('style', 'height:50%;');
		
		let msgDiv = document.createElement('div');
		msgDiv.setAttribute('id','waitingMsg');
		msgDiv.setAttribute('align','center');
		
		let img = document.createElement('img');
		img.setAttribute('src', imgPath);
		
		let imgDiv = document.createElement('div');
		imgDiv.appendChild(img);
		
		modalDiv.appendChild(blankDiv);
		modalDiv.appendChild(msgDiv);
		modalDiv.appendChild(imgDiv);
		
		document.body.appendChild(modalDiv);
	}
