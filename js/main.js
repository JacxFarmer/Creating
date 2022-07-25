
const cards = [
    {
        title: "The Fool", 
        description: "Exciting and unexpected new adventures await around every corner. Maybe you'll need to take a blind leap of faith today. Try to look at the world through the eyes of a child, with innocence and awe."
    },
    {
        title: "The Magician",
        description: "You can make things happen in your life if you want to. Use your will power, or follow your desires. Make your life what you want it to be. You are the magician today."
    },
    {
        title: "The High Priestess", 
        description: "Listen to your intuition today, slow down and notice the flowers. Focus on beauty in all it's wonderful forms. Remember to nurture and value yourself today. Take some time to reflect on the magic that is you. You are powerful and worthy of respect."
    },
    {
        title: "The Emperor", 
        description: "Be constant and trustworthy, you are in control of your emotions. Time for structure and security, respect and authority. Stand tall today."
    },
    {
        title: "The Empress", 
        description: "You are gifted with creative and artistic energy today, use it well. The creative force of positive inspiration is with you. Listen to your muse and create."
    },
    {
        title: "The Hierophant", 
        description: "Time for conformity. Follow a traditional approach today. Follow the conventions, rules and procedures. Time to keep your head down for a while."
    },
    {
        title: "The Lovers", 
        description: "Time for life-changing choices, or possibly a dilemma, so choose wisely. Take charge of your life. Decide for yourself where you want your life to go and take responsibility for your choices. You got this."
    },
{
title: "The Chariot",
description: "Overcome obstacles and achieve your goals today, be determined and take a stance. If you are in a stagnant situation, shake life up. Put that will power to work."
},
{
title: "Strength",
description: "Have courage and patience today. Keep your head, stick to your guns, but remember true strength is only mastered with true compassion."
},
{
title: "The Hermit",
description: "Time to pursue wisdom and seek a higher truth. Your answers are already within you. Take time to reflect on your life, and trust your intuition. Some form of meditation might be good."
},
{
title: "The Wheel of Fortune",
description: "Expect good fortune and expansion today, there could be surprising offers and new opportunities. The day looks bright for you today. Embrace it."
},
{
title: "Justice",
description: "Make use of balanced reasoning in order to take rational action today. Restore order to your life and your thoughts. You have the right to be you, but you also need to have self-discipline."
},
{
title: "The Hanged Man",
description: "Stuck in limbo, with no way forward? You might need to accept a loss for the greater good. Time to let go and go with the flow. Give in and let life carry you, who knows where you might land up? Trust the universe."
},
{
title: "Death",
description: "This looks like the end of a chapter. Time to grieve, and then put the past in the past and move on. What is over is over, what is done is done. A new dawn comes to build your life afresh and will bring new opportunities."
},
{
title: "Temperance",
description: " Enjoy everything in moderation, but avoid the extremes for now. Be calm and don't make any rash decisions. Find balance, grace, tolerance and patience. Enjoy the little things."
},
{
title: "The Devil",
description: " Time to avoid (or overcome) addictions, depression and unhealthy relationships. Find balance, self-love and positivity again. Remember who you are, who you want to be and what you love. Create the good reality for yourself."
},
{
title: "The Tower",
description: "Here comes an intense and sudden change, a personal crises of sorts. Be strong. You'll get through this and be the better for it."
},
{
title: "The Star",
description: "Time for hope and renewal. When you walk through the darkness, you will find the light again on the other side. Don't give up. Let the stars guide your way through and out, into a new dawn."
},
{
title: "The Moon",
description: "Don't let your fears, your imagination, or your emotions control you. There may be a truth you need to reveal. Find it. Find your truth. Try to see yourself and your life clearly and see things as they really are."
},
{
title: "The Sun",
description: "Good things are on the way today. Expect good fortune, happiness, joy and harmony. You are blessed. Appreciate what you have."
},
{
title: "Judgement",
description: "Time to weigh your actions, and make new choices. Face consequences, and own your karma. Take stock of your life. You can do this."
},
{
title: "The World",
description: "Now you can reap the rewards of your hard work, you are in the right place and doing the right thing. Well done. Congratulations. You are an inspiration."
},
{
title: "Ace of Wands (Fire)",
description: "Now is the time to be creative, to have enthusiasm, to come up with new ideas, and to get a fresh perspective. Seize the day."
},
{
title: "Two of Wands",
description: "Claim your personal power, make good decisions and make them for yourself. You are in control of your life. Take responsibility. Maybe consider travel options. Adventure awaits."
},
{
title: "Three of Wands",
description: "Move forward with your life, feel free to explore, take a leadership stance, create your own reality with a positive attitude. You are free to be you."
},
{
title: "Four of Wands",
description: "Time for some celebration, home-coming, and excitement in your life. Embrace and celebrate life today. Go for it."
},
{
title: "Five of Wands",
description: "You face rivalry, disagreements, competition, or a challenge today. Remember who you are and what you want, and follow your intuition. You are powerful when you speak your truth."
},
{
title: "Six of Wands",
description: "You deserve some recognition, a victory, a triumph. This is your time to shine. Well done and congratulations on your achievements."
},
{
title: "Seven of Wands",
description: "Time to show some determination, have strong conviction and a strong will today. You are powerful and others can't mess with you. You know who you are."
},
{
title: "Eight of Wands",
description: "A time for quick action, excitement, receiving news. Your life is buzzing with excitement. Here comes the rollercoaster of life, hold on tight."
},
{
title: "Nine of Wands",
description: "Time to show your stamina, courage and perseverance. Push through this and it'll be worthwhile. Don't give up now."
},
{
title: "Ten of Wands",
description: "You might feel overextended, that life is a struggle, and maybe you are feeling burdened. Life is not always easy. Remember to enjoy the small things along the way, and keep hopeful. Better times are around the corner."
},
{
title: "Page of Wands",
description: "Nurture your creative confidence, your cheerfulness, and an outgoing mindset today. The world is your playground. Enjoy every moment."
},
{
title: "Knight of Wands",
description: "Be your charming, self-confident and passionate self (or alter ego) today. Live it up like James Bond or Prince Charming, at least for one day. I dare you."
},
{
title: "Queen of Wands",
description: "Be whole-hearted, fiery, passionate and self-assured today. You are awesome. The world is yours to rule today."
},
{
title: "King of Wands",
description: "Be protective, magnetic, innovative and inspiring today. Lead the way and be an awesome leader. Time to shine and know your self-worth."
},
{
title: "Ace of Cups (Water)",
description: "It's time for freedom, fulfillment, and new beginnings. Shake off those chains, and create your life as you want it to be. You are free."
},
{
title: "Two of Cups",
description: "Today focus on your happiness, nurture your relationships, and enjoy and celebrate love in your life. Or bring a new love into your life. The time to be happy is now."
},
{
title: "Three of Cups",
description: "A time for celebration, for good conversation, and for reunions. Get out there and socialise. Friends and family matter, so show them that they matter to you."
},
{
title: "Four of Cups",
description: "Stuck, depression, or missed opportunities. Today is a downer, but you can turn this around. Life awaits you just around the corner. Take a risk and make good things happen."
},
{
title: "Five of Cups",
description: "Loneliness, sadness, or loss. Life is hard at times like this. Make an effort to connect. You don't have to be alone in this. Remember there is always light at the end of every tunnel."
},
{
title: "Six of Cups",
description: "Now is the time to be carefree, playful and nostalgic. Let yourself live. Breathe deeply. Feel the sun on your face. Enjoy the music."
},
{
title: "Seven of Cups",
description: "Today offers you an abundance of choices and opportunities. You are blessed to have choices and opportunuties, so make the most of them today and embrace the life that is meant for you."
},
{
title: "Eight of Cups",
description: "A card for travel, letting go, abandonment. Explore new horizons. Find adventure. Let life carry you to new places and new people. Be a new you."
},
{
title: "Nine of Cups",
description: "Today you have great karma, prosperity, dreams fulfilled. You deserve the best. You have reached for the stars and attained your goals. Take time to enjoy this moment and all your achievements."
},
{
title: "Ten of Cups",
description: "This is a time of harmony, happiness, family reunions. Enjoy this sweet and special time with friends and family. You deserve it."
},
{
title: "Page of Cups",
description: "This is a day for good news, idealism, youthfulness. Innocence is a blessing, embrace your inner child. Let yourself go. Free yourself from judgement, sarcasm and oppression and just be happy today."
},
{
title: "Knight of Cups",
description: "This is the time to follow your heart, accept invitations, let in some romance. Dance under the moonlight, walk along a beach, watch a sunset, listen to a great band play."
},
{
title: "Queen of Cups",
description: "Embrace kindness, your feminine side and your sensitivity. Nurture yourself and others today. Be warm and kind, and notice people who need your help. Cultivate caring."
},
{
title: "King of Cups",
description: "Embrace your wisdom, be on the look out for good advice, and explore your creativity today. Rule your world like a graceful and benevolent but powerful and respected king."
},
{
title: "Ace of Swords (Air)",
description: "This is the time of mental clarity, sound decision-making, good communication skills and possibly a breakthrough. Be focussed and intentional, and go for it."
},
{
title: "Two of Swords",
description: "You are at a cross-roads, or a stalemate. Time to use your head, and find your way through. Make use of mental clarity and good communication. Be focussed today."
},
{
title: "Three of Swords",
description: "This is a time for a sadness, heartbreak, grief. Get out the tissues and watch a sad movie, and know you are not alone. Call up a friend and cry on a caring shoulder."
},
{
title: "Four of Swords",
description: "This is a time of chaos, anxiety, chronic stress. You need to find balance in your life, make time for things you enjoy doing, and nurture a positive outlook."
},
{
title: "Five of Swords",
description: "This is a time of arguments, conflicts, battles. You are a warrior, and you will survive to live a better day. Focus on mental clarity and good communication."
},
{
title: "Six of Swords",
description: "This is a time for letting go, forgiveness, healing, and moving on. Time to heal those wounds. Nature and meditation will help you heal. See the beauty around you and in you."
},
{
title: "Seven of Swords",
description: "Be on the look out for deceit, dishonesty, or manipulation today. Use your mental clarity and stay focussed. If things don't add up, ask why. Communicate your concerns."
},
{
title: "Eight of Swords",
description: "You face hopelessness, feeling stuck or feeling unproductive today. Take heart, have courage, and be your own angel. Make things happen for you."
},
{
title: "Nine of Swords",
description: "You face anxiety, despair, hopelessness. You can turn this around, but you need to find a positive way forward. There is a way out, so find it. You deserve more than this."
},
{
title: "Ten of Swords",
description: "You face betrayal, failure, or a mental crises. Remember every failure brings you closer to success. A broken bone heals up even stronger than before and so will you. Stay positive."
},
{
title: "Page of Swords",
description: "Today is a day to go forward with confidence, youthfulness, energy and positivity. Shine your light on the world around you, and make it a better place just by being you."
},
{
title: "Knight of Swords",
description: "This is the day to show tenacity, bravery, and accomplishment. Believe in yourself. Act with confidence and grace. Hold your head high and put your shoulders back, stand tall, chin up."
},
{
title: "Queen of Swords",
description: "Today you need to show empathy, support and compassion. Cultivate a culture of caring in yourself and in the people around you. Consider how others feel and really listen to them today."
},
{
title: "King of Swords",
description: "You need to approach today with logic, authority and a lot of mental clarity and stability. Be level-headed and rational in your thinking. Stamp your authority but do it in a balanced way."
},
{
title: "Ace of Pentacles (Earth)",
description: "It's your lucky day. Prosperity, abundance, and new beginnings await you. Make the most of today and get your career on the right path."
},
{
title: "Two of Pentacles",
description: "Today you will need balance, multi-tasking ability, and perseverance. Cultivate patience and soldier through. It will be worth it in the long run."
},
{
title: "Three of Pentacles",
description: "Today is a good day for focused effort, achieving mastery, and cultivating good teamwork. Time to push ahead in your career and show your value in the workplace."
},
{
title: "Four of Pentacles",
description: "It's time to give up control, cultivate acceptance, and release whatever is bothering you. Let it go. You won't win this fight, but you will live to fight another day."
},
{
title: "Five of Pentacles",
description: "Today is a day for struggle, or financial hardship. Be cautious today. There are difficult challenges ahead and life won't be easy. But remember that life goes in cycles, and better times will come around again."
},
{
title: "Six of Pentacles",
description: "This is a lucky day for you. It could bring you prosperity, generosity, shared wealth. Things are looking good for you right now."
},
{
title: "Seven of Pentacles",
description: "Focus on your long term goals today. Aim for long-term success. This will take planning and perseverance. Set your goals and plan out how you will attain them. Do some serious brainstorming today."
},
{
title: "Eight of Pentacles",
description: "Work on bettering your skills today. It's a day for diligence, ambition, talent, crafts. Work on mastering your skills and talents. Maybe develop a new skill, learn something that you have always wanted to learn."
},
{
title: "Nine of Pentacles",
description: "Cultivate social elegance today. It's a day to work on your refinement, independence, prosperity. Put on a suit and gel back your hair, you need to look and feel good. Maybe it is time to branch out on your own."
},
{
title: "Ten of Pentacles",
description: "Wealth is on the cards for you. This might be an inheritance, or a rich family life (which is also a form of wealth), or real affluence. You are going up in the world."
},
{
title: "Page of Pentacles",
description: "Today you need to demonstrate loyalty, stick to your goals, and approach life with great practicality. Keep your feet on the ground and your head screwed on straight. Be sensible and practical."
},
{
title: "Knight of Pentacles",
description: "This is a day for self-improvement, consistency, and a strong will. Time to better yourself, or your skills, or your job. Time to sort yourself out."
},
{
title: "Queen of Pentacles",
description: "Nurture your intuitive healing ability today, be down-to-earth, be nurturing, and show gratitude. What are all the things you are grateful for? Write a list."
},
{
title: "King of Pentacles",
description:"This is the time for enterprise, stability, abundance. Make things happen in your career. Time to work hard and get ahead. Life is good and you are good at it."
}
];

const buttonPushed = function() {
    let tarotCard = Math.floor(Math.random() * cards.length + 1);
    let card = cards[tarotCard];

    document.getElementById("title").innerHTML = card.title;
    document.getElementById("description").innerHTML = card.description;
};
