namespace SpriteKind {
    export const Dice1 = SpriteKind.create()
    export const Dice2 = SpriteKind.create()
}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (game2 == true) {
        if (p2_turn == true) {
            pause(1000)
            if (Achievements.checkForAchievement("Learning The Technique", true)) {
                Achievements.showAchievement(
                "Learning The Technique",
                "Roll for the first time!",
                1
                )
            }
            img_random = randint(1, 5)
            if (img_random == 1) {
                dice_sprite.setImage(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `)
                value_num2 = 6
            } else if (img_random == 2) {
                dice_sprite.setImage(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 f f f f 1 1 1 1 2 
                    2 1 1 1 1 f f f f 1 1 1 1 2 
                    2 1 1 1 1 f f f f 1 1 1 1 2 
                    2 1 1 1 1 f f f f 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `)
                value_num2 = 1
            } else if (img_random == 3) {
                dice_sprite.setImage(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 f f 1 1 1 1 1 2 
                    2 1 1 1 1 1 f f 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `)
                value_num2 = 5
            } else if (img_random == 4) {
                dice_sprite.setImage(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 f f f f f 1 2 
                    2 1 1 1 1 1 1 f f f f f 1 2 
                    2 1 1 1 1 1 1 f f f f f 1 2 
                    2 1 1 1 1 1 1 f f f f f 1 2 
                    2 1 1 1 1 1 1 f f f f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f f f 1 1 1 1 1 1 1 2 
                    2 1 f f f f 1 1 1 1 1 1 1 2 
                    2 1 f f f f 1 1 1 1 1 1 1 2 
                    2 1 f f f f 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `)
                value_num2 = 2
            } else if (img_random == 5) {
                dice_sprite.setImage(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f f 1 1 1 1 f f f 1 2 
                    2 1 f f f 1 1 1 1 f f f 1 2 
                    2 1 f f f 1 1 1 1 f f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f f 1 1 1 1 f f f 1 2 
                    2 1 f f f 1 1 1 1 f f f 1 2 
                    2 1 f f f 1 1 1 1 f f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `)
                value_num2 = 4
            }
            img_random2 = randint(1, 5)
            if (img_random == 1) {
                dice_sprite2.setImage(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 f f f f 1 1 1 1 2 
                    2 1 1 1 1 f f f f 1 1 1 1 2 
                    2 1 1 1 1 f f f f 1 1 1 1 2 
                    2 1 1 1 1 f f f f 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `)
                value_num = 1
            } else if (img_random == 2) {
                dice_sprite2.setImage(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `)
                value_num = 6
            } else if (img_random == 3) {
                dice_sprite2.setImage(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 f f f f f 1 2 
                    2 1 1 1 1 1 1 f f f f f 1 2 
                    2 1 1 1 1 1 1 f f f f f 1 2 
                    2 1 1 1 1 1 1 f f f f f 1 2 
                    2 1 1 1 1 1 1 f f f f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f f f 1 1 1 1 1 1 1 2 
                    2 1 f f f f 1 1 1 1 1 1 1 2 
                    2 1 f f f f 1 1 1 1 1 1 1 2 
                    2 1 f f f f 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `)
                value_num = 2
            } else if (img_random == 4) {
                dice_sprite2.setImage(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 f f 1 1 1 1 1 2 
                    2 1 1 1 1 1 f f 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `)
                value_num = 5
            } else if (img_random == 5) {
                dice_sprite2.setImage(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f f 1 1 1 1 f f f 1 2 
                    2 1 f f f 1 1 1 1 f f f 1 2 
                    2 1 f f f 1 1 1 1 f f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f f 1 1 1 1 f f f 1 2 
                    2 1 f f f 1 1 1 1 f f f 1 2 
                    2 1 f f f 1 1 1 1 f f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `)
                value_num = 4
            }
            define_score2(value_num, value_num2)
            pause(2000)
            game.splash("Next Turn!")
            p2_turn = false
            pause(1000)
            if (story.checkLastAnswer("Play with CPU")) {
                cpu_turn_ = true
                cpu_turn()
            }
        }
    }
})
function define_score (score: number, score2: number) {
    info.player1.changeScoreBy(score + score2)
    if (info.player1.score() == 100) {
        game2 = false
        game.splash("Player 1 wins with a score of 100! GG!")
        game.over(true)
    } else if (info.player1.score() > 100) {
        game2 = false
        game.splash("Player 1 wins with a score of" + info.player1.score() + "!" + " GG!")
        game.over(true)
    }
}
function define_score2 (score: number, score2: number) {
    info.player2.changeScoreBy(score + score2)
    if (info.player2.score() == 100) {
        game2 = false
        game.splash("Player 2 wins with a score of 100! GG!")
        game.over(true)
    } else if (info.player2.score() > 100) {
        game2 = false
        game.splash("Player 2 wins with a score of" + info.player2.score() + "!" + " GG!")
        game.over(true)
    }
}
function game_start () {
    music.playMelody("B D B G A F C C5 ", 120)
    dice_sprite = sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 f f f f 1 1 1 1 2 
        2 1 1 1 1 f f f f 1 1 1 1 2 
        2 1 1 1 1 f f f f 1 1 1 1 2 
        2 1 1 1 1 f f f f 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.Dice1)
    dice_sprite2 = sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 f f f f 1 1 1 1 2 
        2 1 1 1 1 f f f f 1 1 1 1 2 
        2 1 1 1 1 f f f f 1 1 1 1 2 
        2 1 1 1 1 f f f f 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.Dice2)
    dice_sprite.setPosition(54, 81)
    dice_sprite2.setPosition(103, 81)
    story.printCharacterText("PIG! is a game where you roll dice to add up to 100. And thats mostly it.", "About PIG!")
    story.printCharacterText("Use Q key and U key for [A] button (p2, p1) Use Spacebar to play against a CPU.", "How to Play")
    story.printCharacterText("GAME STARTS NOW!")
    game2 = true
}
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (game2 == true) {
        if (story.checkLastAnswer("Play with CPU")) {
            if (cpu_turn_ == false) {
                pause(1000)
                if (Achievements.checkForAchievement("Learning The Technique", true)) {
                    Achievements.showAchievement(
                    "Learning The Technique",
                    "Roll for the first time!",
                    1
                    )
                }
                img_random = randint(1, 5)
                if (img_random == 1) {
                    dice_sprite.setImage(img`
                        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 f f 1 1 1 1 1 1 f f 1 2 
                        2 1 f f 1 1 1 1 1 1 f f 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 f f 1 1 1 1 1 1 f f 1 2 
                        2 1 f f 1 1 1 1 1 1 f f 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 f f 1 1 1 1 1 1 f f 1 2 
                        2 1 f f 1 1 1 1 1 1 f f 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        `)
                    value_num2 = 6
                } else if (img_random == 2) {
                    dice_sprite.setImage(img`
                        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 f f f f 1 1 1 1 2 
                        2 1 1 1 1 f f f f 1 1 1 1 2 
                        2 1 1 1 1 f f f f 1 1 1 1 2 
                        2 1 1 1 1 f f f f 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        `)
                    value_num2 = 1
                } else if (img_random == 3) {
                    dice_sprite.setImage(img`
                        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 f f 1 1 1 1 1 1 f f 1 2 
                        2 1 f f 1 1 1 1 1 1 f f 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 f f 1 1 1 1 1 2 
                        2 1 1 1 1 1 f f 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 f f 1 1 1 1 1 1 f f 1 2 
                        2 1 f f 1 1 1 1 1 1 f f 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        `)
                    value_num2 = 5
                } else if (img_random == 4) {
                    dice_sprite.setImage(img`
                        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 f f f f f 1 2 
                        2 1 1 1 1 1 1 f f f f f 1 2 
                        2 1 1 1 1 1 1 f f f f f 1 2 
                        2 1 1 1 1 1 1 f f f f f 1 2 
                        2 1 1 1 1 1 1 f f f f f 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 f f f f 1 1 1 1 1 1 1 2 
                        2 1 f f f f 1 1 1 1 1 1 1 2 
                        2 1 f f f f 1 1 1 1 1 1 1 2 
                        2 1 f f f f 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        `)
                    value_num2 = 2
                } else if (img_random == 5) {
                    dice_sprite.setImage(img`
                        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 f f f 1 1 1 1 f f f 1 2 
                        2 1 f f f 1 1 1 1 f f f 1 2 
                        2 1 f f f 1 1 1 1 f f f 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 f f f 1 1 1 1 f f f 1 2 
                        2 1 f f f 1 1 1 1 f f f 1 2 
                        2 1 f f f 1 1 1 1 f f f 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        `)
                    value_num2 = 4
                }
                img_random2 = randint(1, 5)
                if (img_random == 1) {
                    dice_sprite2.setImage(img`
                        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 f f f f 1 1 1 1 2 
                        2 1 1 1 1 f f f f 1 1 1 1 2 
                        2 1 1 1 1 f f f f 1 1 1 1 2 
                        2 1 1 1 1 f f f f 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        `)
                    value_num = 1
                } else if (img_random == 2) {
                    dice_sprite2.setImage(img`
                        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 f f 1 1 1 1 1 1 f f 1 2 
                        2 1 f f 1 1 1 1 1 1 f f 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 f f 1 1 1 1 1 1 f f 1 2 
                        2 1 f f 1 1 1 1 1 1 f f 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 f f 1 1 1 1 1 1 f f 1 2 
                        2 1 f f 1 1 1 1 1 1 f f 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        `)
                    value_num = 6
                } else if (img_random == 3) {
                    dice_sprite2.setImage(img`
                        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 f f f f f 1 2 
                        2 1 1 1 1 1 1 f f f f f 1 2 
                        2 1 1 1 1 1 1 f f f f f 1 2 
                        2 1 1 1 1 1 1 f f f f f 1 2 
                        2 1 1 1 1 1 1 f f f f f 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 f f f f 1 1 1 1 1 1 1 2 
                        2 1 f f f f 1 1 1 1 1 1 1 2 
                        2 1 f f f f 1 1 1 1 1 1 1 2 
                        2 1 f f f f 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        `)
                    value_num = 2
                } else if (img_random == 4) {
                    dice_sprite2.setImage(img`
                        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 f f 1 1 1 1 1 1 f f 1 2 
                        2 1 f f 1 1 1 1 1 1 f f 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 f f 1 1 1 1 1 2 
                        2 1 1 1 1 1 f f 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 f f 1 1 1 1 1 1 f f 1 2 
                        2 1 f f 1 1 1 1 1 1 f f 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        `)
                    value_num = 5
                } else if (img_random == 5) {
                    dice_sprite2.setImage(img`
                        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 f f f 1 1 1 1 f f f 1 2 
                        2 1 f f f 1 1 1 1 f f f 1 2 
                        2 1 f f f 1 1 1 1 f f f 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 1 f f f 1 1 1 1 f f f 1 2 
                        2 1 f f f 1 1 1 1 f f f 1 2 
                        2 1 f f f 1 1 1 1 f f f 1 2 
                        2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                        `)
                    value_num = 4
                }
                define_score(value_num, value_num2)
                pause(2000)
                game.splash("Next Turn!")
                pause(1000)
                if (story.checkLastAnswer("Play with CPU")) {
                    cpu_turn_ = true
                    cpu_turn()
                }
            }
        }
    }
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (game2 == true) {
        if (p2_turn == false) {
            pause(1000)
            if (Achievements.checkForAchievement("Learning The Technique", true)) {
                Achievements.showAchievement(
                "Learning The Technique",
                "Roll for the first time!",
                1
                )
            }
            img_random = randint(1, 5)
            if (img_random == 1) {
                dice_sprite.setImage(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `)
                value_num2 = 6
            } else if (img_random == 2) {
                dice_sprite.setImage(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 f f f f 1 1 1 1 2 
                    2 1 1 1 1 f f f f 1 1 1 1 2 
                    2 1 1 1 1 f f f f 1 1 1 1 2 
                    2 1 1 1 1 f f f f 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `)
                value_num2 = 1
            } else if (img_random == 3) {
                dice_sprite.setImage(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 f f 1 1 1 1 1 2 
                    2 1 1 1 1 1 f f 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `)
                value_num2 = 5
            } else if (img_random == 4) {
                dice_sprite.setImage(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 f f f f f 1 2 
                    2 1 1 1 1 1 1 f f f f f 1 2 
                    2 1 1 1 1 1 1 f f f f f 1 2 
                    2 1 1 1 1 1 1 f f f f f 1 2 
                    2 1 1 1 1 1 1 f f f f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f f f 1 1 1 1 1 1 1 2 
                    2 1 f f f f 1 1 1 1 1 1 1 2 
                    2 1 f f f f 1 1 1 1 1 1 1 2 
                    2 1 f f f f 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `)
                value_num2 = 2
            } else if (img_random == 5) {
                dice_sprite.setImage(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f f 1 1 1 1 f f f 1 2 
                    2 1 f f f 1 1 1 1 f f f 1 2 
                    2 1 f f f 1 1 1 1 f f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f f 1 1 1 1 f f f 1 2 
                    2 1 f f f 1 1 1 1 f f f 1 2 
                    2 1 f f f 1 1 1 1 f f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `)
                value_num2 = 4
            }
            img_random2 = randint(1, 5)
            if (img_random == 1) {
                dice_sprite2.setImage(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 f f f f 1 1 1 1 2 
                    2 1 1 1 1 f f f f 1 1 1 1 2 
                    2 1 1 1 1 f f f f 1 1 1 1 2 
                    2 1 1 1 1 f f f f 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `)
                value_num = 1
            } else if (img_random == 2) {
                dice_sprite2.setImage(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `)
                value_num = 6
            } else if (img_random == 3) {
                dice_sprite2.setImage(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 f f f f f 1 2 
                    2 1 1 1 1 1 1 f f f f f 1 2 
                    2 1 1 1 1 1 1 f f f f f 1 2 
                    2 1 1 1 1 1 1 f f f f f 1 2 
                    2 1 1 1 1 1 1 f f f f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f f f 1 1 1 1 1 1 1 2 
                    2 1 f f f f 1 1 1 1 1 1 1 2 
                    2 1 f f f f 1 1 1 1 1 1 1 2 
                    2 1 f f f f 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `)
                value_num = 2
            } else if (img_random == 4) {
                dice_sprite2.setImage(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 f f 1 1 1 1 1 2 
                    2 1 1 1 1 1 f f 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 f f 1 1 1 1 1 1 f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `)
                value_num = 5
            } else if (img_random == 5) {
                dice_sprite2.setImage(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f f 1 1 1 1 f f f 1 2 
                    2 1 f f f 1 1 1 1 f f f 1 2 
                    2 1 f f f 1 1 1 1 f f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 1 f f f 1 1 1 1 f f f 1 2 
                    2 1 f f f 1 1 1 1 f f f 1 2 
                    2 1 f f f 1 1 1 1 f f f 1 2 
                    2 1 1 1 1 1 1 1 1 1 1 1 1 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `)
                value_num = 4
            }
            define_score(value_num, value_num2)
            pause(2000)
            game.splash("Next Turn!")
            p2_turn = true
            pause(1000)
            if (story.checkLastAnswer("Play with CPU")) {
                cpu_turn_ = true
                cpu_turn()
            }
        }
    }
})
function cpu_turn () {
    img_random = randint(1, 5)
    if (img_random == 1) {
        dice_sprite.setImage(img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 f f 1 1 1 1 1 1 f f 1 2 
            2 1 f f 1 1 1 1 1 1 f f 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 f f 1 1 1 1 1 1 f f 1 2 
            2 1 f f 1 1 1 1 1 1 f f 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 f f 1 1 1 1 1 1 f f 1 2 
            2 1 f f 1 1 1 1 1 1 f f 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `)
        value_num2 = 6
    } else if (img_random == 2) {
        dice_sprite.setImage(img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 f f f f 1 1 1 1 2 
            2 1 1 1 1 f f f f 1 1 1 1 2 
            2 1 1 1 1 f f f f 1 1 1 1 2 
            2 1 1 1 1 f f f f 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `)
        value_num2 = 1
    } else if (img_random == 3) {
        dice_sprite.setImage(img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 f f 1 1 1 1 1 1 f f 1 2 
            2 1 f f 1 1 1 1 1 1 f f 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 f f 1 1 1 1 1 2 
            2 1 1 1 1 1 f f 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 f f 1 1 1 1 1 1 f f 1 2 
            2 1 f f 1 1 1 1 1 1 f f 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `)
        value_num2 = 5
    } else if (img_random == 4) {
        dice_sprite.setImage(img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 f f f f f 1 2 
            2 1 1 1 1 1 1 f f f f f 1 2 
            2 1 1 1 1 1 1 f f f f f 1 2 
            2 1 1 1 1 1 1 f f f f f 1 2 
            2 1 1 1 1 1 1 f f f f f 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 f f f f 1 1 1 1 1 1 1 2 
            2 1 f f f f 1 1 1 1 1 1 1 2 
            2 1 f f f f 1 1 1 1 1 1 1 2 
            2 1 f f f f 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `)
        value_num2 = 2
    } else if (img_random == 5) {
        dice_sprite.setImage(img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 f f f 1 1 1 1 f f f 1 2 
            2 1 f f f 1 1 1 1 f f f 1 2 
            2 1 f f f 1 1 1 1 f f f 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 f f f 1 1 1 1 f f f 1 2 
            2 1 f f f 1 1 1 1 f f f 1 2 
            2 1 f f f 1 1 1 1 f f f 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `)
        value_num2 = 4
    }
    img_random2 = randint(1, 5)
    if (img_random == 1) {
        dice_sprite2.setImage(img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 f f f f 1 1 1 1 2 
            2 1 1 1 1 f f f f 1 1 1 1 2 
            2 1 1 1 1 f f f f 1 1 1 1 2 
            2 1 1 1 1 f f f f 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `)
        value_num = 1
    } else if (img_random == 2) {
        dice_sprite2.setImage(img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 f f 1 1 1 1 1 1 f f 1 2 
            2 1 f f 1 1 1 1 1 1 f f 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 f f 1 1 1 1 1 1 f f 1 2 
            2 1 f f 1 1 1 1 1 1 f f 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 f f 1 1 1 1 1 1 f f 1 2 
            2 1 f f 1 1 1 1 1 1 f f 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `)
        value_num = 6
    } else if (img_random == 3) {
        dice_sprite2.setImage(img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 f f f f f 1 2 
            2 1 1 1 1 1 1 f f f f f 1 2 
            2 1 1 1 1 1 1 f f f f f 1 2 
            2 1 1 1 1 1 1 f f f f f 1 2 
            2 1 1 1 1 1 1 f f f f f 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 f f f f 1 1 1 1 1 1 1 2 
            2 1 f f f f 1 1 1 1 1 1 1 2 
            2 1 f f f f 1 1 1 1 1 1 1 2 
            2 1 f f f f 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `)
        value_num = 2
    } else if (img_random == 4) {
        dice_sprite2.setImage(img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 f f 1 1 1 1 1 1 f f 1 2 
            2 1 f f 1 1 1 1 1 1 f f 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 f f 1 1 1 1 1 2 
            2 1 1 1 1 1 f f 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 f f 1 1 1 1 1 1 f f 1 2 
            2 1 f f 1 1 1 1 1 1 f f 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `)
        value_num = 5
    } else if (img_random == 5) {
        dice_sprite2.setImage(img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 f f f 1 1 1 1 f f f 1 2 
            2 1 f f f 1 1 1 1 f f f 1 2 
            2 1 f f f 1 1 1 1 f f f 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 1 f f f 1 1 1 1 f f f 1 2 
            2 1 f f f 1 1 1 1 f f f 1 2 
            2 1 f f f 1 1 1 1 f f f 1 2 
            2 1 1 1 1 1 1 1 1 1 1 1 1 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `)
        value_num = 4
    }
    define_score2(value_num2, value_num)
    cpu_turn_ = false
    pause(2000)
    game.splash("Next Turn!")
}
let cpu_turn_ = false
let value_num = 0
let dice_sprite2: Sprite = null
let img_random2 = 0
let value_num2 = 0
let dice_sprite: Sprite = null
let img_random = 0
let p2_turn = false
let game2 = false
info.player2.setScore(0)
info.player1.setScore(0)
scene.setBackgroundImage(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111
    `)
story.showPlayerChoices("CPU", "PVP")
if (story.checkLastAnswer("CPU")) {
    game_start()
} else if (story.checkLastAnswer("PVP")) {
    game_start()
}
game.onUpdateInterval(1000, function () {
	
})
