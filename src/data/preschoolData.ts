import { ProgramItem, CalendarEvent, TransportRoute } from '../types';
import heroChildImg from '../assets/images/maju_stars_happy_child_1791886480589.jpg';
import blocksPlayImg from '../assets/images/preschool_blocks_play_1791610492461.jpg';
import readingStoryImg from '../assets/images/preschool_reading_story_1791610502428.jpg';
import outdoorPlayImg from '../assets/images/preschool_outdoor_kids_1791610513945.jpg';

export const SCHOOL_INFO = {
  name: 'Maju Stars Pre-School, Daycare and After-care Centre',
  shortName: 'Maju Stars',
  tagline: 'Learning today, leading tomorrow',
  heroHeadline: 'Inspiring Young Minds, Building Bright Futures!',
  heroSubtitle: 'A joyful place where curiosity grows, creativity shines and every child becomes their best self in the heart of Lenasia.',
  address: '15 Benue St, Lenasia, 1821',
  street: '15 Benue St',
  suburb: 'Lenasia',
  postalCode: '1821',
  province: 'Gauteng, South Africa',
  phone: '078 722 7449',
  phoneClean: '0787227449',
  phoneIntl: '+27787227449',
  email: 'info@majustars.co.za',
  operatingHoursText: 'Closed · Opens 6 am Mon',
  operatingHoursDetails: [
    { days: 'Monday – Friday', hours: '06:00 – 18:00', note: 'Early drop-off from 06:00' },
    { days: 'Saturday & Sunday', hours: 'Closed', note: 'Family & resting days' },
    { days: 'Public Holidays', hours: 'Closed', note: 'As per South African calendar' }
  ],
  registrationNumber: 'ECD/JHB/2019/58129',
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    whatsapp: 'https://wa.me/27787227449'
  }
};

export const IMAGES = {
  heroChild: heroChildImg,
  blocksPlay: blocksPlayImg,
  readingStory: readingStoryImg,
  outdoorPlay: outdoorPlayImg
};

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'baby-stars',
    name: 'Baby Little Stars',
    ageGroup: '3 Months – 2 Years',
    subtitle: 'Infant Daycare & Sensory Care',
    description: 'Gentle, nurturing early stimulation focused on sensory exploration, tummy time, milestone tracking, and tender loving care in a hygienic cot haven.',
    colorTheme: 'purple',
    iconName: 'Baby',
    schedule: '06:00 – 18:00 (Full Day) or 06:00 – 13:00 (Half Day)',
    monthlyFee: 2100,
    highlight: '1:4 Educator to Infant Ratio with Dedicated Nursery Room',
    features: [
      'Warm cot nursery with continuous audio-visual monitoring',
      'Daily milestone & feeding journal sent home to parents',
      'Sterilized play spaces with non-toxic sensory textures',
      'Gentle lullabies, infant massage & motor development drills'
    ]
  },
  {
    id: 'little-explorers',
    name: 'Little Explorers',
    ageGroup: '2 – 3 Years',
    subtitle: 'Toddler Discovery & Social Play',
    description: 'Curiosity-fueled toddler adventures fostering speech development, sensory play, interactive circle time, gentle potty training support, and joyful discovery.',
    colorTheme: 'green',
    iconName: 'Ship',
    schedule: '06:00 – 18:00 (Full Day) or 06:00 – 13:00 (Half Day)',
    monthlyFee: 1950,
    highlight: 'Potty Training Support & Interactive Social Play',
    features: [
      'Language enrichment, nursery rhymes & conversational story circles',
      'Tactile sand & water play with gross motor obstacle tracks',
      'Gentle, patient toilet training assistance in partnership with parents',
      'Color, shape & basic animal world discovery'
    ]
  },
  {
    id: 'first-steps',
    name: 'First Steps & Grade R Prep',
    ageGroup: '3 – 5 Years',
    subtitle: 'Pre-School & Kindergarten Readiness',
    description: 'Foundational literacy, phonics, numbers, science discovery, and emotional resilience preparing bright young minds for Grade R and primary school success.',
    colorTheme: 'amber',
    iconName: 'Blocks',
    schedule: '06:00 – 18:00 (Full Day) or 06:00 – 13:00 (Half Day)',
    monthlyFee: 1950,
    highlight: 'CAPS-Aligned Pre-School Curriculum & Early Phonics',
    features: [
      'Letterland phonics, emerging handwriting & numerical concepts',
      'Mini STEM experiments, gardening & nature explorations',
      'Creative art, music rhythm & dramatic roleplay corner',
      'Confidence-building public speaking "Show & Tell" sessions'
    ]
  },
  {
    id: 'little-einsteins',
    name: 'Little Einsteins & After-Care',
    ageGroup: 'Grade R – Grade 7 (6 – 12 Years)',
    subtitle: 'After-Care & Supervised Homework Club',
    description: 'Comprehensive afternoon care including school collection from Lenasia primary schools, hot freshly cooked lunches, dedicated homework tutoring, and fun sports.',
    colorTheme: 'pink',
    iconName: 'Sparkles',
    schedule: '13:00 – 18:00 (Mon – Fri) & Full Days during School Holidays',
    monthlyFee: 1100,
    highlight: 'Safe School Pickups in Lenasia & 100% Homework Checked',
    features: [
      'Reliable transport pickup from Lenasia schools (e.g. SBSM, Lenasia South, Alpha)',
      'Hot home-style nutritious lunch & wholesome afternoon snack',
      'Qualified tutors ensuring homework is completed correctly before pickup',
      'Reading corner, board games, soccer & playground relaxation'
    ]
  }
];

export const CALENDAR_EVENTS: CalendarEvent[] = [
  // 2026 Term 1
  {
    id: 'e1',
    title: 'Term 1 School Opens & Star Welcome Day',
    date: '2026-01-14',
    term: 1,
    year: 2026,
    category: 'term',
    time: '06:00 – 18:00',
    description: 'First official day of the 2026 academic year. Welcome gifts, meet the teachers, and classroom orientation.',
    location: 'All Classrooms',
    dressCode: 'Maju Stars Uniform / Comfortable Clothes'
  },
  {
    id: 'e2',
    title: 'Teddy Bear & Pyjama Friday Fun Day',
    date: '2026-02-06',
    term: 1,
    year: 2026,
    category: 'fun-day',
    time: '08:30 – 12:00',
    description: 'Wear cozy pyjamas, bring a favorite stuffed animal for story circle, hot cocoa, and popcorn morning.',
    location: 'Main Hall & Play Area',
    dressCode: 'Warm PJs & Slippers'
  },
  {
    id: 'e3',
    title: 'Friendship & Kindness Valentine Picnic',
    date: '2026-02-13',
    term: 1,
    year: 2026,
    category: 'fun-day',
    time: '10:00 – 13:00',
    description: 'Outdoor picnic on the school lawn. Hand-made friendship bracelets, fruit skewers, and sharing games.',
    location: 'School Gardens',
    dressCode: 'Touch of Red, Pink or White'
  },
  {
    id: 'e4',
    title: 'Easter Egg Hunt & Creative Bonnet Parade',
    date: '2026-03-20',
    term: 1,
    year: 2026,
    category: 'fun-day',
    time: '09:00 – 12:00',
    description: 'Annual Easter bonnet craft parade with prizes followed by an exciting garden treasure egg hunt.',
    location: 'Playground & Quad',
    dressCode: 'Handcrafted Easter Bonnet or Bunny Ears'
  },
  {
    id: 'e5',
    title: 'Term 1 Closes & Parent Progress Reports',
    date: '2026-03-27',
    term: 1,
    year: 2026,
    category: 'academic',
    time: '06:00 – 13:00',
    description: 'End of Term 1. One-on-one parent feedback sessions and child portfolio handovers. Holiday care opens Monday.',
    location: 'Staff & Parent Lounge'
  },

  // Term 2
  {
    id: 'e6',
    title: 'Term 2 Opens: Autumn Exploration',
    date: '2026-04-14',
    term: 2,
    year: 2026,
    category: 'term',
    time: '06:00 – 18:00',
    description: 'Welcome back for Term 2. Start of our Nature & Science discovery theme.',
    location: 'All Classrooms'
  },
  {
    id: 'e7',
    title: "Mother's Day Pamper & High Tea Morning",
    date: '2026-05-08',
    term: 2,
    year: 2026,
    category: 'community',
    time: '09:30 – 11:30',
    description: 'A special tribute morning for mothers, grandmothers, and female guardians with song performances and cupcakes.',
    location: 'School Courtyard',
    dressCode: 'Smart Casual / Floral'
  },
  {
    id: 'e8',
    title: 'When I Grow Up: Career Dress-Up Day',
    date: '2026-05-22',
    term: 2,
    year: 2026,
    category: 'fun-day',
    time: '08:30 – 12:30',
    description: 'Children dress up as future doctors, firefighters, pilots, chefs, artists, or engineers with guest community visitors.',
    location: 'Auditorium & Classrooms',
    dressCode: 'Career Costume of Choice'
  },
  {
    id: 'e9',
    title: 'Youth Day Creative Expression & Art Showcase',
    date: '2026-06-12',
    term: 2,
    year: 2026,
    category: 'academic',
    time: '09:00 – 13:00',
    description: 'Children present finger paintings, clay sculptures, and collaborative murals honoring South African youth.',
    location: 'Art Pavillion',
    dressCode: 'Traditional or School Golf Shirt'
  },
  {
    id: 'e10',
    title: 'Term 2 Closes & Winter Holiday Care Starts',
    date: '2026-06-26',
    term: 2,
    year: 2026,
    category: 'term',
    time: '06:00 – 13:00',
    description: 'Term 2 report cards distributed. Full winter holiday daycare program continues for registered parents.',
    location: 'Campus'
  },

  // Term 3
  {
    id: 'e11',
    title: 'Term 3 Opens & 2027 Early Enrollment Launch',
    date: '2026-07-21',
    term: 3,
    year: 2026,
    category: 'term',
    time: '06:00 – 18:00',
    description: 'Official launch of 2027 Admissions for babies, toddlers, and Grade R. Sibling discount window opens.',
    location: 'Admissions Office'
  },
  {
    id: 'e12',
    title: 'Annual Maju Stars Mini Olympics & Sports Day',
    date: '2026-08-15',
    term: 3,
    year: 2026,
    category: 'sports',
    time: '08:30 – 13:30',
    description: 'Sack races, egg-and-spoon dash, obstacle courses, cheer routines, and parent-teacher tug-of-war!',
    location: 'Lenasia Community Sports Field',
    dressCode: 'House Team Colors (Blue Stars / Yellow Comets)'
  },
  {
    id: 'e13',
    title: 'Spring Day Carnival & Flower Hat Parade',
    date: '2026-09-01',
    term: 3,
    year: 2026,
    category: 'fun-day',
    time: '09:00 – 12:30',
    description: 'Welcoming the new season with seed planting, flower crowns, face painting, and jumping castles.',
    location: 'School Gardens',
    dressCode: 'Bright Spring Colors & Floral Outfits'
  },
  {
    id: 'e14',
    title: 'Heritage Day Braai & Cultural Diversity Festival',
    date: '2026-09-23',
    term: 3,
    year: 2026,
    category: 'community',
    time: '10:00 – 14:00',
    description: 'Celebrating all cultures of South Africa with traditional dress, traditional song & dance, and tasty boerewors.',
    location: 'Main School Grounds',
    dressCode: 'Traditional African / Cultural Attire'
  },

  // Term 4
  {
    id: 'e15',
    title: 'Term 4 Opens: The Final Stretch',
    date: '2026-10-06',
    term: 4,
    year: 2026,
    category: 'term',
    time: '06:00 – 18:00',
    description: 'Beginning our final term of the year. Rehearsals start for the Annual Concert & Graduation.',
    location: 'All Classrooms'
  },
  {
    id: 'e16',
    title: '2027 Open Day & Campus Discovery Tour',
    date: '2026-10-24',
    term: 4,
    year: 2026,
    category: 'academic',
    time: '09:00 – 13:00',
    description: 'Special guided walkthrough for parents enrolling babies and preschoolers for the 2027 school year.',
    location: '15 Benue St, Lenasia Campus',
    dressCode: 'Casual'
  },
  {
    id: 'e17',
    title: 'Grade R Graduation Ceremony & Gala Concert',
    date: '2026-11-28',
    term: 4,
    year: 2026,
    category: 'academic',
    time: '10:00 – 13:30',
    description: 'Our proud Grade R stars graduate in miniature caps and gowns! Musical performances by all classes.',
    location: 'Lenasia Civic Centre / School Auditorium',
    dressCode: 'Formal / Graduation Gowns Provided'
  },
  {
    id: 'e18',
    title: 'Year-End Splash Carnival & Prize Giving',
    date: '2026-12-04',
    term: 4,
    year: 2026,
    category: 'fun-day',
    time: '08:30 – 13:00',
    description: 'Water slides, certificate ceremony, festive party packs, and joyful year-end sendoff.',
    location: 'Playground Water Zone',
    dressCode: 'Swimwear, Sunhat & Towel'
  },
  {
    id: 'e19',
    title: '2027 Academic Year Kickoff (Term 1)',
    date: '2027-01-13',
    term: 1,
    year: 2027,
    category: 'term',
    time: '06:00 – 18:00',
    description: 'Welcome all returning and brand new enrolled little stars for the 2027 school year!',
    location: 'All Classrooms',
    dressCode: 'New 2027 Uniform'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Zaheera Patel',
    role: 'Parent of Ayaan (Age 4, Pre-School)',
    location: 'Ext 5, Lenasia',
    comment: 'Maju Stars has been a blessing for our family. Ayaan was very shy when he started, but within two terms his speech and confidence soared. The teachers at 15 Benue St treat every child like their own.'
  },
  {
    name: 'Nthabiseng Molefe',
    role: 'Parent of Katlego (Age 2, Little Explorers)',
    location: 'Lenasia South',
    comment: 'The early 06:00 opening time is a lifesaver for working parents commuting to Joburg. The premises are impeccably clean, and the daily communication notes give me total peace of mind throughout my workday.'
  },
  {
    name: 'Farhaana Bham',
    role: 'Mother of Mikayeel (Grade 2, After-Care)',
    location: 'Ext 1, Lenasia',
    comment: 'Their after-care service is outstanding. They pick my son up safely from school, give him a warm meal, and make sure all his homework and spelling are completed before I pick him up at 17:30.'
  }
];

export const FAQS = [
  {
    q: 'What are your exact opening hours and drop-off times?',
    a: 'Maju Stars is open Monday through Friday from 06:00 AM to 18:00 PM. We open early at 6:00 AM specifically to support working parents commuting towards Johannesburg or surrounding areas. We are closed on weekends and gazetted public holidays.'
  },
  {
    q: 'Are meals and snacks provided by the school?',
    a: 'Yes! For full-day attendees, we provide a warm wholesome morning breakfast (porridge/oats), a mid-morning fruit snack, a hot cooked lunch (strictly halaal and nutrition-balanced with proteins, veg, and carbs), and an afternoon fruit/snack with juice or rooibos tea.'
  },
  {
    q: 'How does the 2027 Enrollment process work?',
    a: '2027 Enrollment is currently open. You can complete our online Child Registration form or submit a 2027 Slot Reservation. Once submitted, our admissions coordinator will confirm classroom capacity and arrange an in-person orientation tour at 15 Benue St, Lenasia.'
  },
  {
    q: 'What hygiene and safety measures are in place?',
    a: 'We operate with strict access-controlled gates, 24/7 CCTV surveillance, pediatric first-aid certified educators, daily sanitization of toys and cots, and a strict child pick-up authorization policy.'
  },
  {
    q: 'Do you offer transport for the after-care programme in Lenasia?',
    a: 'Yes, we provide safe, vetted transport collections from major Lenasia primary schools directly to our centre at 15 Benue St.'
  }
];

export const FEE_TIERS_2027 = [
  {
    name: 'Baby Little Stars (Daycare)',
    age: '3 Months – 2 Years',
    hours: '06:00 – 18:00',
    fee: 'R2,100 / month',
    deposit: 'R500 once-off registration',
    includes: ['Nursery cot bedding sanitized daily', '3 Freshly prepared baby meals & puree', 'Milestone journal', 'Sensory stimulation tools']
  },
  {
    name: 'Little Explorers & Toddlers',
    age: '2 – 3 Years',
    hours: '06:00 – 18:00',
    fee: 'R1,950 / month',
    deposit: 'R450 once-off registration',
    popular: true,
    includes: ['Breakfast, hot lunch & 2 snack breaks', 'Potty training supervision', 'All educational arts & craft supplies', 'Daily storybook reading & gross motor drills']
  },
  {
    name: 'Pre-School & Grade R Prep',
    age: '3 – 5 Years',
    hours: '06:00 – 18:00',
    fee: 'R1,950 / month',
    deposit: 'R450 once-off registration',
    includes: ['CAPS aligned readiness curriculum', 'Phonics & early arithmetic workbook pack', 'Cooked meals & afternoon care included', 'Annual concert & sports participation']
  },
  {
    name: 'After-Care & Homework Club',
    age: 'Grade R – Grade 7',
    hours: '13:00 – 18:00',
    fee: 'R1,100 / month',
    deposit: 'R350 once-off registration',
    includes: ['Optional school pick-up in Lenasia', 'Cooked lunch upon arrival', 'Supervised homework tutor assistance', 'Holiday care access included at discounted rate']
  }
];

export const TRANSPORT_DATA = {
  notice: 'Please note the following new prices as from the 1st of June',
  effectiveDate: '1st of June',
  description: 'Safe, punctual, and vetted door-to-door transport service operated by trusted drivers with booster seats and verified safety protocols.',
  routes: [
    { id: 'ext-10', area: 'Lenasia Ext 10', price: 450, priceFormatted: 'R450', popular: true },
    { id: 'thembelihle-d', area: 'Thembelihle D Section', price: 450, priceFormatted: 'R450', popular: true },
    { id: 'thembelihle-n', area: 'Thembelihle N Section', price: 450, priceFormatted: 'R450', popular: true },
    { id: 'thembelihle-f', area: 'Thembelihle F Section', price: 500, priceFormatted: 'R500' },
    { id: 'traderoute', area: 'Traderoute', price: 500, priceFormatted: 'R500' },
    { id: 'ext-11', area: 'Lenasia Ext 11', price: 500, priceFormatted: 'R500' },
    { id: 'patsing', area: 'Patsing', price: 500, priceFormatted: 'R500' },
    { id: 'lehae', area: 'Lehae', price: 550, priceFormatted: 'R550' },
    { id: 'ext-8', area: 'Lenasia Ext 8', price: 550, priceFormatted: 'R550' },
    { id: 'ext-1-2-3', area: 'Lenasia Ext 1, 2, 3', price: 600, priceFormatted: 'R600' },
  ] as TransportRoute[]
};
