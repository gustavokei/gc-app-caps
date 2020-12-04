let charData = [
  {
    name: "Elesis Sieghart",
    jobs: ["Knight", "Spearman", "Sword Master", "Savior"],
    desc:
      "The first daughter of the Sieghart family, Elesis was born in a period of chaos and is the first female heiress of the family. She is a Kanavan Knight and daughter of a Kanavan Tracker who never returned after he was dispatched to find Kaze'aze. She is an exceptional swordsman who has been trained by her father since childhood. While she was on a journey to find her father, she heard the news about Kaze'aze in the Serdin Kingdom. Hiding her true identity, Elesis joins the Grand Chase in hopes of finding her father.",
    ctype: 0,
  },
  {
    name: "Lire Eryuell",
    jobs: ["Archer", "Crossbowman", "Arch Ranger", "Nova"],
    desc:
      "Elves from Eryuell Island are famous for their combat skills, but are naturally pacifistic and try to avoid becoming involved in human conflicts. However, in recent years, the war expanded across the entire continent and a series of bizarre incidents occurred. The elves decided to end their isolation and cooperate with humans. Working together, the elves and the humans discover that Kaze’aze is responsible for the havoc that is wrecking the continent.",
    ctype: 1,
  },
  {
    name: "Arme Glenstid",
    jobs: ["Magician", "Alchemist", "Warlock", "Battle Mage"],
    desc:
      "Arme is a cheerful mage from Serdin, the kingdom of magic. Born with tremendous innate magical potential, Arme was rejected by her parents who were afraid of her powers. Abandoned by them at the doorstep of the Violet Mage guild, the greatest guild of the Serdin kingdom, she was adopted by the Grand Mage and became a member of that guild at an early age. After learning about Kaze'aze’s powerful magic, Arme decided to join the Grand Chase, hoping to encounter the Queen of Darkness.",
    ctype: 2,
  },
  {
    name: "Lass Isolet",
    jobs: ["Thief", "Assassin", "Dark Assassin", "Striker"],
    desc:
      "A half breed, Lass was born of a father who came from the depths of the Underworld and a human mother. His hideous appearance as a child was a side effect of being a half breed, and he was abducted to serve as a freak show in a circus. After the circus catches fire for some mysterious reason, Lass took his chance for freedom and began wandering Aernas. Lass's mind and body were freed from Kaze'aze's possession after the Grand Chase vanquished Kaze'aze's evil from the world. Although he wasn't in control of his actions, Lass still felt guilty when he realized that his body was used as Kaze'aze's vessel to devastate the continent and kill countless innocents. The members of the Grand Chase understood that Lass was determined to right his wrongs, allowed him to join them on their journey to restore peace to the continent. With the resurrection of Kaze'aze at the Tower of Disappearance, Lass burns with the desire for vengeance.",
    ctype: 3,
  },
  {
    name: "Ryan Woodguard",
    jobs: ["Druid", "Sentinel", "Viken", "Vanquisher"],
    desc:
      "Ryan is a kind and cheerful forest elf who loves helping others. He'll do anything he can for Nature lovers, and will play obnoxious pranks on those that threaten Nature. Ever since he witnessed Kaze'aze destroy the Partusay's Sea, Ryan has been driven by his rage against Kaze'aze.",
    ctype: 4,
  },
  {
    name: "Ronan Erudon",
    jobs: ["Spell Knight", "Dragon Knight", "Aegis Knight", "Abyss Knight"],
    desc:
      "The captain of the Royal Guard of the Kanavan kingdom, Ronan is the firstborn of the noble and prestigious Erudon family, the legendary family of Spell Knights in Kanavan, and has shown amazing talent with both sword and magic since his childhood.",
    ctype: 5,
  },
  {
    name: "Amy Plie",
    jobs: ["Dancer", "Muse", "Siren", "Starlet"],
    desc:
      "Prior to joining the Grand Chase, Amy was the dancer and Oracle of Silver Land on the Xenia continent. She left the deities she once served after the great war erupted between the gods. Since the gods were being controlled by a darker power, she joined forces with the opposition, the Silver Knights. With her lively character and charm and exceptional dancing, Amy shot to stardom virtually overnight, raising the morale of the knights while helping them forget the fatigue of the battlefield, a source of repose for all. However, the Silver Knights were destroyed by the dark forces and those remaining were scattered, fighting a dangerous uphill battle in a bold effort to win the gods back from the darkness. When the Grand Chase freed Samsara from evil's grasps, Amy made the decision to fight evil with the Grand Chase.",
    ctype: 6,
  },
  {
    name: "Jin Kaien",
    jobs: ["Fighter", "Shisa", "Asura", "Rama"],
    desc:
      "Long ago on the Xenia continent, in a tiny village park where the children of Silver Land would play, a red-headed boy would lead the other children while playing as their general. He soon caught the eye of the Silver Knights and was admitted as a trainee. Strangely, Silver Land broke away from Xenia. As the Grand Chase pursued Kaze'aze and further into the homeland of the Silver Knights, they sought the courage of the Silver Knights with Jin.",
    ctype: 7,
  },
  {
    name: "Ercnard Sieghart",
    jobs: ["Gladiator", "Warlord", "Duelist", "Prime Knight"],
    desc:
      "Sieghart was a master Gladiator of Kanavan long, long ago. His name was legendary and his feats in battle have been recounted in history books. At one time, he alone staved off an assault of one hundred goblins, a story told to children of even the smallest villages. He rejected all titles and awards bestowed upon him by nobility and left the knighthood to seek his own goals. While on his journey, he came upon the ruins of an ancient city and disappeared. After a year had passed, he was given up for dead and the entire kingdom mourned the passing of the legendary hero.",
    ctype: 8,
  },
  {
    name: "Mari Ming Ornette",
    jobs: ["Rune Caster", "Gunslinger", "Polaris", "Geas"],
    desc:
      "Mari is the last known survivor of the ancient kingdom of Kounat, which was destroyed. Having lost her memories, Mari no longer remembers who she was or where she came from. Mari possesses rune casting skills and magical abilities previously unheard of in this area of the world. She is immensely curious about the unknown and fascinated by subjects new to her. ",
    ctype: 9,
  },
  {
    name: "Dio Burning Canyon",
    jobs: ["Stygian", "Drakar", "Leviathan", "Dusk Bringer"],
    desc:
      "Numerous Dimensional Portals appeared around the kingdom of Kounat, gateways leading to another dimension where belligerent demons lived. A faction of the demons desired to destroy Kounat and waged war against the kingdom. However, an opposing faction of demons denounced the wanton violence and waged war against those demons that would destroy Kounat. Dio was a member of this faction.",
    ctype: 10,
  },
  {
    name: "Zero Zephyrum",
    jobs: ["Wanderer", "Seeker", "Vanisher", "Advancer"],
    desc:
      "Fearful of the strength of the ancient demons, the remaining demon races banded together and formed a league to annihilate the ancient demons and began the fight with a surprise attack. The intense fighting continued for a long time with no end in sight. Amid the war, Duel, the master of the magical sword Eclipse, joined the war, taking it into a whole new direction. The ever reckless Duel lost all reason and as the war continued, his lust for destruction awakened within him, and after destroying ancient demons and lesser demons alike, disappeared. The great wizard Oz Pone Max Reinhardt barely survived and on the very spot where he was wounded, he created Grandark, a magical sword that would rival Eclipse. However, Oz was unable to control Grandark's powerful ego and began searching for someone who could wield it.",
    ctype: 11,
  },
  {
    name: "Ley von Crimson River",
    jobs: ["Summoner", "Harbinger", "Evoker", "Dark Matriarch"],
    desc:
      "Power and influence had always been shared by a few powerful families in the Demon World. The Hardliners who desired Kounat's destruction realized after their defeat that they needed to grow their power by seizing it from the Moderates who do not desire all-out destruction thus they began to quietly cultivate their power. One day, the strength of the Hardliners suddenly overwhelmed that of the Moderates and their chief went missing.",
    ctype: 12,
  },
  {
    name: "Rufus Wilde",
    jobs: ["Bounty Hunter", "Soul Stalker", "Executioner", "Arbiter"],
    desc:
      "After being abandoned and driven by his resentment towards his estranged father, Rufus Wilde set out to surpass his father's abilities and become one of the world's greatest Bounty Hunters. He spent many years as a lone wolf honing his skills and perfecting his deadly trade and after the end of a lengthy pursuit in Aernas, Rufus prepared to return to the Underworld until he suddenly discovered an enigmatic blue flame and decided to investigate.",
    ctype: 13,
  },
  {
    name: "Rin",
    jobs: ["Phoenix", "Awakened", "Chaotic", "Chosen"],
    desc:
      "Darkness overwhelms the world during a total eclipse. Can you understand why? This is the story of a goddess who sacrificed herself to save the world. Pure evil has always been a fact of existence. Once the Malevolent Horde was awakened, its black flame began to consume everything. The strength of the Malevolent Horde was so great even the gods were rendered helpless. With the destruction of existence at hand, only the sounds of suffering could be heard. Agnesia, the goddess of life and purity, was traveling eastward when she came to battle with the Malevolent Horde. Realizing that evil can never truly be expunged, she sacrificed herself by sealing the Malevolent Horde within her body.",
    ctype: 14,
  },
  {
    name: "Unknown",
    jobs: ["Disciple", "Ryujin"],
    desc:
      "Somewhere in Silver Land was the story of a young man named Jin who dedicated himself to the Silver Knights led by Victor and a martial arts expert named Asin Tairin. Jin learned martial arts with diligence and enterprise. But one day, Victor suddenly disappeared and the Silver Knights were attacked by hundreds of powerful monsters. Victor had betrayed his Silver Knights to the Ascendant God and now lead the army of Black Knights against them.",
    ctype: 15,
  },
  {
    name: "Lime Serenity",
    jobs: ["Holy Knight", "Saint"],
    desc:
      "There was a small island nation called the Great Roose not far from Bermesiah. The people there have always been worshipping the God of all beginnings and were ruled by the Pope for generations. From some time ago evil forces that have been shut inside gates around the whole continent began leaking out. Pope St. Constantino who sensed the invasion of the Elyos tribes declared war and sent out the Holy Knights to the continent. Lime, a member of the Holy Knights, comes over to the continent with her fellows and succeeds in closing a few gates. However, she gets separated from her comrades during a battle and gets lost. She comes across the Grand Chase by chance and gets saved.",
    ctype: 16,
  },
  {
    name: "Edel Frost",
    jobs: ["Captain", "Major"],
    desc:
      "Edel is the heiress of the Frost family, a noble family in Serdin that still keeps the tradition of swordsmen warriors in a realm dominated by magic. During the wars when magic became Serdin's main weapon, the Frost family has lost much of its prestige.",
    ctype: 17,
  },
  {
    name: "Veigas Terre",
    jobs: ["Magi"],
    desc:
      "Despite being too old by human standards, among Asmodians in Elyos, Veigas is still considered young. However, he is also considered a prodigy because as far as everyone knew, the boy was specially chosen by the supreme deity, the Creator, to serve as his herald to destroy other dimensions.",
    ctype: 18,
  },
  {
    name: "Uno",
    jobs: ["Bloodless"],
    desc:
      "Over hundreds of years ago, while traveling through Aernas, Sieghart was found in a critical condition in one of the ruins of Kounat where the Highlanders secretly trained their forces. The Highlanders took him in and he acquired the powers of the Highlanders. However, Sieghart erroneously left traces of the location of the ruins that Ashtaroth, who had been seeking that place desperately, found. Except for Sieghart who was not there, the Highlanders were annihilated. Having achieved his goal, Ashtaroth left the ruins of the Highlanders with a powerful enchantment.",
    ctype: 19,
  },
];

export default charData;
