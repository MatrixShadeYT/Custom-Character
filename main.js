const dict = {
    Main: {
        Basics: {
            Gender: ['select','null','feminine','masculine'],
            Age: ['number',18,0,100]
        },
        Clothes: "Directory",
        Body: "Directory"
    },
    Clothes: {Main: "Directory"},
    Body: {Main: "Directory"}
}
var dir = "Main";
function navigation(obj) {
    var prop = document.getElementsByTagName('form')[0];
    var navi = document.getElementsByTagName('div')[0];
    if (obj.innerHTML in dict[dir]) {
        if (dict[dir][obj.innerHTML] == "Directory") {
            dir = obj.innerHTML;
            navi.innerHTML = '';
            navlist();
        } else {
            prop.innerHTML = proplist(obj.innerHTML);
        }
    } else {
        console.error("It failed.")
    }
}
function proplist(tag) {
    var stringy = '';
    for (let i = 0; i < Object.keys(dict[dir][tag]).length; i++) {
        console.log('\ntag: '+Object.keys(dict[dir][tag])[i]);
        console.log(dict[dir][tag][Object.keys(dict[dir][tag])[i]]);
        stringy += '<br><label for="'+Object.keys(dict[dir][tag])[i]+'">'+Object.keys(dict[dir][tag])[i]+': </label>';
        if (dict[dir][tag][Object.keys(dict[dir][tag])[i]][0] == 'select') {
            stringy += '<select onchange="updVar(this)" id="'+Object.keys(dict[dir][tag])[i]+'" name="'+Object.keys(dict[dir][tag])[i]+'">';
            for (let i = 0;
                i < Object.keys(dict[dir][tag][Object.keys(dict[dir][tag])[i]]).length-1;
                i++) {
                stringy += '<option value="'+
                    dict[dir][tag][Object.keys(dict[dir][tag])[i]][i]+
                    '">'+
                    dict[dir][tag][Object.keys(dict[dir][tag])[i]][i]+
                    '</option>';
            }
            stringy += '</select>';
        } else if (dict[dir][tag][Object.keys(dict[dir][tag])[i]][0] == 'number') {
            stringy += '<input onchange="updVar(this)" id="'+
                Object.keys(dict[dir][tag])[i]+
                '" game="'+
                Object.keys(dict[dir][tag])[i]+
                '" type="number" value="'+
                dict[dir][tag][Object.keys(dict[dir][tag])[i]][1]+
                '" min="'+
                dict[dir][tag][Object.keys(dict[dir][tag])[i]][2]+
                '" max="'+
                dict[dir][tag][Object.keys(dict[dir][tag])[i]][3]+
                '">';
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
    console.log(obj);
}