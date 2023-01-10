//função de slides
	var slide =0;
	sslide();

	function sslide(){
		var i;
		var slides = document.getElementsByClassName("aslide");
		var dots = document.getElementsByClassName("dot");
	
		for (i=0; i< slides.length;i++){
			slides[i].style.display = "none";
		}
		slide++;
		if(slide> slides.legth) 
		{
			slide=1;
		}
		for(i = 0; i< dots.length;i++){
			dots[i].className=dots[i].className.replace("active", "");
		}
		
		slides[slide-1].style.display="block";
		dots[slide-1].className+= "active";
		setTimeout(sslide, 3500);
	
	}
	
//função dropdown
	function myFunction(){
		document.getElementById("dropdown").classList.toggle("show");
	}

	window.onmouseover = function(event){
	if (event.target.matches('.fundomenu')){
		var dropdowns = document.getElementsByClassName("menu-contentjs");
		var i;
    for (i = 0; i < dropdowns.length; i++){
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
				}
			}
		}
	}
	
//funçao passcontainer
var div =1;
	var i;
	var divs = document.getElementsByClassName("container3");
	var dots = document.getElementsByClassName("dot");
		for (i=1; i< divs.length;i++){
			divs[i].style.display = "none";
		}
		i=1;
		

	function sdiv(){
		window.onclick = function(event){
	if (event.target.matches('.setaright')){
			for (i=0; i< divs.length;i++){
			divs[i].style.display = "none";
		}
			div++;
		if(div> divs.length) 
		{
			div=1;
		}
		for(i = 0; i< dots.length;i++){
			dots[i].className=dots[i].className.replace("active", "");
		}
		console.log(`This is ${div} DIVD!`);

		divs[div-1].style.display="block";
		dots[div-1].className+= "active";
	
	}
	
	if (event.target.matches('.setaleft')){
	

		for (i=0; i< divs.length;i++){
			divs[i].style.display = "none";
		}
			div--;
		if(div< 1) 
		{
			div=6;
		}
		for(i = 0; i> 0;i--){
			dots[i].className=dots[i].className.replace("active", "");
		}
		console.log(`This is ${div} DIVE!`);

		divs[div-1].style.display="block";
		dots[div-1].className+= "active";
	
			}
		}
	}