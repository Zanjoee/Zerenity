document.getElementById('feeling-form').addEventListener('submit', function (event) {
  event.preventDefault();
  displayRandomQuote();
});

document.getElementById('get-another-quote-btn').addEventListener('click', displayRandomQuote);

function displayRandomQuote() {
  const feeling = document.getElementById('feeling').value;

  const quotes = {
    happy: [
      { content: "Happiness is not by chance, but by choice.", author: "Jim Rohn" },
      { content: "For every minute you are angry, you lose sixty seconds of happiness.", author: "Ralph Waldo Emerson" },
      { content: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
      { content: "Happiness is when what you think, what you say, and what you do are in harmony.", author: "Mahatma Gandhi" },
      { content: "Happiness depends upon ourselves.", author: "Aristotle" },
      { content: "The most important thing is to enjoy your life—to be happy—it's all that matters.", author: "Audrey Hepburn" },
      { content: "Happiness is the secret to all beauty. There is no beauty without happiness.", author: "Christian Dior" },
      { content: "The only way to find true happiness is to risk being completely cut open.", author: "Chuck Palahniuk" },
      { content: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
      { content: "Count your age by friends, not years. Count your life by smiles, not tears.", author: "John Lennon" },
      { content: "Happiness is not having what you want. It is appreciating what you have.", author: "Unknown" },
      { content: "The best way to cheer yourself is to try to cheer someone else up.", author: "Mark Twain" },
      { content: "If you want to be happy, be.", author: "Leo Tolstoy" },
      { content: "The happiest people don’t have the best of everything; they make the best of everything.", author: "Unknown" },
      { content: "Happiness is a warm puppy.", author: "Charles M. Schulz" },
      { content: "Happiness is only real when shared.", author: "Jon Krakauer" },
      { content: "It’s a helluva start, being able to recognize what makes you happy.", author: "Lucille Ball" },
      { content: "Be happy for this moment. This moment is your life.", author: "Omar Khayyam" },
      { content: "Happiness lies in the joy of achievement and the thrill of creative effort.", author: "Franklin D. Roosevelt" },
      { content: "Most people are about as happy as they make up their minds to be.", author: "Abraham Lincoln" }
    ],
    sad: [
      { content: "Tears come from the heart and not from the brain.", author: "Leonardo da Vinci" },
      { content: "The word 'happiness' would lose its meaning if it were not balanced by sadness.", author: "Carl Jung" },
      { content: "Sadness flies away on the wings of time.", author: "Jean de La Fontaine" },
      { content: "Heavy hearts, like heavy clouds in the sky, are best relieved by the letting of a little water.", author: "Christopher Morley" },
      { content: "Sadness is but a wall between two gardens.", author: "Khalil Gibran" },
      { content: "The pain never really goes away; you just elevate and get used to it by growing stronger.", author: "Ritu Ghatourey" },
      { content: "The good times of today, are the sad thoughts of tomorrow.", author: "Bob Marley" },
      { content: "Our sweetest songs are those that tell of saddest thought.", author: "Percy Bysshe Shelley" },
      { content: "Sadness is almost never anything but a form of fatigue.", author: "Andre Gide" },
      { content: "The walls we build around us to keep sadness out also keeps out the joy.", author: "Jim Rohn" },
      { content: "There is no greater sorrow than to recall in misery the time when we were happy.", author: "Dante Alighieri" },
      { content: "Sadness is a part of life’s journey.", author: "Unknown" },
      { content: "Every human walks around with a certain kind of sadness. They may not wear it on their sleeves, but it's there if you look deep.", author: "Taraji P. Henson" },
      { content: "Sadness is but a garden where the most beautiful flowers grow.", author: "Matshona Dhliwayo" },
      { content: "You cannot protect yourself from sadness without protecting yourself from happiness.", author: "Jonathan Safran Foer" },
      { content: "Tears are words that need to be written.", author: "Paulo Coelho" },
      { content: "There are moments when, even to the sober eye of Reason, the world of our sad humanity must assume the aspect of Hell.", author: "Edgar Allan Poe" },
      { content: "Don't cry because it's over, smile because it happened.", author: "Dr. Seuss" },
      { content: "Experiencing sadness and anger can make you feel more creative, and by being creative you can get beyond your pain or negativity.", author: "Yoko Ono" },
      { content: "The sad truth is that the truth is sad.", author: "Lemony Snicket" }
    ],
    inspired: [
      { content: "Act as if what you do makes a difference. It does.", author: "William James" },
      { content: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
      { content: "The best way to predict the future is to create it.", author: "Peter Drucker" },
      { content: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
      { content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
      { content: "The most common way people give up their power is by thinking they don't have any.", author: "Alice Walker" },
      { content: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
      { content: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
      { content: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
      { content: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
      { content: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
      { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
      { content: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
      { content: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
      { content: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen Covey" },
      { content: "Dream big and dare to fail.", author: "Norman Vaughan" },
      { content: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
      { content: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
      { content: "Do what you feel in your heart to be right – for you’ll be criticized anyway.", author: "Eleanor Roosevelt" },
      { content: "Don’t count the days, make the days count.", author: "Muhammad Ali" }
    ],
    anxious: [
      { content: "You don't have to control your thoughts. You just have to stop letting them control you.", author: "Dan Millman" },
      { content: "Do not anticipate trouble or worry about what may never happen. Keep in the sunlight.", author: "Benjamin Franklin" },
      { content: "Anxiety is the dizziness of freedom.", author: "Søren Kierkegaard" },
      { content: "Anxiety does not empty tomorrow of its sorrows, but only empties today of its strength.", author: "Charles Spurgeon" },
      { content: "Worrying is carrying tomorrow's load with today's strength - carrying two days at once.", author: "Corrie Ten Boom" },
      { content: "You can't always control what goes on outside, but you can always control what goes on inside.", author: "Wayne Dyer" },
      { content: "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.", author: "Thich Nhat Hanh" },
      { content: "No amount of anxiety can change the future. No amount of regret can change the past.", author: "Karen Salmansohn" },
      { content: "Surrender to what is. Let go of what was. Have faith in what will be.", author: "Sonia Ricotti" },
      { content: "Do not let your difficulties fill you with anxiety; after all, it is only in the darkest nights that stars shine more brightly.", author: "Ali Ibn Abi Talib" },
      { content: "Worry never robs tomorrow of its sorrow. It only saps today of its joy.", author: "Leo F. Buscaglia" },
      { content: "Anxiety is a thin stream of fear trickling through the mind. If encouraged, it cuts a channel into which all other thoughts are drained.", author: "Arthur Somers Roche" },
      { content: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
      { content: "Sometimes letting things go is an act of far greater power than defending or hanging on.", author: "Eckhart Tolle" },
      { content: "There are two kinds of worries – those you can do something about and those you can’t. Don’t spend any time on the latter.", author: "Duke Ellington" },
      { content: "You may not control all the events that happen to you, but you can decide not to be reduced by them.", author: "Maya Angelou" },
      { content: "Every tomorrow has two handles. We can take hold of it with the handle of anxiety or the handle of faith.", author: "Henry Ward Beecher" },
      { content: "Rule number one is, don’t sweat the small stuff. Rule number two is, it’s all small stuff.", author: "Robert Eliot" },
      { content: "Do not let your heart be troubled, neither let it be afraid.", author: "Jesus Christ" },
      { content: "Today is the tomorrow we worried about yesterday.", author: "Unknown" }
    ],
    afraid: [
      { content: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
      { content: "Fear is a natural reaction to moving closer to the truth.", author: "Pema Chödrön" },
      { content: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
      { content: "Fear is only as deep as the mind allows.", author: "Japanese Proverb" },
      { content: "Courage is not the absence of fear, but rather the judgment that something else is more important than fear.", author: "Ambrose Redmoon" },
      { content: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
      { content: "Fear defeats more people than any other one thing in the world.", author: "Ralph Waldo Emerson" },
      { content: "Do not be afraid; our fate cannot be taken from us; it is a gift.", author: "Dante Alighieri" },
      { content: "Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering.", author: "Yoda" },
      { content: "I learned that courage was not the absence of fear, but the triumph over it.", author: "Nelson Mandela" },
      { content: "Fear is temporary. Regret is forever.", author: "Unknown" },
      { content: "To fear is one thing. To let fear grab you by the tail and swing you around is another.", author: "Katherine Paterson" },
      { content: "Fear is only as deep as the mind allows.", author: "Japanese Proverb" },
      { content: "Fear: False Evidence Appearing Real.", author: "Unknown" },
      { content: "Fear makes the wolf bigger than he is.", author: "German Proverb" },
      { content: "Do the thing you fear, and the death of fear is certain.", author: "Ralph Waldo Emerson" },
      { content: "To live a creative life, we must lose our fear of being wrong.", author: "Joseph Chilton Pearce" },
      { content: "Fears are educated into us, and can, if we wish, be educated out.", author: "Karl A. Menninger" },
      { content: "Too many of us are not living our dreams because we are living our fears.", author: "Les Brown" },
      { content: "He who is not everyday conquering some fear has not learned the secret of life.", author: "Ralph Waldo Emerson" }
    ]
  };

  const randomQuote = quotes[feeling][Math.floor(Math.random() * quotes[feeling].length)];

  // Update the content and author fields
  document.getElementById('quote-content').textContent = randomQuote.content;
  document.getElementById('quote-author').textContent = randomQuote.author;

  // Hide the dropdown and original button
  document.getElementById('feeling').style.display = 'none';
  document.querySelector('.new-quote-btn').style.display = 'none';

  // Change the label text
  document.querySelector('#feeling-form label').textContent = 'This is a quote for you:';

  // Show the "Get Another Quote" button
  document.getElementById('get-another-quote-btn').style.display = 'block';

  // Add the border to the author element when a quote is displayed
  document.getElementById('quote-author').classList.add('with-border');
}
