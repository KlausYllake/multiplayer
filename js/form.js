class Form {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton("play");
        this.greetings = createElement("h3");
    }
    display() {
        var title = createElement("h2");
        title.html("Race")
        title.position(480,200);
        
        this.input.position(400,350);
        this.button.position(580,350);
        this.greetings.position(500,500);

         this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            var name = this.input.value();
            playerCount++;
            player.update();
            player.updateCount(playerCount);
            this.greetings.html("Hello, "+name);
            this.greetings.position(400,400);
         })
    }
}