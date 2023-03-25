gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !==1) {


ScrollSmoother.create({
  wrapper:'.wrapper',
  content:'.content',
  smooth: 2,
  effects:true
})

gsap.fromTo('.welcome', { opacity: 5 }, {
  opacity: 0,
  scrollTrigger: {
    trigger: '.welcome',
    start: 'top',
    end: '1000',
    scrub:true
  }
})
let itemsL = gsap.utils.toArray('.g_left .gallery_item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-450',
				end: '-100',
				scrub: true
			}
		})
	})
  let itemsR = gsap.utils.toArray('.g_right .gallery_item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-650',
				end: 'top',
				scrub: true
			}
		})
	})

}