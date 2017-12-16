var fill= generateRandomColors(6);
var hard = true;
var over=false;
var color= document.querySelectorAll(".color");
var goal = fill[getRandomInt(0,6)];
var newgame = document.querySelector("#tab>div");
var mode = document.querySelectorAll(".lower-row");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var h1= document.querySelector("h1");
var stat = document.querySelector("#stat");
var head = document.querySelector("#head");
var New = document.querySelector("#New");
h1.textContent = goal;
h1.classList.add("uppercase");


hard.classList.add("selected");
easy.addEventListener("click",function(){
	// location.reload();

	for(var i=0;i<mode.length;i++)
	{
		mode[i].classList.add("hide");
	}
	goal= fill[getRandomInt(0,3)];
	h1.textContent = goal;
	hard = false;
	easy.classList.add("selected");
	hard.classList.remove("selected");
});

hard.addEventListener("click",function(){
	location.reload();
	for(var i=0;i<mode.length;i++)
	{
		mode[i].classList.remove("hide");
	}
	hard = true;
	easy.classList.remove("selected");
	hard.classList.add("selected");
});

newgame.addEventListener("click",function(){
	fill= generateRandomColors(6);
	for(var i=0;i<color.length;i++)
	{
		color[i].style.background= fill[i];
	}

	if(hard)
	goal = fill[getRandomInt(0,6)];
	else
	goal = fill[getRandomInt(0,3)];
	h1.textContent = goal;
	head.style.background = "#6a95e0c9";
	New.textContent="New Colors";
	stat.textContent="";
	over=false;
});


for(var i=0;i<color.length;i++)
{
	color[i].style.background= fill[i];
	color[i].addEventListener("click",function(){
		if(!over)
		{
			if(this.style.background==goal)
			{
				over=true;
				for(var j=0;j<color.length;j++)
				{
					color[j].style.background = goal;
				}
				head.style.background = goal;
				stat.textContent="Correct";
				New.textContent="Play Again?"
			}
			else
			{
				console.log(this.style.background,goal);
				this.style.background= "#232323";
				stat.textContent="Try Again...";
			}
		}
	});
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


function generateRandomColors(num){
	var arr= [];
	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	return "rgb("+getRandomInt(0,256)+", "+getRandomInt(0,256)+", "+getRandomInt(0,256)+")";
}