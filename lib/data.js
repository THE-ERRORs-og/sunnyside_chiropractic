import { service1, service2 } from "@/public/services-img";


const doctorData = {
  name: "Dr. Thomas Potigian",
  description : `Dr. Potigian, a Fresno native, has been dedicated to chiropractic care since earning his Doctor of Chiropractic and a Bachelor of Science from Cleveland Chiropractic College, Los Angeles, in 1981. With decades of experience, he has helped thousands of patients—from infants to seniors—achieve better health naturally.
  His "whole-person approach" integrates advanced chiropractic techniques, state-of-the-art protocols, and top-quality natural supplements, including detoxification programs, to support long-term wellness. A firm believer in prevention, he co-authored the best-selling book The World’s Best Kept Health Secret Revealed, educating readers on how chiropractic care can restore health without drugs or surgery.`,
  image: "https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/team-1.webp"
};

const staffMembers = [
  {
    name: "William Elizondo",
    role: "Doctor Assistant",
    image: "https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/team-2.webp",
    description: `Dr. Potigian, a Fresno native, has been dedicated to chiropractic care since earning his Doctor of Chiropractic and a Bachelor of Science from Cleveland Chiropractic College, Los Angeles, in 1981. With decades of experience, he has helped thousands of patients—from infants to seniors—achieve better health naturally.
    His "whole-person approach" integrates advanced chiropractic techniques, state-of-the-art protocols, and top-quality natural supplements, including detoxification programs, to support long-term wellness. A firm believer in prevention, he co-authored the best-selling book The World’s Best Kept Health Secret Revealed, educating readers on how chiropractic care can restore health without drugs or surgery.`,
  },
  {
    name: "Jessica Santana",
    role: "Patient Coordinator & Financial Assistant",
    image: "https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/team-3.webp",
    description: `I’ve had the honor and pleasure of being Dr. Potigian’s assistant for almost 25 years now. My favorite part about my job is interacting with our patients. It truly brings me great joy when I see people getting healthier and feeling pain free through their chiropractic care. When I’m not assisting our patients or the Doctor, I enjoy spending time with my wife, hosting my podcast called “The Geek Side Podcast” or Costuming as characters such as Darth Vader or Jack Sparrow. I know that Chiropractic care has allowed me personally to maintain my health and wellness as I am also a patient of Dr. Potigian.`,
  },
  {
    name: "Charlie",
    role: "Office Assistant",
    image: "https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/charlie-image.png",
    description: `Charlie, our lovable office dog, is always here to welcome you with a wagging tail and a big smile! He takes his role as the "doctor’s assistant" seriously, especially when it comes to helping kids feel relaxed and at ease. Whether he’s offering gentle cuddles or a playful distraction, Charlie makes every visit a little more fun and comforting for patients of all ages.`,
  },
];

const serviceData = [
  {
    id: 1,
    title_id: "chiropractic-care",
    title: "Chiropractic Care",
    description: `Chiropractic care is a natural, drug-free approach to restoring health and wellness. By correcting misalignments in the spine, known as subluxations, chiropractic adjustments help remove interference in the nervous system, allowing the body to heal itself and function optimally.`,
    background_thumbnail: "chiropractic-care.jpg",
    background_video: "chiropractic-care.mp4",
    sub_services: [
      {
        id: 1,
        title: "Chiropractic Adjustments",
        image:"https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/service1.webp",
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus. 

        Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus.
        
        Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus.`,
      },
      {
        id: 2,
        title: "Pediatric Chiropractic Care",
        image:"https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/service2.webp",
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus. 

        Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus.
        
        Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus.`,
      },
    ],
  },
  {
    id: 2,
    title_id: "pain-management-and-treatment",
    title: "Pain Management and Treatment",
    description: `Chiropractic care is a natural, drug-free approach to restoring health and wellness. By correcting misalignments in the spine, known as subluxations, chiropractic adjustments help remove interference in the nervous system, allowing the body to heal itself and function optimally.`,
    background_thumbnail: "pain-management-and-treatment.jpg",
    background_video: "pain-management-and-treatment.mp4",
    sub_services: [
      {
        id: 1,
        title: "Back Pain Treatment",
        image: "https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/service1.webp",
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus. 

        Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus.
        
        Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus.`,
      },
      {
        id: 2,
        title: "Leg Pain Sciatica",
        image: "https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/service2.webp",
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus. 

        Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus.
        
        Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus.`,
      },
      {
        id: 3,
        title: "Neck Pain Treatment",
        image: "https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/service1.webp",
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus. 

        Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus.
        
        Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus.`,
      },
      {
        id: 4,
        title: "Joint Pain Treatment",
        image: "https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/service2.webp",
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus. 

        Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus.
        
        Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus.`,
      },
      {
        id: 5,
        title: "Headache and Migraine Relief",
        image: "https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/service2.webp",
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus. 

        Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus.
        
        Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus.`,
      },
    ],
  },
  {
    id: 3,
    title_id: "injury-treatment",
    title: "Injury Treatment",
    description: `Chiropractic care is a natural, drug-free approach to restoring health and wellness. By correcting misalignments in the spine, known as subluxations, chiropractic adjustments help remove interference in the nervous system, allowing the body to heal itself and function optimally.`,
    background_thumbnail: "injury-treatment.jpg",
    background_video: "injury-treatment.mp4",
    sub_services: [
      {
        id: 1,
        title: "Personal Injury Treatment",
        image: "https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/service1.webp",
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus. 

        Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus.
        
        Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus.`,
      },
      {
        id: 2,
        title: "Sports Injury Treatment",
        image: "https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/service2.webp",
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus. 

        Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus.
        
        Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus.`,
      },
    ],
  },
  {
    id: 1,
    title_id: "specialized-services",
    title: "Specialized Services",
    description: `Chiropractic care is a natural, drug-free approach to restoring health and wellness. By correcting misalignments in the spine, known as subluxations, chiropractic adjustments help remove interference in the nervous system, allowing the body to heal itself and function optimally.`,
    background_thumbnail: "specialized-services.jpg",
    background_video: "specialized-services.mp4",
    sub_services: [
      {
        id: 1,
        title: "Custom Orthotics",
        image: "https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/service1.webp",
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus. 

        Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus.
        
        Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo gravida quam hac risus pharetra elementum malesuada finibus? Varius augue egestas tempor consectetur montes morbi senectus.`,
      },
    ],
  },
];
export { doctorData, staffMembers, serviceData };