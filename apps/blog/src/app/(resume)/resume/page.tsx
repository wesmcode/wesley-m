import { EmailReveal } from '@/components/shared/EmailReveal'
import { urls } from '@/lib/urls'
import './resume.css'

export default function ResumePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to resume</a>
      <EmailReveal />
      <main id="main-content">
        <div className="page">
          <a href={urls.home} className="site-link">{'← wesley-m.com'}</a>
          <a href="/resume/wesley_melo_resume_remote.pdf" download type="application/pdf" className="cta-button download-btn">
            <span>Download PDF (ES)</span>
            <span aria-hidden="true">{'→︎'}</span>
          </a>

          <header>
            <h1>WESLEY MELO</h1>
            <div className="contact">
              Spain (Remote) | <a href="https://linkedin.com/in/wesmelo" target="_blank" rel="noopener noreferrer">linkedin.com/in/wesmelo</a> | <a href="#" className="js-email-reveal" id="resume-email">email</a>
            </div>
          </header>

          <section className="section">
            <h2>Summary</h2>
            <ul className="summary">
              <li>6+ years of experience in agile development, product management and consulting for Fitness, Health, Enterprise SaaS platforms, Media and Publishing, and AI/ML Products with experience in high growth and product innovation.</li>
              <li>Led the development of a digital membership management platform, reducing cancellation complaints by 65% and increasing online membership transactions to 70% within six months.</li>
              <li>Managed remote cross-functional teams across the US, Brazil, and India to deliver end-to-end product features from concept to launch, driving continuous iterations that improved customer outcomes and increased user engagement.</li>
            </ul>
          </section>

          <section className="section">
            <h2>Work Experience</h2>

            <div className="job">
              <div className="job-header"><span className="job-company">Code and Theory</span><span className="job-location">Remote</span></div>
              <div className="job-role-row"><span className="job-role">Senior Product Manager</span><span className="job-dates">April 2025 - Present</span></div>
              <ul>
                <li>Turned an internal audit tool into a B2B SaaS AI platform with 8 agents (Crawler Analysis, UX Heuristics, Brand Perception, and 5 others), securing 4 enterprise clients across financial services and manufacturing in 90 days and building a $120K+ pilot pipeline, with one buyer requested pricing unprompted during a live C-suite demo.</li>
                <li>Made the call to migrate from V0 prototypes to Payload CMS mid-sales-cycle. This move enabled live dashboard updates without redeployment, which saved a client relationship when needed last-minute data corrections before a board presentation.</li>
                <li>Resolved a weeks-long ML-vs-UX deadlock on AI agent quality: the ML team wanted 90%+ confidence thresholds, the design team wanted more results at lower confidence. Defined a transparency-first approach with visible confidence scores that enterprise clients confirmed met standards.</li>
                <li>Led the Define Phase of a 65M-monthly-view news network's modernisation across 16 properties. Tied every roadmap initiative to an audience or growth KPI, instrumented a 25+ KPI measurement framework from a zero baseline, and architected the phased consolidation of 5 subsites into the flagship with weekly SEO monitoring and rollback to protect a 65/100 domain authority.</li>
              </ul>
            </div>

            <div className="job">
              <div className="job-header"><span className="job-company">Liferay</span><span className="job-location">Brazil</span></div>
              <div className="job-role-row"><span className="job-role">Senior Product Manager</span><span className="job-dates">November 2023 - March 2025</span></div>
              <ul>
                <li>Spearheaded product roadmap development and prioritized feature delivery and enhancements to enable workflow automation, low-code integrations, localization, ticketing, and CMS products, impacting 1200+ users and achieving over 80% of quarterly delivery targets.</li>
                <li>Directed design and engineering to conceptualize, identify gaps, requirements definitions, create 15+ detailed process maps to guide product development, architect solutions, release management and deployment phases.</li>
                <li>Authored and communicated detailed product plans using Jira and Confluence, managing 200+ backlog items and creating 40+ documentation artifacts, resulting in 70% fewer scope misunderstandings, 40% reduced cycle time, and 60% strengthened delivery predictability.</li>
              </ul>
            </div>

            <div className="job">
              <div className="job-header"><span className="job-company">ThoughtWorks</span><span className="job-location">Remote</span></div>
              <div className="job-role-row"><span className="job-role">Product Manager</span><span className="job-dates">December 2022 to November 2023</span></div>
              <ul>
                <li>Drove strategic initiatives alongside the Head of Product, mentoring 5 product managers and conducting 8 training workshops, resulting in 80% departmental growth.</li>
                <li>Partnered closely with engineering and design teams using Figma and Jira, implementing bi-weekly feedback loops that increased feature relevance by 45% for a C2C marketplace platform.</li>
              </ul>
              <div className="job-role-row" id="tw-second-role"><span className="job-role">Product Manager</span><span className="job-dates">December 2020 to December 2022</span></div>
              <ul>
                <li>Championed the online membership management platform that reduced cancellation complaints by 65%, expanded memberships by 30% and enabled 70% of membership changes processed online, which contributed to a 164% client's revenue increase.</li>
                <li>Managed a globally distributed, cross-functional team remotely, communicated clear product requirements, removed blockers, and accelerated delivery timelines by 25%.</li>
                <li>Engaged on growth funnels initiatives (customer acquisition and user retention) to optimize and leverage the product experiments through A/B testing for different countries, feature changes and lifecycle management across digital channels.</li>
                <li>Drove the transition from Kanban to Scrum, increasing sprint forecast accuracy and delivery efficiency by 20%, and reducing meetings by 70%.</li>
              </ul>
            </div>

            <div className="job">
              <div className="job-header"><span className="job-company">Accenture</span><span className="job-location">Brazil</span></div>
              <div className="job-role-row"><span className="job-role">Software Engineer</span><span className="job-dates">2014 to 2019</span></div>
            </div>
          </section>

          <section className="section">
            <h2>Education</h2>
            <div className="edu-item"><span className="edu-name">Reforge</span><span className="edu-loc">Remote</span></div>
            <div className="edu-detail">Product Growth Series</div>
            <div className="edu-item"><span className="edu-name">Tera</span><span className="edu-loc">Remote</span></div>
            <div className="edu-detail">Digital Product Leadership Program</div>
            <div className="edu-item"><span className="edu-name">Estacio</span><span className="edu-loc">Brazil</span></div>
            <div className="edu-detail">Bachelor of Technology - Information Technology Administration and Management</div>
            <div className="edu-item"><span className="edu-name">Unibratec</span><span className="edu-loc">Brazil</span></div>
            <div className="edu-detail">Information Technology Bachelor's Degree</div>
          </section>

          <section className="section">
            <h2>Certifications</h2>
            <div className="cert-item"><span className="cert-name">Professional Scrum Product Owner PSPO II</span><span className="cert-org">Scrum.org</span></div>
            <div className="cert-item"><span className="cert-name">Certified Product Leadership and Strategic Alignment Practitioner</span><span className="cert-org">Caroli.org</span></div>
            <div className="cert-item"><span className="cert-name">Certified Lean Inception Facilitator</span><span className="cert-org">Caroli.org</span></div>
          </section>

          <section className="section">
            <h2>Skills, Languages and Interests</h2>
            <div className="skills-group">
              <span className="skills-label">Languages:</span>
              <span className="skills-list"> English (Bilingual Proficiency (C2 Level)) | Portuguese (Bilingual Proficiency (C2 Level))</span>
            </div>
            <div className="skills-group">
              <span className="skills-label">Skills:</span>
              <span className="skills-list"> AI Agent Orchestration | LLM-Powered Product Design | A/B Testing and Experimentation (Optimizely) | Funnel Optimization | Conversion and Retention Strategy | PLG and Subscription Economics | OKRs | Product Analytics (Pendo, Google Analytics, Tableau) | Roadmap and Prioritization | Scrum | Kanban | AI Prototyping (Cursor, v0) | API Integration | CMS Architecture (Contentful, Drupal, Payload, Liferay DXP) | API Design and Integration | Jira | Confluence | Figma | SQL | PM Mentorship</span>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
