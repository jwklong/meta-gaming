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

function totalGoals() {
    goals = 0
    for (game of games) {
        goals += game.goals.length
    }
    return goals
}

document.getElementById('totalGoals').innerHTML = checkGoals()+"/"+totalGoals()