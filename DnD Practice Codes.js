//DnD Random Encounter Improver

function randomEncGenerator(id) {
    if (id === 1) {
        return ('Execute the code as empty')
    };
    return rollDie = setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 12) + 1; {
            if (randomNumber === 1) {
                console.log('Example 1');
            }
            if (randomNumber === 2) {
                console.log('Example 2');
            }
            if (randomNumber === 3) {
                console.log('Example 3');
            }
            if (randomNumber === 4) {
                console.log('Example 4');
            }
            if (randomNumber === 5) {
                console.log('Example 5');
            }
            if (randomNumber === 6) {
                console.log('Example 6');
            }
            if (randomNumber === 7) {
                console.log('Example 7');
            }
            if (randomNumber === 8) {
                console.log('Example 8');
            }
            if (randomNumber === 9) {
                console.log('Example 9');
            }
            if (randomNumber === 10) {
                console.log('Example 10');
            }
            if (randomNumber === 11) {
                console.log('Example 11');
            }
            if (randomNumber === 12) {
                console.log('Example 12');
            }
        }
    }, 5000)
}



function skillCrit(difficulty) {

    if (difficulty === 1) {
        let easyCheck = Math.floor(Math.random() * 4) + 1;
        if (easyCheck >= 4) {
            return `${easyCheck}/4, CRITICAL SUCCESS!`;
        }
        return `${easyCheck}/4`;
    }
    if (difficulty === 2) {
        let mediumCheck = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 6) + 2;
        if (mediumCheck >= 10) {
            return `${mediumCheck}/10, CRITICAL SUCCESS!`;
        }
        return `${mediumCheck}/10`;
    }
    if (difficulty === 3) {
        let hardCheck = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 8) + 3;
        if (hardCheck >= 18) {
            return `${hardCheck}/18, CRITICAL SUCCESS!`;
        }
        return `${hardCheck}/18`;
    }
    if (difficulty === 4) {
        let superHardCheck = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 8) + Math.floor(Math.random() * 10) + 4;
        if (superHardCheck >= 28) {
            return `${superHardCheck}/28, CRITICAL SUCCESS!`;
        }
        return `${superHardCheck}/28`;
    }
    if (difficulty === 5) {
        let megaHardCheck = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 8) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 12) + 5;
        if (megaHardCheck >= 40) {
            return `${megaHardCheck}/40, CRITICAL SUCCESS!`;
        }
        return `${megaHardCheck}/40`;
    }
    if (difficulty === 6) {
        let gigaHardCheck = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 8) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 12) + Math.floor(Math.random() * 20) + 6;
        if (gigaHardCheck >= 60) {
            return `${gigaHardCheck}/60, CRITICAL SUCCESS!`;
        }
        return `${gigaHardCheck}/60`;
    }
    if (difficulty === 7) {
        let teraHardCheck = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 8) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 12) + Math.floor(Math.random() * 20) + Math.floor(Math.random() * 100) + 7;
        if (teraHardCheck >= 160) {
            return `${teraHardCheck}/160, CRITICAL SUCCESS!`;
        }
        return `${teraHardCheck}/160`;
    }
    return null;
}

//Dnd Combat Target Generator

function combatTarGenerator(num) {
    let target = Math.floor(Math.random() * num) + 1;
    let name = ['Altair', 'Valcor', 'Lily', 'Ra', 'Nameless']
    if (typeof num === 'number' && num <= name.length && num >= 1) {
        return name[target - 1]
    } return null;
}

//DnD Color Changer

// setInterval(
//     function () {
//         const r = Math.floor(Math.random() * 255);
//         const g = Math.floor(Math.random() * 255);
//         const b = Math.floor(Math.random() * 255);
//         document.getElementByClass("dragon").style.color = `rgb(${r}, ${g}, ${b})`;
//         // document.getElementById("btn").style.transition = "all 2s";
//     }, 120);

//DnD Random Power Generator

function randomPowGenerator(id) {
    for (let i = 0; i < id; i++) {
        i += id;
    };
    if (typeof id !== 'undefined') {
        return null;
    };


    return rollDie = setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 100) + 1; {

            if (randomNumber <= 1) {
                console.log('Nothing');
            }
            if (randomNumber === 2) {
                console.log('Nothing');
            }
            if (randomNumber === 3) {
                console.log('Add one point of the Dungeon Masters choice to your Ability Score');
            }
            if (randomNumber === 4) {
                console.log('Add one point to your Strength Score');
            }
            if (randomNumber === 5) {
                console.log('Add one point to your Intelligence Score');
            }
            if (randomNumber === 6) {
                console.log('Add one point to your Wisdom Score');
            }
            if (randomNumber === 7) {
                console.log('Add one point to your Charisma Score');
            }
            if (randomNumber === 8) {
                console.log('Add one point to your Dexterity Score');
            }
            if (randomNumber === 9) {
                console.log('Add one point to your Constitution Score');
            }
            if (randomNumber === 10) {
                console.log('Add one point to a Physical Ability Score of your choice');
            }
            if (randomNumber === 11) {
                console.log('Add one point to a Physical Ability Score of your choice');
            }
            if (randomNumber === 12) {
                console.log('Add one point to a Physical Ability Score of your choice');
            }
            if (randomNumber === 13) {
                console.log('Add one point to a Physical Ability Score of your choice');
            }
            if (randomNumber === 14) {
                console.log('Add one point to a Physical Ability Score of your choice');
            }
            if (randomNumber === 15) {
                console.log('Add one point to a Mental Ability Score of your choice');
            }
            if (randomNumber === 16) {
                console.log('Add one point to a Mental Ability Score of your choice');
            }
            if (randomNumber === 17) {
                console.log('Add one point to a Mental Ability Score of your choice');
            }
            if (randomNumber === 18) {
                console.log('Add one point to a Mental Ability Score of your choice');
            }
            if (randomNumber === 19) {
                console.log('Add one point to a Mental Ability Score of your choice');
            }
            if (randomNumber === 20) {
                console.log('Add one point to an Ability Score of your choice');
            }
            if (randomNumber === 21) {
                console.log('Add one point to an Ability Score of your choice');
            }
            if (randomNumber === 22) {
                console.log('Add one point to an Ability Score of your choice');
            }
            if (randomNumber === 23) {
                console.log('Add one point to an Ability Score of your choice');
            }
            if (randomNumber === 24) {
                console.log('Add one point to an Ability Score of your choice');
            }
            if (randomNumber === 25) {
                console.log('Add one point to an Ability Score of your choice');
            }
            if (randomNumber === 26) {
                console.log('Add one point to an Ability Score of your choice');
            }
            if (randomNumber === 27) {
                console.log('Add one point to an Ability Score of your choice');
            }
            if (randomNumber === 28) {
                console.log('Add one point to an Ability Score of your choice');
            }
            if (randomNumber === 29) {
                console.log('Add one point to an Ability Score of your choice');
            }
            if (randomNumber === 30) {
                console.log('Add a total of two points to your Intelligence Score');
            }
            if (randomNumber === 31) {
                console.log('Add a total of two points to your Intelligence Score');
            }
            if (randomNumber === 32) {
                console.log('Add a total of two points to your Intelligence Score');
            }
            if (randomNumber === 33) {
                console.log('Add a total of two points to your Intelligence Score');
            }
            if (randomNumber === 34) {
                console.log('Add a total of two points to your Intelligence Score');
            }
            if (randomNumber === 35) {
                console.log('Add a total of two points to your Intelligence Score');
            }
            if (randomNumber === 36) {
                console.log('Add a total of two points to your Intelligence Score');
            }
            if (randomNumber === 37) {
                console.log('Add a total of two points to your Intelligence Score');
            }
            if (randomNumber === 38) {
                console.log('Add a total of two points to your Intelligence Score');
            }
            if (randomNumber === 39) {
                console.log('Add a total of two points to your Intelligence Score');
            }
            if (randomNumber === 40) {
                console.log('Add a total of two points to your Wisdom Score');
            }
            if (randomNumber === 41) {
                console.log('Add a total of two points to your Wisdom Score');
            }
            if (randomNumber === 42) {
                console.log('Add a total of two points to your Wisdom Score');
            }
            if (randomNumber === 43) {
                console.log('Add a total of two points to your Wisdom Score');
            }
            if (randomNumber === 44) {
                console.log('Add a total of two points to your Wisdom Score');
            }
            if (randomNumber === 45) {
                console.log('Add a total of two points to your Wisdom Score');
            }
            if (randomNumber === 46) {
                console.log('Add a total of two points to your Wisdom Score');
            }
            if (randomNumber === 47) {
                console.log('Add a total of two points to your Wisdom Score');
            }
            if (randomNumber === 48) {
                console.log('Add a total of two points to your Wisdom Score');
            }
            if (randomNumber === 49) {
                console.log('Add a total of two points to your Wisdom Score');
            }
            if (randomNumber === 50) {
                console.log('Add a total of two points to your Charisma Score');
            }
            if (randomNumber === 51) {
                console.log('Add a total of two points to your Charisma Score');
            }
            if (randomNumber === 52) {
                console.log('Add a total of two points to your Charisma Score');
            }
            if (randomNumber === 53) {
                console.log('Add a total of two points to your Charisma Score');
            }
            if (randomNumber === 54) {
                console.log('Add a total of two points to your Charisma Score');
            }
            if (randomNumber === 55) {
                console.log('Add a total of two points to your Charisma Score');
            }
            if (randomNumber === 56) {
                console.log('Add a total of two points to your Charisma Score');
            }
            if (randomNumber === 57) {
                console.log('Add a total of two points to your Charisma Score');
            }
            if (randomNumber === 58) {
                console.log('Add a total of two points to your Charisma Score');
            }
            if (randomNumber === 59) {
                console.log('Add a total of two points to your Charisma Score');
            }
            if (randomNumber === 60) {
                console.log('Add a total of two points to your Dexterity or Strength Score');
            }
            if (randomNumber === 61) {
                console.log('Add a total of two points to your Dexterity or Strength Score');
            }
            if (randomNumber === 62) {
                console.log('Add a total of two points to your Dexterity or Strength Score');
            }
            if (randomNumber === 63) {
                console.log('Add a total of two points to your Dexterity or Strength Score');
            }
            if (randomNumber === 64) {
                console.log('Add a total of two points to your Dexterity or Strength Score');
            }
            if (randomNumber === 65) {
                console.log('Add a total of two points to your Dexterity or Strength Score');
            }
            if (randomNumber === 66) {
                console.log('Add a total of two points to your Dexterity or Strength Score');
            }
            if (randomNumber === 67) {
                console.log('Add a total of two points to your Dexterity or Strength Score');
            }
            if (randomNumber === 68) {
                console.log('Add a total of two points to your Dexterity or Strength Score');
            }
            if (randomNumber === 69) {
                console.log('Add a total of two points to your Dexterity or Strength Score');
            }
            if (randomNumber === 70) {
                console.log('Add a total of two points to your Constitution Score');
            }
            if (randomNumber === 71) {
                console.log('Add a total of two points to your Constitution Score');
            }
            if (randomNumber === 72) {
                console.log('Add a total of two points to your Constitution Score');
            }
            if (randomNumber === 73) {
                console.log('Add a total of two points to your Constitution Score');
            }
            if (randomNumber === 74) {
                console.log('Add a total of two points to your Constitution Score');
            }
            if (randomNumber === 75) {
                console.log('Add a total of two points to your Constitution Score');
            }
            if (randomNumber === 76) {
                console.log('Add a total of two points to your Constitution Score');
            }
            if (randomNumber === 77) {
                console.log('Add a total of two points to your Constitution Score');
            }
            if (randomNumber === 78) {
                console.log('Add a total of two points to your Constitution Score');
            }
            if (randomNumber === 79) {
                console.log('Add a total of two points to your Constitution Score');
            }
            if (randomNumber === 80) {
                console.log('Add a total of two points to your Ability Scores');
            }
            if (randomNumber === 81) {
                console.log('Gain the Grappler Feat');
            }
            if (randomNumber === 82) {
                console.log('Gain the Observant Feat');
            }
            if (randomNumber === 83) {
                console.log('Gain the Linguist Feat');
            }
            if (randomNumber === 84) {
                console.log('Gain the Mounted Combat Feat');
            }
            if (randomNumber === 85) {
                console.log('Gain the Lucky Feat');
            }
            if (randomNumber === 86) {
                console.log('Gain the Mobile Feat');
            }
            if (randomNumber === 87) {
                console.log('Gain the Tough Feat');
            }
            if (randomNumber === 88) {
                console.log('Gain one Feat of your choice');
            }
            if (randomNumber === 89) {
                console.log('Add a total of three points to your Ability Scores');
            }
            if (randomNumber === 90) {
                console.log('Gain two Feats of your choice');
            }
            if (randomNumber === 91) {
                console.log('Gain the Boon of Invincibility');
            }
            if (randomNumber === 92) {
                console.log('Gain the Boon of Blind Sight');
            }
            if (randomNumber === 93) {
                console.log('Gain the Boon of Luck');
            }
            if (randomNumber === 94) {
                console.log('Gain the Boon of Immortality');
            }
            if (randomNumber === 95) {
                console.log('Gain the Boon of Fortitude');
            }
            if (randomNumber === 96) {
                console.log('Gain the Boon of Immortality');
            }
            if (randomNumber === 97) {
                console.log('Gain the Boon of True Sight');
            }
            if (randomNumber === 98) {
                console.log('Add a total of four points to your Ability Scores');
            }
            if (randomNumber === 99) {
                console.log('Gain one Epic Feat of your choice');
            }
            if (randomNumber === 100) {
                console.log('Gain two Epic Feats of your choice');
            }
        }
    }, 1)
}

