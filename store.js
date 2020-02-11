const quizBank=[
  { id: cuid(),
    question: 'What is the offical name of Taiwan?',
    image: 'https://tnimage.s3.hicloud.net.tw/photos/shares/5afa69ff9b7b6.png',
    option: [
      'People Republic of China',
      'Kingdom of Great China',
      'Republic of China',
      'United of China'
    ],
    answer: 'Republic of China'
  },
  { id: cuid(),
    question: 'Summer 2020 Olympics will be held in which city?',
    image: 'https://jw-webmagazine.com/wp-content/uploads/2019/06/jw-5d15da96c49484.64193252.jpeg',
    option: [
      'Tokyo',
      'Osaka',
      'Nagoya',
      'Sapporo'
    ],
    answer: 'Tokyo'
  },
  { id: cuid(),
    question: 'What was the capital of Vietnam from 1802 to 1945?',
    image: 'https://thuathienhue.gov.vn/Portals/0/Medias/Nam2018/T3/Thai%20Hoa.jpg',
    option: [
      'Hanoi',
      'Hue',
      'Saigon',
      'Hoian'
    ],
    answer: 'Hue'
  },
  { id: cuid(),
    question: 'The Forbidden City is located in the heart of which city?',
    image: 'https://funlifecrisis.com/wp-content/uploads/2019/10/guide-to-visiting-the-forbidden-city-beijing-china.jpg',
    option: [
      'Beijing',
      'Shanghai',
      'Nanjing',
      'Changan'
    ],
    answer: 'Beijing'
  },
  { id: cuid(),
    question: 'What is the capital of South Korea?',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Samsung_headquarters.jpg/1024px-Samsung_headquarters.jpg',
    option: [
      'Seoul',
      'Busan',
      'Incheon',
      'Pyongyang'
    ],
    answer: 'Seoul'
  }
]
 
const user= {
    currentQuestion: 0, 
    answer: '',
    currentView: '',
    score: 0
  }
