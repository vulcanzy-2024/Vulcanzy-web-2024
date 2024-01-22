import a from "../assets/images/gallery/1.jpg";
import b from "../assets/images/gallery/2.jpg";
import c from "../assets/images/gallery/3.jpg";
import d from "../assets/images/gallery/4.jpg";
import e from "../assets/images/gallery/verticle/1a.jpg";
import f from "../assets/images/gallery/verticle/2a.jpg";
import g from "../assets/images/gallery/1b.jpg";
import h from "../assets/images/gallery/1c.jpg";
import i from "../assets/images/gallery/verticle/5.jpg";
import j from "../assets/images/gallery/2b.jpg";
import k from "../assets/images/gallery/2c.JPG";
import l from "../assets/images/gallery/3a.jpg";
import m from "../assets/images/gallery/verticle/3b.jpg";
import n from "../assets/images/gallery/verticle/3c.jpg";
import o from "../assets/images/gallery/3d.JPG";
import p from "../assets/images/gallery/verticle/4a.jpg";
import q from "../assets/images/gallery/4b.JPG";
import r from "../assets/images/gallery/verticle/4c.jpg";

const events = [
  {
    name: "Music Mania",
    club: "Dhwani",
    description:
      "A fun Event of guess the Lyrics between group of friends. The group is split into two teams and song will be played and paused unannounced after some time. The first team to complete the consecutive lyrics,can attack the other team with water (water gun, water balloon, or a glass of water) and this will be repeated few times for the group",
    link: "",
  },
  {
    name: "Noraebang",
    club: "Dhwani",
    description:
      "A fun Event for the attendees to Channelize the Singer in them through a Jam Session. For each person, ten minutes is allotted to choose and sing their favourite songs. Lyrics and Karaoke will be displayed via the Television or Projector mounted on the room, for the attendees to sing with ease",
    link: "",
  },
  {
    name: "AquaBlast",
    club: "Dhwani",
    description:
      "A fun Event of guess the Lyrics between group of friends. The group is split into two teams and song will be played and paused unannounced after some time. The first team to complete the consecutive lyrics, can attack the other team with water (water gun, water balloon, or a glass of water) and this will be repeated few times for the group.",
    link: "",
  },
  {
    name: "Anthyakshari Blitz",
    club: "Dhwani",
    description:
      "An Engaging Rapid Fire Anthyakshari event between batches of around 25 people in different number of groups, with a time of 10 seconds to sing the next song, for a certain amount of time. The last group standing will be the winner of the batch. The winners of each batch are made to play another round of this Anthyakshari Game to determine the winner of the event",
    link: "",
  },
  {
    name: "Arcade Corner",
    club: "Air Club",
    description:
      "Step back in time and relive the golden era of gaming at our Event Arcade Corner! Immerse yourself in nostalgia as we bring vintage games to life on PC screens, powered by the mighty Raspberry Pi 4.",
    link: "",
  },
  {
    name: "Target Game",
    club: "Air Club",
    description:
      "Lock and load for an adrenaline-packed adventure! Join us for Target Games, where precision meets excitement. Test your sharpshooting skills with toy guns and hit the bullseye.",
    link: "",
  },
  {
    name: "Beyblade",
    club: "Air Club",
    description:
      "Gear up for a whirlwind of excitement at our Beyblade Event! Spin, battle, and dominate the arena as competitors go head-to-head in a clash of spinning tops. It's a showdown like no other!",
    link: "",
  },
  {
    name: "Buzzer Maze",
    club: "Air Club",
    description:
      "Navigate the twists and turns of our electrifying Buzzer Maze! Challenge your wits and coordination as you make your way through the maze, but watch out for the buzzers! Can you conquer the maze and reach the end without a buzz?",
    link: "",
  },
  {
    name: "Takeshi's Castle",
    club: "Bea",
    description:
      "Takeshi's Castle is the experience of unique and entertaining game ideas, combining physical challenges, comedic elements, and absurd obstacles. This features a large group of contestants who attempt to navigate through a series of crazy and challenging obstacle courses to reach the final castle. The contestants are usually divided into two teams, and they face a variety of physical challenges and tasks",
    link: "",
  },
  {
    name: "Civil Carniva",
    club: "Cea",
    description:
      "Trivia Tower: Engineering Edition is an interactive and educational twist on the classic game of Jenga. Participants engage in a lively game where wooden blocks are not only pulled and stacked but also hold engineering challenges and questions. As the tower rises, so does the level of fun and knowledge",
    link: "",
  },
  {
    name: "Scavenger Hunt",
    club: "Chea",
    description:
      "Scavenger hunt that will challenge participant's knowledge, teamwork, and problem-solving skills. This quest is designed to explore various aspects of chemical engineering, from fundamental principles to real-world applications. The team will be given clues and based on that they have to perform tasks such as titration and performing chemical reactions to reach desired results.",
  },
  {
    name: "Short Film",
    club: "Chitram",
    description:
      "As a part of the Cultural fest VULCANZY 2024, Chitram club has come up with 1 event: Short film from our club and we are also planning to shoot a intro video for the fest.",
  },
  {
    name: "Find the imposter",
    club: "Dnd",
    description:
      "Alright, folks, gather 'round! In this game,four of you throw on headphones. Threeare busting moves to a party jam, one's gotthe sad song. Game mission? Spot theundercover sad dancer while keeping theparty alive. Get ready to groove, guess,andoutsmart in this epic musical showdown!”",
  },
  {
    name: "Flashmob",
    club: "Dnd",
    description:
      "We will be performing a 35 - 40 minutes of dance in college as well as outside the college",
  },
  {
    name: "EV Demonstration",
    club: "E-Yantra",
    description:
      "We'll display the working model, internal parts, assembly and explain the working of Electric Vehicle. Showcasing the future of transportation we'll dwell into the most rapid changes in car technology. If time persists we'll include back camera movement and some additional features which will be requiring in the modern EV vehicle.",
  },
  {
    name: "Robowar",
    club: "E-Yantra",
    description:
      "Strongest team survives, the remote-controlled vehicles equipped with weaponsfight each other till one of them survives orif the opponent vehicle becomesimmovable. The winning can be based onsurvival or based on other criterion toobased on the condition on ground. Thecontestants are encouraged to bring theirown vehicle. Also, we planned to make5 vehicles from our end.",
  },
  {
    name: "Flight control",
    club: "E-Yantra",
    description:
      "This event will be a thrilling experience where the audience can visualize the real control of drones and UAV's(RC planes). We are planning to bring VR set and combine them with our traditional drone controlling software and simulate the virtual environment where the audience can learn and play the flight control.",
  },
  {
    name: "Arcade",
    club: "I and E cell",
    description:
      "The event is a variety of thrilling games. The games include Jenga , Constructing the highest dominos tower, Moving puzzle blocks in the given time , human football tic-tac-toe, and trying luck with Deal or No Deal. Apart from this a small mind guessing hackinator to engage participants .This event is designed level wise, offering a dynamic and inclusive gaming atmosphere.",
  },
  {
    name: "Shock and Ladder",
    club: "Eea",
    description:
      "Shock and Ladder is a thrilling twist on the classic game, where shocks replace snakes, adding an electrifying challenge as players race to the top, dodging jolts to avoid sliding down. It's a shocking, high-voltage adventure!",
  },
  {
    name: "Smart E Scooter",
    club: "Eea",
    description:
      "The Smart E Scooter is a cutting-edge electric scooter equipped with GPS monitoring and a Battery Management System (BMS) interface. Its user-friendly touch screen enhances navigation and control, providing a seamless and efficient riding experience with advanced technology integration.",
  },
  {
    name: "Bowl 'N' Dash ",
    club: "Eea",
    description:
      "This game is played using remote-controlled cars on any flat surface withminimal friction.Two players, each with a differentlycolored remote car, compete against eachother. The objective isto knock down plastic bowling jars or tinsof two distinct colors. Car 1 aims to topplethe jars of theopposite color, and vice versa for Car 2.",
  },
  {
    name: "Escape Room",
    club: "Gc",
    description:
      "Dive into a thrilling escape room experience where you'll unravel the mysteries of Fiametta's curse. Locked within a medieval dungeon teeming with traps and secrets, the only escape lies in solving riddles, deciphering clues, and outsmarting cunning puzzles. But beware: Fiametta's tormented spirit roams the darkness, searching for a savior. Will be the one to break her curse and find freedom from this eternal prison?",
  },
  {
    name: "The Literary Pong Toss",
    club: "Lnd",
    description:
      "The Literary Pong Toss event is an innovative twist to the traditional game by integrating vocabulary and literary challenges. Participants will be tasked with defining words before each throw, requiring precision in both aim and linguistic skill. Successful shots led to the scoring team assigning a word for opponents to spell, with correct spelling resulting in cup elimination and misspelling in consumption penalties.",
  },
  {
    name: "Questoria",
    club: "Lnd",
    description:
      "The participants will need to pass multiple rounds of various questions whose answers are in percentages of people accepting or rejecting the opinion given with a predetermined answer based on a survey conducted prior to the event. Participants will be awarded scores based on how close their guess is to the actual percentage and a winner will be decided at the end of each game based on their scores",
  },
  {
    name: "Lexiconia",
    club: "Lnd",
    description:
      "Embark on our Puzzle Run, a fun event blending brainy challenges with literary twists. Solve puzzles, decode clues, and showcase teamwork and agility. Enjoy the scenic course and compete for recognition and prizes. It's a lively mix of strategy, thinking, and literary intrigue. Join us for an engaging adventure!",
  },
  {
    name: "Scary House",
    club: "Mmea",
    description:
      "The participants will need to pass multiple rounds of various questions whose answers are in percentages of people accepting or rejecting the opinion given with a predetermined answer based on a survey conducted prior to the event. Participants will be awarded scores based on how close their guess is to the actual percentage and a winner will be decided at the end of each game based on their scores",
  },
  {
    name: "Safari Paths",
    club: "Nve",
    description:
      "The objective of the 'Safari Paths' is to offer participants a wild adventure in our jungle themed Safari! Navigate through the dense foliage and encounter exotic creatures as you climb and slide down the scary creatures. Beware of hidden challenges and revel in the excitement of this unique, nature-inspired gaming experience.",
  },
  {
    name: "Box Cricket",
    club: "Pe",
    description:
      "'Box cricket' typically refers to a simplified version of traditional cricket that can be played in a, confined space. The rules and setup may vary.",
  },
  {
    name: "Cube Craze",
    club: "",
    description:
      "Participants need to choose Rubik's cube of different types of their choice to solve it. Equipment: Rubik's cubes of sizes 2*2, 3*3, Pyramid",
  },
  {
    name: "Paper craft event",
    club: "Pnp",
    description:
      "A paper craft event is a creative gathering where participants engage in the art of making various objects using paper. Attendees typically create intricate designs through folding, cutting, and shaping paper into sculptures, cards, and decorative items. These events often promote collaboration, allowing enthusiasts to share techniques and showcase their unique creations.",
  },
  {
    name: "Carboard Sculpture Event",
    club: "Pnp",
    description:
      "The cardboard sculpture event is a creative gathering where participants use cardboard as their primary medium to sculpt imaginative and often intricate structures. Artists and enthusiasts come together to showcase their skills in manipulating cardboard into various forms, ranging from abstract art to detailed sculptures.",
  },
  {
    name: "Lip Sync Game",
    club: "Prayatnam",
    description:
      "In this game we will give headphone to the participant and we will play music and they have to move their lips and their partner has to guess the song or movie whatever is playing in the headphone but with this some surprise constraint will be there which they have to pick from random box which will contain some chit.",
  },
  {
    name: "Dare to Perform",
    club: "Prayatnam",
    description:
      "This game will be in 2nd day of Vulcanzy, in which there will be a wheel with some activity written on it and participant have to through a dart on the wheel and whatever activity will come they have to perform that, under some time constraint.",
  },
  {
    name: "Dark Room Quest",
    club: "Prayatnam",
    description:
      "In this game there will be levels in a dark room, in which a participant will enter and he/she has to pass the levels one of one and if someone will pass all the levels, they will get the certificate. And, in the levels there will be photo recognition, music recognition and similar hard levels.",
  },
  {
    name: "Pandemic Elegance",
    club: "Shresta",
    description:
      "Pandemic Elegance is a sophisticated event that immerses participants in a captivating game inspired by 'Pandemic Legacy'. Embracing an air of refinement, the event combines strategic gameplay with an unfolding narrative. Participants, organized into teams, collaboratively work to navigate the evolving challenges presented in the legacy format, making decisions that shape the game's narrative.",
  },
  {
    name: "Dartacular Challenge",
    club: "Shresta",
    description:
      "Dartacular Challenge is a competitive dart event where participants showcase precision and skill through various dart games like 501, Cricket, and Around the Clock. Whether competing Individually or in teams, participants aim to achieve the highest scores within specified rounds. The tournament structure may follow a round-robin or knockout format, ensuring an engaging and competitive atmosphere. Adherence to fair play, respect, and venue rules is expected",
  },
  {
    name: "QuantumScape VR Adventure",
    club: "Shresta",
    description:
      "QuantumScape VR Adventure invites participants to embark on a thrilling virtual reality joumey. In this cutting-edge adventure, participants will explore immersive virtual environments, engage in dynamic challenges, and navigate through a virtual realm unlike any other. The event promises a fusion of technology and entertainment, delivering an experience that transcends traditional gaming.",
  },
  {
    name: "MindMesh Challenge",
    club: "Shresta",
    description:
      "The MindMesh Challenge is an exhilarating event where participants engage in the art of wire puzzle solving. Teams will face a series of intricate wire puzzles, each more perplexing than the last, requiring a combination of logic, dexterity, and teamwork to unravel the tangled mysteries",
  },
  {
    name: "TDM-Team Death Match",
    club: "Tf",
    description:
      "This activity mirrors a Team Deathmatch (TDM) scenario found in games like BGMI, Call of Duty, and others. In this setup, two teams, each comprising four members, will be placed in a designated room with various obstacles. Armed with nerf guns firing rubber bullets, participants have a 10-minute window to navigate the space and outlast the opposing team without succumbing to hits from the rubber bullets.",
  },
  {
    name: "Beat The Beat",
    club: "Tf",
    description:
      "The occasion is a lighthearted event where an individual is blindfolded and provided with a sponge stick. Meanwhile, four other people have their bare feet restrained with squeaky toys. The challenge for them is to remain completely silent, as any noise they make may result in the blindfolded person attempting to tag them with the sponge stick.",
  },
  {
    name: "Sumo Fight",
    club: "Tf",
    description:
      "Participants will engage in a sumo wrestling match while donning the provided sumo suits. Each bout will feature two participants equipped with sumo suits, and the objective is for one of them to force the other outside the ring to claim victory. The suits, provided by us, add a fun and challenging element to the competition, ensuring an entertaining and engaging experience for all involved.",
  },
];

const slides = [a, b, c, d, g, h];
const slides2 = [j, k, l, o, q];
const verticleSlides = [e, f, i, m];
const verticleSlides2 = [n, p, r];

export { slides, slides2, events, verticleSlides, verticleSlides2 };
