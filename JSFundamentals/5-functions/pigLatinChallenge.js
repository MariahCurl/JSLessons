//Challenge

// Pig Latin


let test = 'And the world turns and is great';

const pigLatin = (toChange, firstWord) => {
    //console.log(`Previous: ${toChange}`);
    
    let modified = toChange.split(''); //split the word into an array of characters
    const vowels = ['a', 'e', 'i', 'o', 'u']; //change the string if it's a vowel
    
    if ( !(vowels.includes(modified[0].toLowerCase())) ) {

        // take the first consanant, check if there are more until we hit a vowel. Then throw them at the end of the word in order
        do {

            modified.push( modified.shift().toLowerCase() ); //take the consonant and throw it at the end of the word

        } while ( !(vowels.includes(modified[0].toLowerCase())) ); //! swaps boolean value

        modified[0] = firstWord ? modified[0].toUpperCase() : modified[0]; //first character to uppercase
        modified = modified.join(""); //conbines the array of characters into a single string
        modified += 'ay'; //adds ay to the end
        //console.log(modified);


    } else {

        modified = modified.join("") + 'way';
        //console.log(modified);
    }
    return modified;
}

const pigSentence = ( toChange ) => {

    let modified =  [];
    toChange.split(' ').forEach((word, index) => {
        modified.push( pigLatin(word, index === 0) );
    })
    modified = modified.join(' ');
    console.log(modified);
}

pigSentence(test);
//And      => Andway 
//pig      => igpay
//This     => Isthay
//string   => Ingstray

