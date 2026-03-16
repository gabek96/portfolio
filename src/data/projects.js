export const projects = [
  {
    id: 1,
    title: "Calendar Converter",
    date: "January 2026 - Present",
    descriptions: [
      'Calendar Converter is a web app built in <strong>React</strong> that lets users upload Excel or CSV spreadsheets and convert them into <strong>.ics calendar files</strong> they can import into Google Calendar, Outlook, or Apple Calendar.',
      'The app uses <strong>SheetJS</strong> to parse uploaded files and includes <strong>smart column auto-detection</strong> logic that identifies date, time, title, and location columns automatically — handling edge cases like Excel serial date conversion so users don\'t have to manually map their data.',
      'Deployed as a <strong>Progressive Web App (PWA)</strong> via <strong>Netlify</strong> using <strong>Vite</strong> as the build tool, making it installable on mobile and desktop and usable fully offline after the first visit.',
    ],
    tools: ["React", "JavaScript", "Vite", "SheetJS", "Netlify"],
    links: {},
  },
  {
    id: 2,
    title: "Makerspace Tracker",
    date: "April 2024 - Current",
    descriptions: [
      'The Makerspace Tracker is a web-based system developed for the Student Innovation Center to support the daily operations of its makerspaces. It provides students and staff with a central place to complete required training, register for hands-on training sessions, and keep track of their progress.',
      'In addition to supporting individual users, the system gives administrators valuable insights into makerspace activity, such as popular hours, equipment usage, and overall visitor statistics.',
      'Beyond makerspace operations, the tracker is also used to monitor attendance at campus events, helping organizers better understand who attends and when participation is highest. While the system is already in use, it continues to evolve, with opportunities for significant future improvements.',
    ],
    tools: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "Git", "Python"],
    links: {},
  },
  {
    id: 3,
    title: "One Step",
    date: "December 2023 - August 2025",
    descriptions: [
      'One Step is a 2D pixel-based adventure game developed in <strong>Java</strong>. Designed to explore the fundamentals of game architecture, rendering, and object interaction. The project focuses on smooth character motion, environmental interaction, and tile-based world mapping, combining art and code into a cohesive gameplay experience.',
      '<strong>Environmental interactions:</strong> Added logic to detect collisions and object boundaries, allowing interaction with the environment such as barriers or special tiles.',
      '<strong>Custom pixel art:</strong> Experimented with hand-drawn pixel sprites and environmental textures to achieve a nostalgic 16-bit look.',
      '<strong>Game loop architecture:</strong> Implemented a continuous loop structure that updates game state and repaints frames to simulate real-time motion.',
    ],
    tools: ["Java", "Eclipse"],
    links: {
      github: "https://github.com/gabek96/One-Step",
    },
  },
  {
    id: 4,
    title: "Top-Shelf",
    date: "November 2023",
    descriptions: [
      'Solo-designed and built a responsive comic browsing app using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>Bootstrap</strong>.',
      'Implemented dynamic search and genre filter functionality to allow users to quickly find comics by title, author, or genre that is taken from a JSON array.',
      'Built interactive View Details modals using Bootstrap Modals to display full comic information, including description, publisher, and ratings.',
    ],
    tools: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    links: {
      github: "https://github.com/gabek96/Top-Shelf",
      website: "https://gabek96.github.io/Top-Shelf/",
    },
  },
  {
    id: 5,
    title: "Cy-Hill",
    date: "August 2024 - December 2024",
    descriptions: [
      'Cy-Hill is a team-based game built in <strong>Java</strong> with <strong>Spring Boot</strong>, where players compete to capture hills scattered across Iowa State\'s campus. The backend manages real-time player actions, dynamic scoring, and a <strong>live leaderboard</strong>.',
      'Built <strong>RESTful APIs</strong> and <strong>MySQL</strong> database logic to handle player state, coin transactions, and a level-up system that exchanges coins for experience points based on hill donations.',
      'Created a WebSocket connection to display live events on the map in real-time when players are logged in. Developed across a <strong>4-person team</strong> using <strong>Agile-style Git feature branching</strong> for coordinated delivery.',
    ],
    tools: ["Spring Boot", "Java", "MySQL", "Git", "REST APIs"],
    links: {
      github: "https://github.com/gabek96/Cy-Hill",
      youtube: "https://www.youtube.com/watch?v=aeKq2kXZb4Y&list=PL6BdlkdKLEB9U0F4VMXt6Ck7DX6TAdupE&index=23",
    },
  },
  {
    id: 6,
    title: "R.A.D.C (Remote Autonomous Disaster Cleanup)",
    date: "August 2024 - December 2024",
    descriptions: [
      'Using <strong>Roomba</strong> as the main component for this project, a user-centered sketch was created to demonstrate our project\'s reliability in reaching hazardous areas and efficiently completing missions.',
      'Worked on the robotic arm by modeling it in <strong>Fusion 360</strong>, <strong>3D printing</strong> components, assembling the arm, and programming the Arduino and microcontroller.',
      'Added GUI functionality to differentiate between movement, IR, and Ping readings. The robotic arm, designed to attach to the back of the robot, enhances its capabilities in hazardous environments.',
      'The arm is controlled by a joystick, allowing for precise movements and actions. It can be programmed to perform specific tasks, such as picking up objects or clearing debris.',
    ],
    tools: ["Java", "Arduino", "Fusion 360", "3D Printing", "Git"],
    links: {
      github: "https://github.com/JohnBrittaein/EE2880-",
    },
  },
  {
    id: 7,
    title: "Time Counter",
    date: "April 2024 - May 2024",
    descriptions: [
      'Developed using <strong>Verilog</strong> that can set and countdown times dependent on the user\'s input. Users input a number using the side switches displayed on the seven-segment display.',
      'The register file locks in a specific number and is a clear button for inputting a different number. The rocket button starts and pauses the timer.',
      'When it reaches zero, it pauses, and when set to one, it resumes counting using a T flip-flop to switch between the numbers.',
    ],
    tools: ["Verilog", "C", "3D Printing"],
    links: {
      github: "https://github.com/gabek96/CPR-E-281-Final-Project",
    },
  },
];
