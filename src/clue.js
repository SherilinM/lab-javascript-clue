// ITERATION 1

// Suspects Array

class Suspects {
  constructor(firstName, lastName, occupation, age, description, image, color){
    this.firstName = firstName 
    this.lastName = lastName 
    this.occupation = occupation 
    this.age = age 
    this.description = description 
    this.image = image
    this.color = color 
  }
}

const suspectsArray = [
 {firtsNmae: 'Jacob', lastName: 'Green', occupation: 'Entrepeneur', age: '45', description: 'He has a lot of connections', image:'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg', color: 'green'},
 {firtsNmae: 'Doctor', lastName: 'Orchid', occupation: 'Scientist', age: '26', description: 'PhD in plant toxicology. Adopted daughter of Mr.Boddy', image:'http://www.radiotimes.com/uploads/images/Original/111967.jpg', color: 'white'},
 {firtsNmae: 'Victor', lastName: 'Plum', occupation: 'Designer', age: '22', description: 'Billionaire video game designer', image:'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg', color: 'purple'},
 {firstName: 'Kasandra', lastName: 'Scarlet', occupation: 'Actor', age: '31', description: 'She is an A-list movie star with a dark past', image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg', color:'red'},
 {firstName: 'Eleanor', lastName: 'Peacock', occupation: 'Socialité', age: '36', description: 'She is from a wealthy family and uses her status and money to earn popularity',image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg', color: 'blue'},
 {firstName: 'Jack', lastName: 'Mustard', occupation: 'Retired Football player', age: '62', description: 'He is a former football player who tries to get by on his former glory', image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg', color: 'yellow'}
]

// Rooms Array


class Weapons {
  constructor(name, weight){
    this.name = name
    this.weight = weight
  }
}

const weaponsArray = [
 {name: 'rope', weight: '10'},
 {name: 'knife', weight: '8'},
 {name: 'candlestick', weight: '2'},
 {name: 'dumbbel11', weight: '30'},
 {name: 'poison', weight:'2'},
 {name: 'axe', weight:'15'},
 {name: 'bat', weight:'13'},
 {name: 'trophy', weight:'25'},
 {name: 'pistol', weight: '20'}
];

// Weapons Array


class Rooms extends Weapons {
  super(name) 
}

const roomsArray = [
  {name:'Dining Room'},
  {name:'Conservatory'},
  {name: 'Kitchen'},
  {name: 'Study'},
  {name: 'Library'},
  {name: 'Billiard Room'},
  {name: 'Loung'},
  {name: 'Ballroom'},
  {name: 'Hall'},
  {name: 'Spa'},
  {name: 'Living Room'},
  {name: 'Observatory'},
  {name: 'Theater'},
  {name: 'Guest House'},
  {name: 'Patio'}
];


// ITERATION 2

function selectRandom(array) {

  return array[Math.floor(Math.random() * array.lenght)]
  
}

function pickMystery() {

  return {
    Suspects : selectRandom(suspectsArray),
    Rooms : selectRandom(roomsArray),
    Weapons : selectRandom(weaponsArray)
  }
}

console.log("pickMystery", pickMystery()); 

// ITERATION 3

function revealMystery(mistery) {
  console.log(mistery.Suspects.firstName, mistery.Suspects.lastName, 'mato al Sr. Boddy usando el', mistery.Weapons.name, 'en la', mistery.Rooms.name)
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
