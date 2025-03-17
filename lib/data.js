import { aboutDoctor, charlieImage, jessicaImage, williamImage } from "@/public/team-img";

const doctorData = {
  name: "Dr. Thomas Potigian",
  description : `Dr. Potigian, a Fresno native, has been dedicated to chiropractic care since earning his Doctor of Chiropractic and a Bachelor of Science from Cleveland Chiropractic College, Los Angeles, in 1981. With decades of experience, he has helped thousands of patients—from infants to seniors—achieve better health naturally.
  His "whole-person approach" integrates advanced chiropractic techniques, state-of-the-art protocols, and top-quality natural supplements, including detoxification programs, to support long-term wellness. A firm believer in prevention, he co-authored the best-selling book The World’s Best Kept Health Secret Revealed, educating readers on how chiropractic care can restore health without drugs or surgery.`,
  image: aboutDoctor
};

const staffMembers = [
  {
    name: "William Elizondo",
    role: "Doctor Assistant",
    image: williamImage,
    description: `Dr. Potigian, a Fresno native, has been dedicated to chiropractic care since earning his Doctor of Chiropractic and a Bachelor of Science from Cleveland Chiropractic College, Los Angeles, in 1981. With decades of experience, he has helped thousands of patients—from infants to seniors—achieve better health naturally.
    His "whole-person approach" integrates advanced chiropractic techniques, state-of-the-art protocols, and top-quality natural supplements, including detoxification programs, to support long-term wellness. A firm believer in prevention, he co-authored the best-selling book The World’s Best Kept Health Secret Revealed, educating readers on how chiropractic care can restore health without drugs or surgery.`,
  },
  {
    name: "Jessica Santana",
    role: "Patient Coordinator & Financial Assistant",
    image: jessicaImage,
    description: `I’ve had the honor and pleasure of being Dr. Potigian’s assistant for almost 25 years now. My favorite part about my job is interacting with our patients. It truly brings me great joy when I see people getting healthier and feeling pain free through their chiropractic care. When I’m not assisting our patients or the Doctor, I enjoy spending time with my wife, hosting my podcast called “The Geek Side Podcast” or Costuming as characters such as Darth Vader or Jack Sparrow. I know that Chiropractic care has allowed me personally to maintain my health and wellness as I am also a patient of Dr. Potigian.`,
  },
  {
    name: "Charlie",
    role: "Office Assistant",
    image: charlieImage,
    description: `Charlie, our lovable office dog, is always here to welcome you with a wagging tail and a big smile! He takes his role as the "doctor’s assistant" seriously, especially when it comes to helping kids feel relaxed and at ease. Whether he’s offering gentle cuddles or a playful distraction, Charlie makes every visit a little more fun and comforting for patients of all ages.`,
  },
];

export { doctorData, staffMembers };