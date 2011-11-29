/*
* Resize, A resize plugin for jQuery
* Intructions: $(seletor).resizeImg(max_size)
* By: Carlos Alessandro Sena de Freitas - veneinzuela@gmail.com
* Especial Thanks to: Marc - m33.tmn@gmail.com
* Version: 1.1
* Updated: November 29, 2011
*
* Licensed under the GNU - General Public License 
* You may obtain a copy of the License at
*
* http://www.gnu.org/copyleft/gpl.html
*
*/
(function( $ ){
	$.fn.resizeImg = function(max_size) 
	{
   	return this.each(function() 
		{  
			//Wait until the image is loaded
			$(this).load(function()
			{
				//Create a container div
				var div_container = $("<div></div>");
				div_container.css({ 'height': max_size, 'width': max_size, 'position': 'relative'});

				//Get the new size of the image
				if ($(this).height() > $(this).width()) 
				{
					 var h = max_size;
					 var w = Math.floor($(this).width() / $(this).height() * max_size);
				} 
			  	else 
				{
					var w = max_size;
				 	var h = Math.floor($(this).height() / $(this).width() * max_size);
			  	}
					
				//Centralize the image
				var top  = Math.floor((max_size-h)/2);
				var left = Math.floor((max_size-w)/2);
			
				//Resize the image and put it in the container div
			  	$(this).css({ 'height': h, 'width': w, 'top': top, 'left': left, 'position': 'absolute'});
				$(this).parent().append(
					div_container.append($(this).detach())
				);
				
			});
		});  
  	};
})( jQuery );
