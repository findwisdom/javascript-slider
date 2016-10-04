function moveElement(elementID,final_x,final_y,intervial){
	if(!document.getElementById) return false;
	if(!document.getElementById(elementID)) return false;
	var elem = document.getElementById(elementID);
	if(elem.movement){
		clearTimeout(elem.movement);
	}
	if(!elem.style.left){
		elem.style.left = "0px";
	}
	if(!elem.style.top){
		elem.style.top = "0px";
	}
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if(xpos == final_x&&ypos == final_y){
		return true;
	}
	if(xpos>final_x){
		var dist = Math.ceil((xpos-final_x)/10);
		xpos = xpos - dist;
	}
	if(xpos<final_x){
		var dist = Math.ceil((final_x-xpos)/10);
		xpos = xpos + dist;
	}
	if(ypos>final_y){
		var dist = Math.ceil((ypos-final_y)/10);
		ypos = ypos - dist;
	}
	if(ypos<final_y){
		var dist = Math.ceil((final_y-ypos)/10);
		ypos = ypos + dist;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	var repeat ="moveElement('"+elementID+"',"+final_x+","+final_y+","+intervial+")";
	elem.movement =setTimeout(repeat,intervial);
}

function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild ==targetElement){
		newElement.appendChild(targetElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

function prepareSlideshow(){
	var nav= document.getElementById("nav");
	var slideshow = document.createElement("div");
	slideshow.setAttribute("id","slideshow");
	var preview = document.createElement("img");
	preview.setAttribute("src","http://oe9d5k8dj.bkt.clouddn.com/slideshow.jpg");
	preview.setAttribute("alt","the preview");
	preview.setAttribute("id","preview");
	slideshow.appendChild(preview);
	insertAfter(slideshow,nav);
	var link =document.getElementsByTagName("a");
	var destination;
	for(var i=0;i<link.length;i++){
			link[i].onmouseover=function(){
			destination=this.getAttribute("name");
			if(destination.indexOf("1")!=-1){
				moveElement("preview",0,-145,5);
			}
			if(destination.indexOf("2")!=-1){
				moveElement("preview",0,-518,5);
			}
			if(destination.indexOf("3")!=-1){
				moveElement("preview",0,-885,5);
			}
			if(destination.indexOf("4")!=-1){
				moveElement("preview",0,-1255,5);
			}
			if(destination.indexOf("5")!=-1){
				moveElement("preview",0,-1628,5);
			}
			if(destination.indexOf("6")!=-1){
				moveElement("preview",0,-2005,5);
			}
		}
	}
}
window.onload = function(){
	prepareSlideshow();
}
