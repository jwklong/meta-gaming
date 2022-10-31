function checkGoals() {
    completedGoals = 0
    for (const key of Object.keys(games)) {
        const game = games[key]
        const save = localStorage.getItem(game.save)
        if (save !== undefined) {
            save = game.saveParser(save)
        }
        for (goal of Object.keys(game.goals)) {
            completedGoals += game.goals[goal](save)
        }
    }
    return completedGoals
}

function totalGoals() {
    goals = 0
    for (const key of Object.keys(games)) {
        goals += games[key].goals.length
    }
    return goals
}

document.getElementById('totalGoals').innerHTML = checkGoals()+"/"+totalGoals()