//- Details for teachers
import michaelsAvatar from '@/public/imgs/teachers/michael-zeta-01.jpg'

export const teachers = [
  {
    first_name: 'Michael',
    last_name: 'Zeta',
    stage_name: 'The Second Messenger',
    pronouns: 'he/him',
    slug: 'michael-zeta',
    avatar: michaelsAvatar.src,
    instructs: [
      'Guitar',
      'Bass',
      'Drums',
      'Keyboards',
      'Voice',
      'Songwriting',
      'Music Theory',
      'Audio Production',
      'Music Business',
      'Music Technology',
      'Music History',
      'Performance',
      'Notation',
    ],
    bio: 'Michael Zeta is a multi-talented musician and experienced instructor at Rockstars of Tomorrow, where he’s been inspiring students since 2016. With over 20 years of experience, his primary focus is on guitar, but his expertise spans voice, bass, drums, keyboards, ukulele, performance, songwriting, music theory, audio engineering, and more. Michael’s musical journey began early, learning guitar from his father and expanding his skills through marching band and classical training in high school. He later pursued audio engineering in college, honing a versatile skill set that supports his work as both a performer and a teacher. As a performer, Michael has done it all—from leading his original band, The Second Messenger, which has gained a loyal following on YouTube, to touring the United States with the ABBA tribute band The Fabba Show. His wealth of professional experience enriches his teaching and gives his students a real-world perspective on music. Known for his analytical teaching style, Michael breaks down complex concepts into manageable steps while emphasizing the big picture. He encourages students to develop musical fluency, helping them transition from practicing to playing with heart and soul. Beyond teaching, Michael loves coffee, coding websites, and spending time with his adorable dog. His favorite musical inspirations include Blink-182, All Time Low, Good Charlotte, The Beatles, and pop-rock hits from the ’90s. Whether you’re looking to master an instrument or develop your songwriting skills, Michael is passionate about sharing his knowledge and helping students discover the joy of music.',
    teaching_since: Date.parse('2016-01-01'),
    links: [
      { label: 'The Second Messenger', url: 'https://michaelzeta.com' },
      { label: 'YouTube', url: 'https://youtube.com/michaelzeta' },
      {
        label: 'Spotify',
        url: 'https://open.spotify.com/artist/2ZQh6J1Z2ZQh6J1Z2ZQh6J1',
      },
      { label: 'TikTok', url: 'https://tiktok.com/@michaelzeta' },
    ],
  },
  {
    first_name: 'Amanda',
    last_name: 'Lynn',
    stage_name: 'Ms. Amanda',
    pronouns: 'she/her',
    slug: 'amanda-lynn',
    avatar: 'https://dummyimage.com/300x300',
    instructs: [
      'Voice',
      'Piano & Keyboards',
      'Guitar',
      'Songwriting',
      'Music Theory',
      'Performance',
      'Notation',
    ],
    bio: 'Amanda Lynn is a talented musician and dedicated instructor at Rockstars of Tomorrow, where she’s been teaching since 2018. Specializing in voice, piano, guitar, and songwriting, she also teaches music theory, performance, and notation. Amanda’s musical journey began at a young age, learning piano from her grandmother and expanding her skills through choir and musical theater in high school. She later pursued a degree in music education, honing her skills in voice, piano, and guitar. As a performer, Amanda has done it all—from leading her original band, The Second Messenger, which has gained a loyal following on YouTube, to touring the United States with the ABBA tribute band The Fabba Show. Her wealth of professional experience enriches her teaching and gives her students a real-world perspective on music. Known for her nurturing teaching style, Amanda creates a supportive environment where students can explore their creativity and build their confidence. She encourages students to find their unique voice, helping them express themselves through music and connect with their audience. Beyond teaching, Amanda loves coffee, coding websites, and spending time with her adorable dog. Her favorite musical inspirations include Taylor Swift, Sara Bareilles, Ingrid Michaelson, and pop hits from the ’90s. Whether you’re looking to develop your voice or write your next hit song, Amanda is passionate about sharing her knowledge and helping students discover the joy of music.',
    teaching_since: Date.parse('2018-01-01'),
    links: [
      { label: 'Website', url: 'https://amandalynn.com' },
      { label: 'YouTube', url: 'https://youtube.com/amandalynn' },
      {
        label: 'Spotify',
        url: 'https://open.spotify.com/artist/2ZQh6J1Z2ZQh6J1Z2ZQh6J1',
      },
      { label: 'TikTok', url: 'https://tiktok.com/@amandalynn' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/amandalynn' },
    ],
  },
  {
    first_name: 'Taylor',
    last_name: 'Rae',
    stage_name: 'Ms. Taylor',
    pronouns: 'she/her',
    slug: 'taylor-rae',
    avatar: 'https://dummyimage.com/300x300',
    instructs: ['Voice', 'Piano', 'Songwriting', 'Music Theory', 'Performance'],
    bio: 'Taylor Rae is a talented musician and dedicated instructor at Rockstars of Tomorrow, where she’s been teaching since 2018. Specializing in voice, piano, guitar, and songwriting, she also teaches music theory, performance, and notation. Taylor’s musical journey began at a young age, learning piano from her grandmother and expanding her skills through choir and musical theater in high school. She later pursued a degree in music education, honing her skills in voice, piano, and guitar. As a performer, Taylor has done it all—from leading her original band, The Second Messenger, which has gained a loyal following on YouTube, to touring the United States with the ABBA tribute band The Fabba Show. Her wealth of professional experience enriches her teaching and gives her students a real-world perspective on music. Known for her nurturing teaching style, Taylor creates a supportive environment where students can explore their creativity and build their confidence. She encourages students to find their unique voice, helping them express themselves through music and connect with their audience. Beyond teaching, Taylor loves coffee, coding websites, and spending time with her adorable dog. Her favorite musical inspirations include Taylor Swift, Sara Bareilles, Ingrid Michaelson, and pop hits from the ’90s. Whether you’re looking to develop your voice or write your next hit song, Taylor is passionate about sharing her knowledge and helping students discover the joy of music.',
    teaching_since: Date.parse('2018-01-01'),
    links: [
      { label: 'Website', url: 'https://taylorrae.com' },
      { label: 'YouTube', url: 'https://youtube.com/taylorrae' },
      {
        label: 'Spotify',
        url: 'https://open.spotify.com/artist/2ZQh6J1Z2ZQh6J1Z2ZQh6J1',
      },
      { label: 'TikTok', url: 'https://tiktok.com/@taylorrae' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/taylorrae' },
    ],
  },
] as const

export function getAllTeachers() {
  return teachers
}
