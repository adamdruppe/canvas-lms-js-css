/**
 *  Add your custom beyondz Javascript for the Canvas LMS in this file.
 *  This is configured on the Canvas admin as a Global Javascript include.
 *  See this for more info: https://guides.instructure.com/m/4214/l/41896-how-do-i-add-custom-javascript-and-

css-files-to-my-account
 *
 * */
 
 //testing js:
 console.log("js working");
 
 /*
 //testing jquery
jQuery.noConflict();
*/
jQuery( document ).ready(function() {
	console.log("jQ working");
	
	/* Improve Priorities Quiz */  
	jQuery('.context-course_11 #question_482_question_text ol li, .context-course_12 #question_555_question_text ol li').prepend('<span class="dynamic"></span>');
	jQuery('.context-course_11 #question_481_question_text input, .context-course_12 #question_554_question_text input').each(function(i){
		jQuery(this).change(function(){
			console.log('changing big rock');
			var t = jQuery(this).val()+': '; console.log(t);
			jQuery('.context-course_11 #question_482_question_text ol li, .context-course_11 #question_555_question_text ol li').eq(i).children('.dynamic').text(t);
		});
	});
	/**/


	/* Interactive diagram about design thinking 
	jQuery('div#design-thinking-chart').replaceWith('<canvas id="design-thinking-chart" />');
	/**/



}); jQuery

/**/
