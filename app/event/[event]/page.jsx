"use client";
import Eventspage from "../../components/eventspage.jsx";
import { useEffect, useRef, useState } from "react";
import {use} from "react";
export default function Page({ params }) {
  const unwrappedParams = use(params); 
  const eventId = unwrappedParams.event;
  let i = useRef();
  const [index, setindex] = useState(0);
  const slug = [
    "codestorm",
    "vijayghosh",
    "infographica",
    "codestorm",
    "vijayghosh",
    "nalneel",
    "prathirupandristikon",
    "ignitionwar",
    "vihangam",
    "vimaanshershtha",
    "mechwar",
    "pixelpulse",
    "Srijansamvaad",
    "Mechnova",
    "Yantrasangam",
    "Kalamanthan",
    "Cadventure",
    "Amritdhara",
    "Recivilize",

  ];
  useEffect(() => {
    for (let index = 0; index < 18; index++) {
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
    `Unleash your creativity and transform faces into masterpieces! 'Canvas on Face' is a vibrant face art competition where talented artists showcase their skills and imagination. Using Faces as their canvas, participants will create stunning designs, patterns, and characters Witness the artistry and skill as our contestants bring their visions to life. Join us for a colorful and inspiring event that will leave you amazed by the possibilities of face art.
Who will be crowned the ultimate 'Canvas on Face' champion?
    `,
    `Gear up for the ultimate battle of skill and strategy! 'BGMI Badshah' is an electrifying eSports tournament where top teams clash in the popular game Battlegrounds Mobile India. Witness the best of the best compete for glory and a coveted prize pool. With lightning-fast reflexes, clever tactics, and a hint of luck, only one team will reign supreme. Join us for an action-packed day of gaming, excitement, and crowning the true 'Badshah' of BGMI.`,
    `The Robo Race is a thrilling event where autonomous, AI-driven vehicles race on a challenging track. Teams develop unique algorithms to optimize speed, precision, and obstacle detection. This competition emphasizes innovation, technical skills, and teamwork, offering an exciting experience for tech enthusiasts and racing fans alike.
    `,
    `Unleash your hidden talent! 'Engineer Got Talent' is a showcase of skills beyond the blueprint. Join us as engineers take center stage to demonstrate their unique abilities, from singing and dancing to playing instruments or telling jokes. This entertaining event celebrates the diverse talents of engineers, proving they're more than just problem-solvers. Come witness the creativity, humor, and artistry of these talented individuals and vote for your favorite performer. Who will be crowned the ultimate 'Engineer Got Talent' champion?
    `,
    `Empower women, empower society! Join our website making competition,
    where participants design and develop innovative websites focused on woman safety. Using coding skills and creativity, teams will create platforms that provide resources, support, and awareness about women's safety and empowerment. A panel of experts will judge the websites based on functionality, design, and impact.
    `,
    `Set sail for the ultimate robotic boat racing experience! 'Pirates' is a thrilling competition where teams design, build, and navigate their own autonomous boats through a challenging aquatic course. Witness cutting-edge technology and innovative designs as participants battle for speed, agility, and treasure. Join us for a day of high-stakes racing. pirate-themed fun, and exploration of the latest advancements in robotics and artificial intelligence.
    `,
    `UU Picasso is a dynamic painting event where participants are challenged to depict the beauty and character of the college campus through their artwork. From the historic buildings to the lush green spaces, students are encouraged to capture the campus's unique spirit and vibrancy. This event offers an opportunity for artists of all levels to showcase their skills, turning the familiar scenes of daily college life into stunning visual expressions. UU Picasso is not just a painting competition but a celebration of creativity, community, and the shared experience of campus life.
    `,
    `Get ready for "Engineer's Stride," a light-hearted fun run filled with entertaining challenges! This event isn't about intense workouts—it's about enjoying activities like balloon popping, lemon races, and more that bring out your playful side. Test your agility, balance, and a bit of luck while sharing laughs with fellow engineers. Lace up and join us for a fun-filled day of light challenges and memorable moments!`,
    `Step into a time capsule at our Fashion Show, where the vibrant styles of the retro meet contemporary Indo-Western flair. This event is a celebration of nostalgia and innovation, blending classic retro trends with modern design elements. Expect a runway filled with bold prints, vintage silhouettes, and fusion ensembles that capture the essence of two iconic fashion worlds. Join us for an evening of style, creativity, and timeless elegance`,
    `Get ready to put your knowledge to the test! ‘Head Scratcher’ is a thrilling quiz competition that will push your limits and challenge your intellect. Teams will face off in a battle of wits, tackling tough questions and brain-teasing puzzles. From science and history to pop culture and more, no topic is off-limits. Join us for a fun and fiercely competitive afternoon of quizzing and find out!
    `,
    `"Life of an Engineer" is a dynamic videography event inviting participants to creatively capture the essence of an engineer's journey. Whether it's the daily grind, the thrill of problem-solving, or the balance between work and life, this event challenges you to showcase the highs and lows of an engineer's world through your lens. Participants are encouraged to explore themes like innovation, perseverance, and the ever-evolving challenges faced by engineers. Whether your video is humorous, dramatic, or inspirational, it should authentically portray the unique and diverse experiences that define the life of an engineer`,
    `The "Innovate India Model making Event" invites participants to showcase their creativity and technical prowess by constructing models or prototypes aligned with the theme of Digital India. This event encourages innovators to develop tangible representations of their ideas that contribute to the vision of a digitally empowered society. Participants can focus on areas such as smart cities, e-governance, digital infrastructure, or tech-driven education. The event fosters collaboration, as teams brainstorm and build projects that demonstrate how technology can solve real-world problems. The best models will be evaluated on creativity, functionality, and their potential impact on advancing Digital India.
    `,
    `‘Character Clash’ is an electrifying cosplay event where fans bring their favorite characters from anime, movies, video games, and comics to life. Participants, known as cosplayers, compete in a dynamic showdown, showcasing their creativity and craftsmanship through intricate costumes and performances. The event features intense cosplay contests, workshops, and interactive panels with industry experts. Attendees can explore a bustling marketplace filled with exclusive merchandise, artwork, and cosplay gear. Character Clash is more than a competition—it's a celebration of fandoms, where enthusiasts connect, share their passions, and immerse themselves in a vibrant, inclusive community.`,
    `Unleash your coding genius! 'Crack N Code' is a thrilling competition where participants solve complex coding challenges and puzzles to showcase their skills. With a timer ticking, coders will battle to crack the codes, debug, and optimize their solutions. From algorithms to data structures, participants will demonstrate their mastery of programming languages and problem-solving prowess. Join us for a high-energy event that pushes coding limits. Who will crack the code and emerge victorious?
    `,
    `‘Anyday Anime’ is a creative platform where anime fans can bring their original ideas to life. It’s a hub for aspiring animators, writers, and artists to collaborate and develop unique anime concepts, from character design to storytelling. The platform offers tools, tutorials, and community support, enabling creators to share their work, receive feedback, and connect with like-minded enthusiasts. Whether you're a seasoned creator or just starting out, Anyday Anime provides the space and resources to turn your anime visions into reality, making it the perfect destination for anime creativity, any day.`,
    `Cooking without fire refers to the preparation of food without using any direct heat sources like gas stoves, ovens, or open flames.
    `,
  ];
  const eventguid = [
    [
      ["Theme", "Open"],
      ["Time Limit", "2 hours"],
      ["Materials", "Participants must bring their own painting materials"],
      [
        "Safety",
        "Only skin-safe paints should be used; participants must take care of their models",
      ],
    ],
    [
      [
        "Team Composition",
        "The team should consist of 4 registered players from each department only. No extra members or substitutes will be allowed",
      ],
      [
        "Disqualification",
        "The team will be disqualified if caught cheating, exploiting bugs, engaging in ringing, or displaying toxic behavior towards other players",
      ],
      [
        "Arrival Time",
        "Teams should be present 1 hour before the commencement of the tournament for head count and placement",
      ],
      [
        "Registration Requirements",
        "The minimum requirement for the ID for registration is a level 35 account, and the rank should be more than Platinum V",
      ],
      [
        "Device Check",
        "Phones will be thoroughly checked for hacks and mod files upon entering the tournament premises",
      ],
      [
        "Team Representation",
        "The In-Game Leader (IGL) from each team will represent their team and will be responsible for point tally, reporting discrepancies, or suspecting other players of hacking",
      ],
    ],
    [
      [
        "Robot Type",
        "Participants must build and program a robot capable of navigating a pre-set course and suitable for off-roading",
      ],
      [
        "Time Limit",
        "Participants will have approximately 3 minutes to complete the race",
      ],
      [
        "Operation",
        "Robots must operate autonomously or through remote control",
      ],
      [
        "Dimensions",
        "Robots must not exceed the dimensions of 25cm × 20cm × 15cm (L × B × H)",
      ],
      [
        "Disqualification",
        "Any external assistance during the race will result in disqualification",
      ],
      [
        "Track Penalty",
        "Robots are required to stay on the track during the race; failure to do so will result in a penalty",
      ],
      ["Safety", "Robots must not cause damage to the track or other robots"],
    ],
    [
      [
        "Performance Limit",
        "Each performance should be no longer than 3 minutes",
      ],
      [
        "Content",
        "All acts must be appropriate for a general audience and safe to perform on stage",
      ],
      [
        "Categories",
        "Talent can include singing, dancing, stand-up comedy, instrumental performance, etc.",
      ],
      [
        "Non-Competitive",
        "This is a showcase event; no prizes will be awarded but certificates will be provided",
      ],
      [
        "Setup",
        "Participants must arrange for any special equipment or props needed for their act",
      ],
    ],
    [
      [
        "Originality",
        "No plagiarism is allowed; the code must be original and created on the spot",
      ],
      ["Hosting", "The project must be hosted on GitHub"],
      [
        "Collaboration",
        " No external help other than from the team member(s), if any, is allowed",
      ],
      [
        "Disqualification",
        "Any kind of nuisance created during the event will lead to immediate disqualification",
      ],
      [
        "Resources",
        "The participants will be provided with VS Code as their IDE.",
      ],
      [
        "Assets",
        "Participants are instructed to bring their own images in a pen drive (min 5- max 10) to beautify their website.",
      ],
      [
        "Technical",
        "HTML and CSS are compulsory to be used whereas use of JavaScript is optional and if a participant uses JS, they will be awarded 5% extra points over the points they receive in the functionality criteria."
      ]
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
      ["Theme", "Your favourite view of Uttaranchal University"],
      ["Time Limit", "1.5 hours"],
      ["Materials", "All materials must be brought by participants"],
      [
        "Presentation",
        "The artwork should be presented with a brief explanation (2-3 minutes)",
      ],
    ],
    [
      ["Registration", "Register online; no on-site registrations"],
      ["Location", "Near Lamour Bakehouse"],
      ["Event Day", "Arrive 30 minutes early. Wear comfortable attire"],
      [
        "Format",
        "Complete tasks to qualify for the next level; no skipping allowed",
      ],
      ["Scoring", "Points based on task completion and time"],
      ["Conduct", "Follow safety rules; no cheating"],
      [
        "Prize",
        "The participant to finish all the tasks while following safety rules wins",
      ],
    ],
    [
      [
        "Theme",
        "The event will focus on representing the '90s Indo-Western dress code, blending traditional and modern elements",
      ],
      [
        "Team Structure",
        [
          "One team will only be allowed from each department",
          " Each department team should consist of 6 members i.e. 3 boys & 3 girls",
        ],
      ],
      [
        "Event Day",
        "Each department can field only one team, which must consist of 6 members—3 boys and 3 girls",
      ],
      [
        "Attire",
        [
          "Participants must bring their own costumes and accessories, ensuring they align with the theme and are appropriate for a general audience",
          " All attire should be tasteful and respectful, avoiding any offensive or inappropriate content",
          " Costumes and props should not obstruct movement or pose a tripping hazard, and no hazardous materials are allowed on stage",
        ],
      ],
      [
        "Time Limit",
        "Each team will have a maximum of 10 minutes to present their walk and poses",
      ],
      ["Safety", "No hazardous materials/props are allowed on stage."],
      [
        "Participants must ensure that their costumes and props do not obstruct movement or pose a tripping hazard",
      ],
    ],
    [
      ["Format", "Multiple rounds (MCQs, rapid-fire, final round)"],
      ["Topics", " Engineering, technology, general knowledge of tech"],
      ["Time Duration", "1 hour"],
      [
        "Rules",
        "No electronic devices allowed; decisions by quiz masters are final",
      ],
      [
        "Tie-Breaker",
        "In case of a tie, an additional round of questions will determine the winner",
      ],
    ],
    [
      ["Theme", "Life of an Engineer"],
      ["Duration", "Each video must be 1-2 minutes long"],
      [
        "Content",
        "The content must be original and relevant to the theme provided",
      ],
      [
        "Submission Deadline",
        "Videos must be submitted by 10th September, 2024",
      ],
      [
        "Disqualification",
        "Plagiarized content or the use of AI will lead to immediate disqualification",
      ],
      ["Team Size", "Maximum of 2 people per team"],
    ],
    [
      [
        "Working Model Requirement",
        "The model presented must be fully functional and demonstrate the intended engineering principles or concepts. Non-functional or incomplete models will not be accepted for the presentation.",
      ],
      [
        "Material Restrictions",
        "The use of thermocol (polystyrene foam) is strictly prohibited in the construction of the models. Participants are encouraged to use sustainable, durable, and safe materials that effectively showcase their design.",
      ],
      [
        "Model Report",
        "A detailed report accompanying the model is mandatory. The report should include: An introduction to the concept or problem being addressed, a description of the model's design, materials used, and working principles, step-by-step documentation of the construction process, an analysis of the model's performance and any challenges faced, and conclusions or recommendations for future improvements.",
      ],
      [
        "Presentation Guidelines",
        "Prepare a brief oral presentation (5-10 minutes) to explain your model, its functionality, and its real-world applications. Be ready to answer questions from the judges and audience.",
      ],
    ],
    [
      [
        "Costume",
        "Participants must wear costumes representing a character from any genre (e.g., anime, movies, video games).",
      ],
      [
        "Time Limit",
        "Participants will have 2 minutes to showcase their character on stage.",
      ],
      [
        "Safety",
        "No sharp objects, real weapons, or dangerous materials are allowed in the cosplay.",
      ],
      [
        "Music Track Submission",
        "Participants are required to submit their music tracks to the student coordinator prior to the event. The contact number for the student coordinator has been provided in the registration form. Ensure that your tracks are submitted in MP3 format and by the deadline to avoid any last-minute issues.",
      ],
    ],
    [
      [
        "Platform",
        "The competition will be held on a pre-determined platform.",
      ],
      [
        "Coding Languages",
        "Participants can code in any coding language supported by the platform.",
      ],
      [
        "Disqualification",
        "Plagiarism or cheating in any form leads to immediate disqualification.",
      ],
      ["Time Allotted", "90 minutes"],
      [
        "Reporting Time",
        "2:30pm (participants must be present 10 minutes before the event starts)",
      ],
    ],
    [
      [
        "Competition Format",
        "Participants must create a short anime concept or storyboard up to 3 panels with their own original storyline.",
      ],
      ["Theme", "Anime"],
      [
        "Solo Participation",
        "The competition is an individual event. Teaming up with others is not allowed.",
      ],
      [
        "Medium",
        "The competition will be conducted digitally. Participants are required to bring their own digital drawing pad and any other necessary equipment.",
      ],
      [
        "Submission Guidelines",
        "The storyboard must consist of a maximum of 3 panels. All entries must be original works created during the competition time frame. Participants must provide a brief explanation of their concept, storyline, and creative process along with their submission.",
      ],
    ],
    [
      ["Time Limit", "1.5 hours"],
      ["Team Size", "One team may contain a maximum of 2 members."],
      ["Cleanliness", "Participants should maintain cleanliness."],
    ],
  ];
  const judCriteria = [
    ["Creativity", "Adherence to Theme", "Neatness"],
    [
      "In a 10-point scoring structure, teams prefer to play aggressiFvely, as it offers fewer placement points compared to a 15-point system. Since each kill still counts as one point, teams focus on making aggressive moves to collect more points. In this structure, the winning squad in each match will achieve 10 placement points. The second and third ranked teams will acquire six and five placement points, respectively.",
      "Points Distribution System for a Single Match:",
      "1st Place: 10 points",
      "2nd Place: 6 points",
      "3rd Place: 5 points",
      "4th Place: 4 points",
      "5th Place: 3 points",
      "6th Place: 2 points",
      "7th Place: 1 point",
      "8th Place: 1 point",
    ],
    ["Speed", "Accuracy", "Obstacle navigation", "Overall performance"],
    ["Speed", "Accuracy", "Obstacle navigation", "Overall performance"],
    [
      "Code Quality (20%)",
      "Design (30%)",
      "Functionality (25%)",
      "Creativity (15%)",
      "Content Relevance & Presentation (10%)",
    ],
    [
      "Speed & Time",
      "Stability",
      "Design",
      "Strategy & Tactics",
      "The boat's ability to complete the course",
    ],
    ["Creativity", "Technique", "Neatness", "Overall impact"],
    ["Task Completion", "Time Management", "Speed", "Performance", "Penalties"],
    [
      "Creativity",
      "Theme adherence",
      "Presentation",
      "Coordination",
      "Confidence",
    ],
    [
      "Accuracy",
      "Depth of Knowledge",
      "Quick Thinking",
      "From the first round, we'll select the top 7 teams.",
      "From the second round, we'll select only the top 3 teams.",
    ],
    [
      "Storytelling",
      "Creativity & Originality",
      "Technical Quality - Lighting & Audio",
      "Cinematography",
      "Editing",
      "Impact and Message",
      "Overall Impression",
    ],
    [
      "Creativity",
      "Functionality",
      "Material Choice",
      "Report Quality",
      "Presentation Skills",
    ],
    [
      "Accuracy",
      "Creativity",
      "Craftsmanship",
      "Performance",
      "Originality",
      "Posing",
      "Stage Presence",
    ],
    ["Correctness", "Efficiency", "Complexity"],
    [
      "Creativity",
      "Originality",
      "Adherence to Theme",
      "Artistic Skills",
      "Explanation",
    ],
    ["Taste", "Creativity", "Presentation"],
  ];
  const facultyCod = [
    ["Miss Sakshi Koli", "Miss Riya Kukreti", "Mr. Abhishek Jain"],
    [
      "Mr. Ankit Chamoli",
      "Mr. Sanjeev Sharma",
      "Ms. Pooja Verma",
      "Ms. Sadhna Bhatt",
      "Mr. Vineet Kumar Saini",
    ],
    [
      "Dr. Sachin Kumar",
      "Mr. Sunil Sharma",
      "Mr. Amit Saini",
      "Mr. Vishal Singh",
      "Mr. Amit Kumar",
    ],
    [
      "Dr. Sachin Kumar",
      "Mr. Yashwant Singh Bisht",
      "Dr. Basant Ballabh Dumka",
      "Mr. Shailendra Tiwari",
      "Mr. Alok Kumar",
      "Mr. Divij Arora",
    ],
    [
      "Mr. Ramnarayan",
      "Ms. Roosha Shamoon",
      "Ms. Neelima Singh",
      "Ms. Nandini Prajapati",
    ],
    [
      "Mr. Kshitij Pandey",
      "Mr. Divij Arora",
      "Mr. Mohit Chand Sagar",
      "Mr. Rohan Kukreti",
    ],
    [
      "Mr. Gaurav Thakur",
      "Mr. Gaurav Singh Negi",
      "Ms. Shreya Suman",
      "Mr. Mohit Kumar",
    ],
    [
      "Dr. Pinki Chugh",
      "Mr. Gaurav Kumar",
      "Dr. Ajay Tiwari",
      "Dr. Narendra Kumar",
    ],
    [
      "Dr. Ruby Pant",
      "Mr. Vinod Balmiki",
      "Ms. Pooja Verma",
      "Ms. Nishima Chaddha",
      "Mr. Jitendra Kumar Gupta",
    ],
    [
      "Mr. Arpit Goel",
      "Mr. Gopal Krishna",
      "Mr. Alok Sati",
      "Mr. Prem Prakash",
    ],
    [
      "Dr. Rajiv Kumar",
      "Ms. Navjyoti Agarwal",
      "Ms. Priyanka Chauhan",
      "Mr. Anuj Kumar",
    ],
    [
      "Mr. Ashish Pathani",
      "Mr. Arpit Goel",
      "Mr. Vivek John",
      "Mr. Saurabh Aggarwal",
      "Mr. Vinod Balmiki",
      "Ms. Vasu",
    ],
    [
      "Ms. Amita Bisht",
      "Mr. Anurag Kumar",
      "Ms. Stuti Bhatt",
      "Dr. Surya Prakash Gairola",
    ],
    ["Ms. Roosha Shamoon", "Ms. Pinki Uniyal", "Mr. Sukesh Kumar Bhagat"],
    ["Ms. Pratibha Dimri", "Ms. Shraddha Kalkhundiya", "Mr. Jitendra Kumar"],
    ["Ms. Anuradha Brijwal (CSE)", "Ms. Ankita Butoiya", "Ms. Garima Panwar"],
  ];
  const studentCod = [
    ["Diya Srivastava", 8299073582],
    ["Devansh Gupta", 6399909394],
    ["Kanik Mittal", 8800462908],
    ["Abhishek Ranjan", 9508600483],
    ["Ankur Verma", 7667222066],
    ["Awie Rajesh", 6201712875],
    ["Awie Rajesh", 6201712875], // Duplicate name
    ["Himanshi", 7302279003],
    ["Swati Mishra", 7417548398],
    ["Ms. Khushi Rana", 9896023532],
    ["Aryan Singh Negi", 9557229620],
    ["Shivam Kumar", 8825251672],
    ["Chahat Chauhan", 7248778119],
    ["Hasini Adimulam & Shreya Gupta", "9577161555 & 7505054765"],
    ["Ambar Kumar", 8434781667],
    ["Shreya Gupta", 7505054765], // Duplicate name
  ];

  const date = [
    "September 12th, 2024",
    " September 12th, 2024",
    "September 13th, 2024",
    "September 12th, 2024",
    "September 12th, 2024",
    "September 13th, 2024",
    "September 13th, 2024",
    "September 12th, 2024",
    "September 12th, 2024",
    "September 12th, 2024",
    "September 11th, 2024",
    "September 13th, 2024",
    "September 12th, 2024",
    "September 12th, 2024",
    "September 12th, 2024",
    "September 13th, 2024",
  ];
  const time = [
    "11:00 AM - 1:00 PM",
    "9:30 AM - 01:30 PM",
    "10:00 AM onwards",
    "2:00 PM - 4:00 PM",
    "10:30 AM - 12:30 PM",
    "10:00 AM onwards",
    "2:30 PM - 3:30 PM",
    "2:00 PM – 3:00 PM",
    "10:00 AM - 11:30 AM",
    "2:30 PM – 3:30 PM",
    "2:30 PM – 4:30 PM",
    "10:00 AM onwards",
    "11:30 AM – 1:30 PM",
    "2:30 PM – 4:00 PM",
    "2:30 PM – 4:00 PM",
    "10:00 AM onwards",
  ];
  const venue = [
    "UIT Ground Floor",
    "Central Computer Lab",
    "UIT Premises",
    "In front of Guest House, UU",
    "Central Computer Lab",
    "UIT Premises",
    "UIT Premises",
    "Near Lamour Bakehouse",
    "Swami Vivekananda Auditorium",
    "Will be allotted soon",
    "Will be allotted soon",
    "Ground Floor (UIT)",
    "Swami Vivekananda Auditorium",
    "Central Computer Lab",
    "Will be allotted soon",
    "Ground floor UIT",
  ];
  const title = [
    ["Code Storm", "Hackathon"],
    ["Vijay Ghosh", "BGMI"],
    ["Info Graphica", "Data Visualization"],
    ["Simu Hire",, "Mock Interview"],
    ["Vidhya Vrith", "Tech Quiz"],
    ["Nal Neel", "Bridge Design Competition"],
    ["Prathirupan Dristikon", "Model Presentation"],
    ["Ignition War", "Rocket Flying"],
    ["Vihangam", "Drone Flying"],
    ["Vimaan Shreshta", "RC Plane Flying"],
    ["Mech War", "E-Robo War"],
    ["Pixel Pulse", "Technical Poster Making"],
    ["Srijan Samvaad", "Tech Talk"],
    ["EngiNova", "Project ShowCase"],
    ["Yantra Sangam", "Assembly Dissembly"],
    ["Kala Manthan", "Metal Forging/ Food Design"],
    ["CADventure", "Computer Aided Design"],
    ["Amrit Dhara", "Water Treatment Stimulation"],
    ["Re-Civilized", "Best Out Of Waste"],
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
