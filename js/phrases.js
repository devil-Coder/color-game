const phrases = [
        "Great!",
        "Phenomenal!",
        "Superb!",
        "Cool!",
        "Out Of Sight!",
        "Excellent!",
        "Unbelievable Work!",
        "Two Thumbs Up!",
        "You've Got It!",
        "Way To Go!",
        "Terrific!",
        "Outstanding Performance!",
        "You've Outdone Yourself!",
        "Marvelous!",
        "Your Help Counts!",
        "Amazing Effort!",
        "Bravo!",
        "Exceptional!",
        "Breathtaking!",
        "Wonderful!",
        "You're Special!",
        "Keep Up The Good Work!",
        "First Rate Work!",
        "Fantastic Work!",
        "You Should Be Proud!",
        "I Knew You Had It In You!",
        "Very Good!",
        "Stupendous!",
        "Sensational!",
        "A+ Work!",
        "What An Imagination!",
        "Awesome!",
        "You're A Great Example For Others!",
        "You Made It Happen!",
        "You're A Real Trooper!",
        "It Couldn't Be Better!",
        "Good For You!",
        "You're A Good Sport!",
        "You Made The Difference!",
        "Take A Bow!",
        "Super Job!",
        "You're Unique!",
        "It's Everything I Hoped For!",
        "How Thoughtful Of You!",
        "Nice Going!",
        "You're A Class Act!",
        "Well Done!",
        "You're Inspiring!",
        "How Artistic!",
        "You Go The Extra Mile!",
        "Hooray For You!",
        "Great Answer!",
        "You Deserve A Hug!",
        "High Five!",
        "Extra Special Work!",
        "Wow!",
        "You're Getting Better!",
        "You're Tops!",
        "You're Amazing!",
        "What A Great Idea!",
        "You Figured It Out",
        "You've Got What It Takes!",
        "You're Neat!",
        "You're A Joy!",
        "You're A Shining Star!",
        "Spectacular Work!",
        "You're #1!",
        "You Tried Hard!",
        "The Time You Put In Really Shows!",
        "Remarkable!",
        "Far Out!",
        "How Extraordinary!",
        "You're A Winner!",
        "You Came Through!",
        "That's Incredible!",
        "5 Star Work!",
        "You're Super!",
        "You Can Do It!",
        "You're The Greatest!",
        "Sweet!",
        "Great Effort!",
        "How Original!",
        "What A Genius!",
        "You're A Natural!",
        "Very Brave!",
        "You're A Pleasure To Know!",
        "Way To Go!",
        "You're Sharp!",
        "Congratulations!",
        "I'm Proud Of You!",
        "Thank You For Caring!",
        "I'm Impressed!",
        "You're Very Talented!",
        "Great Discovery!",
        "You're A Champ!",
        "Right On!",
        "You're So Kind!",
        "Thanks For Helping!",
        "You're A-OK!",
        "Magnificent!",
        "You've Earned My Respect!",
        "You've Made Progress!",
        "Outstanding Effort!",
        "Neat Work!",
        "I Love It!",
        "Beautiful!",
        "Clever!",
        "Brilliant!",
        "That's Perfect!",
        "Right On!",
        "Your Best Work!",
        "Expressive!",
        "You've Improved!",
        "Keep It Up!",
        "Nice One!",
        "Wicked!",
        "Incomparable!",
        "Incredible!",
        "I Appreciate Your Help!",
        "Good Leadership!",
        "Great Job!",
        "Stunning!",
        "You Rule!",
        "That's Very Kind!",
        "Keep On Trying!",
        "You Make Me Smile!",
        "You Rock!",
        "You're An Angel!",
        "That's The Way!",
        "Good For You!",
        "A Job Well Done!",
        "You're A Good Friend!",
        "Way To Use Your Head!",
        "Radical!",
        "Alright!",
        "You're Very Patient!",
        "Wonderful!",
        "Way To Be Responsible!",
        "Getting Better All The Time!",
        "Worthy Of An Oscar!",
        "Better Than Ever!",
        "Super Duper!",
        "Great Dedication!",
        "Top Notch!",
        "Hats Off To You!",
        "Spectacular!",
        "Good Try!",
        "Very Courageous!",
        "I Like It!",
        "Great Enthusiasm!",
        "Lovely!",
        "Very Resourceful!",
        "It's A Masterpiece!"
     ]

const generateRandomNumber = ()=>{
    return Math.floor((Math.random()*phrases.length)+1);
}

const getSuperscript = (number)=>{
    switch (number) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        case 4:
            return 'th';
        case 5:
            return 'th';
        default:
            return '';
    }
}

export {phrases,generateRandomNumber,getSuperscript}