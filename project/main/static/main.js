import {Cookie} from 'js-cookie'


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
    document.getElementById('last-roll').innerHTML = `Last roll: ${roll}`
    if (roll == 6) return handle_six()
    rolls.push(roll)
    points_this_round += roll
    document.getElementById('current-total').innerHTML = `Current Possible Total: ${total_pts+points_this_round}`
}

function end_game(){
    //Disable buttons
    let roll_again_btn = document.getElementById('roll-again')
    roll_again_btn.disabled = true
    roll_again_btn.className = 'button is-disabled'

    let end_turn_btn = document.getElementById('end-turn')
    end_turn_btn.disabled = true
    end_turn_btn.className = 'button is-disabled'
    Cookie.set('score', total_pts)
    Cookie.set('r1', r1)
    Cookie.set('r2', r2)
    Cookie.set('r3', r3)
    Cookie.set('r4', r4)
    Cookie.set('r5', r5)
}

function next_round(){
    if (round == 5) return end_game()
    let id_for_pts = `round${round}points`
    document.getElementById(id_for_pts).innerHTML = `Round ${round}: ${points_this_round}`
    document.getElementById(`round${round}indicator`).className = 'has-text-grey-light'
    document.getElementById(`round${round+1}indicator`).className = 'has-text-primary-dark'
    round += 1
    total_pts += points_this_round
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
    points_this_round = 0
}