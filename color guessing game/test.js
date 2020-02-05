
var colors = [
"rgb(255, 0, 0)", 
"rgb(0,255, 0)",
"rgb(0,0,255)",
"rgb(200,50,50)",
"rgb(50,50,50)",
"rgb(0,0,0)"]
var squares = document.querySelectorAll(".square");
var correct=colors[0];

var correctcolor=document.getElementById("displaycolor");
correctcolor.textContent=correct;
for (var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function()
	{
		var clickedcolor=this.style.background;
		console.log(correct);
		console.log(clickedcolor);

		if(clickedcolor===correct)
			{alert("correct");
	         }else{
			alert("incorrect");
			this.style.backgroundColor= "#232323";
		}

	});
}
