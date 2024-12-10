import ReadMore from '../shared/ReadMore';

function SufiConcept() {
  const stories = [
    {
      title: 'The Significance of Genuine Sufi Guides in Today\'s World',
      className: 'sufi-guide-story',
      content: (
        <>
          <p>
            Sufism, the mystical dimension of Islam, offers seekers a path to divine love and
            enlightenment. At its core, Sufism is a journey of self-purification and connection
            with Allah, guided by a mentor, the
            <em>Murshid</em>
            .
          </p>
          <p>The Murshid plays a vital role in a seeker&apos;s spiritual journey.</p>
          <p>Many Tariqahs exist, each with unique practices and insights.</p>
        </>
      ),
    },
    {
      title: 'Another Sufi Story for Testing',
      className: 'sufi-story-test',
      content: (
        <>
          <p>This is another sample story to test expand/collapse functionality.</p>
          <p>It has multiple paragraphs for the preview.</p>
          <p>Toggle to see the entire content here.</p>
        </>
      ),
    },
  ];

  return (
    <div className="sufi-concept">
      <h1>Concept of Sufism</h1>
      {stories.map((story) => (
        <ReadMore
          key={story.title}
          title={story.title}
          className={story.className}
          previewLines={1}
        >
          {story.content}
        </ReadMore>
      ))}
    </div>
  );
}
export default SufiConcept;
