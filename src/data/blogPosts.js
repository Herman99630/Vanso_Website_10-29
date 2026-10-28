// Preview editorial content. Replace with approved articles before public launch.
// Set featured: true on exactly one entry to pin it above the article grid.
// Replace preview bylines and dates with approved publication metadata.
export const blogPosts = [
  {
    author: 'Vanso Team', publishedAt: '2026-10-28', isPreview: true,
    slug: 'everyday-life-has-a-soundtrack', featured: true, category: 'Everyday Stories',
    title: 'Your Everyday Life Has A Soundtrack',
    excerpt: 'The walk home. A little win. Something you wish you had said. There is a song in the moments you already live.',
    image: new URL('../../assets/vanso-everyday-music.webp', import.meta.url).href, alt: 'Everyday moments connected through music', tone: 'rose',
    sections: [
      ['Start With Something Small', 'A song does not need a grand occasion. It might begin with the relief of closing your laptop on Friday, a quiet kitchen, or a message from an old friend. The detail that matters to you is a good place to start.'],
      ['Give The Moment A Feeling', 'Think about how that moment sounds to you. Warm and unhurried? Restless and bright? In the Vanso app, an idea, a feeling, or a story can become the starting point for an AI-generated song.'],
      ['Leave Room For Someone Else', 'You can keep a song for yourself or share it on Vanso. Someone listening might recognize a little of their own day in yours. And when you listen to others, you might find a feeling you had not quite found words for.'],
    ],
  },
  {
    author: 'Vanso Team', publishedAt: '2026-10-28', isPreview: true,
    slug: 'small-moments-song-ideas', category: 'Inspiration', title: 'Five Small Moments Worth Turning Into A Song',
    excerpt: 'An inside joke, a new beginning, or making it through Monday. Start with something that feels like you.',
    image: new URL('../../assets/vanso-everyday-music.webp', import.meta.url).href, alt: 'Scenes of ordinary life and music', tone: 'rose',
    sections: [
      ['The Small Wins', 'Getting through a difficult day or finally doing something you kept putting off can be worth a song. Start with what happened and the feeling you want to remember.'],
      ['The People And Places', 'An inside joke with a friend, your first evening in a new home, or a familiar walk are three more places to begin. A specific detail often says more than a big statement.'],
      ['The Unexpected Feeling', 'For a fifth idea, try the mood you cannot quite explain. You do not need to tidy it up first. Describe it in your own words and explore what it could sound like in the Vanso app.'],
    ],
  },
  {
    author: 'Vanso Team', publishedAt: '2026-10-28', isPreview: true,
    slug: 'find-your-next-favorite', category: 'Listening', title: 'Find Your Next Favorite, One Song At A Time',
    excerpt: 'Follow a feeling, stay for a lyric, and give an unfamiliar voice a chance. Your next favorite might surprise you.',
    image: new URL('../../assets/vanso-create-and-listen.webp', import.meta.url).href, alt: 'A listener surrounded by music and creative inspiration', tone: 'mint',
    sections: [
      ['Listen Without A Checklist', 'You do not have to make music to enjoy Vanso. Come for a quiet listen, a new voice, or a song that fits the day you are having.'],
      ['Keep What Stays With You', 'When something catches your ear, save it to your favorites. A song can mean something different when you come back to it on another day.'],
      ['Let The Creator Know', 'A like or a thoughtful comment can tell someone that their song reached you. Mention a lyric, a feeling, or the moment you wanted to hear again.'],
    ],
  },
  {
    author: 'Vanso Team', publishedAt: '2026-10-28', isPreview: true,
    slug: 'from-an-idea-to-a-song', category: 'Getting Started', title: 'From An Idea To A Song Of Your Own',
    excerpt: 'Begin with a thought, make it musical, and decide how you want to share it. No music production background needed.',
    image: new URL('../../assets/vanso-idea-to-song.webp', import.meta.url).href, alt: 'An idea becoming a song and connecting with listeners in Vanso', tone: 'violet',
    sections: [
      ['Begin With Your Words', 'Open the Vanso app and start with an idea, a feeling, or a story. Describe what you want to express in a way that feels natural to you.'],
      ['Listen And Make It Personal', 'Let AI turn your idea into a song. Listen to the result, then make supported details such as the cover and description your own.'],
      ['Choose What Happens Next', 'Save your song as a draft, keep it private, or make it public on Vanso for others to discover and enjoy. Visit the getting-started guide for more about using Vanso.'],
    ],
  },
  {
    author: 'Vanso Team', publishedAt: '2026-10-28', isPreview: true,
    slug: 'a-song-for-a-friend', category: 'Inspiration', title: 'Some Things Are Easier To Say In A Song',
    excerpt: 'A thank-you, a shared memory, or a joke only two people understand. Make a little room for the personal.',
    art: 'note', tone: 'rose',
    sections: [
      ['Choose One Thing To Say', 'You might want to thank a friend, celebrate a small milestone, or remember a day together. Pick one thought rather than trying to fit your whole history into a song.'],
      ['Use The Details You Share', 'A familiar phrase, a place, or a tiny mishap can make an idea feel personal. Use details you are comfortable including, especially if you plan to make the song public.'],
      ['Let It Sound Like You', 'The thought behind the song matters. Start with your own words and explore a mood that suits the message, whether playful, warm, or a little bittersweet.'],
    ],
  },
  {
    author: 'Vanso Team', publishedAt: '2026-10-28', isPreview: true,
    slug: 'listening-is-part-of-the-story', category: 'Community', title: 'Listening Is Part Of The Story, Too',
    excerpt: 'You do not have to create a song to be part of Vanso. Discover, save, and let someone know their music found you.',
    art: 'connection', tone: 'mint',
    sections: [
      ['There Is More Than One Way To Join In', 'Some days you may want to create. Other days you may just want to listen. Both belong in a place built around sharing music and discovering one another.'],
      ['A Small Response Can Matter', 'Save a song you want to hear again, like one that moves you, or leave a comment about what stood out. These are simple ways to take part without making anything yourself.'],
      ['Follow Your Own Taste', 'You do not need to agree with everyone else. Spend time with the songs that mean something to you and leave space for an unexpected favorite.'],
    ],
  },
  {
    author: 'Vanso Team', publishedAt: '2026-10-28', isPreview: true,
    slug: 'make-your-song-feel-like-you', category: 'Getting Started', title: 'Make Your Song Feel A Little More Like You',
    excerpt: 'A cover and a few words can give listeners a way into your world. Tell the small story behind the sound.',
    art: 'cover', tone: 'violet',
    sections: [
      ['Give It A Visual Feeling', 'A cover is often the first thing someone sees. Choose an image that fits the feeling of your song and that you have permission to use.'],
      ['Add A Little Context', 'A description can be as simple as where the idea came from or what you were feeling that day. You do not need a polished artist statement.'],
      ['Decide What To Share', 'Use the supported editing options in the Vanso app, then choose whether to keep the song private or make it public. Share as much or as little of the story as feels right for you.'],
    ],
  },
]
