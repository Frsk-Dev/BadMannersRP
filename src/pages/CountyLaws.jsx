import styles from './CountyLaws.module.css'

const CRIME_SECTIONS = [
  {
    id: 'minor',
    label: 'Minor Crimes',
    crimes: [
      {
        name: 'Speeding',
        fine: '$100',
        sentence: '5 Months',
        description: 'Speeding through local towns on horses or wagons is given a verbal warning. A fine could be issued, and if the defendant continues to repeat the offense, it could end in prison time.',
        confiscation: null,
      },
      {
        name: 'Grave Robbing',
        fine: '$100',
        sentence: '5 Months / Local Time',
        description: 'The desecration of graveyards by digging up and opening graves to steal valuable goods such as cash, jewelry, bodies and other items of the deceased.',
        confiscation: 'Removal of any contraband.',
      },
      {
        name: 'Loitering',
        fine: '$150',
        sentence: '5 Months',
        description: 'To remain in an area for no obvious reason. Disobeying when lawfully asked to vacate the area.',
        confiscation: null,
      },
      {
        name: 'Animal Cruelty',
        fine: '$175',
        sentence: '10 Months',
        description: 'Physical violence towards any animals in an inhumane manner.',
        confiscation: null,
      },
      {
        name: 'Disorderly Conduct',
        fine: '$250',
        sentence: '10 Months',
        description: 'Creating an audible or visual disturbance that otherwise hinders, obstructs, or disturbs the daily activities of two or more nearby citizens. To include displays of indecency, repeated harassment, being loud or unruly, or panhandling.',
        confiscation: null,
      },
      {
        name: 'Trespassing',
        fine: '$250',
        sentence: '10 Months',
        description: 'Crossing another\'s property without formal consent or approval from the land owner. If the owner chooses to file a report, you can and will be fined and possibly jailed, depending on your cooperation with Lawmen. If you trespass on someone\'s land, be aware that the land owner has every right to defend their land in a righteous, lawful way.',
        confiscation: null,
      },
      {
        name: 'Charlatanism',
        fine: '$250',
        sentence: '10 Months',
        description: 'The practice of someone who pretends to have skills, knowledge, or qualifications they lack, using deceit and trickery to gain money, power, fame, or other advantages — often seen in fake medical cures or fraudulent schemes.',
        confiscation: null,
      },
      {
        name: 'Criminal Threats',
        fine: '$250',
        sentence: '10 Months',
        description: 'Using verbal threats to instill fear into another. Example: "I will kill you." Not: "Watch yourself."',
        confiscation: null,
      },
      {
        name: 'Crimes Against Locals',
        fine: '$250',
        sentence: '10 Months',
        description: 'This charge is for RP reasoning only. Lawmen will not just stand by and do nothing if you murder or assault locals in front of them.',
        confiscation: null,
      },
      {
        name: 'Conspiracy to Commit a Crime',
        fine: '$250',
        sentence: '10 Months',
        description: 'Conspiring with one or more individuals to commit an illegal act, regardless of whether the crime is executed. This charge applies irrespective of the actual commission of the crime, as long as there is evident intent and steps taken toward that unlawful objective.',
        confiscation: null,
      },
    ],
  },
  {
    id: 'moderate',
    label: 'Moderate Crimes',
    crimes: [
      {
        name: 'Evading Justice',
        fine: '$300',
        sentence: '10 Months',
        description: 'Fleeing, escaping, or avoiding lawful arrest by any means of flight, concealment, or misdirection.',
        confiscation: null,
      },
      {
        name: 'Brandishing a Weapon',
        fine: '$250',
        sentence: '10 Months',
        description: 'Carrying a weapon or firearm in an openly or readily accessible fashion within town limits. Handguns shall remain holstered, and long arms shall be slung over the shoulder whenever traveling through or remaining within any town or city. Lawmen are exempt while performing official duties.',
        confiscation: null,
      },
      {
        name: 'Unlawful Discharge of a Weapon',
        fine: '$350',
        sentence: '10 Months',
        description: 'The unlawful discharge of a weapon within town limits. In some cases of self-defence, you may still be charged. If a local attacks or shoots at you, try to subdue them without lethal force if possible.',
        confiscation: 'Removal of weapon(s) used.',
      },
      {
        name: 'Failure to Comply with a Lawful Order',
        fine: '$250',
        sentence: '10 Months',
        description: 'Failing to surrender or identify oneself to an officer\'s detainment or arrest upon order and further fighting or resisting such lawful action. This law must be enforced with a valid legal reason. Lawmen cannot issue a lawful order just because someone is annoying them.',
        confiscation: null,
      },
      {
        name: 'Concealment of Identity',
        fine: '$300',
        sentence: '10 Months',
        description: 'Using a mask or bandana to conceal your face within a town.',
        confiscation: 'Mask / Bandana used.',
      },
      {
        name: 'Assault',
        fine: '$350',
        sentence: '10 Months',
        description: 'To inflict bodily harm on a person(s). This includes running a person over with a horse or wagon, with or without intent to harm. This also includes torture.',
        confiscation: null,
      },
      {
        name: 'Obstruction of a Court Officer',
        fine: '$400',
        sentence: '10 Months',
        description: 'Impeding, interrupting, or obstructing any officer of the court, Lawman, or Bounty Hunter when in the course of executing their official duties or effecting an arrest.',
        confiscation: null,
      },
      {
        name: 'Illegal Dueling',
        fine: '$200',
        sentence: '15 Months',
        description: 'Duelling is illegal within town limits. An officer must oversee a duel outside of town limits for it to be official, ensuring a Gentleman\'s Agreement is made between the two participants and no one is forced to duel.',
        confiscation: 'Removal of weapon used.',
      },
      {
        name: 'Bribery / Corruption of a Court Officer',
        fine: '$500',
        sentence: '15 Months',
        description: 'Attempting to bribe, threaten, or coerce an officer through any means to influence decisions regarding an arrest, fine, or any official action being taken by an individual with powers of arrest.',
        confiscation: null,
      },
      {
        name: 'Assisting a Fugitive',
        fine: '$350',
        sentence: '15 Months',
        description: 'Knowingly and willingly assisting another, who is a known fugitive from justice, in evading authorities attempting to effect an arrest.',
        confiscation: null,
      },
    ],
  },
  {
    id: 'major',
    label: 'Major Crimes',
    crimes: [
      {
        name: 'Impersonating a Court Officer',
        fine: '$500',
        sentence: '20 Months',
        description: 'Falsely introducing oneself as any person with the power of arrest or official status, implying that oneself is a court officer, lawman, bounty hunter, doctor, or any credentialed individual otherwise employed by the courts or U.S Government.',
        confiscation: null,
      },
      {
        name: 'Kidnapping',
        fine: '$250',
        sentence: '20 Months',
        description: 'The intention of taking a person(s) without their consent and removing them from safety.',
        confiscation: null,
      },
      {
        name: 'Arson',
        fine: '$500',
        sentence: '20 Months',
        description: 'Setting objects or property ablaze with fire, OR tampering with explosives within town limits.',
        confiscation: null,
      },
      {
        name: 'Attempted Robbery',
        fine: '$150',
        sentence: '20 Months',
        description: 'Holding up a fort, wagon, bank, store, or business to obtain its goods but peacefully surrendering before negotiations have concluded. Negotiations are considered concluded once gunfire is exchanged, a suspect/lawman/hostage is killed, horse/wagon access is gained by a suspect, or if a suspect verbally confirms they are finished negotiating.',
        confiscation: 'Removal of weapon(s) used.',
      },
      {
        name: 'Theft',
        fine: '$500',
        sentence: '20 Months',
        description: 'Attempting to rob or steal possession(s) from another person.',
        confiscation: null,
      },
      {
        name: 'Robbery of Forts, Banks, Stores, Wagons & Oil Rigs',
        fine: '$300',
        sentence: '20 Months',
        description: 'Holding up a Fort or Bank to obtain its goods, but failing to peacefully surrender before negotiations have concluded. Negotiations are considered concluded once gunfire is exchanged, a suspect/lawman/hostage is killed, horse/wagon access is gained, or if a suspect verbally confirms they are finished negotiating.',
        confiscation: 'Removal of all contraband and all weapons. All weapons will be confiscated if the suspect(s) refuse to peacefully surrender.',
      },
      {
        name: 'Use of a Marksman in Major Crimes',
        fine: '$500',
        sentence: '20 Months',
        description: 'Using or firing a scoped weapon in the commission of a Major Crime (e.g. using a scoped weapon to shoot or murder Deputies or Civilians).',
        confiscation: 'Removal of scoped weapon.',
      },
      {
        name: 'Robbery of a Train',
        fine: '$750',
        sentence: '20 Months',
        description: 'Holding up a train to obtain its goods but failing to peacefully surrender before negotiations have concluded.',
        confiscation: 'Removal of all weapons. All weapons will be confiscated if the suspect(s) refuse to peacefully surrender.',
      },
      {
        name: 'Possession of Dynamite',
        fine: '$1,500',
        sentence: '30 Months',
        description: 'Distributing or being in possession of throwable Dynamite (not Pipe Charge).',
        confiscation: 'Removal of weapon(s) used, including ammo.',
      },
      {
        name: 'Attempted Murder',
        fine: '$750',
        sentence: '20 Months',
        description: 'Shooting at someone, or attempting to take someone\'s life with the malicious intent of harm.',
        confiscation: 'Removal of weapon(s) used.',
      },
      {
        name: 'Murder',
        fine: '$1,000',
        sentence: '30 Months',
        description: 'The taking of someone\'s life with the malicious intent of harm. (Downing a Player — NOT PERMA).',
        confiscation: 'Removal of weapon(s) used.',
      },
      {
        name: 'Attempted Murder of a Lawman',
        fine: '$1,000',
        sentence: '20 Months',
        description: 'Shooting at a Lawman or Combat Medic and/or attempting to take someone\'s life with the malicious intent of harm.',
        confiscation: 'Removal of weapon(s) used.',
      },
      {
        name: 'Murder of a Lawman',
        fine: '$1,250',
        sentence: '30 Months',
        description: 'The taking of a Lawman or Combat Medic\'s life with malicious intent to harm. (Downing a Player — NOT PERMA).',
        confiscation: 'Removal of weapon(s) used.',
      },
    ],
  },
]

const CONTRABAND = [
  {
    cls: 'A',
    formula: '$500 × amount',
    items: [
      'Government Official Uniform',
      'Handcuffs (unless Law Enforcement / Bounty Hunter)',
      'Train Key (unless Train Conductor)',
      'Throwable Acid (Weapon & Ammo)',
      'Molotov (Weapon & Ammo)',
    ],
  },
  {
    cls: 'B',
    formula: '$100 × amount',
    items: [
      'Money Bags',
      'Moonshine',
      'Pure',
      'Heroin',
      'Stolen Painting',
      'Pipe Charge Dynamite',
    ],
  },
  {
    cls: 'C',
    formula: '$50 × amount',
    items: [
      'Morphine (unless Doctor or Pharmacist)',
      'Acid (unless Trapper / Pharmacist / Doctor)',
      'Safe Tools',
      'Lockpicks',
    ],
  },
  {
    cls: 'D',
    formula: '$25 × amount',
    items: [
      'Distillery Pot / Rubber Tube / Still Kits',
      'Copper Pipes / Condensers',
      'Opium / Opium Milk',
      'Stolen Items',
    ],
  },
]

export default function CountyLaws() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>

        <div className={styles.pageHeader}>
          <h1 className={styles.title}>County Laws</h1>
          <p className={styles.intro}>
            Fines and sentences are issued at the discretion of the presiding Lawman. All rulings are subject to case by case review.
          </p>
        </div>

        {/* Crime sections */}
        {CRIME_SECTIONS.map((section) => (
          <section key={section.id} className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{section.label}</h2>
            </div>

            <div className={styles.crimeTable}>
              <div className={styles.crimeTableHead}>
                <span>Offense</span>
                <span>Fine</span>
                <span>Sentence</span>
              </div>
              {section.crimes.map((crime) => (
                <div key={crime.name} className={styles.crimeRow}>
                  <div className={styles.crimeMain}>
                    <div className={styles.crimeMeta}>
                      <span className={styles.crimeName}>{crime.name}</span>
                      <span className={styles.crimeFine}>{crime.fine}</span>
                      <span className={styles.crimeSentence}>{crime.sentence}</span>
                    </div>
                    <p className={styles.crimeDesc}>{crime.description}</p>
                    {crime.confiscation && (
                      <p className={styles.crimeConfiscation}>
                        <span className={styles.confiscationLabel}>Confiscation</span>
                        {crime.confiscation}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Outlaw Ordinance Act */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Outlaw Ordinance Act</h2>
          </div>
          <div className={styles.ordinance}>
            <div className={styles.ordinancePenalty}>
              <span className={styles.ordinanceFine}>$5,000</span>
              <span className={styles.ordinanceSep}>/</span>
              <span className={styles.ordinanceSentence}>20 Months</span>
            </div>
            <p className={styles.ordinanceText}>
              The Outlaw Ordinance allows local authorities to maintain order and enforce regional sovereignty.
              Outlaws apprehended within town limits face charges under this act, ensuring they respect restricted boundaries.
              Penalties for violations are stackable, with no cap on fines or jail time, reflecting the seriousness of repeated offenses.
            </p>
          </div>
        </section>

        {/* Contraband */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Contraband</h2>
          </div>
          <div className={styles.contrabandGrid}>
            {CONTRABAND.map((c) => (
              <div key={c.cls} className={styles.contrabandCard}>
                <div className={styles.contrabandHeader}>
                  <span className={styles.contrabandClass}>Class {c.cls}</span>
                  <span className={styles.contrabandFormula}>{c.formula}</span>
                </div>
                <ul className={styles.contrabandItems}>
                  {c.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
