function checkGoals() {
    completedGoals = 0
    for (game of games) {
        const save = localStorage.getItem(game.save)
        if (save !== undefined) {
            save = game.saveParser(save)
        }
        for (goal of game.goals) {
            completedGoals += goal(save)
        }
    }
    return completedGoals
}