-- Migration: Add basic greetings for all bots
INSERT INTO chat_messages (author, text, topic) VALUES
  ('Anna', 'Hello! How are you today?', 'greeting'),
  ('Anna', 'Hi there! How can I help you?', 'greeting');

INSERT INTO entertainmentbot_chat (author, text, topic) VALUES
  ('Donna', 'Hello! Ready for some fun?', 'greeting'),
  ('Entertainment Bot', 'Hi! Want to play a game or hear a joke?', 'greeting');

INSERT INTO friendbot_chat (author, text, topic) VALUES
  ('Shaunia', 'Hello! How are you feeling today?', 'greeting'),
  ('Shaunia', 'Hi! I am here to chat anytime.', 'greeting');

INSERT INTO mrnanny_chat (author, text, topic) VALUES
  ('Mr. Nanny', 'Hello! How can I help with your career today?', 'greeting'),
  ('Mr. Nanny', 'Hi! Need job advice or resume tips?', 'greeting');

INSERT INTO relocationbot_chat (author, text, topic) VALUES
  ('Relocation Bot', 'Hello! Where are you moving to?', 'greeting'),
  ('Relocation Bot', 'Hi! Need city info or relocation tips?', 'greeting');

INSERT INTO seniorbot_chat (author, text, topic) VALUES
  ('Silver', 'Hello! How are you today?', 'greeting'),
  ('Silver', 'Hi! Need wellness or community support?', 'greeting');

INSERT INTO artistbot_chat (author, text, topic) VALUES
  ('William', 'Hello! Want to talk about art?', 'greeting'),
  ('William', 'Hi! Ask me anything about creativity.', 'greeting');
