import styles from './Rules.module.css'

const SECTIONS = [
  {
    id: '1',
    title: 'Immediate Rules',
    rules: [
      { id: '1.1', text: 'The server is 18+. By being here, you agree that you are at least 18 years or older.' },
      { id: '1.1 A', text: 'If you are suspected of being under the age of 18, you must complete some form of age verification. If you fail or refuse to complete this verification process, you will be removed from the community. (No exceptions)' },
      { id: '1.2', text: 'Roleplaying as a minor, a pregnant, or suicidal character is not allowed.' },
      { id: '1.3', text: 'The server is English. Speaking other languages is only permitted in private places.' },
      { id: '1.4', text: 'You are allowed to use voice changers that fit the aesthetic.' },
      { id: '1.5', text: 'You are not allowed to play music or sounds through your microphone.' },
    ],
  },
  {
    id: '2',
    title: 'General Rule of Approach',
    rules: [
      { id: '2.1', text: 'DO NOT RESPAWN, unless you want to lose everything in your pockets. No recomps will be made for anyone who doesn\'t follow the instructions.' },
      { id: '2.2', text: 'We are a semi-serious roleplay server with a slight leaning towards serious.' },
      { id: '2.3', text: 'In game clothing and posters must fit the aesthetic of 1904. Staff will tell you to change your outfit if it\'s deemed unfit. Failure to change will result in a warning.' },
      { id: '2.4', text: 'Situations are reviewed as a case by case analysis. Not every situation is black and white and context must be considered in order to make the best possible ruling for each situation.' },
      { id: '2.6', text: 'Roleplay over rule-play is of the most importance and will often factor into certain rulings. Ticket wars/warriors and petty reports will not be catered to.' },
      { id: '2.7', text: 'If staff believes that you are unfit for the community, they reserve the right to remove you from it if deemed necessary.' },
    ],
  },
  {
    id: '3',
    title: 'Discord Rules',
    rules: [
      { id: '3.1', text: 'Please abide by Discord TOS — discord.com/terms' },
      { id: '3.2', text: 'Any form of discrimination or use of slurs targeting an individual\'s race, ethnicity, sexual orientation, or disability is strictly prohibited. Any harassment, including sexual harassment, sexism, or hate speech, will not be tolerated under any circumstances.' },
      { id: '3.3', text: 'Tagging staff is allowed within reason.' },
      { id: '3.4', text: 'No spamming of tags, gifs, or comments.' },
      { id: '3.5', text: 'All in-county feuds, pvp montages, and problems that require admin help, are strictly forbidden to be sent in public channels.' },
    ],
  },
  {
    id: '4',
    title: 'Ticket System Rules',
    rules: [
      { id: '4.1', text: 'When reporting another player, your clip needs to be a minimum of two minutes long, and must include the audit from both sides.' },
      { id: '4.2', text: 'If you disagree with the ruling of a ticket, you are free to request it to be escalated to a higher ranking staff member.' },
      { id: '4.3', text: 'Tickets are to be kept confidential to the parties involved. No sharing of information in character or in public channels.' },
      { id: '4.5', text: 'Before opening a ticket for a general question, take a look in the FAQ to see if the question has already been answered.' },
    ],
  },
  {
    id: '5',
    title: 'In Character Server Rules',
    rules: [
      {
        id: '5.1',
        text: 'Metagaming. Using outside resources or knowledge that your character would not otherwise have is not allowed.',
        notes: [
          'Example — Utilizing a discord call and giving callouts during combat RP.',
          'Example — Watching a streamer to see where they are to show up and rob them.',
        ],
      },
      {
        id: '5.2',
        text: 'Exploiting. Using bugs, glitches, or unintended game mechanics to gain an unfair advantage is not allowed.',
        notes: [
          'Example — Purposely duplicating items or money.',
          'Example — Rag-dolling to avoid certain animations or hide your body.',
          'The following exploits can result in permanent bans on the first offense: Intentional duplication of items or cash, game modifying files (mod menus, no fog, no vegetation, instant scope), speed boosting, speed shooting, combat logging.',
        ],
      },
      {
        id: '5.3',
        text: 'Power gaming. When a player forces actions on others or does unrealistic things that ignore game limits or other player\'s choices is not allowed.',
        notes: [
          'Example — Handcuffing a player that isn\'t surrendering or incapacitated. (Use a lasso instead)',
          'Example — Using a command to flee your wagon or horse because you think it\'s in danger of being robbed.',
        ],
      },
      { id: '5.4', text: 'Killing random locals to create bodies for jobs such as Undertaking is considered powergaming. You can however use heists and camp missions as bodies for Undertaking.' },
      {
        id: '5.5',
        text: 'Fail RP. When a player acts unrealistically or breaks character in a way that does not align with roleplay is not allowed.',
        notes: [
          'Example — Talking about things in your real life that technically do not exist within the server.',
          'Example — Killing your friends for fun and reviving each other just to do it again.',
        ],
      },
      { id: '5.5 A', text: 'Call of duty trash talk during gunfights is not allowed. This applies to whether you just killed someone, or were just killed.' },
      { id: '5.5 B', text: 'Talking while dead for any reason other than to RP your injuries, or to inform someone of where your body is, will result in a fail RP warning. No casual conversations, no callouts, no telling someone who killed you, etc.' },
      { id: '5.5 C', text: 'Talking with no head is not allowed. If someone is struggling to find your body, start gurgling or something.' },
      {
        id: '5.6',
        text: 'Failure to initiate. When a player engages in combat RP without properly roleplaying or warning/threatening the other party is not allowed. The other party must be given a reasonable amount of time to react (minimum 2 seconds). Warnings/threats must hint to some form of violence.',
        notes: [
          'Example — Shooting someone during a heated exchange without warning/threatening first.',
          'Example — Tying someone up before any sort of combat RP has started and not warning/threatening first.',
        ],
      },
      {
        id: '5.7',
        text: 'Combat Logging or Mid-Scene Logging. When you intentionally disconnect during combat or while actively participating in a scene is not allowed.',
        notes: [
          'Example — Being killed during a scene and disconnecting to prevent the consequence of water dumping/being arrested.',
          'Example — Disconnecting while being processed in a jail cell.',
        ],
      },
      {
        id: '5.8',
        text: 'RDM/VDM. Random deathmatch and vehicle deathmatch are not allowed.',
        notes: [
          'Example — Shooting someone in the head from a distance with zero interaction.',
          'Example — Purposely running over random people with a wagon.',
        ],
      },
      {
        id: '5.9',
        text: 'No Value of Life. If you are outnumbered (3 people for every 1 person — 3v1, 6v2, 9v3), you must comply with orders. These orders typically regard being taken hostage, being robbed, or being told to put your hands up. These orders do not apply for things like calling your horse, taking money out of your bank, etc.',
      },
      {
        id: '5.10',
        text: 'New Life Rule. If you respawn, you cannot act on anything that happened in the previous 30 minutes. Your character essentially forgets that time frame.',
        notes: [
          'Do not respawn while a scene is taking place.',
          'Blowing someone\'s head off does not have any effect on what they can or can\'t remember.',
          'You cannot remember anything that happened from when you are unconscious to when you get revived.',
          'When revived, you are no longer a part of that scene. You must leave the area until the scene clears.',
        ],
      },
    ],
  },
  {
    id: '6',
    title: 'Ban Policy',
    rules: [
      { id: '6.1', text: 'Our ban policy is on a case by case analysis. Players who are here to do the right thing, but have hiccups along the way will be given more leniency.' },
      { id: '6.2', text: 'Temp bans will be utilized in an attempt to correct behavior, but if you manage to get a whole sheet of bans and warnings, you will be removed from the community.' },
      { id: '6.3', text: 'If you got banned from the Discord server, have a friend apply for you.' },
    ],
  },
  {
    id: '7',
    title: 'Toxicity',
    rules: [
      { id: '7.1', text: 'Toxicity is reviewed on a case to case basis. Keep in mind that it is an 18+ server so 18+ language is to be expected.' },
      {
        id: '7.2',
        text: 'Screaming and cursing at people is typically done with out of character emotions. Remember, you are playing a character, don\'t allow your emotions to play into your roleplay.',
        notes: ['Cursing at people is allowed as long as it\'s clearly within character.'],
      },
    ],
  },
  {
    id: '8',
    title: 'Torture / Erotica Roleplay',
    rules: [
      { id: '8.1', text: 'Use common sense here. Do not do these things in public.' },
      {
        id: '8.2',
        text: 'Torture and Erotic RP without consent from the receiving party is a ban worth offense.',
        notes: ['Consent can be gained through /OOC commands.'],
      },
    ],
  },
  {
    id: '9',
    title: 'Cooldowns',
    rules: [
      { id: '9.1', text: '1 hour in between PVP encounters with the same players/groups.' },
      { id: '9.2', text: '1 hour in between successful or attempted government robberies/heists. This applies to everyone involved, not just who starts the robbery.' },
      {
        id: '9.3',
        text: '30 minutes in between player robberies. This applies for anyone who was involved. Failure to do this is considered chain robbing.',
        notes: [
          'If there are multiple victims involved in the scene, you can rob all of them.',
          'You have to wait 24 hours before robbing the same person again.',
        ],
      },
      { id: '9.4', text: 'You can only perform one train robbery every 24 hours.' },
      {
        id: '9.5',
        text: 'You must wait 24 hours before performing the same heist again.',
        notes: [
          'Example — If you rob the Saint Denis bank, you\'ll have to wait 24 hours before you can rob it again.',
          'Example — If you rob the Rhodes General Store, you can rob the Valentine General Store after 1 hour.',
        ],
      },
      {
        id: '9.6',
        text: 'You cannot perform any crime within the storm window (30 minutes before server restart).',
        notes: ['If a scene has started before the restart warning pops up, you may continue the scene, but try to wrap it up before server restart.'],
      },
    ],
  },
  {
    id: '10',
    title: 'Rules of Engagement',
    rules: [
      { id: '10.1', text: 'Civilians/Criminals cannot roam or initiate combat in groups bigger than 8.' },
      { id: '10.2', text: 'If a marksman is on scene, they must be announced to the other party. If this isn\'t done properly and the un-announced marksman kills anyone, they will be warned for failure to initiate.' },
      { id: '10.3', text: 'Running up to people that you have a conflict with screaming "hands, hands, hands" and having an instant gunfight is not acceptable. This is also classed as failure to initiate.' },
      {
        id: '10.4',
        text: 'Masks are not to be worn in town unless actively committing a crime or intending to. If a lawman is telling you to remove a mask, you must do so. Shootouts over refusal to remove a mask is not realistic — either leave town or remove it.',
        notes: ['If you have a legitimate reason to keep a mask on (e.g. a bounty), this does not apply, though it is expected that you roleplay your bounty.'],
      },
      { id: '10.5', text: 'Shitter Circles are not allowed. You cannot run in circles to avoid a headshot if you sense that combat RP is about to begin. Stand there and have a conversation.' },
      {
        id: '10.6',
        text: 'You cannot initiate combat RP when someone is in a menu.',
        notes: [
          'Players who abuse menus to try to avoid combat will be in violation of powergaming rules.',
          'The grave robbing animation is included in this rule.',
        ],
      },
      {
        id: '10.7',
        text: 'Train hopping without conductor approval or payment counts as initiation toward the conductor and/or security, but both parties must still give a clear warning before any hostile action is taken.',
        notes: ['Dialogue creates the opportunity for people to explain that they might want to buy a ticket before getting immediately shot.'],
      },
    ],
  },
  {
    id: '11',
    title: 'Player Robberies',
    rules: [
      {
        id: '11.1',
        text: 'All robberies must begin with meaningful roleplay before any demands are made. A short, natural interaction is required to build context. Simple greetings or immediately telling someone to put their hands up is not valid initiation.',
      },
      {
        id: '11.1 A',
        text: 'Robberies must follow one of the approved methods:',
        notes: [
          'Ambush — Must have a clear and believable setup (e.g. hiding along roads, fake checkpoints). Randomly stopping players without setup is LQRP. You may rob up to 2 groups before a 30-minute cooldown applies.',
          'Observation — You must observe behavior that suggests the player has valuables before robbing. You cannot rob the first person you see without reason. You may rob up to 2 groups before cooldown; the second must be in a different area.',
        ],
      },
      {
        id: '11.1 B',
        text: 'The following may result in Low Quality Roleplay (LQRP) warnings:',
        notes: [
          'Random robberies with no reasoning or buildup.',
          'No proper setup (for ambushes).',
          'Ignoring the observation requirement.',
          'Treating robberies as instant actions instead of roleplay scenarios.',
        ],
      },
      { id: '11.1 C', text: 'If you are actively in conflict with another group, you are allowed to rob each other strictly based on the fact that you are currently in conflict.' },
      { id: '11.1 D', text: 'This does not apply to horses and wagons. If you leave either of these unattended, they may be robbed without a conversation being made beforehand.' },
      { id: '11.2', text: 'Once you enter someone\'s pockets, that counts as a player robbery being initiated.' },
      { id: '11.3', text: 'When robbing another player you are able to take 5 full stacks of items in their inventory and whatever amount of cash they have.' },
      {
        id: '11.4',
        text: 'You cannot rob and kill a player. It\'s one or the other.',
        notes: [
          'You cannot kill someone after finding nothing of value in their inventory.',
          'If the player is freed from your lasso and attacks first or refuses to leave you alone, you are free to kill them.',
          'Horses and wagons are exempt — if you are killed, your horse and wagon can be fully robbed.',
        ],
      },
      { id: '11.5', text: 'You are allowed to scam other players. The maximum scam limit is $20,000.' },
      { id: '11.5 A', text: 'Business owners and employees may not use their storefront, business name, or business assets to scam customers under any circumstance.' },
      { id: '11.6', text: 'You cannot scam players of horses that have custom colors.' },
      { id: '11.7', text: 'You cannot rob a train inventory unless the conductor is alive.' },
      { id: '11.7 A', text: 'When robbing a train inventory, you are able to take up to 400 items, the conductor\'s cash and 5 stacks from their pockets.' },
    ],
  },
  {
    id: '12',
    title: 'Gang / Family Rules',
    rules: [
      {
        id: '12.1',
        text: 'Gangs/Families currently have a limit of 16 players.',
        notes: ['Roaming/Combat numbers still apply with a max of 8 (unless initiated on).'],
      },
      { id: '12.2', text: 'Gangs/Families must have a color/aesthetic that fits both server lore and realism.' },
      { id: '12.3', text: 'Gangs/Families are strongly encouraged to beef with other gangs rather than causing issues with people who are more serious about civilian RP/Grinding.' },
      { id: '12.4', text: 'Gangs/Families can be disbanded if staff deems them not fit or not playing their role properly.' },
      { id: '12.4 A', text: 'Gangs/Families who are excessively bullying people who are clearly not able to defend themselves/not interested in this type of beef will be made to stop when staff deems necessary.' },
      { id: '12.4 B', text: 'Gangs/Families will be spoken to by staff if issues start to arise to give them a fair chance to correct their behavior before removal from the community has to happen.' },
    ],
  },
  {
    id: '13',
    title: 'Camp / Hideout',
    rules: [
      {
        id: '13.1',
        text: 'Every member of the camp/hideout is allowed to defend the camp/hideout.',
        notes: [
          'If a member of the camp owner\'s gang is not added to your hideout or camp, they can still help you defend.',
          'Example — If Smith Wessons (a member of the Wesson Family) OWNS a camp, the rest of the Wesson Family is allowed to help defend. But if Angus Quickfinger (a member of the Quickfinger gang) is in Smith\'s camp, the Quickfingers cannot help defend.',
        ],
      },
      { id: '13.2', text: 'Hideouts cannot be placed behind locked doors, unless you are a distiller. Those hideouts can only be inside of the distillery you own/work at.' },
      { id: '13.3', text: 'Hideouts cannot be placed in towns. The only exception is if it\'s placed in Saint Denis or if it\'s a distillery hideout.' },
      { id: '13.4', text: 'You must remain inside the camp fog until you are officially initiated by the defending group. Initiation means the defenders actively engage you (shoot at or aim weapons at you). Once initiated on, you may move beyond the fog as needed.' },
    ],
  },
  {
    id: '14',
    title: 'Water Dumping / Story Ending',
    rules: [
      {
        id: '14.1',
        text: 'In order to water dump, you need 4 initiations TOTAL with the player. 2 of these interactions need to be story building and 2 need to be clearly negative. Once the 4th interaction occurs, you can water dump the player right then and there.',
        notes: ['Water dumping is only for legitimate drawn out stories, not for random shootouts that happen with random people.'],
      },
      { id: '14.2', text: 'Once this happens, both parties go their separate ways and do not talk about/continue the feud.' },
      { id: '14.3', text: 'Staff strongly encourages water dump tickets to be made beforehand to get staff approval.' },
      { id: '14.3 A', text: 'This ticket must include clips, and an explanation of the full context and feud. If you do not do this and the water dump was invalid, you will receive a warning and the dumped player will be reimbursed their lost items.' },
      { id: '14.4', text: 'Gang feuds are strongly encouraged to end in some sort of resolution or war ticket rather than a water dump. This keeps the end of the story more clear cut and gives you a chance at bragging rights/wagers.' },
    ],
  },
  {
    id: '15',
    title: 'Baiting',
    rules: [
      { id: '15.1', text: 'Using alert systems for anything other than that profession\'s services is not allowed.' },
      {
        id: '15.2',
        text: 'Organizing or participating in scenarios only meant to provoke, harass, or build conflict without logical RP build-up is considered baiting.',
        notes: ['Peaceful protest or disagreement is allowed if it remains constructive and does not aim to force escalation.'],
      },
      { id: '15.3', text: 'Using insults, OOC frustrations, or unrealistic behaviour to force reactions like arrests or combat is not allowed.' },
    ],
  },
  {
    id: '16',
    title: 'Police and Doctor Interaction',
    rules: [
      {
        id: '16.1',
        text: 'You cannot water dump police officers or doctors that are on duty.',
        notes: ['This doesn\'t mean if you manage to water dump yourself as a lawman or doctor, you\'d be automatically pulled out of the water by staff.'],
      },
      { id: '16.2', text: 'Police and doctors cannot lie about charges, witnessed events or crimes.' },
      { id: '16.3', text: 'Police and doctors cannot be kidnapped while on duty.' },
      { id: '16.4', text: 'If you are arrested and in jail, you cannot use your weapons. You are however allowed to fist fight the police.' },
      {
        id: '16.5',
        text: 'Police and doctors are not allowed to commit crimes.',
        notes: ['If a player is found to be corrupt, the severity will determine the punishment: character killing, removal from job, and/or removal from the community.'],
      },
      { id: '16.6', text: 'You cannot assist police when they are performing their duties. This is considered vigilantism. Watch from a distance.' },
    ],
  },
  {
    id: '17',
    title: 'Businesses',
    rules: [
      { id: '17.1', text: 'Staff reserves the right to revoke businesses for any reason.' },
      { id: '17.2', text: 'Any resignation or transfer of business ownership must be discussed and approved by staff.' },
      { id: '17.3', text: 'Storefronts are not to display items that have no relation to that business or business owner.' },
      { id: '17.4', text: 'Robbing the business you work for is strictly prohibited. Doing so will result in the items being returned and a potential ban.' },
      { id: '17.5', text: 'Max number of employees is 20.' },
      { id: '17.6', text: 'Gangs/Families can own a maximum of two businesses.' },
      { id: '17.7', text: 'Businesses cannot strictly supply only to friends and family.' },
      { id: '17.8', text: 'Businesses are strictly prohibited from scamming, defrauding, or intentionally misleading customers.' },
      { id: '17.9', text: 'Businesses cannot ask for, accept, or allow payment in exchange for a job, preferential hiring, or faster placement.' },
      { id: '17.10', text: 'Businesses cannot use their discord to sell illegal items via the ticket system or any other means. All illegal transactions should happen 100% in character, both negotiation and sale.' },
    ],
  },
  {
    id: '18',
    title: 'Government Robberies / Heists',
    rules: [
      { id: '18.1', text: 'You cannot use locals as a hostage. Once the robbery is completed, you must let the hostage go.' },
      { id: '18.2', text: 'Once some form of conversation is had between the criminals and responding officer(s), combat RP is in the hands of the criminals. Without proper reason, police should not attack first. Criminals reserve the right to attack assuming a fair warning has been issued, or a chase has begun.' },
      { id: '18.3', text: 'Criminals have to announce marksmen, but do not have to specify an amount.' },
      { id: '18.3 A', text: 'Marksmen cannot fire until some sort of chase has begun or until criminals/police have engaged in some form of combat.' },
      { id: '18.3 B', text: 'Marksmen do not have to reveal themselves under any circumstance, even if a chase begins.' },
      {
        id: '18.4',
        text: 'Each robbery has a limit on how many criminals/police can participate:',
        notes: [
          'General Store — 3 Criminals / 5 Lawmen',
          'Heists (Banks, Oil Rig, Forts, etc.) — 5 Criminals / 8 Lawmen',
          'Alerts (Grave Robberies/Contraband, etc.) — 8 Criminals / 10 Lawmen',
          'Backups/Downs — 8 Criminals / 10 Lawmen',
          'Roaming/Patrol Limit — 8 Criminals / 10 Lawmen',
        ],
      },
    ],
  },
  {
    id: '19',
    title: 'Green Zones',
    rules: [
      {
        id: '19.1',
        text: 'Green Zones are areas on the map where you cannot engage in any sort of combat RP. This includes horses and wagons.',
      },
      {
        id: '19.2',
        text: 'Green Zones include, but are not limited to:',
        notes: [
          'Lemoyne Mines',
          'Annesburg Mines',
          'Tumbleweed Mines',
          'Horse Training Stadium outside of Emerald Ranch',
          'Monto\'s Rest',
        ],
      },
    ],
  },
  {
    id: '20',
    title: 'Poster Board',
    rules: [
      { id: '20.1', text: 'Posters posted on the pinboard must fit the server\'s aesthetic. Posters containing bright colors are subject for removal.' },
      { id: '20.2', text: 'Pinboards are not to be used to communicate with other players or fuel character issues.' },
      { id: '20.3', text: 'The same poster can only be posted on 1 pinboard in each town per hour.' },
    ],
  },
  {
    id: '21',
    title: 'In Game Player Appearance',
    rules: [
      {
        id: '21.1',
        text: 'You cannot wear anything that doesn\'t make sense for the time the server is set in (1900\'s wild west) or the aesthetic of the server.',
        notes: ['This includes but is not limited to: Prison jumpsuits for anything that\'s not prison RP, neon/bright unrealistic colored hair and outfits, armor that is any color besides a metal color (silver, bronze, brass, gold and iron).'],
      },
      { id: '21.2', text: 'Eyewraps are not allowed unless you are genuinely RP\'ing as a character who is blind or has a visual condition, within approved supernatural communities. There must be story to this, it must be consistent, and your actions should convey this. Claiming to be blind and functioning normally is considered FailRP.' },
    ],
  },
  {
    id: '22',
    title: 'Character Identification Rules',
    rules: [
      {
        id: '22.1',
        text: 'Voice alone is not valid identification and may not be used as a primary proof of identity. Identification must be based on clear, confirmable visual evidence.',
        notes: ['This includes: clothing, masks, gun wraps, horse, tattoos, scars, accessories and distinct physical features.'],
      },
      {
        id: '22.2',
        text: 'You cannot arrest, issue warrants, place bounties, retaliate, or take enforcement action based solely on recognizing someone\'s voice.',
        notes: ['Voice ID automatically becomes invalid if any of the following apply: person is wearing a mask or bandana, there is distance between individuals, the situation is chaotic (gunfights, robberies, crowds, yelling, etc.), or if the voice is altered, strained, or intentionally changed.'],
      },
      { id: '22.3', text: 'Prior in-character history does not make voice recognition 100% proof of identity. At most, it may create reasonable suspicion.' },
      { id: '22.4', text: 'Using out-of-character knowledge to recognize a player\'s voice is considered metagaming and is strictly prohibited.' },
    ],
  },
]

export default function Rules() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.pageHeader}>
          <h1 className={styles.title}>Server Rules</h1>
          <p className={styles.intro}>
            Rules are reviewed on a case by case basis. When in doubt, ask a staff member.
          </p>
        </div>

        {SECTIONS.map((section) => (
          <section key={section.id} className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>{section.id}</span>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
            </div>
            <div className={styles.ruleList}>
              {section.rules.map((rule) => (
                <div key={rule.id} className={styles.rule}>
                  <span className={styles.ruleId}>{rule.id}</span>
                  <div className={styles.ruleContent}>
                    <p className={styles.ruleText}>{rule.text}</p>
                    {rule.notes && rule.notes.length > 0 && (
                      <ul className={styles.notes}>
                        {rule.notes.map((note, i) => (
                          <li key={i} className={styles.note}>{note}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
