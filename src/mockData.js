export const mockMembers = [
  { id: 1, name: 'Alex', age: 28, bio: 'Artist & coffee enthusiast. Looking for deep conversations.', interests: ['art', 'music', 'philosophy'], online: true, hasPhoto: true },
  { id: 2, name: 'Jordan', age: 25, bio: 'Software dev by day, drummer by night.', interests: ['music', 'tech', 'hiking'], online: true, hasPhoto: true },
  { id: 3, name: 'Sam', age: 31, bio: 'Writer. Cat parent. Hopeless romantic.', interests: ['books', 'cats', 'cinema'], online: false, hasPhoto: true },
  { id: 4, name: 'Riley', age: 27, bio: 'Yoga instructor seeking adventure partner.', interests: ['yoga', 'travel', 'cooking'], online: true, hasPhoto: true },
  { id: 5, name: 'Casey', age: 29, bio: 'Photographer. Night owl. Always curious.', interests: ['photography', 'art', 'nightlife'], online: false, hasPhoto: true },
  { id: 6, name: 'Morgan', age: 26, bio: 'Plant parent extraordinaire. Let\'s get brunch.', interests: ['plants', 'food', 'design'], online: true, hasPhoto: true },
  { id: 7, name: 'Quinn', age: 30, bio: 'Architect with too many hobbies.', interests: ['design', 'climbing', 'wine'], online: true, hasPhoto: false },
  { id: 8, name: 'Avery', age: 24, bio: 'Just moved here. Show me around?', interests: ['exploring', 'music', 'dancing'], online: true, hasPhoto: true },
];

export const interests = [
  'Art', 'Music', 'Film', 'Books', 'Gaming', 'Fitness', 'Yoga', 'Hiking',
  'Travel', 'Food', 'Cooking', 'Wine', 'Coffee', 'Tech', 'Design', 'Photography',
  'Dancing', 'Nightlife', 'Plants', 'Cats', 'Dogs', 'Philosophy', 'Science', 'Politics'
];

export const hellInterests = [
  'Kink', 'BDSM', 'Poly', 'ENM', 'Casual', 'FWB', 'Parties', 'Fetish',
  'Dom', 'Sub', 'Switch', 'Voyeur', 'Exhib', 'Groups', 'Couples', 'Singles',
  ...interests.slice(0, 8)
];
