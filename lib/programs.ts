//- This file contains the data for the programs offered at the school.
//* Define the programs offered at the school

import { features } from 'process'

//@ Band Classes
const RockStart = {
  programName: 'RockStart',
  tagline: 'The perfect program for young beginners who are just starting out.',
  programType: 'Band class',
  slug: 'rockstart',
  description:
    'RockStart gets you ready to rock in just six months! Our beginner band program is designed to have students performing up to four pre-selected hit songs with confidence. Includes printed and digital sheet music, and custom audio tracks accessible through our student portal, learning and practicing is fun and effortless. Students perfect each song with their private instructor, rehearse and practice at home, and then meet monthly for a live band jam in our studio’s Live Room. After mastering all four songs, graduates are ready to level up to our JamCore band class.',
  details: {
    recurrence: 'Monthly',
    duration: '30–120 minutes/class.*',
    performances: 'Students perform up to four songs in-studio as a band.',
    skillLevel: 'Open to all levels, but focused on beginners.',
    songs: 'Pre-selected songs.',
    materials: 'Includes sheet music and audio files.',
  },
  features: [
    'Monthly class.',
    '30–120 minutes/class.*',
    'Students perform up to four songs in-studio as a band.',
    'Open to all levels, but focused on beginners.',
    'Pre-selected songs.',
    'Includes sheet music and audio files.',
  ],
  disclaimers: ['* Time based on number of songs performed.'], // This is the text that will be displayed just above the call to action button
  // performances: { count: 1, interval: 'class', disclaimer: '' },
  // sessionDuration: {
  //   count: 1,
  //   interval: 'month',
  //   disclaimer: '',
  // },
  // classLength: {
  //   min: 30,
  //   max: 60,
  //   unit: 'minutes',
  //   interval: 'class',
  //   disclaimer: '',
  // },
  // ages: {
  //   min: 6,
  //   max: 12,
  //   disclaimer: 'Ages 6-12',
  // },
  // skill: 'Beginner',
  // songs: {
  //   preselected: true,
  //   studentSuggested: false,
  //   originalSongs: false,
  //   maxCount: 4,
  //   disclaimer: '',
  // },
  // price: {
  //   amount: 49,
  //   interval: 'class',
  //   requiresLessons: true,
  //   disclaimer: '',
  // },
}

const JamCore = {
  programName: 'JamCore',
  tagline: 'Experience the excitement of playing live with other musicians!',
  programType: 'Band class',
  slug: 'jamcore',
  description:
    "Designed for intermediate level students who are ready to take the stage. JamCore is your chance to experience the excitement of playing live with other musicians! In this program, you'll collaborate with classmates of similar skill levels to learn assigned songs chosen by your instructor. Each week, you'll rehearse these songs in a structured environment, focusing on developing your musicianship and teamwork. The program culminates in a live performance at a local venue, giving you the ultimate payoff – the thrill of rocking out in front of a real audience!",
  features: [
    '8-week sessions.',
    '30–120 minutes/week.*',
    'Performs at 1 show per session at a local venue.',
    'Open to intermediate level students.**',
    'Students continue the class every session with new bands, different songs, and fresh performances.',
    'Students can also participate in the RockStart program.***',
  ],
  disclaimers: [
    '* Time based on number of students enrolled.',
    '** Requires instructor approval.',
    '*** Subject to availability.',
  ], // This is the text that will be displayed just above the call to action button
  // performances: { count: 1, interval: 'session', disclaimer: '' },
  // sessionDuration: {
  //   count: 8,
  //   interval: 'weeks',
  //   disclaimer: '',
  // },
  // classLength: {
  //   min: 30,
  //   max: 60,
  //   unit: 'minutes',
  //   interval: 'week',
  //   disclaimer: '',
  // },
  // ages: {
  //   min: 8,
  //   max: 14,
  //   disclaimer: 'Ages 8-14',
  // },
  // skill: 'Intermediate',
  // songs: {
  //   preselected: true,
  //   studentSuggested: false,
  //   originalSongs: false,
  //   maxCount: 3,
  //   disclaimer: '',
  // },
  // price: {
  //   amount: 197,
  //   interval: 'session',
  //   requiresLessons: false,
  //   disclaimer: '',
  // },
}

const BandCore = {
  programName: 'BandCore',
  tagline:
    'Join an elite group of musicians collaborating, performing, and evolving together.',
  programType: 'Band class',
  slug: 'bandcore',
  description:
    "Are you an experienced musician looking to push your boundaries and develop your own unique sound? BandCore is designed to take your musical journey to the next level! This program is all about collaboration and creative expression. You'll get to form your own band with classmates who share your musical tastes, allowing you to choose songs you're passionate about (with guidance from your instructor). BandCore has extended session lengths compared to JamCore, giving you more time to conquer more challenging material, hone your skills as a band, and truly own your sound. The BandCore program culminates in not just one, but two electrifying live shows at local venues, putting your hard work on display for the world to see!",
  features: [
    '12-week sessions.',
    '30–120 minutes/week.*',
    'Performs at 2 shows per session at local venues.',
    'Open to advanced level students.**',
    'Students continue the class every session with new bands, different songs, and fresh performances.',
    'Students can also participate in the RockStart & JamCore programs.***',
  ],
  disclaimers: [
    '* Time based on number of students enrolled.',
    '** Requires instructor approval.',
    '*** Subject to availability.',
  ], // This is the text that will be displayed just above the call to action button
  //   performances: { count: 2, interval: 'session', disclaimer: '' },
  //   sessionDuration: {
  //     count: 12,
  //     interval: 'weeks',
  //     disclaimer: '',
  //   },
  //   classLength: {
  //     min: 30,
  //     max: 120,
  //     unit: 'minutes',
  //     interval: 'week',
  //     disclaimer: '',
  //   },
  //   ages: {
  //     min: 12,
  //     max: 18,
  //     disclaimer: 'Ages 12-18',
  //   },
  //   skill: 'Advanced',
  //   songs: {
  //     preselected: false,
  //     studentSuggested: true,
  //     originalSongs: false,
  //     maxCount: 4,
  //     disclaimer: '',
  //   },
  //   price: {
  //     amount: 297,
  //     interval: 'session',
  //     requiresLessons: false,
  //     disclaimer: '',
  //   },
}
const RockstarPro = {
  programName: 'Rockstar Pro',
  tagline: 'The ultimate program for serious musicians.',
  programType: 'Band class',
  slug: 'rockstar-pro',
  description:
    'Rockstar Pro is the ultimate one-of-a-kind band program fully customizable just for you and your chosen band mates. Whether you’re a seasoned performer or just starting out, this program is designed to help you take your music to the next level. You’ll get to perform at local venues, festivals, and more, and you’ll have the opportunity to build your ideal setlist and work on any music you want, including originals. With personalized instruction and guidance from an instructor of your choice, you’ll have the freedom to explore your musical interests and develop your own unique sound. Rockstar Pro is an ongoing program, so you can continue for as long as you and your bandmates wish, with discounts on recording time, photoshoots, and more.',
  features: [
    'Perform at local venues, festivals, and more.',
    'Priority booking for shows.',
    'Build your ideal setlist and work on any music you want, including originals.',
    'Personalized instruction and guidance from an instructor of your choice.',
    'On-going for as long as you and your bandmates wish.',
    'Discounts on recording time, photoshoots, and more.',
    'Open to all skill levels.',
    'Students can also participate in the RockStart, JamCore, & BandCore programs.*',
  ],
  disclaimers: ['* Subject to availability.'], // This is the text that will be displayed just above the call to action button
  // performances: 'Priority booking for performances',
  // sessionDuration: 'Ongoing',
  // classLength: {
  //   min: 15,
  //   max: 360,
  //   unit: 'minutes',
  //   interval: 'week',
  //   disclaimer: 'Flexible scheduling based on your needs',
  // },
  // ages: {
  //   min: 6,
  //   max: 'No max',
  //   disclaimer: '',
  // },
  // skill: 'All skill levels',
  // songs: {
  //   preselected: false,
  //   studentSuggested: true,
  //   originalSongs: true,
  //   maxCount: 64,
  //   disclaimer: '',
  // },
  // customPrice: true,
  // price: 'Contact us for pricing',
}
//@ Workshops
const SongwritingWorkshop = {
  programName: 'Songwriting Workshop',
  tagline: 'Learn the art of songwriting from experienced musicians.',
  programType: 'Workshop',
  description:
    'The Songwriting Workshop is a unique program designed to help you develop your skills as a songwriter. Whether you’re a beginner or an experienced musician, this workshop will give you the tools you need to create your own original music. You’ll learn the fundamentals of songwriting, including melody, harmony, rhythm, and lyrics, and you’ll have the opportunity to collaborate with other students to create new songs. The workshop culminates in a live performance where you can showcase your original music to an audience of your peers.',
}
const MusicProductionWorkshop = {
  programName: 'Music Production Workshop',
  programType: 'Workshop',
  tagline: 'Learn how to produce your own music like a pro.',
  description:
    'The Music Production Workshop is a hands-on program that will teach you the ins and outs of music production. Whether you’re a beginner or an experienced musician, this workshop will give you the skills you need to produce your own music like a pro. You’ll learn how to record, mix, and master your tracks, and you’ll have the opportunity to collaborate with other students to create professional-quality recordings. The workshop culminates in a listening party where you can share your music with an audience of your peers.',
  details: [
    'Beginner & Intermediate',
    '4-week sessions',
    'One Listening Party',
    'Instructor: Alex Smith',
    '$99/session',
  ],
}
//@ Lessons
const PrivateLessons = {
  programName: 'Private Lessons',
  programType: 'Lesson',
  tagline: 'Get personalized instruction from experienced musicians.',
  description:
    'Private Lessons are the perfect way to get personalized instruction from experienced musicians. Whether you’re a beginner or an advanced player, our instructors will work with you to develop your skills and achieve your musical goals. You’ll have the opportunity to learn at your own pace and focus on the areas that interest you most, whether it’s technique, theory, or performance. Private Lessons are available for all ages and skill levels, and are offered in a variety of instruments and styles.',
  details: [
    'All ages & skill levels',
    '30-minute, 45-minute, or 60-minute lessons',
    'Instructor: Varies by instrument',
    'Price: Varies by instructor',
  ],
}
const GroupLessons = {
  programName: 'Group Lessons',
  programType: 'Lesson',
  tagline: 'Learn with others in a fun and supportive group setting.',
  description:
    'Group Lessons are a fun and interactive way to learn music with others. Whether you’re a beginner or an experienced player, our instructors will work with you to develop your skills and achieve your musical goals. You’ll have the opportunity to learn in a supportive group setting and collaborate with other students to create music together. Group Lessons are available for all ages and skill levels, and are offered in a variety of instruments and styles.',
  details: [
    'All ages & skill levels',
    '60-minute lessons',
    'Instructor: Varies by instrument',
    'Price: Varies by instructor',
  ],
}

//* Function to get a performance class.
export function getClass(className: string) {
  switch (className) {
    case 'RockStart':
      return RockStart
    case 'BandCore':
      return BandCore
    case 'JamCore':
      return JamCore
    case 'Rockstar Pro':
      return RockstarPro
    default:
      return BandCore //- Default to BandCore if program not found.
  }
}

export function getAllBandClasses() {
  return [RockStart, JamCore, BandCore, RockstarPro]
}

export function getAllWorkshops() {
  return [SongwritingWorkshop, MusicProductionWorkshop]
}

export function getAllLessons() {
  return [PrivateLessons, GroupLessons]
}
