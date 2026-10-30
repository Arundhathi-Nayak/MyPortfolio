import { Section } from './Sections';

const focus = [
  {
    term: 'Problem-solving',
    detail: 'I like understanding a problem properly before choosing how to solve it.',
  },
  {
    term: 'Continuous learning',
    detail: 'New tools and ideas are part of the work, and I pick them up by building with them.',
  },
  {
    term: 'Practical applications',
    detail: 'I care about software that is clear, dependable and useful to the people using it.',
  },
];

export function About() {
  return (
    <Section id="about" title="About">
      <div className="about">
        <div className="about__text">
          <p>
            I'm a software developer with a strong interest in web applications and AI-powered solutions. I enjoy
            the full loop of building something: understanding the problem, shaping the interface, and making it
            work reliably.
          </p>
          <p>
            Projects like HealthGrid AI are where I do my best learning, because they start with a real need and
            have to hold up outside a tutorial. I'm looking for a team where I can keep building, keep learning,
            and contribute to software that matters.
          </p>
        </div>

        <dl className="about__focus">
          {focus.map((item) => (
            <div key={item.term} className="about__row">
              <dt>{item.term}</dt>
              <dd>{item.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}