export const countries = [
  { name: 'United States', code: 'US' },
  { name: 'Canada', code: 'CA' },
];

export const states: { [key: string]: { name: string, code: string }[] } = {
  US: [
    { name: 'California', code: 'CA' },
    { name: 'New York', code: 'NY' },
  ],
  CA: [
    { name: 'Ontario', code: 'ON' },
    { name: 'Quebec', code: 'QC' },
  ],
};

export const cities: { [key: string]: string[] } = {
  CA: ['Los Angeles', 'San Francisco'],
  NY: ['New York City', 'Buffalo'],
  ON: ['Toronto', 'Ottawa'],
  QC: ['Montreal', 'Quebec City'],
};

export const interests = [
  'Technology',
  'Art',
  'Music',
  'Sports',
  'Travel',
  'Reading',
  'Cooking',
  'Gaming',
];
