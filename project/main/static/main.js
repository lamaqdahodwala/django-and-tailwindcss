let rolls = []
let total_pts = 0
let points_this_round = 0
let round = 1
function generate_random_number(){
    return Math.floor(Math.random()*6)+1
}

function handle_six(){
    points_this_round = 0
    next_round()
}

function roll(){
    let roll = generate_random_number()
    document.getElementById('last-roll').innerHTML = `Last roll: ${roll}`
    if (roll == 6) return handle_six()
    rolls.push(roll)
    points_this_round += roll
    document.getElementById('current-total').innerHTML = `Current Total: ${total_pts+points_this_round}`
}

function end_game(){
    //TODO: make end game screen
}

function next_round(){
    if (round == 5) end_game()
    let id_for_pts = `round${round}points`
    document.getElementById(id_for_pts).innerHTML = `Round ${round}: ${points_this_round}`
    document.getElementById(`round${round}indicator`).className = 'has-text-grey-light'
    document.getElementById(`round${round+1}indicator`).className = 'has-text-primary-dark'
    round += 1
    total_pts += points_this_round
    points_this_round = 0
}