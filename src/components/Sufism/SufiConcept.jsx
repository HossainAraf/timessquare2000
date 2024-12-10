import ReadMore from '../shared/ReadMore';
import '../../styles/sufi-concept.css';

const generateRandomId = () => crypto.randomUUID();

function SufiConcept() {
  const stories = [
    {
      id: crypto.randomUUID(),
      title: 'The Significance of Genuine Sufi Guides in Today\'s World',
      className: 'sufi-guide-story',
      content: [
        <p key={generateRandomId()}>
          Sufism, the mystical dimension of Islam,
          offers seekers a path to
          divine love and e
          nlightenment.
          At its core, Sufism
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
      title: 'Another Sufi Story for Testing',
      className: 'sufi-story-test',
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
    <div className="sufi-concept">
      <h1>Concept of Sufism</h1>
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

export default SufiConcept;
