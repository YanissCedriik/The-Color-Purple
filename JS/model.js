//Model
let cardHTML = "";

const model = {
    movies: [
      {
        title: "Deadpool",
        releaseDate: "2024",
        genre: "Action, Comedy",
        poster: "Assets/$_57.jfif",
        rating: 945,
        synopsis: "As Deadpool seeks revenge on the man who ruined his life, he embarks on a chaotic quest filled with sharp wit, violent confrontations, and a unique blend of humor and action. Along the way, he encounters various characters, including the X-Men, and forms an unexpected bond with the blind elderly woman who runs his safe house. ",

      },
      {
        title: "Blade Runner",
        releaseDate: "2008",
        genre: "Action",
        poster: "Assets/1.jpg",
        rating: 923,
        synopsis: "In a dystopian future, a blade runner named Rick Deckard is tasked with hunting down rogue replicants—bioengineered beings indistinguishable from humans. As he tracks them down, Deckard grapples with his own humanity and the moral implications of his job, leading to a thrilling exploration of identity and existence."
      },
      {
        title: "Raw",
        releaseDate: "2014",
        genre: "Adventure",
        poster: "Assets/1131w-L8p5tGjRpj8.webp",
        rating: 443,
        synopsis: "A vegetarian college student, Justine, undergoes a shocking transformation after being forced to consume raw meat during a hazing ritual. This awakening unleashes her primal instincts, leading to a dark and intense journey of self-discovery and cannibalistic cravings."
      },
      {
        title: "Walk Alone",
        releaseDate: "2019",
        genre: "Thriller",
        poster: "Assets/1131w-YZ-0GJ13Nc8.webp",
        rating: 874,
        synopsis: "In a tense psychological thriller, a solitary man is drawn into a web of deceit and danger after witnessing a crime. As he navigates a world of paranoia and mistrust, he must confront his own demons while fighting to expose the truth."
      },
      {
        title: "1917",
        releaseDate: "2019",
        genre: "War",
        poster: "Assets/1917-british-movie-poster-md.jpg",
        rating: 996,
        synopsis: "Set during World War I, two British soldiers are tasked with delivering a critical message to save a battalion from walking into a trap. The film unfolds in real-time, showcasing their harrowing journey through enemy territory, highlighting bravery and the horrors of war."
      },
      {
        title: "Witchcock Psycho",
        releaseDate: "1972",
        genre: "Crime",
        poster: "Assets/28.jpg",
        rating: 753,
        synopsis: "This homage to Alfred Hitchcock's iconic style intertwines suspense and psychological thrills, focusing on a disturbed motel owner and his complex relationship with his mother. As secrets unravel, viewers are drawn into a chilling tale of obsession and madness."
      },
      {
        title: "James Bond - Quantum Of Silence",
        releaseDate: "2008",
        genre: "Action, Spy",
        poster: "Assets/59001.webp",
        rating: 867,
        synopsis: "In this thrilling installment, James Bond faces a shadowy organization while uncovering a conspiracy that threatens global stability. With his signature wit and charm, Bond navigates high-stakes espionage, action-packed sequences, and unexpected betrayals."
      },
      {
        title: "James Bond - Live And Let Die",
        releaseDate: "1996",
        genre: "Action, Spy",
        poster: "Assets/59837.webp",
        rating: 966,
        synopsis: "James Bond embarks on a mission to investigate the mysterious deaths of British agents, leading him to a powerful drug lord in New Orleans. With danger at every turn and new allies, Bond must outsmart his enemies while unraveling a sinister plot."
      },
      {
        title: "Scream",
        releaseDate: "2006",
        genre: "Thriller, Comedy",
        poster: "Assets/61L3eGk45kL._AC_UF894,1000_QL80_.jpg",
        rating: 654,
        synopsis: "In a clever twist on slasher films, a group of high school friends becomes the target of a masked killer. As they navigate the rules of horror movie clichés, they must work together to survive the deadly game, blending suspense with dark humor."
      },
      {
        title: "65 Million Years Ago",
        releaseDate: "2023",
        genre: "Action",
        poster: "Assets/MV5BZjU2MjdjN2UtY2JlMC00MmVmLThhNDgtZjY1Y2FhNzRmY2IzXkEyXkFqcGc@._V1_.jpg",
        rating: 396,
        synopsis: "In a prehistoric adventure, a group of explorers is transported back in time to the age of dinosaurs. As they battle for survival against fierce creatures and the elements, they uncover the mysteries of an ancient world."
      },
      {
        title: "Shoot'em Up",
        releaseDate: "1994",
        genre: "Action",
        poster: "Assets/69eb2e87e012ec13b985b6b9d4aec99d.jpg",
        rating: 325,
        synopsis: "A fast-paced action film featuring a skilled gunman who protects a newborn from a ruthless gang. Packed with over-the-top violence and dark humor, the film follows his relentless fight against a series of enemies in a non-stop barrage of bullets."
      },
      {
        title: "Coded",
        releaseDate: "2023",
        genre: "Documentary",
        poster: "Assets/7.-Coded-content.jpg",
        rating: 296,
        synopsis: "This documentary delves into the world of algorithms and their impact on our lives. Through interviews with experts and real-life case studies, it explores how coded systems shape our decisions, privacy, and society at large, raising essential questions about technology and ethics."
      },
      {
        title: "Avatar",
        releaseDate: "2009",
        genre: "Science Fiction",
        poster: "Assets/Avatar_7ce699c0-ce5d-40b8-bb35-13fee557b8d7_large.webp",
        rating: 846,
        synopsis: "Set in the lush alien world of Pandora, 'Avatar' follows paraplegic marine Jake Sully as he navigates a conflict between humans and the native Na'vi people. Through his avatar, he immerses himself in their culture, leading to a battle for the future of Pandora and a quest for his own identity."
      },
      {
        title: "Black Panther",
        releaseDate: "2018",
        genre: "Action",
        poster: "Assets/blackpanther2.jpg",
        rating: 783,
        synopsis: "After the death of his father, T'Challa returns to Wakanda to take the throne as king. He must confront a formidable adversary, Erik Killmonger, who challenges his leadership and the future of the technologically advanced nation. The film explores themes of identity, heritage, and responsibility."
      },
      {
        title: "Zoolander",
        releaseDate: "2023",
        genre: "Comedy",
        poster: "Assets/DB_032-671x1024.jpg",
        rating: 794,
        synopsis: "In this comedic sequel, male model Derek Zoolander returns to the fashion world, grappling with his relevance in an ever-changing industry. Joined by his friends, he embarks on a hilarious journey filled with outrageous fashion shows, celebrity cameos, and absurd antics."
      },
      {
        title: "Little Miss Sunshine",
        releaseDate: "2023",
        genre: "Romance",
        poster: "Assets/littlemisssuns.jpg",
        rating: 656,
        synopsis: "This heartwarming story follows a dysfunctional family as they embark on a cross-country trip to support their young daughter, Olive, in her quest to win a beauty pageant. Along the way, they confront their own personal struggles, leading to moments of humor, love, and unexpected bonding."
      },
      {
        title: "Dune",
        releaseDate: "2021",
        genre: "Science Fiction",
        poster: "Assets/Dune-movie-poster.webp",
        rating: 654,
        synopsis: "Based on the epic novel by Frank Herbert, 'Dune' follows young Paul Atreides as he navigates a treacherous world of political intrigue and massive conflict over the valuable spice melange. As destiny unfolds, Paul must embrace his role in a prophecy that could change the universe."
      },
      {
        title: "Star Wars: The Phantom Menace",
        releaseDate: "2003",
        genre: "Sci-Fi",
        poster: "Assets/f3bi3nx1i7a61.jpg",
        rating: 782,
        synopsis: "Set in a galaxy far, far away, this prequel introduces young Anakin Skywalker, whose journey begins as Jedi Knights Obi-Wan Kenobi and Qui-Gon Jinn attempt to negotiate peace. The film sets the stage for the rise of the Sith and the epic battles that will follow."
      },
      {
        title: "Furiosa",
        releaseDate: "2024",
        genre: "Action",
        poster: "Assets/Furiosa-poster-Matt-Robot.webp",
        rating: 490,
        synopsis: "A prequel to 'Mad Max: Fury Road,' 'Furiosa' explores the backstory of the fierce warrior Furiosa as she navigates a post-apocalyptic landscape. The film delves into her origins and the challenges she faces in a brutal world ruled by warlords."
      },
      {
        title: "Horizon",
        releaseDate: "2023",
        genre: "Adventure",
        poster: "Assets/HRZN1_Character_Sam_VERT_MAIN_2764x4096_DOM.webp",
        rating: 881,
        synopsis: "An adventurous tale that follows a group of explorers as they venture into uncharted territories, facing both the beauty and dangers of the unknown."
      },
      {
        title: "Drive",
        releaseDate: "2023",
        genre: "Action Adventure",
        poster: "Assets/il_570xN.3393446498_ezqg.webp",
        rating: 710,
        synopsis: "A skilled driver gets entangled in a dangerous criminal underworld, leading to high-speed chases and thrilling confrontations."
      },
      {
        title: "Elf",
        releaseDate: "2004",
        genre: "Comedy",
        poster: "Assets/il_570xN.3517804383_nutl.webp",
        rating: 850,
        synopsis: "A human raised by elves at the North Pole travels to New York City to find his real father and discover his true identity."
      },
      {
        title: "Scream",
        releaseDate: "2023",
        genre: "Horror",
        poster: "Assets/scream.jpg",
        rating: 430,
        synopsis: "A new chapter in the iconic horror franchise, where a masked killer targets a group of friends with ties to the original murders."
      },
      {
        title: "12 Angry Men",
        releaseDate: "2023",
        genre: "Drama",
        poster: "Assets/12angrymen.jpg",
        rating: 900,
        synopsis: "A gripping courtroom drama that depicts the deliberations of a jury as they confront their biases and the weight of their decisions."
      },
      {
        title: "Black Mirror",
        releaseDate: "2023",
        genre: "Action",
        poster: "Assets/blackmirror.webp",
        rating: 300,
        synopsis: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide."
      },
      {
        title: "X-Men",
        releaseDate: "2023",
        genre: "Fantasy, Heroes",
        poster: "Assets/xmen.webp",
        rating: 575,
        synopsis: "A team of mutants with extraordinary abilities fights to protect a world that fears and hates them."
      },
      {
        title: "127 Hours",
        releaseDate: "2023",
        genre: "Adventure",
        poster: "Assets/127hours.jpg",
        rating: 650,
        synopsis: "The true story of a mountain climber who becomes trapped under a boulder and must make a harrowing decision to survive."
      },
      {
        title: "Lamb",
        releaseDate: "2023",
        genre: "Adventure",
        poster: "Assets/lamb.jpg",
        rating: 440,
        synopsis: "A poignant tale of a couple who discover a mysterious creature on their farm, leading to unexpected consequences."
      },
      {
        title: "Parasite",
        releaseDate: "2023",
        genre: "Thriller",
        poster: "Assets/parasite.jpg",
        rating: 920,
        synopsis: "An unemployed family schemes to become employed by a wealthy family, leading to an unexpected and darkly comedic turn of events."
      },
      {
        title: "The Amusement Park",
        releaseDate: "2023",
        genre: "Horror",
        poster: "Assets/amusement.jpg",
        rating: 380,
        synopsis: "A chilling exploration of an amusement park that reveals the darker side of human nature."
      },
      {
        title: "Possessor",
        releaseDate: "2023",
        genre: "Horror",
        poster: "Assets/images-w1400.jpg",
        rating: 500,
        synopsis: "A corporate agent uses brain implant technology to inhabit other people's bodies, committing assassinations in this psychological horror."
      },
      {
        title: "Creed 3",
        releaseDate: "2023",
        genre: "Action, Fighter",
        poster: "Assets/creed3.jpg",
        rating: 932,
        synopsis: "Adonis Creed faces new challenges both in and out of the ring as he strives to prove himself as a champion while grappling with his past."
      },
      {
        title: "Interstellar",
        releaseDate: "2014",
        genre: "Science Fiction",
        poster: "Assets/interstellar_2014_advance_original_film_art_682852f2-23f6-46de-a1db-4029d5b6f0b4_5000x.jpg",
        rating: 940,
        synopsis: "A team of explorers travels through a wormhole in search of a new habitable planet as Earth faces impending doom."
      },
      {
        title: "Jaws",
        releaseDate: "1975",
        genre: "Thriller",
        poster: "Assets/jaws-alternative-movie-poster-movie-poster-boy.jpg",
        rating: 770,
        synopsis: "A great white shark terrorizes a beach town, prompting a police chief, a marine biologist, and a grizzled fisherman to hunt it down."
      },
      {
        title: "Jaws (Version 2)",
        releaseDate: "1975",
        genre: "Thriller",
        poster: "Assets/jaws-andrew-swainson-movie-poster.webp",
        rating: 780,
        synopsis: "This sequel dives back into the terror as the infamous shark returns to wreak havoc once again on the unsuspecting town."
      },
      {
        title: "John Wick",
        releaseDate: "2014",
        genre: "Action",
        poster: "Assets/JohnWick-KeanuReeves-HollywoodEnglishActionMoviePoster-2.webp",
        rating: 930,
        synopsis: "An ex-hitman comes out of retirement to track down the gangsters that took everything from him, unleashing a relentless pursuit."
      },
      {
        title: "Jojo Rabbit",
        releaseDate: "2019",
        genre: "Comedy",
        poster: "Assets/jojo-rabbit.jpg",
        rating: 860,
        synopsis: "A young boy in Nazi Germany discovers that his mother is hiding a Jewish girl in their home, leading to a comical and heartfelt journey of discovery."
      },
      {
        title: "Joker",
        releaseDate: "2019",
        genre: "Drama",
        poster: "Assets/thejoker.jpeg",
        rating: 950,
        synopsis: "A gritty origin story of Arthur Fleck, a failed comedian whose descent into madness and nihilism leads to the birth of the iconic Joker."
      },
      {
        title: "Little Fish",
        releaseDate: "2020",
        genre: "Romance",
        poster: "Assets/Little-Fish2.webp",
        rating: 540,
        synopsis: "In a world where a pandemic wipes out memories, a couple fights to hold on to their love as they navigate their changing reality."
      },
      {
        title: "Logan",
        releaseDate: "2017",
        genre: "Action",
        poster: "Assets/logan-2017.webp",
        rating: 880,
        synopsis: "In a dystopian future, an aging Wolverine protects a young mutant while grappling with his own fading powers and mortality."
      },
      {
        title: "Moon",
        releaseDate: "2009",
        genre: "Science Fiction",
        poster: "Assets/moon.jpg",
        rating: 710,
        synopsis: "An astronaut nearing the end of his three-year stint on a lunar base begins to question his reality and identity as he experiences strange occurrences."
      },
      {
        title: "Moonlight",
        releaseDate: "2016",
        genre: "Drama",
        poster: "Assets/moonlight_0.jpg",
        rating: 720,
        synopsis: "A young African American man grapples with his identity and sexuality while growing up in a rough neighborhood of Miami."
      },
      {
        title: "James Bond - Skyfall",
        releaseDate: "2012",
        genre: "Action, Spy",
        poster: "Assets/movie-poster-12.jpg",
        rating: 932,
        synopsis: "James Bond's loyalty to M is tested as her past comes back to haunt her, leading to a showdown with a dangerous enemy."
      },
      {
        title: "The Terror of the Deep",
        releaseDate: "2023",
        genre: "Horror",
        poster: "Assets/movie-poster-the-terror-of-the-deep.jpg",
        rating: 640,
        synopsis: "A group of divers discovers a hidden underwater world, but their excitement turns to horror when they encounter a creature that guards its secrets fiercely."
      },
      {
        title: "The Shade",
        releaseDate: "2023",
        genre: "Drama",
        poster: "Assets/MV5BMjQxMDgzNmItOWUyNi00YzYxLWI3MjgtM2Y4ZDg1YjkyMTA3XkEyXkFqcGc@._V1_QL75_UX480_.jpg",
        rating: 700,
        synopsis: "In a quiet town, a young woman confronts her past as she seeks closure from a traumatic event that has haunted her for years."
      },
      {
        title: "Now You See Me 2",
        releaseDate: "2016",
        genre: "Thriller",
        poster: "Assets/nysm2-official-quad-scaled.jpg",
        rating: 750,
        synopsis: "The Four Horsemen resurface for a comeback performance, but they are pulled into a game of revenge against a tech prodigy who wants to expose them."
      },
      {
        title: "Oppenheimer",
        releaseDate: "2023",
        genre: "Biography",
        poster: "Assets/oppenheimer-movie-poster-113945.jpg",
        rating: 900,
        synopsis: "A biographical drama that chronicles the life of J. Robert Oppenheimer, the father of the atomic bomb, and the ethical dilemmas he faced."
      },
      {
        title: "Harry Potter and the Philosopher's Stone",
        releaseDate: "2001",
        genre: "Fantasy",
        poster: "Assets/philosophers-stone-20-years-of-movie-magic-hagrid-poster.jpg",
        rating: 880,
        synopsis: "An orphaned boy discovers he is a wizard and attends Hogwarts School of Witchcraft and Wizardry, where he makes friends and confronts dark forces."
      },
      {
        title: "Classic Movie Collection",
        releaseDate: "2023",
        genre: "Compilation",
        poster: "Assets/Polish-movie-posters-rocky-thegodfather-apocalypsenow-alienandaliens-taxidriver-termiantor-poland-cinema-sabukaru-online-magazine-tokyo34.jpg",
        rating: 770,
        synopsis: "A curated collection of timeless classics that shaped the film industry, showcasing iconic scenes and unforgettable characters."
      },
      {
        title: "Black Adam",
        releaseDate: "2023",
        genre: "Action",
        poster: "Assets/posd1_1.webp",
        rating: 650,
        synopsis: "A dark anti-hero rises from the ashes of ancient history to unleash his power and seek justice in a world that has long forgotten him."
      },
      {
        title: "Mean Streets",
        releaseDate: "1973",
        genre: "Crime",
        poster: "Assets/posters-1-mean-streets.jpg",
        rating: 810,
        synopsis: "A young man navigates the dangerous streets of New York City while struggling with his loyalty to his friends and his desire for a better life."
      },
      {
        title: "Radhe Shyam",
        releaseDate: "2022",
        genre: "Romance",
        poster: "Assets/radhe-shyam.avif",
        rating: 720,
        synopsis: "Set in the 1970s, a love story unfolds between a palm reader and a woman who are destined to be together, despite the odds."
      },
      {
        title: "Inside Out",
        releaseDate: "2015",
        genre: "Animation",
        poster: "Assets/rs_634x884-160115101546-634-inside-out-parody-poster.webp",
        rating: 850,
        synopsis: "Inside the mind of a young girl named Riley, five personified emotions—Joy, Sadness, Anger, Fear, and Disgust—navigate her journey through life as she faces new challenges after moving to a new city."
      },
      {
        title: "Spider-Man: Far From Home",
        releaseDate: "2019",
        genre: "Action",
        poster: "Assets/spider-man-far-from-home-official-movie-posters_ex7e.1080.webp",
        rating: 800,
        synopsis: "After the events of Endgame, Peter Parker goes on a school trip to Europe, but his vacation is interrupted by the arrival of elemental creatures, forcing him to step up as a hero once again."
      },
      {
        title: "Spies in Disguise",
        releaseDate: "2019",
        genre: "Animation",
        poster: "Assets/spies-in-the-poster-1_1600x.webp",
        rating: 720,
        synopsis: "Super spy Lance Sterling is transformed into a pigeon by an awkward young inventor, and together they must save the world while navigating their new partnership."
      },
      {
        title: "Star Wars: Rogue One",
        releaseDate: "2016",
        genre: "Science Fiction",
        poster: "Assets/starWarsRogueOne.jpg",
        rating: 830,
        synopsis: "A group of rebels bands together on a mission to steal the plans for the Death Star, the Empire's ultimate weapon, in this thrilling entry to the Star Wars saga."
      },
      {
        title: "Suspiria",
        releaseDate: "2018",
        genre: "Horror",
        poster: "Assets/suspiria-posters.webp",
        rating: 690,
        synopsis: "A young American dancer joins a prestigious dance academy in Berlin, only to uncover a dark secret that leads her into a world of supernatural terror."
      },
      {
        title: "The Batman",
        releaseDate: "2022",
        genre: "Action",
        poster: "Assets/The-Batman-2.webp",
        rating: 870,
        synopsis: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing the Riddler, a serial killer targeting the wealthy."
      },
      {
        title: "The Batman (Unmask The Truth)",
        releaseDate: "2022",
        genre: "Action",
        poster: "Assets/The-Batman-4.webp",
        rating: 931,
        synopsis: "Continuing his quest for justice, Batman must confront his own identity while unraveling a web of lies that threaten to destroy Gotham."
      },
      {
        title: "Titanic",
        releaseDate: "1997",
        genre: "Romance",
        poster: "Assets/titanic.webp",
        rating: 950,
        synopsis: "A sweeping romance unfolds between a young aristocrat and a poor artist aboard the ill-fated RMS Titanic, showcasing love against the backdrop of tragedy."
      },
      {
        title: "Abigail",
        releaseDate: "2023",
        genre: "Drama",
        poster: "Assets/unnamed.jpg",
        rating: 720,
        synopsis: "In a dystopian world where a mysterious disease has taken hold, a young girl named Abigail embarks on a journey to discover her true identity and the secrets of her past."
      },
      {
        title: "Longlegs",
        releaseDate: "2023",
        genre: "Thriller",
        poster: "Assets/longlegs.jpg",
        rating: 650,
        synopsis: "A psychological thriller that follows a detective as they uncover the unsettling truth behind a series of disappearances linked to a mysterious figure known as 'Longlegs.'"
      },
      {
        title: "Civil War",
        releaseDate: "2024",
        genre: "Action",
        poster: "Assets/civilwar.webp",
        rating: 800,
        synopsis: "As nations collide, heroes must choose sides in a conflict that will determine the fate of the world, challenging their loyalties and beliefs."
      },
      {
        title: "Thor - The Dark World",
        releaseDate: "2023",
        genre: "Hero",
        poster: "Assets/rico_thor2.jpg",
        rating: 740,
        synopsis: "In this epic sequel, Thor must unite with his estranged brother Loki to face a dark force that threatens the universe. As alliances shift and enemies emerge, Thor's strength and resolve will be tested like never before."
      },
      {
        title: "Despicable Me 4",
        releaseDate: "2023",
        genre: "Animation",
        poster: "Assets/gru4.jpg",
        rating: 780,
        synopsis: "Gru and his quirky minions are back in another hilarious adventure. This time, they must team up with new friends to stop a villain who threatens to steal all the joy from the world. Expect laughter, fun, and unexpected twists!"
      },
      {
        title: "Kingdom Of The Apes",
        releaseDate: "2023",
        genre: "Action",
        poster: "Assets/kingdomoftheapes.jpg",
        rating: 720,
        synopsis: "In a post-apocalyptic world, a group of survivors must navigate a dangerous landscape ruled by intelligent apes. As tensions rise, they must decide whether to fight for survival or seek an alliance with their former enemies."
      },
      {
        title: "Speak No Evil",
        releaseDate: "2023",
        genre: "Thriller",
        poster: "Assets/Speaknoevil.jpg",
        rating: 670,
        synopsis: "When a family accepts an invitation to visit a seemingly perfect couple, they soon discover that appearances can be deceiving. As the weekend unfolds, they are drawn into a web of secrets and manipulation that leads to a chilling climax."
      },
      {
        title: "Uri: The Surgical Strike",
        releaseDate: "2019",
        genre: "Action",
        poster: "Assets/Uri_-_Hows_The_Josh_-_Bollywood_Patriotic_Hindi_Movie_Poster_117ca0f6-c747-46a7-91e7-c794235e4906.jpg",
        rating: 750,
        synopsis: "Based on true events, this gripping action film follows the Indian military's response to a terrorist attack. With thrilling action sequences and heartfelt moments, it celebrates bravery and sacrifice in the face of adversity."
      },
      {
        title: "Vengeance",
        releaseDate: "2022",
        genre: "Thriller",
        poster: "Assets/Vengeance.webp",
        rating: 720,
        synopsis: "A darkly comedic thriller that follows a podcaster who travels to Texas to investigate the mysterious death of a friend. As he digs deeper, he uncovers a web of conspiracies and secrets that lead to unexpected revelations."
      },
      {
        title: "Vice",
        releaseDate: "2018",
        genre: "Biography",
        poster: "Assets/vice-web.jpg",
        rating: 780,
        synopsis: "This biographical drama chronicles the rise of Dick Cheney, exploring his controversial political career and the impact he had on American politics. With sharp wit and a poignant narrative, it delves into the complexities of power and ambition."
      },
      {
        title: "West Side Story",
        releaseDate: "2021",
        genre: "Musical",
        poster: "Assets/west-side-story-poster-print.jpg",
        rating: 820,
        synopsis: "In this modern retelling of the classic musical, two star-crossed lovers from rival street gangs navigate love and conflict in 1950s New York City. With stunning choreography and timeless music, the film captures the essence of passion and tragedy."
      },
      {
        title: "Uncharted",
        releaseDate: "2023",
        genre: "Action, Adventure",
        poster: "Assets/what-has-happened-to-movie-posters-v0-tm2y16wnnhb81.jpg",
        rating: 740,
        synopsis: "Based on the popular video game series, Nathan Drake embarks on a thrilling treasure hunt around the globe. Alongside a charismatic partner, he faces ruthless mercenaries and uncovers ancient secrets, testing his skills and resolve."
      },
      {
        title: "Wonder Woman",
        releaseDate: "2017",
        genre: "Action",
        poster: "Assets/wonder-woman_adv_c_ds_os-891437.webp",
        rating: 800,
        synopsis: "In this inspiring origin story, Diana, an Amazonian princess, leaves her sheltered island home to become the fierce warrior known as Wonder Woman. As she discovers her true powers, she battles against the forces of evil during World War I."
      },
      {
        title: "Wonka",
        releaseDate: "2023",
        genre: "Fantasy",
        poster: "Assets/WONKA_INSTA_VERT_Father_Julius_1638x2048_DOM-1.webp",
        rating: 750,
        synopsis: "This whimsical prequel explores the early life of Willy Wonka before he became the famous chocolatier. With a mix of adventure and magic, the film delves into his imaginative world and the challenges he faced in creating his iconic chocolate factory."
      },
      {
        title: "Tigertrail",
        releaseDate: "2023",
        genre: "Adventure",
        poster: "Assets/X-twitter_EVrDfLIXkAIyhju.avif",
        rating: 720,
        synopsis: "Set against the backdrop of a lush jungle, a group of explorers embarks on a daring quest to find a legendary tiger. Along the way, they encounter breathtaking landscapes, wildlife, and the hidden dangers of nature."
      },
      {
        title: "The Front Line",
        releaseDate: "2007",
        genre: "War",
        poster: "Assets/the-front-line-in-the-poster-1_1600x.webp",
        rating: 780,
        synopsis: "This gripping war drama follows soldiers on the front lines as they confront the brutal realities of combat. Through their stories of courage and sacrifice, the film highlights the emotional and psychological toll of war."
      },
      {
        title: "The Gladiator",
        releaseDate: "2009",
        genre: "Adventure",
        poster: "Assets/thegladiator.jpg",
        rating: 850,
        synopsis: "In ancient Rome, a betrayed general rises against a corrupt emperor to seek vengeance and justice. As he fights for his life in the arena, he becomes a symbol of hope for the oppressed, igniting a revolution that will change the empire forever."
      },
      {
        title: "Miracles from Heaven",
        releaseDate: "2016",
        genre: "Drama",
        poster: "Assets/miraclesfromheaven.jpg",
        rating: 880,
        synopsis: "Based on a true story, this heartfelt drama follows a young girl suffering from a rare digestive disorder. When a miraculous event occurs, it transforms her life and the lives of her family, leading them to discover the power of faith and hope."
      },
      {
        title: "Fifty Shades Of Grey",
        releaseDate: "2015",
        genre: "Romance",
        poster: "Assets/fiftyshades.jpg",
        rating: 748,
        synopsis: "This provocative romance explores the complex relationship between a college graduate and a wealthy entrepreneur. As they delve into a world of passion and desire, they must navigate the boundaries of love, trust, and personal freedom."
      },

       
    ]
  };
  