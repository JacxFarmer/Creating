
const cards = [
    {
        title: "The Fool", 
        description: "Exciting and unexpected adventures await you around every corner today. Maybe you'll need to take a blind leap of faith. Try to look at the world through the eyes of a child, with innocence and awe. Be awestruck and enthusiastic and open to possibilities today."
    },
    {
        title: "The Magician",
        description: "You can make things happen in your life if you want it badly enough. Make your life what you want it to be. You are the magician today. Make the magic happen. Transform your life or attitude. Maybe do some home decor and transform your living space too."
    },
    {
        title: "The High Priestess", 
        description: "Trust your intuition today. Slow down and notice the little things. Focus on beauty in all it's wonderful forms. Remember to nurture and value yourself today. Take some time to reflect on the magic that is you. You are powerful and worthy of respect."
    },
    {
        title: "The Emperor", 
        description: "Be constant and trustworthy today. Be in control of your emotions, moods and attitudes. Time for structure and security, respect and authority. Stand tall today, you are the Emperor. Take control, and rule over your own inner and outer life. You are in charge today."
    },
    {
        title: "The Empress", 
        description: "You are gifted with creative and artistic energy today, use it well. The creative force of positive inspiration is with you. Listen to your muse and create. What are the creative things that you enjoy doing? Unleash your creative talent today."
    },
    {
        title: "The Hierophant", 
        description: "Time for conformity. Follow a traditional approach today. Follow the conventions, rules and procedures that are expected of you. Time to keep your head down for a while, and be obedient. Be the person society expects of you today."
    },
    {
        title: "The Lovers", 
        description: "Time for life-changing choices, or possibly a dilemma, so choose wisely. Take charge of your life. Decide for yourself where you want your life to go and take responsibility for your past choices that got you here. Make a list of pros and cons and weigh up your options."
    },
{
title: "The Chariot",
description: "Overcome obstacles and achieve your goals today, be determined and take a firm stance. If you are in a stagnant situation, shake your life up and get it moving forward. You can overcome obstacles. You just need to know where you are going. Get your bearings today."
},
{
title: "Strength",
description: "Have courage and patience today. You are strong. Keep your head, stick to your guns, but remember true strength is only mastered with true compassion. You are powerful. Be your own hero today and show your inner strength. Don't let fear, or self-doubt, hold you back today."
},
{
title: "The Hermit",
description: "Time to pursue wisdom and seek a higher truth. Your answers are within you and around you. Take time to reflect on your life, and trust your intuition. You are wiser than you realise. Some form of meditation might be good today. Be still for a moment. Be your own guru."
},
{
title: "The Wheel of Fortune",
description: "Expect good fortune and expansion today, there could be surprising offers and new opportunities. The day looks bright for you today. Embrace it and enjoy the bounty that life offers you. Don't let an opportunity slip you by. Embrace your good fortune today."
},
{
title: "Justice",
description: "Make use of balanced reasoning and take rational action today. Restore order to your life and your thoughts. You have the right to be you, but you also need self-discipline. Focus on achieving balance and fairness. Balance work with play. Balance your needs with the needs of others."
},
{
title: "The Hanged Man",
description: "Stuck in limbo, with no way forward? You might need to accept a loss for the greater good. Time to let go, and go with the flow. Give in and let life carry you, who knows where you might land up? Trust the universe and let go of control. You'll be okay. You don't need to fight today."
},
{
title: "Death",
description: "This looks like the end of a chapter. Time to grieve, and then put the past in the past and move on. What is over is over, what is done is done. A new dawn comes to build your life afresh and will bring new opportunities."
},
{
title: "Temperance",
description: "Enjoy everything in moderation, but avoid the extremes for now. Be calm and don't make any rash decisions today. Find balance, grace, tolerance and patience. Be open and inclusive. Enjoy the little things. Avoid excess. Avoid an overly passionate response. Be patient today."
},
{
title: "The Devil",
description: "Time to avoid (or overcome) addictions, depression and/or unhealthy relationships. Find balance, self-love and positivity again. Remember who you are, who you want to be and what you really love doing. Create the good reality for yourself. Say 'no' to unhealthy temptations today."
},
{
title: "The Tower",
description: "Here comes an intense and sudden change, a personal crises of sorts. Be strong. You'll get through this and be the better for it. Expect some sort of fall today, maybe a fall from grace. But also, a change might be just what you need. Make use of this wake-up call."
},
{
title: "The Star",
description: "Time for hope and renewal. When you walk through the darkness, you will find light again on the other side. Don't give up. Let the stars guide you through (out of whatever darkness surrounds you) into a new dawn. Follow the starlight. Have hope today and let it light your way forward."
},
{
title: "The Moon",
description: "Don't let fears, nightmares, self-doubt or your negative emotions control you and trap you. There may be a truth you need to reveal. Find your real truth. Try to see yourself and your life clearly, and see things as they really are. Get a realistic perspective. Free yourself today."
},
{
title: "The Sun",
description: "Good things are on the way today. Expect good fortune, happiness, joy and harmony. You are blessed. Things are looking bright for you today. Appreciate what you have. Shine your light on the world and bring the warmth today."
},
{
title: "Judgement",
description: "Time to weigh your actions, and make new choices. Face consequences, and own your karma. Take stock of your life. Exercise your judgement. Make your own personal assessments. Decide what is wanting in you, and make personal changes."
},
{
title: "The World",
description: "Now you can reap the rewards of your hard work. You are in the right place at the right time, and you are doing the right thing. Well done. Congratulations. Your life is on track. You are an inspiration to us all. The world is at your feet."
},
{
title: "Ace of Wands (Fire)",
description: "Now is the time to be creative, to have enthusiasm, to come up with new ideas, and to get a fresh perspective. Squeeze those lemons and make lemonade. Unleash your passion and add your own sparkle to things. You are the creative magic today. Bring it on."
},
{
title: "Two of Wands",
description: "Claim your personal power, make good decisions and make them for yourself. You are in control of your life. You have all the power you need to take control of your destiny. Claim your power and take responsibility. Maybe consider travel options. Adventure awaits you."
},
{
title: "Three of Wands",
description: "Move forward with your life, feel free to explore, take a leadership stance, create your own reality with a positive attitude. You are free to be you. Don't imprison yourself in expectations. Allow yourself the freedom you crave and explore some new options."
},
{
title: "Four of Wands",
description: "Time for some celebration, home-coming, and excitement in your life. Embrace and celebrate your community and your life today. Don't let this be just another day as normal. Take time to party, laugh and celebrate. Crack open some champagne. Life is too short not to celebrate this day."
},
{
title: "Five of Wands",
description: "You face rivalry, disagreements, competition, or a challenge today. Remember who you are and what you want, and follow your intuition. You are powerful when you speak your truth. Choose your words and actions carefully today and make them count."
},
{
title: "Six of Wands",
description: "You deserve some recognition, a victory, or a triumph today. This is your time to shine. Well done and congratulations on your many achievements. Enjoy every victory, even the small ones. You are doing a great job."
},
{
title: "Seven of Wands",
description: "Time to show some determination, have strong conviction and a strong will today. You are powerful and others can't mess with you. You know who you are. Stay true to yourself. It is time to fight for what you know is right. Stick to your principles or go with your gut."
},
{
title: "Eight of Wands",
description: "A time for quick action, excitement, receiving news. Your life is buzzing with excitement today. Here comes the rollercoaster of life, hold on tight. This is an exciting day, and an exciting time, to be alive."
},
{
title: "Nine of Wands",
description: "Time to show your stamina, courage and perseverance. Push through this and it'll be worthwhile. Don't give up now. Push on. Show backbone. Keep going. Have courage. Don't back down. You are on the right track."
},
{
title: "Ten of Wands",
description: "You might feel overextended, that life is a struggle, and maybe you are feeling burdened. Take it one step at a time. Just one step every day and eventually you will have climbed the mountain. You are going to get through this. Remember to enjoy the small things along the way."
},
{
title: "Page of Wands",
description: "Nurture your creative confidence, your cheerfulness, and an outgoing mindset today. The world is your playground. Cash in on every moment. Put a smile on that face. Bring on the cheerleader today. Be creative, be be creative."
},
{
title: "Knight of Wands",
description: "Be your charming, self-confident and passionate self (or alter ego) today. Live it up like James Bond or Prince Charming, at least for one day. I dare you. Be sauve and charming today. Ooze self-confidence. Sometimes you have to fake it till you make it."
},
{
title: "Queen of Wands",
description: "Be whole-hearted, fiery, passionate and self-assured today. You are awesome. The world is yours today. Show that inner fire. Unleash your passion like an Italian. Show your true personality. Don't hold back. Put your heart into today."
},
{
title: "King of Wands",
description: "Be protective, magnetic, innovative and inspiring today. Lead the way and be an awesome leader. Time to shine and know your self-worth. You are a magnet that draws others to you. You are a force to be reckoned with. Come up with some brilliant ideas and wow them all today."
},
{
title: "Ace of Cups (Water)",
description: "It's time for freedom, fulfillment, and new beginnings. Shake off those chains, and create your life as you want it to be. You are free. You are your own person. Your life should be fulfilling. Maybe it is time to start over. Explore new horizons today."
},
{
title: "Two of Cups",
description: "Today focus on your happiness, nurture your relationships, and enjoy and celebrate love in your life. Or bring a new love into your life. Focus on your relationships and spend some time making them even better. What is your love language? Read up on it."
},
{
title: "Three of Cups",
description: "A time for celebration, for good conversation, and for reunions. Get out there and socialise. Friends and family matter, so show them that they matter to you. Call those special people and have a get together. Make some social plans today."
},
{
title: "Four of Cups",
description: "Stuck, depression, or missed opportunities. Today is a downer, but you can turn this around. We all get stuck or down sometimes. But remember life awaits you, just around the corner. Take a risk and make good things happen today. Get out of this rut."
},
{
title: "Five of Cups",
description: "Loneliness, sadness, or loss. Life is hard at times like this. Make an effort to connect. You don't have to be alone in this. Remember there is always light at the end of every dark tunnel. Make an effort today. Pamper yourself. Indulge yourself. Eat your favorite food."
},
{
title: "Six of Cups",
description: "Now is the time to be carefree, playful and nostalgic. Let yourself live. Breathe deeply. Remember the good times. Feel the sun on your face. Enjoy good music. Allow yourself to be carefree and playful today. Giggle like a school-girl. Crank up the tunes and let your hair down."
},
{
title: "Seven of Cups",
description: "Today offers you an abundance of choices and opportunities. You are blessed to have choices and opportunuties, so make the most of them today and embrace the life that is meant for you. Don't miss this opportunity. Grab life. Make good choices today."
},
{
title: "Eight of Cups",
description: "A card for travel, letting go, abandonment. Explore new horizons. Find adventure. Let life carry you to new places and new people. Be a new you. Re-create yourself or your life. Start fresh. Be reborn. This is a new dawn for you."
},
{
title: "Nine of Cups",
description: "Today you have great karma, prosperity, dreams fulfilled. You deserve the best. You have reached for the stars and attained your goals. Take time to enjoy this moment and all your achievements. You are a super star. You are awesome."
},
{
title: "Ten of Cups",
description: "This is a time of harmony, happiness, family reunions. Enjoy this sweet and special time with friends and family. You deserve it. Surround yourself with love. You got it good. Family is what life is really about, the family you are born with and the family you choose."
},
{
title: "Page of Cups",
description: "This is a day for good news, idealism, youthfulness. Innocence is a blessing, embrace your inner child. Let yourself go. Free yourself from judgement, sarcasm and oppression and just be happy to be you today. Remember when you still believed? Get back that idealism."
},
{
title: "Knight of Cups",
description: "This is the time to follow your heart, accept invitations, let in some romance. Dance under the moonlight, walk along a beach, watch a sunset, listen to a great band play. What is your heart telling you? Listen to your heart today and be happy."
},
{
title: "Queen of Cups",
description: "Embrace kindness, your feminine side and your sensitivity. Nurture yourself and others today. Be warm and kind, and notice people who need your help. Cultivate caring. You have a gentle side. Let it show. Be kind to yourself today."
},
{
title: "King of Cups",
description: "Embrace your wisdom, be on the look out for good advice, and explore your creativity today. Seek the wisdom in you and around you. Ask others what they think. Ask for advice and take time to listen. Every king needs good councillors."
},
{
title: "Ace of Swords (Air)",
description: "This is the time for mental clarity, sound decision-making, good communication skills and possibly a breakthrough. Be focussed and intentional, and go for it. Take time to really think things through today. Know what you are talking about. Do your research."
},
{
title: "Two of Swords",
description: "You are at a cross-roads, or a stalemate. Time to use your head, and find your way through this. Make use of mental clarity and good communication skills. Be focussed today. Two roads diverged in a yellow wood. Maybe read the poem 'The Road Not Taken' by Robert Frost. Get inspired today."
},
{
title: "Three of Swords",
description: "This is a time for sadness, heartbreak, grief. Get out the tissues and watch a sad movie, and know you are not alone. Call up a friend and cry on a caring shoulder. There is no love without some heartbreak. It is the price we must pay for the magic of love."
},
{
title: "Four of Swords",
description: "This is a time of chaos, anxiety, chronic stress. You need to find balance in your life, make time for things that you enjoy doing, nurture yourself and a positive outlook. Too much stress is bad for your health. You need a better balance. Speak up and ask for what you need."
},
{
title: "Five of Swords",
description: "This is a time of arguments, conflicts, battles. You are a warrior, and we must all fight back sometimes. Focus on mental clarity and good communication. Think before you speak. Is this what you really want? Keep sight of the things that matter."
},
{
title: "Six of Swords",
description: "This is a time for letting go, forgiveness, healing, and moving on. Time to heal those wounds. Nature and meditation will help you heal yourself. Get some exercise. Enjoy the outdoors. See the beauty around you and in you. Close your fist tight and then open it slowly, to gesture a letting go."
},
{
title: "Seven of Swords",
description: "Be on the look out for deceit, dishonesty, or manipulation today. Use your mental clarity and stay focussed. If things don't add up, ask why. Communicate your concerns. You deserve honesty. Be honest with yourself. Are you being manipulated? Get some clarity today."
},
{
title: "Eight of Swords",
description: "You face hopelessness, feeling stuck or feeling unproductive today. Take heart, have courage, and be your own angel. Make things happen for you. We all feel stuck or unproductive or hopeless at times. You'll get through this. You are worth so much more than you realise."
},
{
title: "Nine of Swords",
description: "You face anxiety, despair, hopelessness. You can turn this around, but you need to find a positive way forward. There is a way out, so find it. Be brave. You deserve more than this. Don't despair. It'll come right if you set your heart and mind to making things better."
},
{
title: "Ten of Swords",
description: "You face betrayal, failure, or a mental crises. Remember every failure brings you closer to success. A broken bone heals up even stronger than before, and so will you. Stay positive. You need this change, this wake-up call. You are going to get through this and be even stronger."
},
{
title: "Page of Swords",
description: "Today is a day to go forward with confidence, youthfulness, energy and positivity. Shine your light on the world around you, and make it a better place just by being you. Be the change you want to see in the world. Bring the sunshine today."
},
{
title: "Knight of Swords",
description: "This is the day to show tenacity, bravery, and accomplishment. Believe in yourself. Act with confidence and grace. Hold your head high and put your shoulders back, stand tall. Be tenacious and charming today. Persist. Insist. Persevere. You are worth it."
},
{
title: "Queen of Swords",
description: "Today you need to show empathy, support and compassion. Cultivate a culture of caring in yourself and in the people around you. Consider how others feel and really listen to them today. Show your support for others, and insist on the support you need too."
},
{
title: "King of Swords",
description: "You need to approach today with logic, authority and a lot of mental clarity and stability. Be level-headed and rational in your thinking. Stamp your authority but do it in a balanced and fair way. Earn (and insist on) their respect. You deserve respect."
},
{
title: "Ace of Pentacles (Earth)",
description: "It's your lucky day. Prosperity, abundance, and new beginnings await you. Make the most of today and get your career on the right path. The fates are with you today. Make the most of this good fortune."
},
{
title: "Two of Pentacles",
description: "Today you will need balance, multi-tasking ability, and perseverance. Cultivate patience and soldier through. It will be worth it in the long run. Work hard today. You have a lot to accomplish today."
},
{
title: "Three of Pentacles",
description: "Today is a good day for focused effort, achieving mastery, and cultivating good teamwork. Time to push ahead in your career. Show your skills, your value in the workplace, and your value to your team. Up your skill level. Achieve mastery and financial security."
},
{
title: "Four of Pentacles",
description: "It's time to give up control, cultivate acceptance, and release whatever is bothering you. Let it go. Stop fighting. You won't win this fight. Accept the things you cannot change with serenity. What will be, will be. You can't control this. Cultivate acceptance."
},
{
title: "Five of Pentacles",
description: "Today is a day for struggle, or financial hardship. How are you choosing to spend your money, time and/or energy? Are you getting valuable returns on your money, time and/or energy inputs? Avoid unnecessary spending and expect more value in return."
},
{
title: "Six of Pentacles",
description: "Today could bring you prosperity, generosity, shared wealth. What goes around, comes around. Sometimes we make good karma, and other times we cash in on our good karma. Be generous with your resources and others will be generous with you in return."
},
{
title: "Seven of Pentacles",
description: "Focus on your long term goals today. Aim for long-term success. This will take planning and perseverance. Set your goals and plan out how you will attain them. Do some serious brainstorming today. Make those long term plans."
},
{
title: "Eight of Pentacles",
description: "Work on bettering your skills today. It's a day for diligence, ambition, talent, crafts. Work on mastering your skills and talents. Maybe develop a new skill, learn something that you have always wanted to learn. You are more talented than you think. Put that ambition to work."
},
{
title: "Nine of Pentacles",
description: "Cultivate social elegance today. It's a day to work on your refinement, independence, prosperity. Put on a business suit and gel your hair, you need to look and feel good. Maybe it is time to branch out on your own. Show your competence and independence."
},
{
title: "Ten of Pentacles",
description: "Wealth is on the cards for you. This might be an inheritance, or a rich family life (which is also a form of wealth), or real affluence. Don't take your good fortune for granted. Give back to your family and community. Invest well for the long term."
},
{
title: "Page of Pentacles",
description: "Today you need to demonstrate loyalty, stick to your goals, and approach life with great practicality. Keep your feet on the ground and your head screwed on straight. Be sensible and practical today. Show loyalty, and expect loyalty in return."
},
{
title: "Knight of Pentacles",
description: "This is a day for self-improvement, consistency, and a strong will. Time to better yourself, or your skills, or your job. Time to sort yourself out. Use that will power to make good. Focus on bettering your position in life and going up in the world."
},
{
title: "Queen of Pentacles",
description: "Nurture your intuitive healing ability today, be down-to-earth, be nurturing, and show gratitude. What are all the things you are grateful for? Write a list. Be honest with yourself and speak your truth. Be humble and admit your faults. Be caring. Heal yourself and others."
},
{
title: "King of Pentacles",
description:"This is the time for enterprise, stability, abundance. Make things happen in your career. Time to work hard and get ahead. Life is good and you are good at it. Make use of your skills. Cash in on your talents and make money."
}
];

const buttonPushed = function() {
    let tarotCard = Math.floor(Math.random() * cards.length + 1);
    let card = cards[tarotCard];

    document.getElementById("title").innerHTML = card.title;
    document.getElementById("description").innerHTML = card.description;
};
