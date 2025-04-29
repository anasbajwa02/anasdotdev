var typed =new Typed(".smart-text",{
			strings:["WebSite Developer","Graphic Designer","SEO Expert",],
			typeSpeed:100,
			backSpeed:30,
			loop:true
		})
       let myBtn=document.getElementById("btn")
       let mBackground=document.getElementById("over-all")
       let logoClr=document.getElementById('logo')
       let anch=document.getElementById("anc")
		let anchr=document.getElementById("anch")
		let anchor=document.getElementById("ancho")
		let anchorr=document.getElementById("anchor")
		let about=document.getElementById("About")
		let abouttitel=document.getElementById("about-titel")
		let services=document.getElementById("services")
		let footer=document.getElementById("footer")
		let fthome=document.getElementById("ft-home")
		let ftabout=document.getElementById("ft-about")
		let ftservices=document.getElementById("ft-services")
		let ftcontact=document.getElementById("ft-contact")
		let ftcv=document.getElementById("ft-cv")
		let ftfb=document.getElementById("ft-fb")
		let ftinsta=document.getElementById("ft-insta")
		let fttwitr=document.getElementById("ft-twitr")
		let ftlnkd=document.getElementById("ft-lnkd")
		let itro=document.getElementById("itro")
        let cv=document.getElementById("anchor")


       function changemood() {
       	if(myBtn.style.color=="orange"){
			mBackground.style.transition="all .5s ease-in-out"
      		myBtn.style.color="white"
       		mBackground.style.background="#1F232E"
       		mBackground.style.color="white"
       		anch.style.color="white"
			anchr.style.color="white"
			anchor.style.color="white"
			anchorr.style.color="white"
			about.style.background="#14141f"
			about.style.color="white"
			abouttitel.style.color="#F6E7E7"
			services.style.color="white"
			footer.style.background="black"
			fthome.style.color="white"
			ftabout.style.color="white"
			ftservices.style.color="white"
			ftcontact.style.color="white"
			ftcv.style.color="white"
			cv.style.color="white"
			ftfb.style.color="#43CCF8"
			ftfb.style.background="whitesmoke"
			ftinsta.style.color="#43CCF8"
			ftinsta.style.background="whitesmoke"
			fttwitr.style.color="#43CCF8"
			fttwitr.style.background="whitesmoke"
			ftlnkd.style.color="#43CCF8"
			ftlnkd.style.background="whitesmoke"
			itro.style.background="#232121"
			itro.style.color="lightgray"
       	}else{
			mBackground.style.transition="all .5s ease-in-out"
       		myBtn.style.color="orange"
       		mBackground.style.background="#f7f7f7"
       		mBackground.style.color="black"
       		anch.style.color="black"
			anchr.style.color="black"
			anchor.style.color="black"
			anchorr.style.color="black"
			about.style.background="#f7f2eb"
			about.style.color="black"
			abouttitel.style.color="black"
			services.style.color="black"
			footer.style.background="white"
			fthome.style.color="black"
			ftabout.style.color="black"
			ftservices.style.color="black"
			ftcontact.style.color="black"
			ftcv.style.color="black"
			ftfb.style.color="whitesmoke"
			ftfb.style.background="#43CCF8"
			ftinsta.style.color="whitesmoke"
			ftinsta.style.background="#43CCF8"
			fttwitr.style.color="whitesmoke"
			fttwitr.style.background="#43CCF8"
			ftlnkd.style.color="whitesmoke"
			ftlnkd.style.background="#43CCF8"
			itro.style.background="lightgray"
			itro.style.color="black"
			cv.style.color="black"

     
       	}
       
       }
       let ham =document.getElementById("ham")
       let navbr=document.getElementById('nav')
       function hamburger() {
       if(ham.style.color =="orange"){
       	ham.style.color ="white"
       	navbr.style.display="none"
		navbr.style.transition="all .5s ease-in-out"
       	
       }else{
       	ham.style.color ="orange"
       	navbr.style.display="block"
		navbr.style.transition="all .5s ease-in-out"



       }

       }

	//whatsapp btn

	function whatsapp(){
		let number ="+923271628874";

		let url = "https://wa.me/"+ number ;
        window.open(url,"_blank").focus();



	}
	