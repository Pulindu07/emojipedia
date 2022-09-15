// import mongoose, { Schema } from "mongoose";
// // const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://admin-pulindu:Pulli269@cluster0.2vtgg4r.mongodb.net/emojiDB", { useNewUrlParser: true });
// const emojiSchema = {
//     key: Number,
//     emoji: String,
//     name: String,
//     meaning: String
// }

// const Emoji = new mongoose.model("Emoji", emojiSchema);

// const emojiOne = new Emoji({
//     key: 1,
//     emoji: "💪",
//     name: "Tense Biceps",
//     meaning:
//         "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."

// });

// emojiOne.save();

const emojipedia = [
    {
        id: 1,
        emoji: "💪",
        name: "Tense Biceps",
        meaning:
            "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
    },
    {
        id: 2,
        emoji: "🙏",
        name: "Person With Folded Hands",
        meaning:
            "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
    },
    {
        id: 3,
        emoji: "🤣",
        name: "Rolling On The Floor, Laughing",
        meaning:
            "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
    },
    {
        id: 4,
        emoji: "😀",
        name: "Grinning Face",
        meaning:
            "The happy smiling face is one of the most common emojis and universally applicable: you just want to say hello, express joy or excitement about something or brighten up a short text."
    },
    {
        id: 5,
        emoji: "😃",
        name: "Smiling Face With Open Mouth",
        meaning:
            "Typical smiley face with open mouth and oval eyes. Is in a positive mood, shows its teeth and laughs cheerfully. Expresses enthusiasm: from a cheerful greeting to boundless joy"
    },
    {
        id: 6,
        emoji: "🥳",
        name: "Face with party blower and party hat",
        meaning:
            "That was a wild party or “Let's celebrate“. No matter what joyful event is in view, it will be celebrated appropriately. May also stand for the carnival season."
    }
];

export default emojipedia;