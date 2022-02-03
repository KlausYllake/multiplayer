class Game {
    constructor() {

    }
    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        });
    }
    update(state) {
        database.ref("/").update({
            gameState: state
        })
    }
    start() {
        if (gameState == 0) {
            player = new Player();
            player.getCount();
            // var playerCountRef
            // if () {

            // }
            form = new Form();
            form.display();
        }
    }
    play() {
        if (gameState == 1) {
            form.hide();
            textSize(30);
            text("Game Start", 200,200);
            Player.getPlayerInfo();
            if (allPlayers != undefined) {
                var displayPosition = 500;
                for (var i in allPlayers) {
                    if (i === "player"+player.index) {
                        fill("red");
                    }
                    else {
                        fill("black");
                    }
                    displayPosition = displayPosition + 30;
                    text(allPlayers[i].name+": "+allPlayers[i].distance,300,displayPosition);
                }
            }
            if (keyDown(UP_ARROW) && player.index != null) {
                player.distance = player.distance + 10;
                player.update();
            }
        }
    }
}