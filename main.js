var dir = "Main";
function proplist() {
    var stringy = '';
    for (let i = 0; i < Object.keys(dict[dir][tag]).length; i++) {
        stringy += '<br><label for="'+Object.keys(dict[dir][tag])[i]+'">'+Object.keys(dict[dir][tag])[i]+': </label>';
        if (dict[dir][tag][Object.keys(dict[dir][tag])[i]][0] == 'select') {
            stringy += '<select onchange="updVar(this)" id="'+
            Object.keys(dict[dir][tag])[i]+'" name="'+
            Object.keys(dict[dir][tag])[i]+'">';
            stringy += '<option value="null" selected disabled>None</option>';
            for (let x = 0; x < dict[dir][tag][Object.keys(dict[dir][tag])[i]].length-1; x++) {
                stringy += '<option value="'+
                dict[dir][tag][Object.keys(dict[dir][tag])[i]][x+1]+'">'+
                dict[dir][tag][Object.keys(dict[dir][tag])[i]][x+1]+'</option>';
            }
            stringy += '</select>';
        } else if (dict[dir][tag][Object.keys(dict[dir][tag])[i]][0] == 'number') {
            stringy += '<input onchange="updVar(this)" id="'+
            Object.keys(dict[dir][tag])[i]+'" name="'+
            Object.keys(dict[dir][tag])[i]+'" type="number" value="'+
            vals[tag][i]+'" min="'+
            dict[dir][tag][Object.keys(dict[dir][tag])[i]][1]+'" max="'+
            dict[dir][tag][Object.keys(dict[dir][tag])[i]][2]+'">';
        }
    }
    return stringy;
}
function navlist() {
    var navi = document.getElementsByTagName('div')[0];
    for (let i = 0; i < Object.keys(dict[dir]).length; i++) {
        navi.innerHTML += `<button onclick="navigation(this)">${Object.keys(dict[dir])[i]}</button>`;
    }
}
function updVar(obj) {
    console.log(obj.id+' = '+obj.value);
    vals[tag][obj.id] = obj.value;
}
function navigation(obj) {
    var prop = document.getElementsByTagName('form')[0];
    var navi = document.getElementsByTagName('div')[0];
    if (obj.innerHTML in dict[dir]) {
        if (dict[dir][obj.innerHTML] == "Directory") {
            dir = obj.innerHTML;
            tag = obj.innerHTML;
            navi.innerHTML = '';
            prop.innerHTML = '';
            navlist();
        } else {
            tag = obj.innerHTML;
            prop.innerHTML = proplist();
        }
    } else {
        console.error("It failed.")
    }
}