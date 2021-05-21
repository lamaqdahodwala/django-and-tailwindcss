let rolls = []

function generate_random_number(){
    return Math.floor(Math.random()*6)+1
}

function turn(){
    loop:
    while (true){
        let roll = generate_random_number()
        if (roll == 6){
            alert("oof you lost")
            break loop;
        } else {
            rolls.push(roll)
            if (!(confirm("roll again?"))){
                break loop
            }
            let list = document.getElementById('pointboard')
            let ele = document.createElement('li')
            ele.innerHTML = roll
            list.append(ele)
        }
    }
    console.log(rolls)
}