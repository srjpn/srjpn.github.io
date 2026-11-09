import { Icon } from '@iconify/react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import ResumeButton from '../components/ResumeButton';
import {
  greetings,
  calculateExperienceYears,
  openSource,
  socialLinks,
  skillsSection,
  SkillBars,
  experience,
  educationInfo,
  projects,
} from '../portfolio';
import { GithubUserType } from '../types';

const NAV = [
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['education', 'Education'],
  ['contact', 'Contact'],
];

const SectionHead = ({ idx, title }: { idx: string; title: string }) => (
  <div className="section-head">
    <span className="idx">{idx}</span>
    <h2>{title}</h2>
  </div>
);

export default function Home({
  githubProfileData,
}: {
  githubProfileData: Partial<GithubUserType> | null;
}) {
  const [first, ...rest] = greetings.name.split(' ');
  const years = calculateExperienceYears();
  const companies = new Set(experience.map((e) => e.company)).size;
  const gh = githubProfileData || {};

  return (
    <>
      <SEO />
      <div className="bg-glow" />
      <div className="bg-grid" />

      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="logo">
            srjpn<span>.dev</span>
          </a>
          <nav className="nav-links">
            {NAV.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className={id === 'contact' ? 'keep' : ''}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <div className="wrap hero">
          <span className="eyebrow">
            <span className="dot" /> Senior Software Engineer
          </span>
          <h1>
            {first} <em>{rest.join(' ')}</em>
          </h1>
          <p className="lead">{greetings.description}</p>
          <div className="actions">
            <a className="btn primary" href="#contact">
              Get in touch
            </a>
            <a
              className="btn"
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="mdi:github" width="18" /> GitHub
            </a>
            <a
              className="btn"
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="mdi:linkedin" width="18" /> LinkedIn
            </a>
            {greetings.generateResume && <ResumeButton />}
          </div>
          <div className="stats">
            <div className="stat">
              <b>{years}+</b>
              <span>Years building software</span>
            </div>
            <div className="stat">
              <b>{companies}</b>
              <span>Companies across product &amp; consulting</span>
            </div>
            <div className="stat">
              <b>{projects.length}</b>
              <span>Products shaped end to end</span>
            </div>
          </div>
        </div>

        <section className="block" id="skills">
          <div className="wrap">
            <SectionHead idx="01" title={skillsSection.title} />
            <div className="section-sub">{skillsSection.subTitle}</div>
            <div className="grid-3">
              {skillsSection.data.map((group, i) => (
                <Reveal key={group.title} delay={i * 80}>
                  <div className="card" style={{ height: '100%' }}>
                    <h3>{group.title}</h3>
                    <ul>
                      {group.skills.map((s, j) => (
                        <li key={j}>{s}</li>
                      ))}
                    </ul>
                    <div className="chips">
                      {group.softwareSkills.map((s) => (
                        <span className="chip" key={s.skillName}>
                          <Icon
                            icon={s.iconifyTag}
                            width="16"
                            color={s.color}
                          />
                          {s.skillName}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="bars">
              {SkillBars.map((b) => (
                <div key={b.Stack}>
                  <div className="bar-top">
                    <span>{b.Stack}</span>
                    <span>{b.progressPercentage}%</span>
                  </div>
                  <div className="track">
                    <div
                      className="fill"
                      style={{ width: `${b.progressPercentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="block" id="experience">
          <div className="wrap">
            <SectionHead idx="02" title="Experience" />
            <div className="timeline">
              {experience.map((job) => (
                <Reveal key={job.company + job.date}>
                  <div className="job">
                    <div className="job-date">{job.date}</div>
                    <div>
                      <div className="job-head">
                        <img
                          className="logo-img"
                          src={job.companyLogo}
                          alt=""
                        />
                        <h3>
                          {job.role} <span>@ {job.company}</span>
                        </h3>
                      </div>
                      <p className="desc">{job.desc}</p>
                      {job.descBullets && (
                        <ul>
                          {job.descBullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {projects.length > 0 && (
          <section className="block" id="projects">
            <div className="wrap">
              <SectionHead idx="03" title="Projects" />
              <div className="grid-2">
                {projects.map((p, i) => (
                  <Reveal key={p.name} delay={i * 80}>
                    <div className="card project" style={{ height: '100%' }}>
                      {p.tagline && <span className="tag">{p.tagline}</span>}
                      <h3>{p.name}</h3>
                      <p>{p.desc}</p>
                      {(p.link || p.github) && (
                        <div className="actions">
                          {p.link && (
                            <a
                              className="btn"
                              href={p.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Visit ↗
                            </a>
                          )}
                          {p.github && (
                            <a
                              className="btn"
                              href={p.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Source ↗
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="block" id="education">
          <div className="wrap">
            <SectionHead idx="04" title="Education" />
            <div className="edu">
              {educationInfo.map((e) => (
                <Reveal key={e.course}>
                  <div className="edu-row">
                    <div className="when">{e.duration}</div>
                    <div>
                      <h3>{e.course}</h3>
                      <p>
                        {e.schoolName} · {e.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="wrap">
            <Reveal>
              {gh.avatar_url && (
                <img
                  className="avatar"
                  src={gh.avatar_url}
                  alt={greetings.name}
                />
              )}
              <h2>
                Let&apos;s build something <em>worth shipping.</em>
              </h2>
              <p>
                Discuss a project or just want to say hi? My inbox is open for
                all.
                {gh.bio ? ` ${gh.bio}` : ''}
              </p>
              <div className="actions">
                <a
                  className="btn primary"
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="mdi:linkedin" width="18" /> Message on LinkedIn
                </a>
                <a
                  className="btn"
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="mdi:github" width="18" /> @
                  {openSource.githubUserName}
                </a>
              </div>
              {gh.location && <div className="loc">📍 {gh.location}</div>}
            </Reveal>
            <footer>
              <span>
                © {new Date().getFullYear()} {greetings.name}
              </span>
              <span>Built with Next.js</span>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  let githubProfileData: GithubUserType | null = null;
  try {
    const res = await fetch(
      `https://api.github.com/users/${openSource.githubUserName}`
    );
    if (res.ok) githubProfileData = await res.json();
  } catch (e) {
    githubProfileData = null;
  }
  return { props: { githubProfileData } };
}
