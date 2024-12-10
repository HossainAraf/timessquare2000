import ReadMore from '../shared/ReadMore';

const generateRandomId = () => crypto.randomUUID();

function BangladeshTourism() {
  const stories = [
    {
      id: crypto.randomUUID(),
      title: 'The Significance of Genuine Tour Guides in Today\'s World',
      className: 'Tour-guide-story',
      content: [
        <p key={generateRandomId()}>
          Tourism, the mystical dimension of Islam,
          offers seekers a path to
          divine love and e
          nlightenment.
          At its core, Tourism
          is a journey of self-purification and connection with
          Allah, guided by
          a mentor, the
          Murshid.
        </p>,

        <p key={generateRandomId()}>
          Many Tariqahs exist,
          each with unique practices and insights.
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

export default BangladeshTourism;
