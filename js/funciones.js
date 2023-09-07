
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