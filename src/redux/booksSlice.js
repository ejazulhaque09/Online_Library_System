import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: 1,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      description:
        "This coming-of-age novel delves deep into the complex inner world of Holden Caulfield, a 16-year-old boy who has been expelled from yet another prep school. Disillusioned by the hypocrisy and superficiality he sees in the adult world, Holden embarks on a solitary journey through 1950s New York City. Along the way, he grapples with his own identity, feelings of alienation, the pain of his younger brother's death, and his growing fear of entering adulthood. Salinger's classic work offers a profound exploration of adolescent angst, rebellion, and the search for meaning in a society that often seems phony and disingenuous.",
      rating: 4.1,
      category: "fiction",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description:
        "Set against the backdrop of the deeply segregated American South during the 1930s, this Pulitzer Prize-winning novel follows the life of young Scout Finch, a tomboyish girl growing up in the small town of Maycomb, Alabama. Scout's father, Atticus Finch, is a morally upright lawyer tasked with defending a black man, Tom Robinson, who has been falsely accused of raping a white woman. Through Scout's innocent perspective, the novel addresses profound themes of racial injustice, moral growth, and the loss of innocence. Lee expertly contrasts the compassion and wisdom of Atticus with the deeply ingrained prejudices of the town, highlighting the tension between morality and societal norms.",
      rating: 4.8,
      category: "fiction",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      description:
        "George Orwell's dystopian masterpiece presents a terrifying vision of a future in which a totalitarian government, led by the omnipresent figure of Big Brother, exerts absolute control over every aspect of its citizens' lives. The protagonist, Winston Smith, works for the Party rewriting history to fit the state's propaganda but secretly harbors dreams of rebellion. As Winston begins to question the Party’s relentless grip on truth, reality, and thought, he finds himself drawn into a dangerous web of resistance, love, and betrayal. Orwell's novel serves as a chilling warning about the dangers of authoritarianism, mass surveillance, and the suppression of free thought in a world where reality itself is manipulated by those in power.",
      rating: 4.7,
      category: "science",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      description:
        "Set in the Regency era of early 19th-century England, 'Pride and Prejudice' centers around Elizabeth Bennet, one of five daughters in a family facing the pressure to marry well due to the family's estate being entailed away to a male heir. Elizabeth is independent, quick-witted, and determined not to marry for anything less than love, despite societal expectations. Her initial disdain for the proud Mr. Darcy, a wealthy gentleman, sets the stage for a love story that challenges class divisions and misconceptions. Austen’s novel not only critiques the limited opportunities for women but also explores themes of reputation, social mobility, and the transformative power of self-awareness and mutual respect in relationships.",
      rating: 4.5,
      category: "romance",
    },
    {
      id: 5,
      title: "Moby-Dick",
      author: "Herman Melville",
      description:
        "In this monumental work of American literature, Herman Melville tells the story of the Pequod, a whaling ship led by the enigmatic and vengeful Captain Ahab. Ahab's singular obsession with hunting down the elusive white whale, Moby Dick, drives the novel forward, as the crew embarks on a perilous journey across the world's oceans. Narrated by Ishmael, the novel delves into themes of obsession, revenge, fate, and the clash between humanity and nature. Melville’s dense prose is rich with symbolism and philosophical musings, as the characters confront the vast and unknowable forces of the natural world, all while being propelled toward their inevitable doom by Ahab's maniacal quest.",
      rating: 4.0,
      category: "fiction",
    },
    {
      id: 6,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description:
        "Set during the Jazz Age in the summer of 1922, 'The Great Gatsby' follows the life of Nick Carraway, a young man from the Midwest who moves to Long Island's North Shore and becomes entangled in the lavish and mysterious world of his wealthy neighbor, Jay Gatsby. Gatsby is known for throwing extravagant parties, but beneath the glittering facade lies a man deeply in love with Daisy Buchanan, a married woman from his past. As Gatsby’s dream of rekindling their love collides with the harsh realities of class divisions and the moral decay of the era, the novel reveals the dark undercurrents of the American Dream and the disillusionment that comes with the pursuit of wealth and status.",
      rating: 4.4,
      category: "fiction",
    },
    {
      id: 7,
      title: "War and Peace",
      author: "Leo Tolstoy",
      description:
        "Tolstoy’s sprawling epic, 'War and Peace,' is a monumental novel that weaves together the lives of several aristocratic families against the backdrop of the Napoleonic Wars in early 19th-century Russia. The novel examines the contrasting forces of war and peace, love and hate, and fate and free will, while offering a deep exploration of history, society, and individual lives. Characters like Pierre Bezukhov, Prince Andrei Bolkonsky, and Natasha Rostova navigate personal and political crises as their fates intersect with the grand sweep of historical events. Tolstoy’s novel remains a powerful exploration of humanity, morality, and the complexity of human relationships.",
      rating: 4.6,
      category: "historical fiction",
    },
    {
      id: 8,
      title: "Brave New World",
      author: "Aldous Huxley",
      description:
        "In 'Brave New World,' Huxley presents a dystopian vision of a future society where individuality, emotional depth, and free thought have been sacrificed in favor of stability, happiness, and technological control. The novel follows Bernard Marx, an outsider in a world governed by genetic engineering, consumerism, and a rigid caste system. In this brave new world, citizens are conditioned from birth to accept their place in society, while the government ensures docility through the distribution of the drug soma. Through its exploration of conformity, the dangers of technological advancement, and the loss of personal autonomy, 'Brave New World' remains a chilling and thought-provoking critique of modernity.",
      rating: 4.2,
      category: "science",
    },
    {
      id: 9,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      author: "J.R.R. Tolkien",
      description:
        "The first book in J.R.R. Tolkien's epic fantasy series, 'The Lord of the Rings,' introduces readers to Middle-earth, a vast and ancient world filled with diverse cultures, magical beings, and looming darkness. 'The Fellowship of the Ring' follows the journey of Frodo Baggins, a young hobbit tasked with the monumental responsibility of destroying the One Ring, a powerful artifact created by the Dark Lord Sauron. Alongside a fellowship of brave companions, Frodo sets out on a perilous adventure that will test their courage, friendship, and resolve. Tolkien’s richly imagined world and intricate lore have made 'The Lord of the Rings' a cornerstone of modern fantasy literature.",
      rating: 4.9,
      category: "fantasy",
    },
    {
      id: 10,
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      description:
        "'Jane Eyre' is a groundbreaking work of Victorian literature that tells the story of the eponymous heroine, an orphan who endures a difficult childhood at the hands of abusive relatives and a harsh boarding school. As she matures, Jane becomes a governess at Thornfield Hall, where she falls in love with the brooding and enigmatic Mr. Rochester. However, dark secrets from Rochester's past threaten their happiness, forcing Jane to make a difficult choice between love and her moral integrity. Brontë's novel explores themes of class, gender, and personal autonomy, all while giving voice to a fiercely independent female protagonist who challenges societal expectations.",
      rating: 4.3,
      category: "classic literature",
    },
    {
      id: 11,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      description:
        "A prelude to 'The Lord of the Rings,' 'The Hobbit' follows the adventure of Bilbo Baggins, a reluctant hobbit who is swept into an epic quest to help a group of dwarves reclaim their homeland from the fearsome dragon, Smaug. Along the way, Bilbo encounters trolls, elves, goblins, and, most notably, a strange creature named Gollum, from whom he acquires the mysterious One Ring. Though 'The Hobbit' is a lighter and more whimsical tale than Tolkien’s later work, it introduces readers to the richly detailed world of Middle-earth and lays the groundwork for the larger conflicts that will unfold in 'The Lord of the Rings.'",
      rating: 4.8,
      category: "fantasy",
    },
    {
      id: 12,
      title: "The Odyssey",
      author: "Homer",
      description:
        "One of the most celebrated works of ancient literature, 'The Odyssey' recounts the long and perilous journey of Odysseus, the king of Ithaca, as he attempts to return home after the Trojan War. Over the course of ten years, Odysseus faces countless challenges, including vengeful gods, mythical creatures, and treacherous waters, all while longing to reunite with his wife, Penelope, and son, Telemachus. Homer’s epic poem explores themes of heroism, loyalty, and the struggle between fate and free will, all while painting a vivid portrait of ancient Greek society and the timeless human desire for home and belonging.",
      rating: 4.5,
      category: "classic literature",
    },
    {
      id: 13,
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      description:
        "In 'Crime and Punishment,' Dostoevsky explores the psychological turmoil of Raskolnikov, a young and impoverished man in St. Petersburg, who commits a brutal murder under the belief that his intellectual superiority justifies his crime. As Raskolnikov grapples with guilt, paranoia, and the consequences of his actions, the novel delves into profound questions of morality, justice, and the human condition. Dostoevsky’s intense psychological portrait of his protagonist, combined with his exploration of Russian society and the complexities of the human conscience, makes 'Crime and Punishment' one of the most important works of 19th-century literature.",
      rating: 4.6,
      category: "classic literature",
    },
    {
      id: 14,
      title: "The Brothers Karamazov",
      author: "Fyodor Dostoevsky",
      description:
        "Dostoevsky’s final novel, 'The Brothers Karamazov,' is a profound philosophical exploration of faith, doubt, free will, and morality, centered around the lives of three brothers—Alyosha, the spiritual one; Ivan, the intellectual; and Dmitri, the passionate. Their father, Fyodor Pavlovich, a corrupt and hedonistic landowner, is murdered, and the brothers' complex relationships and differing worldviews come to the forefront during the investigation and trial. This monumental novel not only delves into deep questions of good and evil but also serves as a rich exploration of family dynamics, societal pressures, and the intricacies of human emotion.",
      rating: 4.7,
      category: "classic literature",
    },
    {
      id: 15,
      title: "Wuthering Heights",
      author: "Emily Brontë",
      description:
        "'Wuthering Heights' is a dark and passionate tale of love, revenge, and the destructive effects of obsession. Set on the Yorkshire moors, the novel tells the tragic story of Heathcliff, a foundling taken in by the Earnshaw family, and his intense, unfulfilled love for his childhood companion, Catherine Earnshaw. Their love is thwarted by social conventions and personal pride, leading to a cycle of vengeance and cruelty that spans generations. Brontë's novel is notable for its raw emotional intensity, its gothic atmosphere, and its complex, often morally ambiguous characters.",
      rating: 4.4,
      category: "romance",
    },
    {
      id: 16,
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      description:
        "In this haunting philosophical novel, Oscar Wilde explores themes of vanity, decadence, and the corrupting influence of beauty. Dorian Gray is a young, handsome man whose portrait is painted by the artist Basil Hallward. Under the influence of the hedonistic Lord Henry, Dorian becomes obsessed with maintaining his youth and beauty. He makes a Faustian bargain to remain physically youthful while the portrait bears the signs of his aging and moral corruption. As Dorian sinks deeper into debauchery and sin, the portrait becomes increasingly grotesque, serving as a mirror to his soul. Wilde's only novel is a scathing critique of a superficial society obsessed with appearance and self-indulgence.",
      rating: 4.3,
      category: "classic literature",
    },
    {
      id: 17,
      title: "Frankenstein",
      author: "Mary Shelley",
      description:
        "Mary Shelley’s 'Frankenstein' tells the story of Victor Frankenstein, a scientist who becomes obsessed with creating life from inanimate matter. After successfully animating a monstrous creature, Victor is horrified by his creation and abandons it. The creature, left to fend for itself, becomes bitter and vengeful, leading to a series of tragic events. The novel explores themes of ambition, responsibility, isolation, and the consequences of unchecked scientific experimentation. Often regarded as one of the first works of science fiction, 'Frankenstein' continues to resonate with readers due to its enduring relevance to issues of ethics, technology, and humanity’s relationship with nature.",
      rating: 4.2,
      category: "horror",
    },
    {
      id: 18,
      title: "Dracula",
      author: "Bram Stoker",
      description:
        "'Dracula' is a classic Gothic horror novel that introduced the world to one of the most iconic figures in literature: Count Dracula, the vampiric nobleman from Transylvania. The story follows Jonathan Harker, a young lawyer, who travels to Dracula’s castle to assist him with a real estate transaction. Harker soon realizes that he is a prisoner and that Dracula plans to travel to England to spread his curse of vampirism. The novel is presented as a series of diary entries, letters, and newspaper clippings, creating a sense of immediacy and suspense. Stoker’s novel explores themes of fear, sexuality, and the clash between the modern world and ancient superstition.",
      rating: 4.5,
      category: "horror",
    },
    {
      id: 19,
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      description:
        "Tolstoy’s 'Anna Karenina' is a sweeping epic that explores the intricacies of Russian society, love, and personal morality through the intertwined lives of its characters. The novel’s tragic heroine, Anna Karenina, is a beautiful aristocrat who embarks on a doomed love affair with the dashing Count Vronsky. As Anna’s affair leads to scandal and social ostracism, Tolstoy also portrays the contrasting story of Konstantin Levin, a landowner whose search for meaning and happiness takes him on a path of self-discovery. 'Anna Karenina' is a richly textured novel that explores the nature of love, duty, family, and faith in the face of societal constraints.",
      rating: 4.7,
      category: "classic literature",
    },
    {
      id: 20,
      title: "The Divine Comedy",
      author: "Dante Alighieri",
      description:
        "Dante’s 'Divine Comedy' is an epic poem that takes the reader on a journey through the realms of the afterlife—Hell (Inferno), Purgatory (Purgatorio), and Paradise (Paradiso). In this allegorical tale, the poet Dante himself is led by the Roman poet Virgil through the nine circles of Hell, where he witnesses the torments of the damned, before ascending the mountain of Purgatory and finally reaching the celestial spheres of Heaven. Along the way, Dante encounters historical and mythological figures who reflect on their earthly sins and virtues. 'The Divine Comedy' is a profound exploration of the soul’s journey toward salvation, as well as a commentary on human nature, politics, and morality.",
      rating: 4.8,
      category: "poetry",
    },
    {
      id: 21,
      title: "Les Misérables",
      author: "Victor Hugo",
      description:
        "'Les Misérables' is Victor Hugo’s monumental novel that weaves together the lives of several characters in post-revolutionary France. The central figure is Jean Valjean, a former convict who, after serving 19 years in prison for stealing a loaf of bread, is determined to rebuild his life and make amends for his past. Pursued relentlessly by the zealous Inspector Javert, Valjean’s story intersects with other characters, including the tragic Fantine, her daughter Cosette, and the revolutionary student Marius. The novel explores themes of justice, mercy, redemption, and the enduring struggle between good and evil. Hugo’s richly detailed portrayal of French society and his deep sympathy for the oppressed make 'Les Misérables' one of the most powerful works of literature.",
      rating: 4.8,
      category: "historical fiction",
    },
    {
      id: 22,
      title: "Great Expectations",
      author: "Charles Dickens",
      description:
        "'Great Expectations' follows the life of Pip, an orphaned boy raised by his sister and her husband, as he grows from a poor child into a young man with lofty ambitions. Pip's life changes when he meets the reclusive and bitter Miss Havisham, who lives in a decaying mansion and has adopted the beautiful but cold-hearted Estella. As Pip falls in love with Estella and learns that he has come into a great fortune from an anonymous benefactor, he embarks on a journey of self-discovery that forces him to confront his own values and the true nature of success. Dickens’ novel is a richly layered story of class, ambition, love, and redemption.",
      rating: 4.6,
      category: "classic literature",
    },
    {
      id: 23,
      title: "The Scarlet Letter",
      author: "Nathaniel Hawthorne",
      description:
        "Set in 17th-century Puritan New England, 'The Scarlet Letter' tells the story of Hester Prynne, a woman who bears the shame of committing adultery and is forced to wear a scarlet letter 'A' on her chest as a symbol of her sin. Hester’s lover, the Reverend Dimmesdale, remains unnamed and tortured by guilt, while Hester raises her illegitimate daughter, Pearl, in isolation. Hawthorne’s novel explores themes of sin, guilt, and redemption, while also critiquing the harsh and unforgiving moral codes of Puritan society. 'The Scarlet Letter' remains a classic of American literature, admired for its complex characters and moral depth.",
      rating: 4.4,
      category: "classic literature",
    },
    {
      id: 24,
      title: "The Grapes of Wrath",
      author: "John Steinbeck",
      description:
        "John Steinbeck’s Pulitzer Prize-winning novel 'The Grapes of Wrath' is a powerful depiction of the plight of migrant farm workers during the Great Depression. The story follows the Joad family as they are forced to leave their Oklahoma farm due to drought and economic hardship, joining thousands of other displaced families in their search for a better life in California. As they face exploitation, poverty, and the harsh realities of life on the road, the Joads’ journey becomes a poignant exploration of human resilience, social injustice, and the American Dream. Steinbeck’s vivid prose and deep empathy for the downtrodden make 'The Grapes of Wrath' one of the most enduring works of American fiction.",
      rating: 4.7,
      category: "historical fiction",
    },
    {
      id: 25,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description:
        "'To Kill a Mockingbird' is a timeless classic that addresses themes of racial injustice, moral growth, and the loss of innocence. The story is set in the Deep South during the 1930s and follows young Scout Finch, her brother Jem, and their father, Atticus Finch, a lawyer who is defending a black man, Tom Robinson, accused of raping a white woman. Through Scout’s eyes, the novel explores the deeply ingrained prejudices of society, while Atticus stands as a moral beacon, teaching his children to uphold justice and empathy. Harper Lee’s novel remains an essential read for its poignant examination of race, class, and the human spirit.",
      rating: 4.9,
      category: "classic literature",
    },
    {
      id: 26,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      description:
        "'The Catcher in the Rye' is a novel that captures the teenage experience with raw honesty and emotional depth. The story is narrated by Holden Caulfield, a disaffected and rebellious teenager who has just been expelled from his prep school. As he wanders through New York City, Holden grapples with feelings of alienation, loss, and confusion, while also expressing his disdain for the “phoniness” of the adult world. J.D. Salinger’s iconic novel is a coming-of-age story that resonates with readers for its portrayal of adolescence, its exploration of mental health, and its critique of societal expectations.",
      rating: 4.2,
      category: "classic literature",
    },
    {
      id: 27,
      title: "1984",
      author: "George Orwell",
      description:
        "'1984' is a dystopian novel that depicts a totalitarian society under the control of the Party and its leader, Big Brother. In this bleak vision of the future, individual thought is suppressed, and citizens are constantly monitored by the Thought Police. The novel’s protagonist, Winston Smith, works for the Party, but he secretly harbors thoughts of rebellion and yearns for freedom. As Winston’s resistance grows, he falls in love with Julia and begins to question the Party’s authority. Orwell’s novel is a chilling exploration of power, control, and the manipulation of truth, and its themes remain relevant in today’s world.",
      rating: 4.6,
      category: "dystopian",
    },
    {
      id: 28,
      title: "Brave New World",
      author: "Aldous Huxley",
      description:
        "In 'Brave New World,' Aldous Huxley presents a dystopian vision of the future, where society is governed by technological control, consumerism, and the pursuit of pleasure. In this world, humans are genetically engineered and conditioned from birth to fit into a rigid caste system, and individuality is suppressed in favor of conformity. The story follows Bernard Marx, who begins to question the shallow values of his society and seeks deeper meaning in life. Huxley’s novel is a powerful critique of modernity, exploring themes of technology, freedom, and the dehumanizing effects of an all-powerful state.",
      rating: 4.3,
      category: "dystopian",
    },
    {
      id: 29,
      title: "Moby-Dick",
      author: "Herman Melville",
      description:
        "'Moby-Dick' is a sprawling and complex novel that tells the tale of Captain Ahab’s obsessive quest to kill the great white whale, Moby-Dick. The story is narrated by Ishmael, a sailor who joins Ahab’s whaling ship, the Pequod, and becomes a witness to Ahab’s increasingly dangerous pursuit of vengeance. As Ahab’s obsession drives him to madness, the novel explores themes of fate, free will, and the limits of human knowledge. Melville’s novel is rich with symbolism, philosophical reflection, and detailed descriptions of life at sea, making it one of the greatest works of American literature.",
      rating: 4.5,
      category: "classic literature",
    },
    {
      id: 30,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description:
        "F. Scott Fitzgerald’s 'The Great Gatsby' is a tragic tale of love, wealth, and ambition set in the opulent world of 1920s America. The novel follows Nick Carraway, a young man from the Midwest who becomes entangled in the life of his mysterious and wealthy neighbor, Jay Gatsby. Gatsby is obsessed with rekindling a romance with Daisy Buchanan, who is now married to Tom. As Gatsby’s dream of recreating the past collides with reality, the novel paints a vivid portrait of the American Dream and its inherent illusions. Fitzgerald’s lyrical prose and vivid depiction of Jazz Age decadence make 'The Great Gatsby' one of the most celebrated novels of the 20th century.",
      rating: 4.4,
      category: "classic literature",
    },
    {
      id: 31,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      description:
        "'Pride and Prejudice' is a witty and romantic novel that explores the intricacies of social class, marriage, and morality in 19th-century England. The story centers around Elizabeth Bennet, a strong-willed young woman, and her complicated relationship with the wealthy and aloof Mr. Darcy. As the two navigate misunderstandings and societal expectations, they slowly come to recognize each other’s true worth. Austen’s novel is renowned for its sharp social commentary, endearing characters, and timeless examination of love and human nature.",
      rating: 4.8,
      category: "romance",
    },
    {
      id: 32,
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      description:
        "'Jane Eyre' is a novel that follows the life of its titular heroine, an orphaned girl who grows up in a cruel and oppressive environment. Despite the hardships she faces, Jane remains strong, principled, and independent. As she becomes a governess at Thornfield Hall, she falls in love with its enigmatic master, Mr. Rochester, only to discover that he harbors a dark secret. Charlotte Brontë’s novel is a powerful exploration of gender, class, and self-respect, and it remains a beloved work of Victorian literature for its strong female protagonist and gothic elements.",
      rating: 4.7,
      category: "romance",
    },
    {
      id: 33,
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      description:
        "In 'Fahrenheit 451,' Ray Bradbury imagines a dystopian future where books are outlawed and 'firemen' are tasked with burning them. The protagonist, Guy Montag, is a fireman who begins to question his role in society after meeting his curious and free-spirited neighbor, Clarisse. As Montag’s eyes are opened to the oppressive nature of the state, he embarks on a journey of self-discovery and rebellion. Bradbury’s novel is a chilling commentary on censorship, conformity, and the dangers of technology’s control over society. Its themes resonate as strongly today as they did when the book was first published.",
      rating: 4.6,
      category: "dystopian",
    },
    {
      id: 34,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      description:
        "J.R.R. Tolkien’s epic fantasy trilogy, 'The Lord of the Rings,' is a monumental tale of good versus evil, set in the richly detailed world of Middle-earth. The story follows a diverse group of heroes, including hobbits, elves, dwarves, and men, as they unite to destroy the One Ring, an artifact of immense power that the Dark Lord Sauron seeks to reclaim. At the heart of the story is Frodo Baggins, a humble hobbit who bears the burden of carrying the ring to Mount Doom. With its intricate world-building, complex characters, and themes of friendship, sacrifice, and hope, 'The Lord of the Rings' remains one of the most beloved works of fantasy literature.",
      rating: 4.9,
      category: "fantasy",
    },
    {
      id: 35,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      description:
        "'The Hobbit' is a charming and adventurous prequel to 'The Lord of the Rings.' It follows Bilbo Baggins, a reluctant hobbit, who is swept into an epic quest to help a group of dwarves reclaim their homeland from the fearsome dragon, Smaug. Along the way, Bilbo encounters trolls, goblins, and the creature Gollum, with whom he finds the One Ring. Tolkien’s enchanting storytelling, combined with the sense of wonder and discovery, makes 'The Hobbit' a beloved classic of fantasy literature. Its themes of bravery, friendship, and the hero's journey resonate across generations.",
      rating: 4.8,
      category: "fantasy",
    },
    {
      id: 36,
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      description:
        "'The Picture of Dorian Gray' tells the dark and tragic story of a man who makes a Faustian bargain to remain eternally youthful, while a portrait of him ages instead. As Dorian Gray descends into a life of hedonism and moral corruption, his outward beauty remains untouched, but the portrait becomes a grotesque reflection of his inner decay. Oscar Wilde’s novel is a powerful exploration of vanity, hedonism, and the consequences of living a life devoid of conscience. The novel's wit, gothic atmosphere, and philosophical depth make it one of Wilde’s most celebrated works.",
      rating: 4.5,
      category: "gothic fiction",
    },
    {
      id: 37,
      title: "The Chronicles of Narnia",
      author: "C.S. Lewis",
      description:
        "C.S. Lewis’s 'The Chronicles of Narnia' is a beloved seven-book series that transports readers to the magical land of Narnia, where animals talk, and children are destined to become kings and queens. The first book, 'The Lion, the Witch, and the Wardrobe,' introduces readers to the Pevensie siblings as they discover Narnia through a wardrobe in an old professor’s house. As they join forces with Aslan, the great lion, to defeat the evil White Witch, the series delves into themes of good and evil, redemption, and the power of faith and sacrifice. Lewis’s imaginative world-building and moral allegory make the series a timeless work of fantasy.",
      rating: 4.7,
      category: "fantasy",
    },
    {
      id: 38,
      title: "Slaughterhouse-Five",
      author: "Kurt Vonnegut",
      description:
        "'Slaughterhouse-Five' is a groundbreaking anti-war novel that blends science fiction, dark humor, and philosophical reflection. The story follows Billy Pilgrim, a soldier who becomes 'unstuck in time' after experiencing the horrific bombing of Dresden during World War II. As Billy moves back and forth through his life, from his time as a prisoner of war to his experiences with aliens on the planet Tralfamadore, Vonnegut explores the absurdity of war, the fragility of human life, and the concept of free will. The novel’s unique structure and anti-war message have cemented its place as a modern classic.",
      rating: 4.4,
      category: "science fiction",
    },
    {
      id: 39,
      title: "Frankenstein",
      author: "Mary Shelley",
      description:
        "'Frankenstein' is a gothic masterpiece that tells the haunting tale of Victor Frankenstein, a scientist who creates a living being by reanimating dead tissue. As Frankenstein’s creature grapples with its existence and the rejection it faces from society, the novel explores themes of ambition, isolation, and the consequences of playing god. Mary Shelley’s novel is not only a pioneering work of science fiction but also a profound examination of human nature and the responsibilities of creation. Its exploration of the monstrous and the moral questions it raises continue to resonate with readers today.",
      rating: 4.6,
      category: "gothic fiction",
    },
    {
      id: 40,
      title: "The Odyssey",
      author: "Homer",
      description:
        "Homer’s 'The Odyssey' is one of the greatest epic poems of ancient Greece, telling the story of Odysseus’s ten-year journey home after the fall of Troy. As he battles mythical creatures, navigates treacherous waters, and faces the wrath of the gods, Odysseus must also rely on his cunning and determination to reunite with his wife, Penelope, and reclaim his kingdom. The poem is a timeless exploration of heroism, loyalty, and perseverance, and its influence on Western literature and culture is immense. 'The Odyssey' remains a quintessential tale of adventure and the human struggle against fate.",
      rating: 4.8,
      category: "epic poetry",
    },
    {
      id: 41,
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      description:
        "'Crime and Punishment' is a psychological novel that delves into the mind of its protagonist, Raskolnikov, a former student who commits a brutal murder. As he wrestles with guilt and the justification of his crime, the novel explores themes of morality, redemption, and the human capacity for suffering. Dostoevsky’s profound insight into the workings of the human soul and his exploration of existential and ethical dilemmas have made 'Crime and Punishment' one of the most influential works of Russian literature. The novel’s intricate character development and philosophical depth continue to captivate readers today.",
      rating: 4.7,
      category: "fiction",
    },
    {
      id: 42,
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      description:
        "Leo Tolstoy’s 'Anna Karenina' is a sweeping tale of love, betrayal, and social norms in 19th-century Russia. The novel follows the doomed romance between Anna Karenina and Count Vronsky, as well as the parallel story of Konstantin Levin’s search for meaning and happiness. Tolstoy masterfully explores the complexities of human relationships, societal pressures, and the consequences of individual choices. 'Anna Karenina' is celebrated for its rich characterizations, emotional depth, and Tolstoy’s keen observations on life and morality. The novel’s tragic ending and philosophical insights make it one of the greatest works of world literature.",
      rating: 4.6,
      category: "classic literature",
    },
    {
      id: 43,
      title: "The Divine Comedy",
      author: "Dante Alighieri",
      description:
        "'The Divine Comedy' is an epic poem that takes readers on a journey through the realms of the afterlife, including Hell (Inferno), Purgatory (Purgatorio), and Heaven (Paradiso). Written in the early 14th century, Dante’s allegorical work is a reflection on the soul’s journey toward God and salvation. As the protagonist, Dante himself, travels through these realms, he is guided by the poet Virgil and later by his beloved Beatrice. The poem is rich with symbolism, theological reflection, and vivid depictions of the moral and ethical dilemmas faced by individuals. 'The Divine Comedy' is a cornerstone of world literature and a profound meditation on the human condition.",
      rating: 4.9,
      category: "epic poetry",
    },
    {
      id: 44,
      title: "The Iliad",
      author: "Homer",
      description:
        "'The Iliad' is an ancient Greek epic poem that recounts the events of the Trojan War, focusing on the hero Achilles and his conflict with King Agamemnon. The poem explores themes of honor, glory, and the brutality of war, while also delving into the personal struggles of its characters. As Achilles faces the consequences of his anger and pride, the story reveals the timeless human experiences of loss, grief, and the search for meaning in the face of mortality. 'The Iliad' remains one of the most important works of Western literature, offering a powerful exploration of heroism and fate.",
      rating: 4.8,
      category: "epic poetry",
    },
    {
      id: 45,
      title: "Les Misérables",
      author: "Victor Hugo",
      description:
        "Victor Hugo’s 'Les Misérables' is a monumental novel that tells the story of ex-convict Jean Valjean, his redemption, and his struggle to lead an honest life in post-revolutionary France. The novel also follows the stories of other characters, including the relentless Inspector Javert, the tragic Fantine, and the revolutionary students of Paris. 'Les Misérables' explores themes of justice, poverty, and the nature of human goodness. Hugo’s richly detailed prose and his portrayal of the social injustices of his time have made this novel a timeless classic that continues to move readers with its emotional depth and moral complexity.",
      rating: 4.9,
      category: "historical fiction",
    },
    {
      id: 46,
      title: "The Girl on the Train",
      author: "Paula Hawkins",
      description:
        "'The Girl on the Train' is a psychological thriller that follows the intertwining lives of three women as they navigate love, betrayal, and deception. Rachel, the protagonist, takes the same train every day, observing the lives of a seemingly perfect couple from a distance. However, when one of them goes missing, Rachel becomes entangled in the investigation, revealing dark secrets and her own struggles with addiction. Hawkins masterfully builds suspense through multiple perspectives, creating a gripping narrative that keeps readers guessing until the very end. This novel explores themes of obsession, memory, and the blurred lines between reality and illusion.",
      rating: 4.3,
      category: "thriller",
    },
    {
      id: 47,
      title: "A Man Called Ove",
      author: "Fredrik Backman",
      description:
        "'A Man Called Ove' is a heartwarming novel that tells the story of Ove, a curmudgeonly old man who has strict principles and a solitary life. When a lively family moves in next door, they inadvertently disrupt Ove’s routine and challenge his perceptions of life and community. Through humor and poignant moments, Backman explores themes of love, loss, and the importance of human connection. Ove's journey from a life of isolation to one filled with unexpected friendships is both touching and uplifting, making this novel a celebration of the impact that relationships can have on our lives.",
      rating: 4.5,
      category: "fiction",
    },
    {
      id: 48,
      title: "The Book Thief",
      author: "Markus Zusak",
      description:
        "'The Book Thief' is a beautifully crafted novel set in Nazi Germany, narrated by Death, who tells the story of Liesel Meminger, a young girl living with a foster family. As Liesel steals books and shares them with her neighbors and the Jewish man hiding in her basement, the narrative explores themes of friendship, the power of words, and the human capacity for both good and evil. Zusak's poetic prose and rich character development create a moving portrayal of love and resilience in the face of tragedy. 'The Book Thief' is a poignant reminder of the enduring power of stories to connect us and provide solace during dark times.",
      rating: 4.7,
      category: "historical fiction",
    },
    {
      id: 49,
      title: "The Nightingale",
      author: "Kristin Hannah",
      description:
        "'The Nightingale' is a compelling historical novel that tells the story of two sisters, Vianne and Isabelle, in occupied France during World War II. As the war forces them to confront unimaginable choices, each sister embarks on her own perilous journey of survival and resistance. Vianne struggles to keep her family safe, while Isabelle becomes involved in the French Resistance, risking her life to save others. Hannah's evocative writing and rich character development highlight the strength of women in the face of adversity, exploring themes of love, sacrifice, and the unbreakable bonds of family. This novel is a tribute to the courage of ordinary people in extraordinary times.",
      rating: 4.8,
      category: "historical fiction",
    },
    {
      id: 50,
      title: "The Alchemist",
      author: "Paulo Coelho",
      description:
        "'The Alchemist' is a philosophical novel that follows the journey of Santiago, a shepherd boy who dreams of finding a hidden treasure in the Egyptian pyramids. Along the way, Santiago meets various characters who impart wisdom and guidance, encouraging him to pursue his personal legend and listen to his heart. Coelho's enchanting narrative is filled with allegorical elements that explore themes of destiny, self-discovery, and the interconnectedness of all things. 'The Alchemist' inspires readers to reflect on their own dreams and the importance of pursuing them, making it a timeless tale of adventure and enlightenment.",
      rating: 4.6,
      category: "fiction",
    },
  ],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
