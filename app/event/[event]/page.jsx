"use client";
import Eventspage from "../../components/eventspage.jsx";
import { useEffect, useRef, useState } from "react";
import { use } from "react";
export default function Page({ params }) {
  const unwrappedParams = use(params);
  const eventId = unwrappedParams.event;
  let i = useRef();
  const [index, setindex] = useState(0);
  const slug = [
    //game
    "vijayghosh",
    //cse
    "codestorm",
    "simuhire",
    "pixelpulse",
    "Srijansamvaad",
    "infographica",
    "vidhyavrith",
    //mech
    "enginova",
    "Yantrasangam",
    "Kalamanthan",
    "Cadventure",
    //civil
    "nalneel",
    "Recivilize",
    "Amritdhara",
    //aero
    "vimaanshershtha",
    "ignitionwar",
    "vihangam",
    "dronovation",
    "nanosatpratyogita",
    //ece
    "mechwar",
    //phy
    "prathirupandristikon",
  ];
  useEffect(() => {
    for (let index = 0; index < 21; index++) {
      const element = slug[index];
      if (element == eventId) {
        i.current = index;
        break;
      }
    }
    setindex(i.current);
    studentCod[i.current].map((item, j) => {
      console.log(i.current[0]);
    });
  }, []);

  const descriptions = [
    `Vijay Ghosh is an intense online battle royale gaming tournament where warriors from different departments compete to claim victory. Players must strategize, survive, and eliminate their opponents while adapting to ever-changing conditions on the battlefield.
    `,
    //cse
    `Hackathons are essentially "marathons for hackers," combining the spirit of creative problem-solving with the endurance of a marathon. Hackathons bring together individuals with diverse skills, including web developers, programmers, designers, project managers, and others.`,
    `The Mock Interview event is designed to provide students with a real-world interview experience. Participants will undergo technical and HR interview rounds conducted by industry professionals and experienced seniors.
    `,
    `pixelpulse is a tech-focused poster competition where participants showcase innovative ideas, trends, or futuristic technologies through creative digital designs.
    `,
    `Tech Fest is a platform where students can showcase their knowledge and creativity in technology and innovation. It consists of two categories: Tech Talk, where participants deliver speeches on trending technology topics, and Innovative India PPT, where participants present innovative ideas for India's development through PowerPoint presentations. 
    `,
    `Infographica is a data visualization competition where participants transform raw data into insightful, clear, and visually appealing representations. Using Python in Jupyter Notebook, competitors must analyse a provided dataset and create compelling visualizations within a limited timeframe.
    `,
    `VIDHYA VRITH is a high-energy technical quiz competition testing participants’ knowledge across multiple tech domains.
    `,
    //mech
    `EngiNova is a platform for students to showcase their innovative projects and engineering skills. The competition encourages creative problem-solving and technological advancements across disciplines. Participants will present their projects, emphasizing design, functionality, and ease of navigation.`,
    `This event tests participants' mechanical skills by requiring them to assemble and disassemble a gear-based mechanism within a given time. Teams will demonstrate precision, efficiency, and technical expertise.`,
    `In this hands-on contest, participants will forge a functional object from steel using traditional metalworking techniques. The competition emphasizes creativity, technical skill, and safety in metal forging.
    `,
    `CADventure is a fast-paced computer-aided design (CAD) competition where participants will create 3D models using SOLIDWORKS. The event tests accuracy, design efficiency, and presentation skills.`,
    //civil
    `The Bridge Design Challenge is a hands-on structural engineering competition where teams construct a bridge using popsicle sticks and glue. The objective is to create a bridge that balances strength, efficiency, and design aesthetics. The bridges will be tested under load to determine their structural capabilities.
    `,
    `Re-Civilize is an upcycling challenge where teams create functional or decorative models using waste materials. This event promotes sustainability and innovation in civil engineering.`,

    `The Water Treatment Simulation event challenges teams to design a filtration system using provided materials. Participants will test their system's efficiency by purifying a sample of dirty water and analyzing the results.
    `,
    //aero
    `The RC Plane Competition challenges participants to design, build, and pilot a remote-controlled aircraft. The goal is to achieve the longest flight duration and most stable flight path while adhering to design specifications.`,
    `The Rocketry Challenge is designed to test participants’ skills in designing, building, and launching model rockets. The event aims to foster innovation, teamwork, and technical expertise in aerospace engineering. Participants must construct a functional rocket that meets the given specifications and successfully launch it to achieve optimal altitude and stability.
    `,
    
    `Drone Racing is a high-speed, skill-based competition where participants maneuver their drones through a challenging obstacle course. The event emphasizes precision, agility, and control as pilots navigate their drones through checkpoints and complete the track in the shortest possible time.`,
    `Dronovation is a drone-based competition designed to test participants' piloting skills, drone maneuverability, and technical innovation. Participants will navigate their drones through a designated course, performing specific tasks such as object retrieval, precision landing, and obstacle avoidance. The event focuses on accuracy, control, and efficiency in drone operations.`,
    `Nanosat Pratiyogita is an aerospace engineering competition where participants design, develop, and present a conceptual model of a nanosatellite. The event encourages innovation in miniaturized satellite technology for scientific research, communication, and space exploration. Participants will be judged on technical feasibility, innovation, and presentation skills.`,
    //ece
    `Mech Wars is a high-energy robotic combat event where participants design and build mechanical robots (Mech-Bots) equipped with weapons to compete in intense battles. The goal is to disable, or outlast the opponent’s robot in an arena setting. Teams must demonstrate innovation in design, technical skill in control, and strategic thinking during combat.`,
    //phy
    `Organized by the Physics Department, this event showcases innovative working and non-working models that highlight the role of science in everyday life. Participants will demonstrate scientific concepts and their practical applications, making science more accessible and engaging for all.`,
  ];
  const eventguid = [
    [
      ["Entry Fee: ₹250 per team (4 members)."],
      [
        "Team Composition: Each team must consist of 4 registered players from the same department. No substitutes or extra players are allowed.",
      ],
      [
        "Only mobile devices (Android/iOS), wired/wireless headphones, chargers, and pillows are permitted.",
      ],
      ["Materials", "Participants must bring their own painting materials"],
      [
        "Disqualification: Cheating, bug exploitation, ringers, or toxic behaviour will result in immediate disqualification.",
      ],
      [
        "Phones will be thoroughly checked for hacks/mod files before entering the premises.",
      ],
      [
        "Reporting Time: Teams must arrive one hour before the tournament starts for verification and seating arrangements.",
      ],

      ["Game Settings & Match Details"],
      ["Perspective Mode: Third-Person Perspective (TPP)"],
      [
        "Disabled: Sound Visualization, Aim Assist, Red Zone, Flare Guns, Show Skeleton on Death",
      ],
      ["Enabled: Vague Information"],
      ["Loot Settings: All Weapons x2, Scopes & Magazines x2"],
      ["Maps: Erangel, Miramar, Sanhok, Vikendi"],
      ["Groups of 16-24 teams in the initial phase."],
      ["Groups of 16-24 teams in the initial phase."],
      ["Players must have a minimum in-game level of 35."],
      ["Player rank must be Platinum V or higher."],
    ],
    [
      [
        "The Hackathon is open to all students registered students at any higher education institute.",
      ],

      [
        "Participants are required to work in teams consisting of a minimum of 3 to a maximum of 5 members.",
      ],
      ["The hackathon will be conducted in two rounds:"],
      [
        "Pre-liminary: Virtual round where teams submit their project ideas and prototypes.",
      ],
      [
        "Final: In-person : To participate, teams must be available to present their proposals in the form of a PPT for a pre-liminary round",
      ],
      [
        "The proposals will be submitted on a platform provided by the organizers.",
      ],
      ["The PPT format will be provided by the organizers."],
      [
        "The teams that advance to the final round will be invited to the venue for final presentation of their idea.",
      ],
      [
        "Changes to the contents of the PPT can be made for the final presentation, however the format shall remain same.",
      ],
      [
        "Teams can use an idea they had before the event. They can work on an idea that they have worked on before (as long as they do not re-use code).",
      ],
      [
        "Teams can use libraries, frameworks, or open-source code in their projects. Working on a project before the event and open-sourcing it for the sole purpose of using the code during the event is against the spirit of the rules and is not allowed.",
      ],
      ["Projects that violate the Code of Conduct are not allowed."],
      [
        "Eligibility for Participation Certificate: The participant/team should have successfully checked in and submitted a proposal on the organizer’s platform during the Hackathon Timeline.",
      ],
      [
        "All participants are required to carry their Identity Cards with them for identification and documentation purposes. No exemptions shall be entertained",
      ],
    ],
    [
      ["Open to all Tech Fest registered participants."],
      ["Participants must register in advance (online or offline)."],
      ["Late comers may not be accommodated if their slot has passed."],
      [
        "Each participant is allowed only one interview session, unless additional slots are available.",
      ],
      ["Participants must bring a valid college ID for verification."],
      ["Duration: 15-20 minutes per candidate (may vary based on turnout)."],
      [
        "Rounds: Two rounds – participants must qualify in the first round to proceed to the second.",
      ],
      [
        "focus Areas:o	Technical Interviews (CS/IT – DSA, OS, DBMS, etc.),Non-Technical Interviews (HR, Aptitude, Communication),Domain-Specific (ML, Web Development, Cybersecurity, etc.)",
      ],
      ["Dress Code:Formal attire is recommended."],
      [
        "Maintain professionalism; disrespectful behaviour will lead to disqualification.",
      ],
    ],
    [
      [
        "Theme: Technology-related, original posters highlighting innovations or trends.",
      ],
      [
        "Theme: Technology-related, original posters highlighting innovations or trends.",
      ],
      ["File Type: A3 or A4 JPEG, PNG, or PDF format."],
      ["Time Limit: 2 hours to create the poster."],
      [
        "Presentation: Each participant gets 2-3 minutes to present their poster to judges.",
      ],
      [
        "Plagiarism, AI-generated designs, or inappropriate content will result in disqualification.",
      ],
      ["Participants must report 30 minutes before the event."],
      [
        "Participants may use their own laptops/tablets to design their digital posters.",
      ],
      ["All participants must carry a valid college ID."],
      ["Open to all university students (any year or stream)."],
      ["Individual participation only – no group submissions."],
      ["Registration Fee ₹100 per participant."],
    ],
    [
      ["The event is open to individuals or teams (max 4 members per team)."],
      ["Open to all university students (any year or stream)."],
      ["Participants must register before the deadline."],
      ["Time limit: 90 minutes."],
      [
        "Resources",
        "The participants will be provided with VS Code as their IDE.",
      ],
      ["Reporting Time: Attendees must report 30 minutes before the event."],
      ["Internet usage is not allowed during the competition."],
      ["Internet usage is not allowed during the competition."],
      ["Participants must carry their valid college ID cards."],
    ],
    [
      [
        "Boat Type",
        "Participants must build a small boat that can float and navigate through a water course",
      ],
      [
        "Materials",
        "Teams must construct their boats using their own materials",
      ],
      [
        "Rules",
        "Boats can be either powered by manual (e.g., wind, hand propulsion) or motorized means",
      ],
      [
        "Disqualification",
        "The size of the boat must not exceed by 1 foot otherwise will lead to disqualification",
      ],
    ],
    [
      ["Open to all B.Tech students"],
      ["No participant can be part of multiple teams."],
      ["The quizmaster’s decision is final."],
      [
        " 1.Preliminary Round (MCQ-Based):o	20 questions covering all tech domains.30 seconds per question.•	Preliminary Round: Correct (+4), Wrong (-1).",
      ],
      [
        "2.	Semi-Final Round (Buzzer Round).Buzzer Round: Correct (+5), Wrong (-2)",
      ],
      ["Negative marking for incorrect answers."],
      ["3.	Final Round (Rapid Fire & Situation-Based Questions)"],
      ["registration fee: ₹200 per participant"],
    ],
    //mech
    [
      ["Team Size", " 2 to 5 members per team"],
      [
        "Project Display",
        " Teams must exhibit their projects throughout the event; failure to do so may result in disqualification.",
      ],
      ["Equipment", " Participants must bring their own tools and materials."],
      ["Eligibility", " Open to students from any discipline."],
      ["Scoring Criteria: Emphasis on good design and easy navigation."],
      ["Conduct", "Follow safety rules; no cheating"],
      [
        "Conduct: The judges' decisions are final, and no disputes will be entertained.",
      ],
      [
        "Conduct: The judges' decisions are final, and no disputes will be entertained.",
      ],
    ],
    [
      ["Team Size", "2 members per team"],
      ["Time Allocation: 15–30 minutes per phase (assembly and disassembly)."],
      [
        "Tools & Materials: Only tools and components provided by organizers are allowed; external parts are prohibited.",
      ],
      [
        "Assembly Rules: Gears must be correctly meshed following the blueprint for smooth rotation. No modifications allowed.",
      ],
      [
        "Disassembly Rules: Gears and shafts must be carefully removed and returned to their original organized state.",
      ],
      [
        "Supervision: Judges will monitor adherence to rules and gear handling.",
      ],
    ],
    [
      ["Team Size", "2 members per team"],
      [
        "Materials: Only the steel bar and tools provided by organizers may be used (e.g., hammers, anvils, tongs).",
      ],
      [
        "Forging Process: Teams must shape the steel into a specified design using forging techniques such as hammering and pressing.",
      ],
      [
        "Design Constraints: The final object must not exceed specified dimensions or weight and must demonstrate functionality or innovation.",
      ],
      [
        "Safety Requirements: Participants must wear gloves, goggles, and aprons while handling hot steel.",
      ],
      [
        "Submission: Teams must submit their forged piece for evaluation; judges' decisions are final.",
      ],
    ],
    [
      ["Team Size: 2 members per team."],
      ["Software: Systems with pre-installed SOLIDWORKS will be provided."],
      [
        "Time Limit: Designs must be completed and submitted within 15 minutes.",
      ],
      [
        "Evaluation: Accuracy and clarity of design will be the primary scoring factors.",
      ],
    ],
    //civil
    [
      ["Teams must consist of 2-4 members."],
      [
        "Only the provided materials (150 popsicle sticks and fevicol glue) can be used.",
      ],
      ["The bridge must span at least 50 cm and have a minimum width of 5 cm."],
      [
        "No external reinforcements (metal wires, extra adhesives, etc.) are allowed.",
      ],
      [
        "Bridges will be tested by placing weights at the mid-span until failure.",
      ],
      ["Construction time: 3 hours."],
      ["Participants must report 30 minutes before the event."],
    ],
    [
      ["Team Size: 2-5 members."],
      [
        "Materials Allowed: Plastic bottles,Cardboard boxes,E-waste (CDs, wires, motherboard scraps),Glass bottles,Aluminium cans,Broken tiles/ceramic pieces,Used straws & ice cream sticks",
      ],
      ["Model Type: Can be either static or working."],
      ["Time Limit: 10 minutes to present and explain the model."],
    ],
    [
      ["Teams must consist of 2-4 members."],
      ["Participants will receive sand, gravel, charcoal, and filter paper."],
      [
        "No additional materials are allowed except those provided by the university.",
      ],
      [
        "Participants must bring their own cylindrical container (Diameter: 10-13 cm, Height: 30-50 cm).",
      ],
      [
        "The filtration system must be set up within 2 hours, followed by 10 minutes of explanation.",
      ],
      [
        "Filtered water will be tested for: Clarity,pH balance,Total Dissolved Solids (TDS) reduction ",
      ],
    ],
    //aero
    [
      ["Teams can have a maximum of 4 members."],
      ["The RC planes must be within the given weight and size limits."],
      [
        "The plane must successfully take off, complete the designated flight path, and land safely.",
      ],
      ["External interference with radio signals is prohibited."],
      ["Each team gets two attempts, and the best score will be considered."],
    ],
    [
      ["Each team must consist of 3-5 members."],
      [
        "The rockets should be designed according to the given size and weight constraints.",
      ],
      [
        "The rockets should be designed according to the given size and weight constraints.",
      ],
      ["Use of unauthorized or hazardous materials is strictly prohibited."],
      [
        "Teams will be given a fixed time to assemble and launch their rockets.",
      ],
    ],
    [
      ["Each team can have 1-2 pilots and a support crew."],
      [
        "Drones must adhere to size and weight regulations provided before the event.",
      ],
      [
        "Participants must complete the race by passing through all designated checkpoints",
      ],
      [
        "External assistance or modifications after the start of the race are not allowed.",
      ],
      ["Any damage to drones mid-race is the responsibility of the team."],
    ],
    [
      ["Team Size: 2-4 members per team."],
      ["Maximum weight: As per event regulations."],
      ["Flight range: Must be within the designated competition area."],
      ["Battery-powered drones only; fuel-based drones are prohibited."],
      ["Participants will navigate through multiple checkpoints with varying difficulty levels.Tasks may include precision landing, cargo drop, and obstacle navigation."],
      ["Drones must be operated within designated altitude limits."],
      ["Participants must follow all safety instructions provided by event coordinators."],
      ["Disqualification will be based on Loss of control leading to unsafe flight. Violation of airspace boundaries. Use of external assistance or pre-programmed flights unless specified."]

    ],
    [
      ["Team Size: 2-5 members per team."],
    ["The model must resemble an actual nanosatellite in structure and function."],
    ["The design should include critical components such as power systems, communication modules, and payload capabilities."],
    ["Teams must submit a detailed report on their satellite's design, functionality, and intended application."],
    ["A prototype model must be presented during the event."],
    ["Each team will have 10 minutes to present their design, followed by a Q&A session with judges."],
    ["Disqualification will be based on Plagiarized designs or pre-built models.Failure to explain key aspects of the design."]  
  ],
    //ece
    [
      [
        "Each team must build either a wired, remotely controlled, or autonomous Mech-Bot."
      ],
      [
        "The robot must adhere to specified size, weight, and weapon constraints."
      ],
      [
        "Safety is a priority; Mech-Bots should not pose a risk to competitors, judges, or the audience."
      ],
      [
        "Teams must submit a technical report detailing their bot’s design, components, and safety features."
      ]
    ],

    [
      //phy
      ["Each team must have a minimum of 2 participants."],
      [
        "Teams must display their project throughout the event; failure to do so may lead to disqualification.",
      ],
      [
        "	Participants must bring their own required materials for their models.",
      ],
      ["Good design and easy navigation will be key judging factors."],
      ["	Open to students from all disciplines."],
      [
        "	The decision of the judges is final, and no disputes will be entertained.",
      ]
    ],
  ];

  const judCriteria = [
    //game
    [
      "The tournament follows a 10-point placement structure, promoting aggressive gameplay over passive survival.",
      "Placement Points System (Per Match):",
      "1st Place: 10 Points",
      "2nd Place: 6 Points",
      "3rd Place: 5 Points",
      "4th Place: 4 Points",
      "5th Place: 3 Points",
      "6th Place: 2 Points",
      "7th & 8thPlace: 1 Point Each",
      "Kill Points: 1 point per kill",
    ],
    //cse
    [
      "Teams will be judged on these five criteria. Judges will weigh the criteria equally. During judging, participants should try to describe what they did for each criterion in their project via the PPT presentation.",
      "●	Technology",
      "●	Design",
      "●	Completion",
      "●	Originality",
      "●	Feasibility",
      "The judge's decision shall be final and cannot be challenged",
      "Entry fees: 1000/- per Team",
    ],
    [
      "The event will be judged based on the following criteria:",
      " Creativity and Originality",
      " Technical Skills",
      " Communication Skills",
      "Overall Performance",
    ],
    [
      "Screening Round: Judges evaluate originality, relevance, and adherence to guidelines. AI-generated or plagiarized designs will be rejected.",
      "Presentation Round: Participants present their posters in 2-3 minutes, judged on originality, design, clarity, accuracy, and presentation skills.",
      "Final Decision: The judge’s decision is final and cannot be challenged.",
    ],
    [
      "Submissions will be evaluated based on the following criteria:",
      "Clarity & Insight (30%) – How well the visualization communicates insights.",
      "Creativity & Innovation (20%) – Uniqueness and originality in visualization.",
      "Aesthetic Appeal (20%) – Visual design, colour choices, and readability.",
      "Technical Accuracy (20%) – Correct use of data and methodology.",
      "•	Interactivity (10%) – Bonus points for interactive visualizations.",
    ],
    [
      "Speed & Time",
      "Stability",
      "Design",
      "Strategy & Tactics",
      "The boat's ability to complete the course",
    ],
    [
      "based on your performance in the quiz rounds, including the preliminary, semi-final, and final rounds.",
    ],
    [
      "Design & Innovation (40%) – Originality and creativity in the project.",
      "Functionality (30%) – Practical application and usability.",
      "Presentation (20%) – Clarity and effectiveness of demonstration.",
      "Navigation & User Experience (10%) – Ease of use and accessibility.",
    ],
    //mech
    [
      "Speed (50%) – Time taken to complete both assembly and disassembly.",
      "Functionality & Precision (30%) – Proper gear alignment and movement.",
      "Safety & Organization (20%) – Proper handling of components and workspace discipline.",
    ],
    [
      "Creativity (20%) – Originality in design.",
      "Forging Technique (30%) – Proper use of forging methods.",
      "Functionality (30%) – Practical application of the forged object.",
      "Safety & Rule Adherence (20%) – Compliance with safety measures and event regulations.",
    ],
    [
      "Accuracy (50%) – How well the design matches the provided specifications and dimensions.",
      "Presentation (30%) – Quality of exported views and clarity of technical drawings.",
      "Presentation (30%) – Quality of exported views and clarity of technical drawings.",
    ],
    //civil
    [
      "Load-Bearing Capacity (40%) – Maximum weight the bridge can hold before failure.",
      "Structural Efficiency (30%) – Ratio of weight supported to bridge weight.",
      "Aesthetic & Design (20%) – Neatness, creativity, and adherence to engineering principles.",
      "Presentation & Explanation (10%) – Justification of the design approach.",
    ],
    [
      "Innovation (30%) – Uniqueness and creativity of the design.",
      "Waste elimination (30%) – Effectiveness in repurposing discarded materials.",
      "Aesthetic appeal (20%) – Neatness, design, and creativity.",
      "Presentation (20%) – Clarity and justification of the model.",
    ],

    [
      "Water Clarity & Purification (50%) – How clean the filtered water is.",
      "Efficiency of Filtration (30%) – Speed and effectiveness of the process.",
      "Presentation (20%) – Justification of design and methodology.",
    ],

    //aero
    [
      "Flight Duration (40%) – Longest sustained flight time.",
      "Maneuverability (30%) – Ability to complete the given course.",
      "Landing Precision (20%) – Controlled and smooth landing",
      "Design & Build Quality (10%) – Structural integrity and aerodynamics.",
    ],
    [
      "Design & Innovation (30%) – Creativity in rocket design and structure.",
      "Flight Performance (40%) – Stability, altitude, and trajectory of the rocket.",
      "Safety Measures (20%) – Adherence to safety protocols and proper handling.",
      "Presentation (10%) – Explanation of design choices and functionality.",
    ],
    [
      "Speed & Completion (50%) – Fastest time to complete the course.",
      "Control & Stability (30%) – Precision in handling the drone.",
      "Obstacle Avoidance (20%) – Skill in maneuvering through checkpoints.",
    ],
    [
      "Navigation & Maneuverability (30%) – How efficiently the drone moves through the course.",
      "Task Completion (30%) – Accuracy in performing designated tasks.",
      "Time Efficiency (20%) – Speed in completing the course.",
      "Safety & Control (20%) – Adherence to safety protocols and smooth handling of the drone."
    ],
    [
      "Innovation & Uniqueness (30%) – Originality and creativity in satellite design.",
      "Technical Feasibility (30%) – Practicality and application of the model in real-world scenarios.",
      "Presentation & Explanation (20%) – Clarity, confidence, and effectiveness in delivering the concept.",
      "Functionality & Design (20%) – Accuracy of the prototype and completeness of the satellite structure."
    ],
    //ece
    [
      "Damage Inflicted (40%) – The extent of physical damage to the opponent’s bot.",
      "Control & Maneuverability (30%) – Ability to effectively navigate and operate the bot.",
      "Aggression (20%) – How actively the bot engages in battle.",
      "Defense & Endurance (10%) – How well the bot withstands attacks.",
    ],
    //phy
    [
      "All scientific facts must be accurate and evidence-based.",
      "Sources should be from reputable journals, books, or websites.",
      "If any claim is theoretical or debated, it must be clearly stated.",
      "The model should demonstrate practical applications of science in everyday life (e.g., health, environment, technology, transportation).",
      "It should highlight how science makes life easier, safer, and more efficient.",
      "The explanation should be simple and free from excessive jargon to ensure accessibility for all age groups.",
      "Models should include visuals, diagrams, and real-life examples for better engagement.",
      "Live demonstrations or experiments are encouraged, provided they are conducted safely.",
    ],
  ];
  const facultyCod = [
    //gam
    ["Mr. Ankit Chamoli"],
    //cse
    ["Mr. Mohit Kumar"],
    ["Mr. Mohit Kumar"],
    ["Mr. Mohit Kumar"],
    ["Mr. Mohit Kumar"],
    ["Mr. Mohit Kumar"],
    ["Mr. Mohit Kumar"],
    //mech
    ["Mr.Vivek John"],
    ["Mr.Vivek John"],
    ["Mr. Vivek John"],
    ["Mr.Vivek John"],
    //civil
    ["Mr. LokNath Kumar"],
    ["Mr. Vivek John"],
    ["Mr. Ashish Pathani"],
    //aero
    ["Mr. Ashish Pathani"],
    ["Ms. Amita Bisht"],
    ["Ms. Roosha Shamoon"],
    ["Mr. Divij Arora"],
    ["Mr.Divij Arora"],
    //ece
    ["Ms. Pooja Jain"],
    //phy
    ["deepak"],
  ];
  const studentCod = [
    //game
    ["Daksh Vijay Singh", 7657820141],
    //cse
    ["Priyanshi Gupta", 7321843577],
    ["Shivanshu Gaur", 7505036096],
    ["Souhrik Talukdar", 7076355262],
    ["Prashant Tiwari ", 9528923288],
    ["Rohit Shankar", 8292411655],
    ["Rohit Arya", 7088929781],
    //mech
    ["Aryan Kumar", 8279684028],
    ["Avneesh Pal", 8077499135],
    ["Vivek Kumar", 7505708594],
    ["Vivek Kumar", 7505708594],
    //civil
    ["Shivam Raj Patel", 8409140698],
    ["Nishant Singh", 7857085450],
    ["Rudraksha Sharma", 7303822434],

    //aero
    ["Deepak Arya", 9528352531],
    ["Gauri Rana", 6200289570],
    ["Ujjwal Rana", 9560548456],
    ["Prateek Bhatt",7498496672],
    ["Abhay Dhasmana",7417075478],
    //ece
    ["Bastav Dutta", 6900186459],

    //phy
    ["Gaurav Yadav", 9968548565] // Duplicate name
  ];

  const date = [
    "25th-26th April 2025",
    "25th-26th April 2025",
    "25th-26th April 2025",
    "25th-26th April 2025",
    "25th-26th April 2025",
    "25th-26th April 2025",
    "25th-26th April 2025",
    "25th-26th April 2025",
    "25th-26th April 2025",
    "25th-26th April 2025",
    "25th-26th April 2025",
    "25th-26th April 2025",
    "25th-26th April 2025",
    "25th-26th April 2025",
    "25th-26th April 2025",
    "25th-26th April 2025",
    "25th-26th April 2025",
    "25th-26th April 2025",
    "25th-26th April 2025",
    "25th-26th April 2025",
    "25th-26th April 2025"
  ];
  const time = [
    "09:30 AM",
    "09:30 AM",
    "09:30 AM",
    "09:30 AM",
    "09:30 AM",
    "09:30 AM",
    "09:30 AM",
    "09:30 AM",
    "09:30 AM",
    "09:30 AM",
    "09:30 AM",
    "09:30 AM",
    "09:30 AM",
    "09:30 AM",
    "09:30 AM",
    "09:30 AM",
    "09:30 AM",
    "09:30 AM",
    "09:30 AM",
    "09:30 AM",
    "09:30 AM",
  ];
  const venue = [
    "UIT",
    "UIT",
    "UIT",
    "UIT",
    "UIT",
    "UIT",
    "UIT",
    "UIT",
    "UIT",
    "UIT",
    "UIT",
    "UIT",
    "UIT",
    "UIT",
    "UIT",
    "UIT",
    "UIT",
    "UIT",
    "UIT",
    "UIT",
    "UIT",
  ];
  const title = [
    //game
    ["Vijay Ghosh", "BGMI"],
    //cse
    ["Code Storm", "Hackathon"],
    ["Simu Hire", "Mock Interview"],
    ["Pixel Pulse", "Tech Poster Making"],
    ["Srijan Samvaad", "Tech Talk"],
    ["Info Graphica", "Data Visualization"],
    ["Vidhya Vrith", "Tech Quiz"],
    //mech
    ["ENGINOVA ", "PROJECT SHOW "],
    ["Yantra sangam", "Assembly Disassembly"],
    ["KALA MANTHAN ", "Metal Forging/ Food Design "],
    ["CADventure", "Computer Aided Design"],
    //civil
    ["nalneel", "Bridge Design Challenge"],
    ["RE-CIVILIZED", "Best Out of Waste"],
    ["Amrit Dhara", "Water Treatment Stimulation"],
    //aero
    ["VIMAAN SHRESHTHA ", "RC Plane Competition"],
    ["Ignition War", "Rocket Launching"], // Fixed improper nesting
    ["VIHANGAM", "Drone Racing"],
    ["Dronovation","Desing of Drones and RC Plane"],
    ["NanoSat Pratiyogita","CubeSat Competition"],
    //ece
    ["MECH WAR ", "E-ROBO WAR"],
    //phy
    ["PRATIRUPAN DRISTIKON ", "Model Presentation on Science in Everyday Life"],
  ];
  return (
    <Eventspage
      title={title[index]}
      descriptions={descriptions[index]}
      eventguid={eventguid[index]}
      judCriteria={judCriteria[index]}
      facultyCod={facultyCod[index]}
      studentCod={studentCod[index]}
      date={date[index]}
      time={time[index]}
      venue={venue[index]}
    />
  );
}