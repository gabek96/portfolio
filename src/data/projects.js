import { faCalendarDays, faChartBar, faGamepad, faBookOpen, faMap, faRobot, faStopwatch } from '@fortawesome/free-solid-svg-icons';

export const projects = [
  {
    id: 1,
    title: "GEP (Gabe's Event Planner)",
    faIcon: faCalendarDays,
    accentColor: "#3b82f6",
    date: "January 2026 - Present",
    descriptions: [
      'Built a <strong>React PWA</strong> to solve recurring miscommunication and task delegation failures in the NSBE chapter — centralizing event info, task assignments, and attendance tracking in one platform for chapter leadership.',
      'Deployed via <strong>Netlify</strong> using <strong>Vite</strong> and <strong>SheetJS</strong>, delivering a no-install, browser-based tool accessible to any chapter member on any device.',
    ],
    tools: ["React", "JavaScript", "Vite", "SheetJS", "Netlify"],
    links: {
      github: "https://github.com/gabek96/calendar-converter",
      website: "https://gabeventplanning.netlify.app/",
    },
  },
  {
    id: 2,
    title: "Makerspace Tracker",
    faIcon: faChartBar,
    accentColor: "#8b5cf6",
    date: "April 2024 - Current",
    descriptions: [
      'Built a production <strong>PHP/MySQL</strong> web app serving <strong>6,000+ users</strong> at the Student Innovation Center, replacing a fragmented check-in process with <strong>real-time usage tracking</strong> and <strong>role-based access control</strong>.',
      'Developed a <strong>stats and analytics dashboard</strong> surfacing attendance trends, giving staff actionable data for scheduling and resource allocation decisions.',
      'Built an <strong>email and attendance export system</strong> with filters for makerspace location and date range, outputting to Excel or clipboard — eliminating manual data collection for staff.',
    ],
    tools: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "Git", "Python"],
    links: {},
  },
  {
    id: 3,
    title: "One Step",
    faIcon: faGamepad,
    accentColor: "#22c55e",
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
    faIcon: faBookOpen,
    accentColor: "#ef4444",
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
    faIcon: faMap,
    accentColor: "#f59e0b",
    date: "August 2024 - December 2024",
    descriptions: [
      'Architected a <strong>Java/Spring Boot</strong> multiplayer campus exploration game with <strong>RESTful APIs</strong> and <strong>MySQL</strong> to help new students learn Iowa State\'s campus environment — delivering real-time player actions, dynamic scoring, and a <strong>live leaderboard</strong>.',
      'Developed across a <strong>4-person Agile team</strong>, demoed as a fully functional system at end of semester.',
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
    faIcon: faRobot,
    accentColor: "#06b6d4",
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
    faIcon: faStopwatch,
    accentColor: "#a855f7",
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
