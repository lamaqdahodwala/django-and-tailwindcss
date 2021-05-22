let rolls = []
let total_pts = 0
let points_this_round = 0
let round = 1
let r1 = 0
let r2 = 0
let r3 = 0
let r4 = 0
let r5 = 0
function generate_random_number(){
    return Math.floor(Math.random()*6)+1
}

function handle_six(){
    points_this_round = 0
    next_round()
}

function roll(){
    let roll = generate_random_number()
    if (roll == 6) return handle_six()
    rolls.push(roll)
    points_this_round += roll
    document.getElementById('last-roll').innerHTML = `Last Roll: ${roll}`
    document.getElementById('current-total').innerHTML = `Current Possible Total: ${total_pts + points_this_round}`
}

function end_game(){
    fetch('/submission', {
        method: "POST",
        body: {
            "total": total_pts,
            "r1": r1,
            "r2": r2,
            "r3": r3,
            "r4": r4, 
            "r5": r5
        }
    })
    document.getElementById('final-score-title').innerHTML = total_pts
    
}

function next_round(){
    let id_for_pts = `round${round}points`
    document.getElementById(id_for_pts).innerHTML = `Round ${round}: ${points_this_round}`
    let indicator = document.getElementById(`round${round}indicator`)
    let new_indicator = document.getElementById(`round${round+1}indicator`)
    indicator.className = 'has-text-grey-light'
    if (new_indicator) new_indicator.className = 'has-text-primary-dark'
    switch (round){
        case 1:
            r1 = points_this_round
            break;
        case 2:
            r2 = points_this_round
            break;
        case 3:
            r3 = points_this_round
            break;
        case 4:
            r4 = points_this_round
            break;
        case 5:
            r5 = points_this_round
            break;
    }
    round += 1
    if (round == 6) return end_game()
    total_pts += points_this_round
    points_this_round = 0
}