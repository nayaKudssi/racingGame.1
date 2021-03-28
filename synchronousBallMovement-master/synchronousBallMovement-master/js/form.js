class Form
{
  Constructor()
  {
    
  }

  display()
  {
    var title = createElement('h2');
    title.html("Start Game");
    title.position(350,100);

    var input = createInput("Name:");
    input.position(300,200);

    var button = createButton("Play");
    button.position(350,300);

    var greeting = createElement('h2');
    button.mousePressed(function()
    {
      input.hide();
      button.hide();
      
      var name = input.value();
      playerCount +=1;
      player.update(name);
      player.updateCount(playerCount);

      greeting.html("Hello"+name);
      greeting.position(300,300);

    })

  }
}