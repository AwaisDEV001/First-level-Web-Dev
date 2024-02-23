var crsr =document.querySelector ("#corsor")
var crsrblur =document.querySelector ("#corsor-blur")
document.addEventListener("mousemove" ,function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    crsrblur.style.left = dets.x-200+"px"
    crsrblur.style.top = dets.y-200+"px"
} ) 

gsap.to("#nav" ,{
    backgroundColor:"black",
    height:"100px",
    duration:1,
    scrollTrigger:{
        trigger :"#nav",
        scroller:"body",
        start: "top -30%",
        scrub:1.5
    }
})

gsap.to("#main" ,{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -20%",
        end:"top -80%",
        scrub:1
    }
})