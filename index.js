/* Cindy, Jose, Mike, Ashley 
GROW WITH TRIVIA ED!! */

// How do we want to format our code?

// Name for our game: Grow With Trivia Ed

const message = {
  A: 'Welcome to Grow With Trivia Ed! Learn about some of the biggest topics in tech today, and earn points along the way! Ready to play? Click OK to proceed with the game.',
  B: 'Choose from the following trivia games we have available to play by typing in the corresponding number: \n \n \
 1. EcoTech Trivia \n  2. Online MisInformation Trivia  \n  3. Network Plus Trivia \n  4. Self-Driving Cars Trivia',
  C1: "You've chosen EcoTech Trivia! Lets get started! 🌳",
  C2: "It doesn't look like we have that yet. Try choosing again!",
  C3: "You've chosen Online MisInformation Trivia! 🕵️‍♂️ Lets get started!",
  C4: "You've chosen Network Plus Trivia! Lets get started!",
  C5: "You've chosen Self-Driving Cars Trivia! 🚘",
  D: 'Have a nice day!',
  E: "As you play the game there's some things to keep in mind. We will have some multiple choice and true/false questions. Just type in the letter corresponding to the choice, T for True, or F for False. You're ready to begin!",
  E2: 'You will gain 1 point for each question you answer correctly. As you gain points, you will also start growing your own lush virtual forest! \n \n 🍃🌳🌿🌱🐿️',
  E3: 'If you would like to exit the game at any time, just press cancel.',
  E4: 'For every question you answer correct, you gain 1 point. As you gain points, more self-driving cars will be driving on the road!',
  E5: 'For every question you answer correct, you gain 1 point. As you gain points, you will grow your tech forest.',
  E6: 'For every question you answer correct, you gain 1 point. As you gain points, you will earn yourself another coffee trip.',
  F: "You've finished playing this trivia game! We hope you've learned many new interesting facts. If you would like to play Grow With Trivia Ed again, click 'OK' to get back to our menu. If you would like to exit out of Grow With Trivia Ed, click 'cancel'.",
  // G: "Sorry, it looks like you exited Grow With Trivia Ed! We're sad to see you go, but refresh the page if it was a mistake so you can play again."
};

// MVP questions array
const ecoTriviaQuestions = [
  {
    question:
      'The internet has vastly enabled communication through the use of messages and emails. Compared to mailing a letter, sending a message/email is not only more time-efficient but more environmentally friendly as well. \n  \n Sending an email uses what percentage of the energy of delivering a paper letter?  \n \n a. 20%  \n b. 1.7%  \n c. 55% \n d. 4%',
    correctAnswer: 'b',
    info: 'Sending an email uses about 1.7% of the energy of delivering a paper letter. Emails not only cut down on energy use, but they also require no physical materials like paper, which is a leading cause of deforestation.',
  },
  {
    question:
      'Search engines are undoubtedly a crucial part of the internet experience. Search engines account for 93% of internet traffic - Google being the most popular one with 2 trillion searches run on their platform annually. With the rising concern of climate change, newer search engines have emerged to contribute their part to solving the climate emergency.  \n  \n Which of the following search engines has planted over 171 million trees by 2023?  \n  \n  a. Google \n b. Yahoo \n c. DuckDuckGo \n d. Ecosia',
    correctAnswer: 'd',
    info: 'Ecosia, a search engine founded in 2009 in Berlin, has planted over 171 million trees by 2023. Ecosia donates 80% of its revenue to non-profit organizations that work for reforestation and plant trees. Currently, Ecosia has millions of users, the majority in France with 23% of users, followed by Germany with 17%, and then the United States with 15%.',
  },
  {
    question:
      'Despite the data center industry accounting for a large amount of carbon emissions, they have also been a leading force in the energy transition to renewables. Tech companies such as Amazon, Apple, Google, Meta and Microsoft are major buyers of PPAs (power purchase agreements) for renewable energy. \n  \n These five companies alone account for how much of the global corporate renewables market? \n  \n a. More than 50% of the market \n b. 15% of the market \n c. 40% of the market \n d. 3% of the market',
    correctAnswer: 'a',
    info: 'Amazon, Apple, Google, Meta and Microsoft account for over 45 GW of corporate renewable purchases worldwide - which is more than 50% of the global corporate renewables market. In 2023, Amazon was the largest clean energy buyer globally, with 74 individual PPAs, totaling 8.8 GW of capacity. Amazon also has the eighth-largest clean energy portfolio globally, with a total of 33.6 GW.',
  },
  {
    question:
      'An emerging solution to not only e-waste, but waste in general, has been the circular economy. This economic system, which is based on the reuse and regeneration of materials or products, has fostered sustainable business models such as smartphone refurbishing. Buying a refurbished smartphone not only uses less raw material and water but also vastly decreases the carbon emissions released into our atmosphere compared to buying a brand-new smartphone. \n  \n  A refurbished smartphone puts what percentage less carbon emissions into the atmosphere compared to a brand-new smartphone? \n  \n a. 53% \n b. 91.6% \n c. 76% \n d. 22%',
    correctAnswer: 'b',
    info: 'A 2022 ADEME report found that refurbished smartphones emit 91.6% less CO2 into the atmosphere than brand-new smartphones. Other refurbished devices followed close behind, with desktops emitting 89.778% less, refurbished laptops emitting 88.992% less, and tablets emitting 88.135% less than brand-new devices.',
  },
  {
    question:
      'Since the start of the pandemic, remote work has become more common than ever before. Various software and communication tools like Zoom, Slack, and Microsoft Teams have helped enable this transition from in-office work to remote work. These tools have reduced the need for commuting, and in turn, contributed to the drastic decrease in employees’ carbon emissions. \n  \n By what percentage can a worker’s carbon footprint decrease by working remotely instead of onsite? \n  \n a. 27% \n b. 13% \n c. 54% \n d. 89%',
    correctAnswer: 'c',
    info: 'A collaborative study by Cornell University and Microsoft researchers found that remote workers produce up to 54% less carbon emissions, compared to onsite workers. This decrease in emissions is associated with the lack of commuting required to get to work, which reduces the amount of fossil fuels used for transportation.',
  },
  {
    question:
      'E-waste (electronic waste) has been rapidly on the rise. In 2022, a record 62 million tons of e-waste was produced, a staggering 82% increase from 2010. Out of the 62 million, 4.6 million tons came from small IT and telecommunication equipment, the category under which laptops, mobile phones, GPS devices, routers, etc., fall under. \n  \n Out of the 4.6 million tons of e-waste in this category, what percentage of these products are collected and recycled? \n \n a. 77% \n b. 14% \n c. 22% \n d. 5%',
    correctAnswer: 'c',
    info: 'Only 22% of the small IT and telecommunication equipment has a documented collection and recycling rate. E-waste can have various negative effects on the environment, mainly that it can release toxic chemicals into the air that damage the atmosphere. These toxic chemicals can also seep into groundwater, and affect land and sea animals as well.',
  },
  {
    question:
      'Data centers contain servers that are essential to be able to access your favorite website or app, stream movies and music, and to carry out just about any action online. Traditional data centers require hefty amounts of electricity, water, cooling, and infrastructure, and they also rely on conventional energy sources - such as coal, natural gas, and nuclear power. \n  \n How many homes would it take to equate the electricity consumption of a single data center? \n  \n a. 100,000 \n b. 150 \n c. 50,000 \n d. 3,000',
    correctAnswer: 'c',
    info: 'A single data center can consume the equivalent electricity of 50,000 homes. Annually, data centers collectively devour 200 terawatt hours (TWh) of energy. In 2022, the electricity utilized by data centers accounted for 0.3 percent of overall carbon emissions. If extended to account for networked devices like laptops, smartphones, and tablets, the total increases to 2 percent of global carbon emissions.',
  },
  {
    question:
      'The rise of AI (artificial intelligence) has reached far and wide. Popular models such as ChatGPT have an estimated up to 10 million users a day, with many users prompting the model more than once. While the implementation of AI in everyday tasks has become more widely adopted, it also comes at a cost to the planet. Simply creating an image with generative AI uses as much energy as charging your phone. \n  \n True or False: In 2022 alone, ChatGPT-3 was estimated to have created 502 metric tons of CO2.',
    correctAnswer: 't',
    info: 'A 2023 report from Stanford University reported that in 2022, ChatGPT-3 was estimated to have created 502 metric tons of CO2. This is the equivalent of a single person flying from New York to San Francisco more than 500 times. The use of AI technology across all sectors even produces carbon dioxide emissions at a level comparable to the aviation industry.',
  },
  {
    question:
      'With the rise of remote work, videoconferencing has become much more mainstream. While videoconferencing services like Zoom facilitate communication between parties in various locations, the use of video can have a real impact on the carbon footprint of a videoconference. A 2021 report from researchers at Purdue University, Yale University, and MIT, reported that having your camera off reduces the carbon footprint of a videoconferencing session by up to 96%. \n  \n True or False: Zoom hosts 3.3 trillion meeting minutes annually. If a quarter of those sessions were audio-only, a minimum of 18.2 million pounds of carbon dioxide could be saved. This would be the equivalent of planting 2 million trees.',
    correctAnswer: 't',
    info: 'The 2021 report equated this to planting 2 million trees. The study even suggested that the savings could be much larger, as much as 121 billion pounds of saved carbon dioxide.',
  },
  {
    question:
      'As streaming begins to overtake the entertainment industry, more and more time is spent on streaming platforms such as Netflix and Hulu, rather than television. Much like other online tools, a user’s preferences and decisions could vastly impact the amount of carbon emissions that result from the use of these platforms. Netflix itself produces about 1.1 million metric tons of CO2 annually. \n  \n True or False: It is estimated that streaming content on Netflix or Hulu in standard definition rather than in high definition could reduce carbon emissions by as much as 86%.',
    correctAnswer: 't',
    info: 'A 2021 report from researchers at Purdue University, Yale University, and MIT, estimated that switching from high definition to standard definition would reduce carbon emissions by up to 86%. They also found that a four-hour binge session on Netflix is the equivalent of driving a gas-powered car for one mile.',
  },
];

// Mike's object
const infoQuestions = [
  {
    //1
    question:
      'True of False: AI assistant tools by Google, Microsoft and Apple \
are all relibable source for receiving trustworthy news.',

    correctAnswer: 'f',

    info: `AI assistant tools are NOT trustworthy new sources. \
Algorithm Bias, Fact Checking Limitations and Human Oversight \
all contribute to AI not being factually reliable.`,
  },
  {
    //2
    question: `AI generated images are everywhere. While not foolproof, \
which of the following would help to determine if an image is fake: \n \n \
a. look for writing on such objects as street signs or billboards to see whether \
it’s backward or nonsensical.\
\n b.  Scanning the background of the photo for distorted details.\
\n c.  Noticing overly glossy and/or plastic like facial features. (beyond botox)\
\n d.  All of the above.`,

    correctAnswer: 'd',

    info: 'Considering these factors will all contribute to identifying manipulated AI.',
  },

  {
    //3
    question:
      'True or False: Social Media sites are now fully equipped and capable \
of sorting and debunking misinformation.',

    correctAnswer: 'f',

    info: 'While social media platforms have made progress in battling misinformation, they are not fully equipped to sort and debunk it entirely.',
  },
  {
    //4
    question:
      'A challenge of combating online misinformation is: \n \n \
a. The speed with which it spreads.\
\n b. Lack of interest in fact checking.\
\n c . The challenge of identifying fake news.\
\n d. All of the above.',

    correctAnswer: 'd',

    info: 'All of these contribute to the challenge of battling fake information.',
  },
  {
    //5
    question: `'Clickbait' refers to: \n \n \
a. A fishing technique.\
\n b. A. 90’s thriller featuring  the dude from CSI Miami.\
\n c. a website that uses sensational headlines to attract clicks.\
\n d. None of the above.`,

    correctAnswer: 'c',

    info: `A type of content designed to attract attention and encourage clicks. \
It's important to evaluate content critically before clicking on links.`,
  },
  {
    // 6
    question: `True or False: Taylor Swift “endorsed” the former president based on an image \
posted to his social media site.`,

    correctAnswer: 'f',

    info: `The image was AI generated and absolutely false. \
The truth can be found in the pop sensation's own Instagram post \
debunking the image and announcing her endorsement of his opponent \
(Woot Woot!)`,
  },
  {
    //7
    question: `The term “Filter Bubble” is used to describe: \n \n \
a.  A personalized online experience that limits exposure to diverse viewpoints.\
\n b. A crazy new JavaScript method for filtering Arrays.\
\n c. A social media tool for blocking harmful content.\
\n d. The latest trend on TikTok.`,

    correctAnswer: 'a',

    info: `A filter bubble refers to the phenomenon where individuals are exposed \
primarily to information and ideas that confirm their existing beliefs.`,
  },
  {
    //8
    question: `“Deep Fakes” refer to: \n \n \
a. Underwater deep sea diving rig.\
\n b. A fake news website.\
\n c. A deep dive into a research subject.\
\n d. A manipulated image or video generated by AI.`,

    correctAnswer: 'd',

    info: `Deepfakes are a type of synthetic media created using AI techniques.`,
  },
  {
    //9
    question: `Which of the following actual headlines were factual. \n \n \
a. “Nasa Confirms Alien Life Found on Mars” 2017\
\n b. “Pope Frances Endorses Donald Trump” 2016\
\n c. “Kanye West Announces Presidential Bid” 2022\
\n d. “Obama Signs Executive Order Banning Bibles from Public Schools” 2016`,

    correctAnswer: 'c',

    info: `Classic Kanye. Headlines can be crazy, but not as crazy as Kanye.`,
  },
  {
    //10
    question: `Reliable sources of news are: \n \n \
a. All social media influencers.\
\n b. Reputable news outlets.\
\n c. Anonymous online forms.\
\n d. My dog Lily.`,

    correctAnswer: 'b',

    info: `While I love my dog, she can be shady. Trusted news outlets are the way to go.`,
  },
];

// Network Plus object
const networkPlus = [
  {
    //1
    question:
      'Which layer is the physical layer in the OSI model: \n \n  A. Layer 2 \n  B. Layer 4 \n  C. Layer 1 \n  D. Layer 3 \n',
    correctAnswer: 'c',
    info: 'The first layer is the Physical Layer. Layer 2 is the Data-link layer, layer 3 is the Network and layer 4 is the Transport.',
  },
  {
    //2
    question:
      'Which of these is known as the Layer 2 of the OSI model:\n \n A. Transport layer\n B. Physical layer\n C. Network layer\n D. Data Link Layer\n',

    correctAnswer: 'd',
    info: 'The second layer is the Data Link Layer. Transport is the 4th, the physical is the first and the Network is the 3rd.',
  },
  {
    //3
    question:
      'Authentication and Authorization happens in which layer of the OSI model:\n \n A. Application layer\n B. Network layer\n C. Presentation Layer\n D. Session Layer',
    correctAnswer: 'd',
    info: 'The session layer creates communication channels between the client and server.',
  },
  {
    //4
    question:
      'User Datagram Protocol (UDP) is a connection-oriented protocol using a three-way handshake which is a set of initial steps required for establishing network connection. \n \n  T. True \n  F. False',
    correctAnswer: 'f',
    info: 'UDP is connectionless, and used for things like streaming and playing online games.',
  },
  {
    //5
    question:
      'Transmission Control Protocol (TCP) is an example of a connectionless protocol.\n \n   T. True \n   F. False',
    correctAnswer: 'f',
    info: 'TCP is connection based transmission. It uses a three way handshake to verify each packet. This is used to ensure secure transmissions between the server and the client.',
  },
  {
    //6
    question:
      'Which of these devices is designed to forward frames between network segments? \n \n A. Firewall \n B. Router \n C. Switch \n D. Modem',
    correctAnswer: 'c',
    info: 'Switches are devices that connect other devices such as computers, WAPs, printers and servers on the same network.',
  },
  {
    //7
    question:
      'Which of these network layer protocols specifies the format of packets and addressing schemes in network communications? \n \n  A. NetBIOS \n  B. TCP \n  C. IP \n  D. UDP',
    correctAnswer: 'c',
    info: '',
  },
  {
    //8
    question:
      'In the OSI model, which PDU is used on layer 2? \n \n A. Datagram \n B. Segment \n C. Frame \n D. Packet',
    correctAnswer: 'c',
    info: 'The protocol data units used in layer 2 are called frames. Layer 4 uses segments/datagram, and layer 3 uses Packets.',
  },
  {
    //9
    question:
      'In the OSI model, which PDU is used on layer 3? \n \n  A. Frame \n  B. Packet \n  C. Datagram \n  D. Segment',
    correctAnswer: 'b',
    info: 'The protocol data units used in layer 3 are called Packets. Layer 4 uses segments/datagram, and layer 2 uses frames.',
  },
  {
    //10
    question:
      'Which port is HTTPS? \n \n  A. 21 \n  B. 80 \n  C. 443 \n  D. 3389',
    correctAnswer: 'c',
    info: 'Port 443 is secured HTTP. Port 21 is FTP, 80 is unsecured HTTP and 3389 is RDP.',
  },
];

// Ashley's object for Self Driving Cars Quiz
const selfDrivingCarsQuestions = [
  {
    //Q1
    question: 'True or False: Are self-driving cars safe?',

    correctAnswer: 't',
    correctAnswer2: 'f',

    info: `Trick question! It really depends on what you deem to be safe.\n\
In a study published in June 2024 by the \n\
Nature Communications Journal, they analyzed accident data from 2,100 \n\
autonomous driving systems and 35,113 human-driven vehicles.\n\
Self-driving cars had fewer accidents in the majority comparable accident situations.\n\
Although there are less accidents, \n\
there is still some risk, just like when any driver gets behind the wheel.`,
    //   \n \
    //  Source: \n ${text.link("https://www.nature.com/articles/s41467-024-48526-4")}
  },
  {
    //Q2
    question: `Which step is not part of the AI Driving Software\'s process at Waymo? \n\
\nA: Sense\
\nB: Solve\
\nC: Smooth Driving\
\nD: Go`,

    correctAnswer: 'c',

    info: `From Waymo: The Waymo Driver sees and understands the world\n\
through a number of sensors, including cameras outside the car, and powerful \n\
artificial intelligence (AI) software — a process that we call “Sense, Solve, Go.”.`,
    // \n \
    // Source: ${text.link("https://support.google.com/waymo/answer/9190838?hl=en#:~:text=The%20Waymo%20Driver%20sees%20and,Sense%2C%20Solve%2C%20Go")}
  },
  {
    //Q3
    question:
      'What is the name of the self-driving taxi service that Tesla is developing? \n\
\nA: Cybertaxi \
\nB: Tesla Taxi \
\nC: Taxis by Tesla \
\nD: Cybercab',

    correctAnswer: 'd',

    info: `Tesla is unleashing their Cybercab on October 10th. `,
    //  \n \
    //   Source: ${text.link("https://insideevs.com/reviews/722798/tesla-robotaxi-cybercab-explainer/")}
  },
  {
    //Q4
    question:
      'Which location is GPS known to not work well in?  \n\
\nA: Bridges\
\nB: Tunnels\
\nC: Rainforests\
\nD: Traffic jams',

    correctAnswer: 'b',

    info: `\“​​GPS provides a course and precise geographic location of the vehicle\n\
(longitude, latitude and elevation), \n\
which can be fine-tuned when combined with the input from all other sensors.\n\
GPS sensors don\’t tend to work well in tunnels, \n\
nevertheless a self-driving car can compensate for this with input from other sensors.\” `,
    //   \n \
    //   Source: ${text.link("https://builtin.com/articles/self-driving-cars")}
  },
  {
    //Q5
    question: `Which technology uses light waves to detect objects further away? \n \
\n A: GPS\
\nB: Altimeter\
\nC: LiDAR \
\nD: Radar`,

    correctAnswer: 'c',

    info: `LiDAR uses light waves to detect objects that are further away with great precision.`,
    //   \n \
    // Source: ${text.link("https://builtin.com/articles/self-driving-cars")}
  },
  {
    //Q6
    question:
      'Which technology uses radio waves to detect close objects? \n\
\n A: GPS\
\nB: Radar\
\nC: LiDAR\
\nD: Altimeter',

    correctAnswer: 'b',

    info: `Radar is a sensor that uses radio waves to detect close objects.`,
    //   \n \
    // Source: ${text.link("https://builtin.com/articles/self-driving-cars")}
  },
  {
    //Q7
    question:
      'True or False: Autonomous vehicles will help eliminate traffic jams.',

    correctAnswer: 't',

    info: `A study published in 2023 concluded\n\
that when robot vehicles make up just 5% of \n\
traffic in a simulation, traffic jams were eliminated.`,
    //   Source: ${text.link("https://www.inverse.com/tech/self-driving-cars-traffic-problem?utm_source=tldrai")}` +
    //   `According to Monash University: "shared self-driving cars may combat these problems and deliver the much-longed for free-flowing traffic. \n \
    //   Like ride-sharing “pool” services today, such as Uber, Didi, Lyft and Ola, self-driving cars trips could be shared with one or more riders. \
    //   They could provide convenient and low-cost mobility-on-demand services. \n \
    //   Shared self-driving cars may even complement or replace conventional fixed-schedule and fixed-route transit systems, such as buses. \n \
    //  Shared self-driving cars coupled with transit could be one solution to cities’ traffic congestion problems."
    // Source: ${text.link("https://lens.monash.edu/@technology/2023/03/30/1385501/will-self-driving-cars-solve-the-problem-of-traffic-congestion")}
  },
  {
    //Q8
    question:
      'Which is not a company producing or working to producing robotaxis? \n\
\nA: Didi\
\nB: Pony.ai\
\nC: Revel\
\nD: Uber',

    correctAnswer: 'c',

    info: `Revel is an Electric Vehicle (EV) taxi service in NYC. All other companies are\n\
developing or have developed robotaxi service.`,
    // Sources: ${text.link("https://gorevel.com/mission")} \n \
    // ${text.link("https://technologymagazine.com/top10/top-10-autonomous-vehicle-companies")} \n \
    // ${text.link("https://www.uber.com/us/en/autonomous/")} \n \
    // ${text.link("https://asia.nikkei.com/Spotlight/Electric-cars-in-China/China-s-Didi-GAC-to-roll-out-self-driving-EV-robotaxis")}
  },
  {
    //Q9
    question:
      'Which city in the USA was last for Waymo robotaxis to be available in? \n \
\nA: San Francisco, CA \
\nB: Phoenix, AZ \
\nC: Los Angeles, CA \
\nD: Austin, TX',

    correctAnswer: 'd',

    info: `In April 2024, \nAustin was in the works of having access to Waymo.\n However, Austinites 
now have access to the Waymo waitlist to ride autonomously! `,
    //\n \
    // Sources: ${text.link("https://www.bbc.co.uk/newsround/68777656#:~:text=Customers%20are%20able%20to%20order,put%20people%20out%20of%20jobs")} \n \
    // ${text.link("https://waymo.com/waymo-one-austin/")}
  },
  {
    //Q10
    question:
      'The Department of Defense supported\n\
which university in the 80s to produce experimental \
Automatic Vehicles? \n\
\nA: Carnegie Mellon\
\nB: Princeton \
\nC: MIT \
\nD: Columbia',

    correctAnswer: 'a',

    info: `The Department of Defense's \n\
Defense Advanced Research Projects Agency\n\
supported Carnegie Mellon University Navigation Laboratory\n\
(or \“Navlab\”), which produced a series of experimental AVs.`,
    // Source: ${text.link("https://www.mobileye.com/blog/history-autonomous-vehicles-renaissance-to-reality/")}
  },
];

// Welcome - instructions and purpose
function beginGame() {
  const response = confirm(message.A);
  // if user confirms, we return the next function
  if (response) {
    return chooseGame();
  } else {
    //leads to if user presses cancel
    return alert(message.D);
  }
}

// Select from available Trivia games
// Eco-Tech Trivia for MVP
// adding on other trivia games for stretch goal

function chooseGame() {
  // storing the answer to lead into the appropriate func
  const response = prompt(message.B);
  if (response == '1') {
    alert(message.C1);
    return ecoTechTrivia();
  } else if (response == '2') {
    alert(message.C3);
    return misinformationTrivia();
  } else if (response == '3') {
    alert(message.C4);
    return networkPlusTrivia();
  } else if (response == '4') {
    alert(message.C5);
    return selfDrivingCarsTrivia();
  } else if (!response) {
    alert(message.D);
  } else {
    alert(message.C2);
    return chooseGame();
  }
}

// As we enter the available Trivia that is selected...

// ECOTECH TRIVIA
function ecoTechTrivia() {
  let points = 0;
  let forest = '';

  // we are making a deep copy of the original array
  const remainingQuestions = structuredClone(ecoTriviaQuestions);
  //   console.log(remainingQuestions);

  // providing instructions to play game
  alert(message.E);
  // informing about growing a forest
  alert(message.E2);
  // informing user how to exit out the game
  alert(message.E3);

  ecoTriviaQuestions.forEach((elem) => {
    // randomizer
    let random = Math.floor(Math.random() * remainingQuestions.length);
    // console.log(random1);
    // choice accesses question:value pair at the random index from the ecoTriviaQuestions arr
    let choice = remainingQuestions[random]['question'];
    // console.log(choice);

    // taking in the user's input to the question as a prompt
    response = prompt(choice);

    // if the answer is correct, add a point and alert
    if (response.toLowerCase() == remainingQuestions[random].correctAnswer) {
      // incrementing our points and forest
      points++;
      forest += '🍃🌳🌿🌱🐿️';

      // add an alert with the info for each question
      alert(`Correct! You've gained 1 point and added to your forest. \n \n \
  Current Points: ${points}\n\n${remainingQuestions[random].info} \n\n Your Current Forest:\n\n${forest}`);

      // splice after we see if the answer is correct
      remainingQuestions.splice(random, 1);
    } else {
      //if incorrect, points remain and user is alerted
      alert(
        `Not Quite. \n \n Current Points: ${points}\n\n${remainingQuestions[random].info} \n\n Your Current Forest:\n\n${forest}`
      );

      // splice after we see if the answer is inputted
      remainingQuestions.splice(random, 1);
    }
    // if the arr is looped through, we route to endGame
    if (remainingQuestions.length === 0) {
      return endGame();
    }
  });
  // for (let i = ecoTriviaQuestions.length; i >= 0; i--) {
  //   // console.log(`Index is ` + i);
  //   // console.log(`Length is ` + ecoTriviaQuestions.length);
  //   // random1 produces a random index in our ecoTriviaQuestions array
  //   let random = Math.floor(Math.random() * remainingQuestions.length);
  //   // console.log(random1);
  //   // choice1 accesses question:value pair at the random index from the ecoTriviaQuestions arr
  //   let choice = remainingQuestions[random]['question'];
  //   // console.log(choice1);

  //   // taking in the user's input to the question as a prompt
  //   response1 = prompt(choice);

  //   // if the answer is correct, add a point and alert
  //   if (response1.toLowerCase() == remainingQuestions[random].correctAnswer) {
  //     points++;
  //     alert(`Correct! You've gained 1 point. \n \n Current Points: ${points}\n\n${remainingQuestions[random].info}`);
  //     // add an alert with the info

  //     // splice after we see if the answer is correct
  //     remainingQuestions.splice(random, 1);
  //   } else {
  //     //if incorrect, points remain and user is alerted
  //     alert(`Not Quite. \n \n Current Points: ${points}\n\n${remainingQuestions[random].info}`);
  //     // splice after we see if the answer is inputted
  //     remainingQuestions.splice(random, 1);
  //   }
  //   if (remainingQuestions.length === 0) {
  //     return endGame();
  //   }
  //   // console.log(
  //   //   `Length at the end of the code block ` + ecoTriviaQuestions.length
  //   // );
  // }
  return;
}

// MISINFORMATION TRIVIA
function misinformationTrivia() {
  let points = 0;
  let forest = '';
  //   arrays and objs are assigned by reference. this is not the appropriate way to copy the arr
  //   we need to look into a **deep** or shallow copy
  const remainingQuestions = structuredClone(infoQuestions);
  //   console.log(remainingQuestions);
  // providing instructions to play game
  alert(message.E);
  // informing about growing a forest
  alert(message.E5);
  // informing user how to exit out the game
  alert(message.E3);
  // using the callback forEach method to loop through each elem of the original arr of objects
  infoQuestions.forEach((elem) => {
    // randomizer
    let random = Math.floor(Math.random() * remainingQuestions.length);
    // console.log(random1);
    // choice1 accesses question:value pair at the random index from the ecoTriviaQuestions arr
    let choice = remainingQuestions[random]['question'];
    // console.log(choice1);

    // taking in the user's input to the question as a prompt
    response1 = prompt(choice);

    // if the answer is correct, add a point and alert
    if (response1.toLowerCase() == remainingQuestions[random].correctAnswer) {
      points++;
      forest += '🕵️‍♂️ 🌲 💻 🌲';
      alert(
        `Correct! You've gained 1 point.\n\n${remainingQuestions[random].info}\n\n Current Points: ${points} \n \n Current Forest: \n \n ${forest}`
      );
      // add an alert with the info
      //
      // splice after we see if the answer is correct
      remainingQuestions.splice(random, 1);
    } else {
      //if incorrect, points remain and user is alerted
      alert(
        `Not Quite. \n \n${remainingQuestions[random].info}\n\nCurrent Points: ${points}\n${forest}`
      );

      // splice after we see if the answer is inputted
      remainingQuestions.splice(random, 1);
    }
    // if we run out of questions in the arr, the game ends and returns the endGame func
    if (remainingQuestions.length === 0) {
      return endGame();
    }
  });
  return;
}

// NETWORK PLUS
function networkPlusTrivia() {
  let points = 0;
  let connection = ``;
  //   arrays and objs are assigned by reference. this is not the appropriate way to copy the arr
  //   we need to look into a **deep** or shallow copy
  const remainingQuestions = structuredClone(networkPlus);
  //   console.log(remainingQuestions);
  // providing instructions to play game
  // providing instructions to play game
  alert(message.E);
  // informing about growing a network? workforce? etc.
  alert(message.E6);
  // informing user how to exit out the game
  alert(message.E3);
  // using the callback forEach method to loop through each elem of the original arr of objects
  networkPlus.forEach((elem) => {
    // randomizer
    let random = Math.floor(Math.random() * remainingQuestions.length);
    // console.log(random1);
    // choice1 accesses question:value pair at the random index from the ecoTriviaQuestions arr
    let choice = remainingQuestions[random]['question'];
    // console.log(choice1);

    // taking in the user's input to the question as a prompt
    response1 = prompt(choice);

    // if the answer is correct, add a point and alert
    if (response1.toLowerCase() == remainingQuestions[random].correctAnswer) {
      points++;
      connection += '☕👨‍💻';
      alert(
        `Correct! You've gained 1 point. \n \n Current Points: ${points}\n\n${remainingQuestions[random].info} \n\n Your Current Connection:\n\n${connection}`
      );
      // add an alert with the info

      // splice after we see if the answer is correct
      remainingQuestions.splice(random, 1);
    } else {
      //if incorrect, points remain and user is alerted
      alert(
        `Not Quite. \n \n Current Points: ${points}\n\n${remainingQuestions[random].info} \n\n Your Current Connection:\n\n${connection}`
      );
      // splice after we see if the answer is inputted
      remainingQuestions.splice(random, 1);
    }
    if (remainingQuestions.length === 0) {
      return endGame();
    }
  });
  return;
}

// SELF DRIVING CARS TRIVIA

function selfDrivingCarsTrivia() {
  let points = 0;
  let road = ``;
  //   arrays and objs are assigned by reference. this is not the appropriate way to copy the arr
  //   we need to look into a **deep** or shallow copy
  const remainingQuestions = structuredClone(selfDrivingCarsQuestions);
  //   console.log(remainingQuestions);
  alert(message.E);
  // informing about emojis
  alert(message.E4);
  // informing user how to exit out the game
  alert(message.E3);

  // using the callback forEach method to loop through each elem of the original arr of objects
  selfDrivingCarsQuestions.forEach((elem) => {
    // randomizer
    let random = Math.floor(Math.random() * remainingQuestions.length);
    // console.log(random1);
    // choice1 accesses question:value pair at the random index from the ecoTriviaQuestions arr
    let choice = remainingQuestions[random]['question'];
    // console.log(choice1);

    // taking in the user's input to the question as a prompt
    response1 = prompt(choice);

    // if the answer is correct, add a point and alert
    if (
      response1.toLowerCase() == remainingQuestions[random].correctAnswer ||
      response.toLowerCase() == remainingQuestions[random].correctAnswer2
    ) {
      points++;
      road += `🚗💨         🚙💨         `;
      alert(`Correct! You've gained 1 point. \n \n Current Points: ${points}\n\n${remainingQuestions[random].info}\
\n\nYour Road:\n\n ${road}`);
      // add an alert with the info

      // splice after we see if the answer is correct
      remainingQuestions.splice(random, 1);
    } else {
      //if incorrect, points remain and user is alerted
      alert(`Not Quite. \n \n Current Points: ${points}\n\n${remainingQuestions[random].info}\
\n\nYour Road:\n\n ${road}`);
      // splice after we see if the answer is inputted
      remainingQuestions.splice(random, 1);
    }
    if (remainingQuestions.length === 0) {
      return endGame();
    }
  });
  return;
}

// At the end of the game...
// User can choose to exit game or return to main menu to choose from other trivia game options
function endGame() {
  let input = confirm(message.F);
  if (input) {
    return chooseGame();
  } else {
    return alert(message.D);
  }
}

beginGame();

// Sources and References we used in our code:
// https://www.sitepoint.com/simple-javascript-quiz/
// https://stackoverflow.com/questions/43847375/creating-random-questions-and-answers-javascript
// https://stackoverflow.com/questions/597588/how-do-you-clone-an-array-of-objects-in-javascript
