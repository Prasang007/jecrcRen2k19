
var DocWidth = $(window).width()
var DocHeight = $(document).height()
$(document).ready(() => {
			
		
			$(window).load(() => {
				// $('#center-preload').delay(2000).fadeOut('slow',"linear",function(){ clearInterval(timerId) })
					
					console.log(DocWidth)
					if(DocWidth>=800){
					$('.jharokha_img').attr("src","elmt/jharokha1old.png")
					// $('.jharokha_img').addClass("jharokha1")
					// $('.jharokha_img').removeClass("jharokha2")
					$('.jharokha').addClass("jharoka-back")
					$('.pillar').addClass('inactive')
					// $('.gate-contain').remove()
					// $('.knobs-right').remove()
					// $('.knobs-left').remove()
					// $('.padlock-img').remove()
					// $('.plate').remove()
					// $(".swords_img").addClass("inactive")
				}
				else
				{	
					// $('.gate-contain').remove()
					// $('.knobs-right').remove()
					// $('.knobs-left').remove()
					// $('.padlock-img').remove()
					// $('.plate').remove()
					$('.pillar').removeClass('inactive')
					$('.jharokha').addClass("jharoka-back")
					$('.pillar').attr('height',DocHeight)
					
					// $('.hang1_icon').addClass("cenpunch_ani")
					// $('.hang2_icon').addClass("cenpunch_ani")
					// $('.hang3_icon').addClass("cenpunch_ani")
					// $('.hang4_icon').addClass("cenpunch_ani")
					// $(".swords_img").addClass("inactive")					

				}
			})
		})

			$(window).resize(() =>{
					var DocWidth = $(window).width()
					var DocHeight = $(document).height()
					console.log(DocWidth)
					console.log(DocHeight)
					if(DocWidth>=800){
					$('.jharokha_img').attr("src","elmt/jharokha1old.png")
					// $('.jharokha_img').addClass("jharokha1")
					// $('.jharokha_img').removeClass("jharokha2")
					$('.pillar').addClass('inactive')
					
				}
				else{
					$('.jharokha_img').attr("src","elmt/jarokha_gate_final.png")
					// $('.jharokha_img').removeClass("jharokha1")
					// $('.jharokha_img').addClass("jharokha2")
					$('.pillar').attr('height',DocHeight)
					$('.pillar').removeClass('inactive')
					// $('.gate-contain').remove()
					// $('.knobs-right').remove()
					// $('.knobs-left').remove()
					// $('.padlock-img').remove()
					// $('.plate').remove()
					$('.jharokha').addClass("jharoka-back")
					// $('.hang1_icon').addClass("cenpunch_ani")
					// $('.hang2_icon').addClass("cenpunch_ani")
					// $('.hang3_icon').addClass("cenpunch_ani")
					// $('.hang4_icon').addClass("cenpunch_ani")
				}
					
				
		})