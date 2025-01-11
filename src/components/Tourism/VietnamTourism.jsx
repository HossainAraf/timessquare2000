/* eslint-disable max-len */
import ReadMore from '../shared/ReadMore';

const generateRandomId = () => crypto.randomUUID();

function VietnamTourism() {
  const stories = [
    {
      id: crypto.randomUUID(),
      title: ' WHY VIETNAM SHOULD BE YOUR NEXT ADVENTURE',
      className: 'Tour-guide-story',
      content: [
        <p key={generateRandomId()}>
          Vietnam: A Captivating Destination for Every Traveler
          Nestled in the heart of Southeast Asia, Vietnam is a land of captivating beauty, rich history, and vibrant culture. Whether you&apos;re an adventurer seeking thrilling experiences, a foodie craving unique flavors, or a wanderer yearning for tranquil landscapes, Vietnam promises an unforgettable journey. Here&apos;s why Vietnam stands out as one of the best destinations for tourists.
        </p>,
        <p key={generateRandomId()}>
          ### A Rich Tapestry of Natural Wonders
          Vietnam boasts a stunning variety of landscapes that cater to every kind of traveler. From the emerald-green rice terraces of Sapa to the surreal limestone karsts of Halong Bay, nature&apos;s artistry is on full display. The Mekong Delta offers a glimpse into the riverine life with its floating markets and lush waterways, while Phong Nha-Ke Bang National Park invites explorers to delve into its ancient caves.
          For beach lovers, the pristine sands of Phu Quoc and the crystal-clear waters of Nha Trang provide a tropical paradise. Meanwhile, the mountainous regions of Da Lat and Ha Giang offer cool retreats and breathtaking vistas.
        </p>,
        <p key={generateRandomId()}>
          ### A Culinary Paradise
          Vietnamese cuisine is renowned worldwide, and for good reason. Each dish is a harmonious balance of flavors, textures, and colors. From the iconic pho and banh mi to the lesser-known delights of bun cha and cao lau, every meal is a culinary adventure.
          Street food is an integral part of the Vietnamese experience. Wander through bustling markets and sample delicacies like fresh spring rolls, sizzling banh xeo, and sweet che desserts. Coffee lovers will revel in Vietnam&apos;s robust coffee culture, especially the unique ca phe sua da (iced coffee with condensed milk) and egg coffee.
        </p>,
        <p key={generateRandomId()}>
          ### A Journey Through History
          Vietnam&apos;s history is as compelling as its landscapes. The ancient town of Hoi An, with its well-preserved architecture, offers a glimpse into the country&apos;s trading past. Hue, the former imperial capital, is home to majestic palaces, tombs, and temples that narrate tales of the Nguyen Dynasty.
          The Cu Chi Tunnels near Ho Chi Minh City and the War Remnants Museum provide insights into the country&apos;s tumultuous past and resilience. Hanoi&apos;s Old Quarter, with its narrow streets and colonial buildings, reflects a fusion of traditional and modern influences.
        </p>,
        <p key={generateRandomId()}>
          ### Warm Hospitality and Vibrant Culture
          Vietnamese people are known for their warm hospitality and friendly demeanor. Travelers often find themselves welcomed with open arms and genuine smiles. Traditional festivals like Tet (Vietnamese Lunar New Year) and the Mid-Autumn Festival showcase the nation&apos;s rich cultural heritage and provide a deeper connection to its customs.
          The country&apos;s vibrant markets, artisan villages, and colorful lantern festivals offer endless opportunities to immerse oneself in the local way of life. For a unique cultural experience, visit the ethnic minority communities in the northern highlands to learn about their traditions and lifestyles.
          ### Affordable Travel
          One of Vietnam&apos;s greatest appeals is its affordability. Budget-conscious travelers can enjoy world-class experiences without breaking the bank. Accommodation ranges from luxurious resorts to budget-friendly hostels, and transportation options like motorbikes, buses, and trains make getting around both easy and economical.
          Street food meals are not only delicious but also incredibly cheap, allowing visitors to savor a variety of dishes without overspending. Souvenirs like handwoven textiles, lacquerware, and traditional conical hats are both beautiful and reasonably priced.
        </p>,

        <p key={generateRandomId()}>
          ### Adventure Awaits
          Vietnam is a playground for adventure enthusiasts. Trek through the rugged terrain of Sapa, kayak in the emerald waters of Halong Bay, or embark on a motorbike journey along the breathtaking Hai Van Pass. Scuba diving, snorkeling, and kitesurfing are popular activities in coastal areas, while caving and rock climbing challenge thrill-seekers in the central and northern regions.
          Vietnam&apos;s charm lies in its ability to offer something for everyone. Its blend of natural beauty, cultural richness, and affordability makes it an irresistible destination for tourists worldwide. Whether you&apos;re exploring bustling cities, relaxing on idyllic beaches, or savoring its incredible cuisine, Vietnam promises memories that will last a lifetime. Plan your trip to this enchanting country, and prepare to be captivated by its wonders.
        </p>,
      ],
    },
    {
      id: crypto.randomUUID(),
      title: 'Another Tour Story for Testing',
      className: 'Tour-story-test',
      content: [
        <p key={generateRandomId()}>
          This is another sample st
          ory to test expand/collapse
          functionality.
          It has multiple para
          graphs for the preview
          Toggle to see the en
          tire content here.
        </p>,
      ],
    },
  ];

  return (
    <div>
      <h1>Concept of Tourism</h1>
      {stories.map((story) => (
        <div key={story.id} className={`story ${story.className}`}>
          <h2>{story.title}</h2>
          <ReadMore>{story.content}</ReadMore>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default VietnamTourism;
