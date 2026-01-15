-- Transportation and car advice
INSERT INTO seniorbot_chat (author, text, topic, resource_url) VALUES
('Silver', 'Many cities offer senior discounts on public transportation. Check with your local transit authority for details.', 'transportation', NULL),
('Silver', 'Rideshare services like Uber and Lyft can be a convenient way to get around if you don’t drive.', 'transportation', 'https://www.uber.com/'),
('Silver', 'Community shuttles and volunteer driver programs are available in some areas for seniors needing transportation.', 'transportation', NULL),
('Silver', 'If you’re considering buying a car, look for models with easy access, good visibility, and safety features.', 'cars', NULL),
('Silver', 'Many auto clubs offer roadside assistance and travel planning for seniors. AAA is a popular choice.', 'cars', 'https://www.aaa.com/');
-- Senior Bot chat table for PostgreSQL
CREATE TABLE IF NOT EXISTS seniorbot_chat (
  id SERIAL PRIMARY KEY,
  author TEXT NOT NULL,
  avatar TEXT,
  text TEXT NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  topic TEXT,
  resource_url TEXT
);

-- Example data for Silver (health, wellness, community resources)

INSERT INTO seniorbot_chat (author, text, topic, resource_url) VALUES
('Silver', 'Join your local senior center for fun activities and new friends.', 'community', 'https://www.ncoa.org/'),
('Silver', 'Find support groups and resources at the National Council on Aging.', 'resources', 'https://www.ncoa.org/'),
-- College and college life advice
('Silver', 'Many colleges offer lifelong learning programs for seniors. Check with your local university for opportunities.', 'college', NULL),
('Silver', 'College campuses often host community events, lectures, and workshops open to the public. Explore what is available near you!', 'college', NULL),
('Silver', 'Staying engaged with college life can mean joining alumni groups, attending sports games, or volunteering for campus activities.', 'college', NULL),
('Silver', 'Online courses from colleges and universities are a great way to keep learning from home. Try platforms like Coursera or edX.', 'college', 'https://www.coursera.org/');

-- College and college life advice
INSERT INTO seniorbot_chat (author, text, topic, resource_url) VALUES
('Silver', 'Many colleges offer lifelong learning programs for seniors. Check with your local university for opportunities.', 'college', NULL),
('Silver', 'College campuses often host community events, lectures, and workshops open to the public. Explore what is available near you!', 'college', NULL),
('Silver', 'Staying engaged with college life can mean joining alumni groups, attending sports games, or volunteering for campus activities.', 'college', NULL),
('Silver', 'Online courses from colleges and universities are a great way to keep learning from home. Try platforms like Coursera or edX.', 'college', 'https://www.coursera.org/');
