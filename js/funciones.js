
gsap.set('.nav-bg', {
    backgroundColor: '#000',
    opacity: 0
})

const tl = gsap.timeline({
    scrollTrigger: {
        start: 'top+=70' ,
        end: '+=1' ,
        toggleActions: 'play none none reverse',
        scrub: 2
    }
})

tl.to('.nav-bg', {
    opacity: 1
})

// Esconder Hash

function myFunction () {
    // get the anchor link buttons
    const menuBtn = $('.scroll-btn');
    // when each button is clicked
    menuBtn.click(()=>{	
      // set a short timeout before taking action
      // so as to allow hash to be set
      setTimeout(()=>{
        // call removeHash function after set timeout
        removeHash();
      }, 5); // 5 millisecond timeout in this case
    });
  
    // removeHash function
    // uses HTML5 history API to manipulate the location bar
    function removeHash(){
      history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
    }
  };