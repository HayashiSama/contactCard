$(document).ready(function()
{

	var idtable=[];

	$('form').submit(function()
	{
		for(var i = 0; i < idtable.length; i++)
		{
			if(($('#first').val() + $('#last').val()) == idtable[i])
			{
				console.log("ID already exists");
				return false;
			}
		}

		if($('#first').val()=="")
		{
			$('#error').text("Missing First Name");
			console.log("Name must be filled in");
			return false;
		}
		if($('#last').val()=="")
		{
			$('#error').text("Missing Last Name");
			return false;
		}
		
		$('body').append(
		"<div  class=\"card\" data-alt=\"" + $('#des').val() +
		"\" id=\"" + ($('#first').val() + $('#last').val()) + 
		"\"> <h1>" + $('#first').val() + " " + 
		$('#last').val() +"</h1>" + "<p>Click for more information</p>"
		+"<button id=\"button"+ ($('#first').val() + $('#last').val()) +"\"> Change the Color");


		$(document).on("click", "#"+($('#first').val() + $('#last').val()), function()
		{

			var temp = $(this).children('p').text();

			$(this).children('p').text( $(this).attr("data-alt"));
			$(this).attr("data-alt", temp);
			$(this).children('h1').toggle();
			$(this).children('button').toggle();

		})
		$(document).on("click", "#button"+($('#first').val() + $('#last').val()), function(e)
		{

			    $(this).parent().css("background-color", random_color());
                e.stopPropagation();
		})
		idtable.push($('#first').val() + $('#last').val());
		$('#error').text("");
		return false;
	
	})

function random_color()
          {
             var rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
             color = '#'  //this is what we'll return!
             for(var i = 0; i < 6; i++) 
             {
                x = Math.floor((Math.random()*16))
                color += rgb[x]; 
             }
             return color;
          }











})

