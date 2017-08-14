var index=	0;
var value=0;

function Start(){
	
	if(value===0){
		return;
	}
	value=0;
	Show();
}
function Stop(){
	value=1;
	Show();
}
Show();
function Show(){
	if (value === 0) {
		var i=0;
	    var slides = document.getElementsByClassName("Slides");
	    for(i=0;i<slides.length;i++){
	    	slides[i].style.display="none";
	    }
	    index++;
	    if(index>slides.length){
	    	index=1;
	    }
	    slides[index-1].style.display="block";
	    setTimeout(Show,1000);
	}
}