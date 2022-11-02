const amtGames = prompt('max games?'); //asks how many games to use for option loop
const select = document.querySelector('select'); //grabbing the select tag to insert options
	for(let i = 3; i <= amtGames; i++) //option loop, creates as many options as amtGames was set to
	{
		const option = document.createElement('option'); //creates option
		option.innerText = i; // adds (visual)number(i) to option
		option.value = i;// adds (value)number(i) to option (to be used to find out how many games to run)
		select.append(option); // adds option to select tag
	}
const player1 = //player one with score, display value, and +1 player1 button
{
	score: 0,
	dply: document.querySelector('#p1'),
	btn: document.querySelector('#plr1')
}
const player2 = //player two with score, display value, and +1 player2 button
{
	score: 0,
	dply: document.querySelector('#p2'),
	btn: document.querySelector('#plr2')
}
const resetBtn = document.querySelector('#reset');// button to reset game

resetBtn.addEventListener('click', reset); //resets game (see reset function);
select.addEventListener	('change', reset); //Whenever someone changes the selector(amount of turns) game resets(see reset function)

player1.btn.addEventListener('click', function() //when button 1 is clicked (see updateScore) 
	{
	 updateScore(player1,player2)//score updated for player 1
	});
player2.btn.addEventListener('click', function() //when button 2 is clicked (see updateScore) 
	{
	updateScore(player2,player1)//score updated for player 2
	});

function updateScore(player, opponent) //updates player score
{
	player.score += 1; //updates player score by one
	player.dply.innerText = player.score; //changes the display to show new score
	isGameOver(parseInt(select.value)); //checks to see if game is over, passing current value of select as int
}
function reset() // resets game 
{
	for(let p of [player1,player2])// loop through players
	{
		p.score = 0; //setting score to 0
		p.dply.innerText = p.score; //updates display back to 0
		p.dply.style.color = 'black'; //changes color of score text
		p.btn.disabled = false; //enables +1 player buttons
	}
}
function isGameOver(game) //checks to see if game is over
{
	for(let p of [player1,player2]) //loop through players
	{
		if(p.score === game) //if player score = game(current select value)
		{
			player1.btn.disabled = true; //disabled buttons
			player2.btn.disabled = true;
			if(player1.score > player2.score)//if player 1 wins, change colors
			{
				player1.dply.style.color = 'green';
				player2.dply.style.color = 'red';
			}
			else if(player1.score < player2.score)//if player 2 wins, change colors
			{
				player2.dply.style.color = 'green';
				player1.dply.style.color = 'red';
			}
		}
	}
}
