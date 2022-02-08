const preload= document.getElementById('preloader_elem');


/*Gsap works like movie edit by creating different timelines to the play*/
const timeline = gsap.timeline({paused: true}) //used to pause or create delay
const container = document.querySelector('.container__two')
const container2 = document.querySelector('.container__one')


const text = document.querySelector('.content__text')



// to(container,object)
timeline.to(container,{clipPath:'circle(20.3% at 50% 50%)'})

//timeline.to(container,{clipPath:'circle(20.3% at 100% 50%)'},'+=1')

//timeline.to(container,{clipPath:'polygon(47% 44%, 47% 44%, 100% 100%, 0% 100%)'},'+=1')

//closing the element
//polygon(93% 7%,  93% 7%, 93% 93%, 93% 93%)
timeline.to(container,{clipPath:'circle(0 at 100% 50%)'},'+=1') //+=1  is a time function will start after ie 1s
//creating a timeline by using an element
timeline.to(text,{color:'white'},'+=.2')

//scaling up container two that we reduced in sass

timeline.to(container2,{clipPath:'polygon(0 0,100% 0,100% 100%,0 100%)'},'-=.3') //making transition start earlier


function on_complete_load(){
    timeline.play();
}


