$(document).ready(function()
{
	$('form').submit(function()
	{
		$('body').append(
		"<div  class=\"card\" data-alt=\"" + $('#des').val() +
		"\" id=\"" + ($('#first').val() + $('#last').val()) + 
		"\"> <h1>" + $('#first').val() + " " + 
		$('#last').val() +"</h1>" + "<p>Click for more information</p>");


		$(document).on("click", "#"+($('#first').val() + $('#last').val()), function()
		{

			var temp = $(this).children('p').text();

			$(this).children('p').text( $(this).attr("data-alt"));
			console.log("data-alt -" + $(this).attr("data-alt") + " to <p> -" + $(this).children('p').text());
			$(this).attr("data-alt", temp);
			$(this).children('h1').toggle();


		})

		return false;
	
	})












})

