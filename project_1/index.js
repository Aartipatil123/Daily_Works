function generateDrama() {
    event.preventDefault();
    
    let drama = document.getElementById('drama');
    
    let dramaList = ['Itaewon Class', 'The Master\'s Sun', 'Secret Garden', 'The Greatest Love', 'Coffee Prince', 'IRIS', 'Boys Over Flowers', 'You\'re All Surrounded', 'Big', 'Goblin', 'Heirs', 'Hospital Playlist', 'It\'s Okay, That\'s Love', 'Signal', 'King2Hearts', 'Crash Landing on You', 'Vagabond', 'Fight My Way', 'Weightlifthing Fairy Kim Bokjoo', 'Chief Kim', 'Mr. Sunshine', 'Falling for Innocence', 'Hi Bye Mama', 'Kill Me Heal Me', 'Korean Odyssey', 'Cruel City', 'Bad Guys']; 
    
    drama.innerText = dramaList[Math.floor(Math.random() * dramaList.length)];
    
  }