import { k, addGeneralGameLogic } from "../game.js"
import { generateMapRPG } from "../map.js"
import { loadKeyboardRPG } from "../keyboard.js"

import "./level-03.js"

/**
 * Szene für das Level 2.
 *
 * Hier gibt es keine Gravitation, wir sind hier in einem RPG-Setting.
 */
k.scene("level-02", async () => {
  k.setGravity(0)
  loadKeyboardRPG()

  await generateMapRPG("maps/level-02.txt")

  addGeneralGameLogic()

  k.onCollide("player", "cave", (player) => {
    if (player.flowersCollected >= 5) {
      k.go("level-03")
    }
  })

  k.add([
    k.sprite("himmel"),
    k.pos(k.width() / 2, k.height() / 2),
    k.anchor("center"),
    k.fixed(),
    k.z(-10),
  ])

  k.onCollide("player", "flower", (player, flower) => {
    flower.destroy()
    player.flowersCollected += 1
  })
})
