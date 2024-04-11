import { k, addGeneralGameLogic } from "../game.js"
import { generateMapJumpAndRun } from "../map.js"
import { loadKeyboardJumpAndRun } from "../keyboard.js"

import "./finish.js"

/**
 * Szene für das Level 3.
 *
 * Hier gibt es keine Gravitation, wir sind hier in einem RPG-Setting.
 */
k.scene("level-03", async () => {
  k.setGravity(1200)
  loadKeyboardJumpAndRun()

  await generateMapJumpAndRun("maps/level-03.txt")
  k.add([
    k.sprite("himmel"),
    k.pos(k.width() / 2, k.height() / 2),
    k.anchor("center"),
    k.fixed(),
    k.z(-10),
  ])
  addGeneralGameLogic()

  k.onCollide("player", "cave", (player) => {
    if (player.hasFlower === true) {
      k.go("finish")
    }
  })

  k.onCollide("player", "flower", (player, flower) => {
    flower.destroy()
    player.hasFlower = true
  })
})
