export interface CaseStudy {
  title: string
  eyebrow: string
  pillar: string
  tagline: string
  tags: string[]
  outcomes: { value: string; label: string }[]
  rail: { dt: string; dd: string }[]
  related: { href: string; num: string; title: string }[]
  body: string
  metaDescription: string
}

export const CASES: Record<string, CaseStudy> = {
  "enterprise-ai-platform-launch": {
    "title": "A 2-week manual audit, rebuilt as an AI product clients asked to buy",
    "eyebrow": "Case study 01 &middot; Code and Theory &middot; Engineering analytics SaaS",
    "pillar": "Productized intelligence",
    "tagline": "Every client audit cost the agency 2 weeks and 5 to 8 people. Hidden inside that overhead sat a product enterprise buyers would pay for.",
    "tags": [
      "AI / ML",
      "B2B SaaS",
      "0 to 1",
      "Enterprise",
      "Product strategy",
      "Go-to-market"
    ],
    "outcomes": [
      {
        "value": "4+",
        "label": "Enterprise pilots in 90 days"
      },
      {
        "value": "2 wks &rarr; Day 1",
        "label": "Audit delivery time"
      },
      {
        "value": "8",
        "label": "AI agents in production"
      }
    ],
    "rail": [
      {
        "dt": "Company",
        "dd": "Code and Theory"
      },
      {
        "dt": "Role",
        "dd": "Senior Product Manager"
      },
      {
        "dt": "Industry",
        "dd": "AI/ML, B2B SaaS, Financial services, Manufacturing"
      },
      {
        "dt": "Timeline",
        "dd": "September 2025 to present"
      }
    ],
    "related": [
      {
        "href": "/work/sports-league-design-system",
        "num": "02 &middot; [NDA Client] &middot; US professional sports league",
        "title": "Specs for 32 club properties, zero clarification cycles"
      },
      {
        "href": "/work/political-media-ecosystem",
        "num": "03 &middot; [NDA Client] &middot; US political media network",
        "title": "\"Modernize the site\" without risking 65M monthly views"
      }
    ],
    "body": "<p class=\"case-summary\">Every new client engagement at this enterprise digital strategy firm started the same way: 2 weeks, 5 to 8 people, a manual audit that produced no institutional memory and blocked strategy work. The team called it an efficiency problem. Meanwhile a repeatable intelligence product sat inside those project fees, given away for free. Ninety days after the reframe, 4+ enterprise pilots had signed across financial services and manufacturing, and one buyer requested pricing unprompted during a live C-suite demo.</p>\n\n                    <h2>The challenge</h2>\n                    <ul>\n                        <li>Each audit consumed 2 weeks and 5 to 8 people of opportunity cost across the organization.</li>\n                        <li>Different teams used different methodologies with no institutional memory.</li>\n                        <li>Strategy work was bottlenecked by data collection.</li>\n                        <li>Zero baseline KPIs to measure whether engagements improved client performance.</li>\n                        <li>Enterprise clients were asking for ongoing intelligence, not one-off reports, but the agency had no recurring revenue model.</li>\n                    </ul>\n\n                    <h2>The solution</h2>\n                    <p>An AI-powered platform with 8 specialized ML agents that automates Day 1 client intelligence delivery.</p>\n                    <ol>\n                        <li><strong>Crawler analysis.</strong> Technical infrastructure, site architecture, SEO fundamentals.</li>\n                        <li><strong>Keyword intelligence.</strong> Third-party integration for competitive keyword positioning.</li>\n                        <li><strong>Analytics benchmarking.</strong> Proxy metrics for competitive landscape.</li>\n                        <li><strong>GA4 deep dive.</strong> Optional authenticated client analytics exploration.</li>\n                        <li><strong>Content gap analysis.</strong> Topic coverage mapping versus the competitive set.</li>\n                        <li><strong>UX heuristics evaluation.</strong> 140+ criteria assessment with industry-vertical variants.</li>\n                        <li><strong>User journey analysis.</strong> Flow-based friction point identification.</li>\n                        <li><strong>Brand perception.</strong> Sentiment and perception intelligence from public signals.</li>\n                    </ol>\n\n                    <h2>My role</h2>\n                    <p>Sole Product Manager owning strategy through execution. The team grew to 8 to 12 contributors spanning AI/ML engineering, front-end development, platform architecture, design, and business leadership.</p>\n\n                    <h2>Strategy and approach</h2>\n                    <p>Leadership signed off on treating the platform as a revenue product with its own go-to-market. Two tracks let it earn early while the SaaS infrastructure matured.</p>\n                    <p><strong>Track 1, implementation model (Q1 2026).</strong> Sell platform-powered audits as a service through the existing agency model. Revenue starts inside the engagement frame the firm already runs.</p>\n                    <p><strong>Track 2, SaaS model (Q2 2026 and beyond).</strong> Open the platform for direct client access with subscriptions, once the underlying security and product infrastructure was ready.</p>\n\n                    <h2>Planning</h2>\n                    <p>The Q1 2026 critical path was structured across four priority streams.</p>\n                    <p><strong>Priority 1, security and platform readiness.</strong> Auth0 with Okta SSO, user management dashboard, audit logging, cookie consent, magic link deprecation.</p>\n                    <p><strong>Priority 2, multi-run comparison.</strong> Historical benchmarks, timeline visualization, before/during/after analysis. This became the number one feature because stakeholders agreed: without comparison, the product would have missed the mark.</p>\n                    <p><strong>Priority 3, agent portfolio completion.</strong> Code conversion from Airtable prototypes to production architecture, UX heuristics quality enhancement, structured output standardization.</p>\n                    <p><strong>Priority 4, data architecture.</strong> Multi-run data structure, brand-run relationship modelling, export capabilities, BigQuery and GCS storage strategy.</p>\n                    <p>The \"not now\" backlog kept scope honest: learning agenda standardization, custom agent development, vertical-specific configurations, and client self-service all moved to Q2 and later.</p>\n\n                    <h2>Cross-functional alignment</h2>\n                    <p>The team had been working in ad-hoc Kanban with documentation scattered across Jira, FigJam, Airtable, and Confluence. Consolidating to Jira plus Confluence as a single source of truth, with weekly status reporting and a decision log for async alignment, cleaned the operating model.</p>\n                    <ul>\n                        <li>Two major strategy sessions with 6 to 8 stakeholders resolved the commercialization approach.</li>\n                        <li>Weekly coordination with the Product Lead on strategic direction.</li>\n                        <li>Regular alignment with the Tech Director on architecture feasibility.</li>\n                        <li>Design team collaboration on component prioritization and design system migration (shadcn/ui foundation).</li>\n                        <li>Business leader engagement on pricing framework and sales enablement.</li>\n                    </ul>\n\n                    <h2>Stakeholder trust</h2>\n                    <p>Trust came from sequence. The first two weeks went to a full project review across 20+ transcripts and artifacts; the roadmap framework proposal waited until week four, after the context work had earned it a hearing.</p>\n                    <p>The mid-cycle CMS migration was the defining moment. The original prototype stack (no live updates, manual redeployments before every demo) was a liability during a live sales cycle. The team migrated to a production CMS in parallel and phased over. The decision proved right when a client needed last-minute data corrections before a board presentation. The new architecture made it possible in minutes instead of hours.</p>\n\n                    <h2>Before and after</h2>\n                    <div class=\"case-table-wrap\">\n                        <table class=\"case-table\">\n                            <thead>\n                                <tr>\n                                    <th scope=\"col\">Dimension</th>\n                                    <th scope=\"col\">Before</th>\n                                    <th scope=\"col\">After</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr><th scope=\"row\">Audit timeline</th><td>2 to 3 weeks per engagement</td><td>Day 1 automated delivery</td></tr>\n                                <tr><th scope=\"row\">Team required</th><td>5 to 8 people per audit</td><td>Platform plus 1 analyst for review</td></tr>\n                                <tr><th scope=\"row\">Methodology consistency</th><td>Variable across teams</td><td>Standardized 8-agent framework</td></tr>\n                                <tr><th scope=\"row\">Baseline KPIs</th><td>Zero</td><td>25+ metrics across engagement, discovery, retention, SEO</td></tr>\n                                <tr><th scope=\"row\">Revenue model</th><td>One-off project fees</td><td>Recurring pilot structure</td></tr>\n                                <tr><th scope=\"row\">Client pipeline</th><td>Ad hoc</td><td>4+ enterprise pilots in 90 days</td></tr>\n                                <tr><th scope=\"row\">Institutional knowledge</th><td>Lost between engagements</td><td>Stored in platform for multi-run comparison</td></tr>\n                                <tr><th scope=\"row\">Team process</th><td>Ad-hoc Kanban, scattered docs</td><td>Structured sprints, single source of truth</td></tr>\n                            </tbody>\n                        </table>\n                    </div>\n\n                    <h2>Tooling and reporting</h2>\n                    <ul>\n                        <li><strong>Product management.</strong> Jira (backlog, sprints), Confluence (PRDs, decision logs, security docs).</li>\n                        <li><strong>Design.</strong> Figma (component specs, dashboard UX), FigJam (roadmap visualization).</li>\n                        <li><strong>Data and analytics.</strong> Google Analytics, Tableau (measurement framework).</li>\n                        <li><strong>AI/ML stack.</strong> BigQuery plus GCS (data architecture), third-party SEO and analytics integrations.</li>\n                        <li><strong>Platform.</strong> Production CMS, Next.js plus shadcn/ui (frontend), Auth0 plus Okta (planned auth).</li>\n                        <li><strong>Communication.</strong> Weekly status reports, pre-meeting alignment protocols, decision log in Confluence.</li>\n                    </ul>\n\n                    <h2>Results</h2>\n                    <ul class=\"case-results-list\">\n                        <li><strong>4+ enterprise pilots</strong> secured across financial services and manufacturing in 90 days.</li>\n                        <li>One buyer <strong>requested pricing unprompted</strong> during a live C-suite demo.</li>\n                        <li>The 2-week manual process now runs as <strong>Day 1 automated delivery</strong>.</li>\n                        <li><strong>Dual-track go-to-market</strong> defined and aligned across 8 to 12 contributors.</li>\n                        <li>Platform migrated from <strong>prototype to production-grade architecture</strong> during an active sales cycle.</li>\n                        <li><strong>AI agent quality framework</strong> with confidence scoring validated by enterprise clients.</li>\n                        <li>First <strong>measurement infrastructure</strong> created for a team with zero prior baseline KPIs.</li>\n                        <li>Multi-run comparison elevated to the <strong>number one Q1 2026 priority</strong> based on measurement framework data.</li>\n                        <li>The team moved from ad-hoc Kanban to a <strong>structured sprint cadence</strong>.</li>\n                    </ul>\n\n                    <h2>AI agent quality</h2>\n                    <p>The ML team and design team were deadlocked for weeks. ML wanted 90%+ confidence thresholds: only surface results the system was near-certain about. Design wanted to show more results at lower confidence: give users a broader view even if some data points were less reliable.</p>\n                    <p>A transparency-first approach resolved the deadlock: show the confidence score alongside every result, let the user decide what threshold matters to them. This avoided the false choice between accuracy and utility. Enterprise clients confirmed it met their trust requirements because the methodology sat in plain view alongside every result.</p>\n                    <p>That decision unblocked the entire agent portfolio and became the template for how quality trade-offs were handled across all 8 agents.</p>\n\n                    <h2>Why this worked</h2>\n                    <p><strong>The product insight came before the technical solution.</strong> The default response to operational inefficiency is internal tooling. Treating the audit as a revenue product instead set the architecture, the go-to-market, and the timeline on a different course from day one.</p>\n                    <p><strong>Revenue started inside the existing model.</strong> Selling platform-powered audits through the agency frame let the product earn its keep before the SaaS infrastructure was mature. Waiting for perfection would have meant zero revenue for two quarters.</p>\n                    <p><strong>Measurement killed the wrong priorities.</strong> Before structured KPIs, the roadmap was opinion-driven. Once baselines existed, multi-run comparison rose to number one because clients couldn't justify recurring spend without before/after analysis. The framework also killed a feature with zero client pull, freeing cycles for what mattered.</p>\n\n                    <p class=\"case-pull\">Deciding what the product is turned out to be harder than building it.</p>",
    "metaDescription": "A costly internal service bottleneck was hiding a product opportunity. Within 90 days: 8 AI agents, 4 enterprise pilots, and a buyer requesting pricing unprompted."
  },
  "fitness-membership-platform": {
    "title": "The fitness franchise made cancellation easy. Revenue grew 150% in three fiscal years",
    "eyebrow": "Case study 04 &middot; [NDA Client] &middot; Major US fitness franchise",
    "pillar": "Retention and growth",
    "tagline": "15M+ members had no way to manage their memberships online during a pandemic. Most operators would respond by making cancellation harder. This team made it easy, and revenue followed.",
    "tags": [
      "Fitness and health",
      "Digital transformation",
      "Growth",
      "A/B testing",
      "Crisis response",
      "Remote teams"
    ],
    "outcomes": [
      {
        "value": "150%+",
        "label": "Revenue growth across three fiscal years"
      },
      {
        "value": "60%+",
        "label": "Drop in cancellation complaints"
      },
      {
        "value": "100K+",
        "label": "Summer campaign sign-ups, day one"
      }
    ],
    "rail": [
      {
        "dt": "Company",
        "dd": "ThoughtWorks"
      },
      {
        "dt": "Client",
        "dd": "[NDA]"
      },
      {
        "dt": "Role",
        "dd": "Product Manager"
      },
      {
        "dt": "Industry",
        "dd": "Fitness and health, consumer digital, subscription"
      },
      {
        "dt": "Timeline",
        "dd": "December 2020 to December 2022"
      }
    ],
    "related": [
      {
        "href": "/work/retail-ecommerce-modernisation",
        "num": "05 &middot; [NDA Client] &middot; Global apparel retail group",
        "title": "Checkout and capacity fixed before the 2020 window"
      },
      {
        "href": "/work/liferay-enterprise-dxp",
        "num": "06 &middot; Liferay &middot; Enterprise DXP vendor",
        "title": "Eight on-time releases closed churn-driving gaps"
      }
    ],
    "body": "<p class=\"case-summary\">One of the largest fitness franchises in the US: 2,000+ locations, 15M+ members, and zero online membership management. When lockdowns made in-person visits impossible, members who wanted to cancel had no path forward. Complaint volumes peaked and press coverage turned negative; brand trust eroded daily. Building an app was the easy part. The harder bet was whether controlled self-service could cut complaints, open retention moments, and repair the brand relationship. Over the next three fiscal years, revenue grew 150%+.</p>\n\n                    <h2>The challenge</h2>\n                    <ul>\n                        <li><strong>No online self-service.</strong> 100% of membership changes required in-person visits.</li>\n                        <li><strong>Revenue collapse.</strong> A 40%+ year-on-year decline in the pandemic year.</li>\n                        <li><strong>Brand damage.</strong> Peak cancellation complaints, negative press coverage.</li>\n                        <li><strong>Legacy platform.</strong> Slow, not designed for transactional management.</li>\n                        <li><strong>Distributed team.</strong> Developers, designers, QA, and business analysts across three time zones, fully remote.</li>\n                    </ul>\n\n                    <h2>The solution</h2>\n                    <p>An online membership management platform that let members cancel, freeze, upgrade, downgrade, and transfer memberships digitally.</p>\n\n                    <h2>My role</h2>\n                    <p>Product Manager leading a cross-functional team of developers, product designers, business analysts, and a product owner, alongside client stakeholders and other vendors. Ownership: requirements, delivery planning, sprint execution, and growth experimentation.</p>\n\n                    <h2>Strategy and approach</h2>\n                    <p><strong>Phase 1, crisis response (first 6 months).</strong> Get core flows online fast. Prioritize cancellation, freeze, and modification over everything else. Reduce complaints and give members back control.</p>\n                    <p><strong>Phase 2, growth (months 6 to 24).</strong> Summer campaign, A/B testing across countries, lifecycle messaging, platform performance (React.js migration).</p>\n                    <p>Making cancellation easy was the counterintuitive call, and a deliberate one. Complaints were eroding brand trust, and a member who could manage their own membership was far more likely to pause and return than one who felt trapped.</p>\n\n                    <h2>Planning</h2>\n                    <p>Detailed delivery plans in Jira tracked timelines, scope, and capacity. Sprint planning accounted for three time zones with documentation written to be consumed asynchronously.</p>\n                    <p>A Kanban to Scrum transition ran alongside the build. The existing process lacked forecast accuracy for a platform with hard deadlines (summer campaign, fiscal reporting periods).</p>\n\n                    <h2>Cross-functional alignment</h2>\n                    <ul>\n                        <li><strong>Client.</strong> Regular alignment with the client's product owner and marketing teams.</li>\n                        <li><strong>Vendors.</strong> Coordinated with other vendors in the broader digital ecosystem.</li>\n                        <li><strong>Three-time-zone delivery.</strong> North America (BA), India (engineering), Brazil (design and PM).</li>\n                        <li><strong>Marketing.</strong> Partnered on the summer campaign that hit 100K+ sign-ups on launch day.</li>\n                        <li><strong>Growth.</strong> Collaborated with marketing and data analytics on acquisition funnels and retention cohorts.</li>\n                    </ul>\n\n                    <h2>Stakeholder trust</h2>\n                    <p>Trust came from delivery. Within six months the core flows were live and complaint metrics were already improving. The engagement scope expanded to growth experimentation, A/B testing, and the summer campaign, a direct result of seeing the numbers move.</p>\n\n                    <h2>Before and after</h2>\n                    <div class=\"case-table-wrap\">\n                        <table class=\"case-table\">\n                            <thead>\n                                <tr>\n                                    <th scope=\"col\">Dimension</th>\n                                    <th scope=\"col\">Before (Dec 2020)</th>\n                                    <th scope=\"col\">After (Dec 2022)</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr><th scope=\"row\">Membership changes</th><td>100% in-person</td><td>70%+ online</td></tr>\n                                <tr><th scope=\"row\">Cancellation complaints</th><td>Peak, press criticism</td><td>Down 60%+</td></tr>\n                                <tr><th scope=\"row\">Memberships</th><td>Declining</td><td>Grew 30%+</td></tr>\n                                <tr><th scope=\"row\">Page load</th><td>Legacy, slow</td><td>40%+ faster (React.js)</td></tr>\n                                <tr><th scope=\"row\">Session duration</th><td>Baseline</td><td>+25%</td></tr>\n                                <tr><th scope=\"row\">Summer campaign</th><td>No digital infrastructure</td><td>100K+ participants day one</td></tr>\n                                <tr><th scope=\"row\">Agile maturity</th><td>Kanban, inconsistent</td><td>Scrum, 20%+ better forecasts, 70%+ fewer meetings</td></tr>\n                                <tr><th scope=\"row\">Revenue</th><td>Pandemic low</td><td>Record annual revenue, 150%+ growth across three fiscal years</td></tr>\n                            </tbody>\n                        </table>\n                    </div>\n\n                    <h2>Tooling and reporting</h2>\n                    <ul>\n                        <li><strong>Product management.</strong> Jira (backlog, sprints, capacity), Confluence (requirements, delivery plans).</li>\n                        <li><strong>Design.</strong> Figma.</li>\n                        <li><strong>Experimentation.</strong> Optimizely (10+ A/B tests), Google Analytics (funnel tracking).</li>\n                        <li><strong>Platform.</strong> React.js (frontend migration), the client's backend systems.</li>\n                        <li><strong>Growth.</strong> Optimizely, marketing analytics for acquisition and retention cohorts.</li>\n                    </ul>\n\n                    <h2>Results</h2>\n                    <ul class=\"case-results-list\">\n                        <li>Cancellation complaints fell <strong>60%+</strong> within six months.</li>\n                        <li><strong>70%+</strong> of membership changes moved online.</li>\n                        <li>Memberships grew <strong>30%+</strong>.</li>\n                        <li><strong>40%+</strong> page load improvement (React.js migration).</li>\n                        <li>Session duration rose <strong>25%+</strong>.</li>\n                        <li><strong>100K+</strong> summer campaign participants on day one.</li>\n                        <li><strong>10+ A/B tests</strong> across multiple countries.</li>\n                        <li>Sprint forecasts improved <strong>20%+</strong> after the move from Kanban to Scrum.</li>\n                        <li>Meeting time dropped <strong>70%+</strong>.</li>\n                        <li><strong>150%+ revenue growth</strong> across three fiscal years (verified against public filings).</li>\n                    </ul>\n\n                    <h2>Growth experimentation</h2>\n                    <p>The A/B testing program covered multiple dimensions.</p>\n                    <ul>\n                        <li><strong>Country-level testing.</strong> Feature variations tested across markets with different regulatory requirements.</li>\n                        <li><strong>Pricing pages.</strong> Tested presentation, copy, and CTA placement.</li>\n                        <li><strong>Lifecycle messaging.</strong> Tested timing, content, and channel for retention messaging.</li>\n                        <li><strong>Feature changes.</strong> Tested UI variations for membership management flows.</li>\n                    </ul>\n                    <p>OKRs were defined alongside marketing and data analytics, tracking acquisition funnels and retention cohorts to measure the impact of each experiment.</p>\n\n                    <h2>Industry context</h2>\n                    <p>The fitness industry's COVID recovery gives the numbers context. The digital infrastructure built during 2020 to 2022 carried the record revenue years that followed.</p>\n\n                    <h2>Why this worked</h2>\n                    <p><strong>Easy cancellation did the retention work.</strong> A member who could manage their own membership kept trusting the brand; one who felt trapped left for good. Frictionless cancellation cut complaints 60%+ and opened natural retention moments (freeze offers, downgrade paths, \"come back\" messaging) that a locked door never could.</p>\n                    <p><strong>Crisis first, growth second.</strong> Core flows took six months. Once complaint metrics moved, stakeholders widened the scope to growth experimentation, A/B testing, and the summer campaign. Stopping the bleeding is what earned the growth mandate.</p>\n\n                    <p class=\"case-pull\">Members came back because leaving was easy. That was the whole counterintuition.</p>",
    "metaDescription": "Members couldn't cancel online during a pandemic, so the team made cancellation easy. Complaints fell 60%+ and revenue grew 150%+ across three fiscal years."
  },
  "liferay-enterprise-dxp": {
    "title": "Eight on-time releases closed the gaps pushing customers into adjacent tools",
    "eyebrow": "Case study 06 &middot; Liferay &middot; Enterprise DXP vendor",
    "pillar": "Retention and growth",
    "tagline": "Customers were paying for external tools because the DXP under-served critical use cases. Closing those gaps took a roadmap and an operating model that could ship predictably: 8 consecutive on-time quarterly releases.",
    "tags": [
      "Enterprise SaaS",
      "DXP",
      "Workflow automation",
      "Low-code",
      "CMS",
      "Release management"
    ],
    "outcomes": [
      {
        "value": "8",
        "label": "Consecutive on-time quarterly releases"
      },
      {
        "value": "-70%",
        "label": "Scope misunderstandings"
      },
      {
        "value": "-40%",
        "label": "Cycle time"
      }
    ],
    "rail": [
      {
        "dt": "Company",
        "dd": "Liferay"
      },
      {
        "dt": "Role",
        "dd": "Senior Product Manager"
      },
      {
        "dt": "Industry",
        "dd": "Enterprise SaaS, digital experience platforms"
      },
      {
        "dt": "Timeline",
        "dd": "November 2023 to March 2025"
      }
    ],
    "related": [
      {
        "href": "/work/thoughtworks-pm-practice",
        "num": "07 &middot; ThoughtWorks &middot; Global engineering consultancy",
        "title": "A PM practice that grew 80% during headcount cuts"
      },
      {
        "href": "/work/enterprise-ai-platform-launch",
        "num": "01 &middot; Code and Theory &middot; Engineering analytics SaaS",
        "title": "A manual audit rebuilt as an AI product"
      }
    ],
    "body": "<p class=\"case-summary\">A privately held enterprise SaaS company providing digital experience platforms to 1,200+ businesses globally. The retention problem was plain enough: customers were using or paying for adjacent tools (workflow engines, ticketing systems, localization platforms) because the core product under-served those use cases. The roadmap covered five product areas, each one a gap creating churn risk: low-code object model, workflow automation, CMS, localization, and enterprise ticketing. Delivery was also shifting from weekly releases to quarterly, which demanded a different kind of planning discipline.</p>\n\n                    <h2>The challenge</h2>\n                    <ul>\n                        <li><strong>Release cadence shift.</strong> Weekly to quarterly upended the planning model.</li>\n                        <li><strong>Scope ambiguity.</strong> 200+ backlog items across five products, frequent misunderstandings.</li>\n                        <li><strong>Incident load.</strong> 250+ incidents needing pattern analysis.</li>\n                        <li><strong>Multi-product complexity.</strong> Five products with different users, constraints, and priorities.</li>\n                        <li><strong>Documentation gaps.</strong> Requirements scattered, repeated clarification cycles.</li>\n                    </ul>\n\n                    <h2>The solution</h2>\n                    <p>A documentation-first approach with a single source of truth in Jira and Confluence, supported by process maps standardizing how work was scoped.</p>\n\n                    <h2>My role</h2>\n                    <p>Senior Product Manager owning roadmap for all five product areas. Led discovery through client interviews and market research, managed trade-offs between scope, schedule, and dependencies, coordinated cross-functional delivery.</p>\n\n                    <h2>Strategy and approach</h2>\n                    <p>Three pillars for predictable quarterly delivery.</p>\n                    <ol>\n                        <li><strong>Documentation as infrastructure.</strong> 40+ artifacts covering requirements, architecture, and specs. The single source of truth.</li>\n                        <li><strong>Process maps as standard.</strong> 15+ maps covering gap analysis to requirements to architecture to deployment, adopted by engineering.</li>\n                        <li><strong>Incident pattern analysis.</strong> Tracked 250+ incidents in Tableau to find recurring failures and prevent them.</li>\n                    </ol>\n\n                    <h2>Planning</h2>\n                    <p>Quarterly planning balanced five product areas at different maturity levels.</p>\n                    <ul>\n                        <li><strong>Low-code object model.</strong> Feature flag to general availability.</li>\n                        <li><strong>Workflow automation.</strong> Workflow engine improvements, SLA tracking.</li>\n                        <li><strong>CMS.</strong> Translation interface, content scheduling, AI assistant (beta).</li>\n                        <li><strong>Localization.</strong> Localization fragment, XLIFF import and export.</li>\n                        <li><strong>Enterprise ticketing.</strong> Custom ticketing system using the low-code object framework.</li>\n                    </ul>\n\n                    <h2>Cross-functional alignment</h2>\n                    <ul>\n                        <li><strong>Product, Design, Engineering.</strong> Requirements definition, solution architecture, object relationships, API endpoints, client extensions.</li>\n                        <li><strong>Client-facing discovery.</strong> Interviews and market research validating product direction.</li>\n                        <li><strong>Stakeholder management.</strong> Trade-off decisions with alternative solutions maintaining business objectives.</li>\n                    </ul>\n\n                    <h2>Stakeholder trust</h2>\n                    <p>The quarterly cadence itself was the trust-building mechanism. Each on-time release reinforced confidence in the planning approach. By the fourth consecutive release, stakeholders stopped asking \"will we hit the date?\" and started asking \"what should we prioritize next?\"</p>\n\n                    <h2>Before and after</h2>\n                    <div class=\"case-table-wrap\">\n                        <table class=\"case-table\">\n                            <thead>\n                                <tr>\n                                    <th scope=\"col\">Dimension</th>\n                                    <th scope=\"col\">Before</th>\n                                    <th scope=\"col\">After</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr><th scope=\"row\">Release cadence</th><td>Weekly (unpredictable)</td><td>Quarterly (8 consecutive on-time)</td></tr>\n                                <tr><th scope=\"row\">Scope misunderstandings</th><td>Frequent</td><td>Down 70%+</td></tr>\n                                <tr><th scope=\"row\">Cycle time</th><td>Baseline</td><td>Reduced 40%+</td></tr>\n                                <tr><th scope=\"row\">Delivery predictability</th><td>Inconsistent</td><td>Improved 60%+</td></tr>\n                                <tr><th scope=\"row\">Incident volume</th><td>Reactive</td><td>Down ~20% through prevention</td></tr>\n                                <tr><th scope=\"row\">Documentation</th><td>Scattered</td><td>200+ items, 40+ artifacts, single source</td></tr>\n                                <tr><th scope=\"row\">Process standard</th><td>Ad hoc per team</td><td>15+ maps adopted by engineering</td></tr>\n                            </tbody>\n                        </table>\n                    </div>\n\n                    <h2>Tooling and reporting</h2>\n                    <ul>\n                        <li><strong>Product management.</strong> Jira (200+ items, sprints), Confluence (40+ artifacts).</li>\n                        <li><strong>Analytics.</strong> Tableau (incident tracking, pattern analysis).</li>\n                        <li><strong>Design.</strong> Process maps, solution architecture docs.</li>\n                        <li><strong>Platform.</strong> Enterprise DXP, workflow engine, low-code object builder.</li>\n                    </ul>\n\n                    <h2>Results</h2>\n                    <ul class=\"case-results-list\">\n                        <li>Quarterly targets hit at <strong>80%+</strong> across 8 consecutive releases.</li>\n                        <li><strong>70%+ fewer</strong> scope misunderstandings.</li>\n                        <li>Cycle time down <strong>40%+</strong>.</li>\n                        <li>Delivery predictability improved <strong>60%+</strong>.</li>\n                        <li><strong>~20%</strong> incident volume reduction.</li>\n                        <li><strong>15+ process maps</strong> adopted as engineering standard.</li>\n                        <li><strong>Low-code object model</strong> shipped from feature flag to GA.</li>\n                    </ul>\n\n                    <h2>Industry context</h2>\n                    <p>The client maintained leading-analyst recognition in the DXP category across multiple consecutive years, with public commentary citing low-code development and AI integration, both within engagement scope.</p>\n\n                    <h2>Why this worked</h2>\n                    <p><strong>The retention lens changed prioritization.</strong> Reframed around churn risk, the same 200+ item backlog produced a different priority order. The low-code object model shipped to GA because it kept customers from buying no-code competitors, and workflow automation moved up because customers were already evaluating standalone workflow tools.</p>\n                    <p><strong>Documentation made predictability structural.</strong> Scope misunderstandings fell 70%+ once the unit of communication changed from meetings, where context was shared verbally and lost, to artifacts, where decisions lived permanently. That infrastructure carried 8 consecutive on-time releases across 5 product areas at once.</p>\n\n                    <p class=\"case-pull\">Eight on-time releases in a row came down to one habit: writing decisions down where they couldn't get lost.</p>",
    "metaDescription": "Enterprise customers were paying for adjacent tools because the platform under-served critical workflows. The roadmap closed those gaps across five product areas with 8 consecutive on-time releases."
  },
  "political-media-ecosystem": {
    "title": "\"Modernize the site\" without putting 65M monthly views at risk",
    "eyebrow": "Case study 03 &middot; [NDA Client] &middot; US political media network",
    "pillar": "Platform modernization",
    "tagline": "A vague brief with a very specific downside: 65M+ views, 65/100 domain authority, 16 properties, and an editorial process the audience depended on.",
    "tags": [
      "Media and publishing",
      "Digital transformation",
      "Audience growth",
      "SEO",
      "CMS migration"
    ],
    "outcomes": [
      {
        "value": "65M+",
        "label": "Monthly views protected through cutover"
      },
      {
        "value": "5",
        "label": "Subsites consolidated into the flagship"
      },
      {
        "value": "25+",
        "label": "KPIs instrumented from a zero baseline"
      }
    ],
    "rail": [
      {
        "dt": "Company",
        "dd": "Code and Theory"
      },
      {
        "dt": "Client",
        "dd": "[NDA]"
      },
      {
        "dt": "Role",
        "dd": "Senior Product Manager (70% allocation)"
      },
      {
        "dt": "Industry",
        "dd": "Media and publishing, digital news, political aggregation"
      },
      {
        "dt": "Timeline",
        "dd": "April to June 2025 (Define Phase)"
      }
    ],
    "related": [
      {
        "href": "/work/fitness-membership-platform",
        "num": "04 &middot; [NDA Client] &middot; Major US fitness franchise",
        "title": "Easy cancellation, then 150% revenue growth"
      },
      {
        "href": "/work/retail-ecommerce-modernisation",
        "num": "05 &middot; [NDA Client] &middot; Global apparel retail group",
        "title": "Checkout and capacity fixed before the 2020 window"
      }
    ],
    "body": "<p class=\"case-summary\">A US political media network with a flagship property (65M+ monthly views) and 16 vertical properties. The flagship product is a curated link list: three daily editions of editorially selected articles that has served a loyal audience for over 15 years. The brief was three words: \"modernize the site.\" Underneath it sat fragmented properties, no measurement culture, sacred editorial workflows, failing Core Web Vitals, traffic dependency between subsites, and a domain authority score any migration could damage. Everything on that list made the same demand: modernize without breaking what already worked.</p>\n\n                    <h2>The challenge</h2>\n                    <p>The brief was \"modernize the site.\" Behind that:</p>\n                    <ul>\n                        <li><strong>Legacy platform.</strong> 50+ second average session duration, 60%+ engagement rate, 2.4+ pages per session. Failing Core Web Vitals, outdated CMS.</li>\n                        <li><strong>Fragmented ecosystem.</strong> 16 properties with inconsistent design and navigation. 30 to 65% of subsite traffic depended on flagship referrals.</li>\n                        <li><strong>No measurement culture.</strong> Baselines existed but weren't tracked against targets. Features shipped without feedback loops.</li>\n                        <li><strong>Conservative client.</strong> Low expectations, cautious about complexity. The editorial link list process was sacred.</li>\n                        <li><strong>Domain authority at risk.</strong> 65/100 DA that any migration could damage.</li>\n                    </ul>\n\n                    <h2>The solution</h2>\n                    <p>The team turned the ambiguous directive into a growth-led roadmap: every initiative tied to an audience or business KPI, and a phased migration that protected the existing audience.</p>\n\n                    <h2>My role</h2>\n                    <p>Product Manager at 70% allocation, partnering with a DRI (Senior Creative Strategist), Experience Design leads, Content Strategy, Technology Director, and Executive Producer. Strategic product inputs fed two Managing Directors who handled the primary client-facing sessions.</p>\n\n                    <h2>Strategy and approach</h2>\n                    <p>The engagement introduced a requirements-first methodology, new to the agency.</p>\n                    <p><strong>Before:</strong> \"I need a homepage hero\" leads to design exploration leads to feature definition.</p>\n                    <p><strong>After:</strong> \"I need newsletter promotion\" leads to KPI mapping leads to requirements documentation leads to design system component selection.</p>\n                    <p>Every feature had to justify its existence through a KPI or audience need before visual exploration. The team defined five \"how we win\" strategic territories: access to everything you need to know, clarify editorial perspective, evolving story tracking, dynamic templates, ecosystem clarity.</p>\n                    <p>Key features defined:</p>\n                    <ul>\n                        <li><strong>Topic Tracker.</strong> Story-following for evolving news narratives.</li>\n                        <li><strong>Editorial Perspective.</strong> Modernized link list with 4 view options.</li>\n                        <li><strong>Newsletter integration.</strong> Strategic placement throughout user journey (primary growth KPI).</li>\n                        <li><strong>Click-to-expand articles.</strong> Friction reduction for multi-article consumption.</li>\n                        <li><strong>Section pages.</strong> Consolidated subsite architecture preserving SEO equity.</li>\n                    </ul>\n\n                    <h2>Planning</h2>\n                    <p>A full Current Requirements Document was built in Airtable. Every initiative carried acceptance criteria, T-shirt sizing (XS to XXL converted to hours), a KPI mapping, a strategic pillar alignment, and a sprint assignment across a 4-sprint design phase.</p>\n                    <p>Subsite consolidation followed a phased approach. Energy, Health, World, Policy, and History would fold into the flagship as section pages, one at a time, with weekly SEO monitoring, rollback capability, and traffic checkpoints.</p>\n                    <p>Deliverable gates: Midpoint Presentation (May 5) and Final Define Presentation (May 23).</p>\n\n                    <h2>Cross-functional alignment</h2>\n                    <ul>\n                        <li><strong>Experience Strategy.</strong> Shared CRD ownership, audit-first methodology identifying 3 to 4 redundant link list variations.</li>\n                        <li><strong>Content Strategy.</strong> Subsite consolidation analysis with data-driven evaluation criteria.</li>\n                        <li><strong>Technology Director.</strong> Feasibility validation for every feature, consistent \"yes, this is possible\" responses built client confidence.</li>\n                        <li><strong>Analytics partnership.</strong> Measurement strategy and tracking requirements for all features.</li>\n                        <li><strong>Workshop facilitation.</strong> Brought Experience Design, Content Strategy, Design, Technology, and Production together for complex feature definition.</li>\n                    </ul>\n\n                    <h2>Stakeholder trust</h2>\n                    <p>The room itself took managing: two Managing Directors with different appetites for ambition versus deliverability, a DRI working with a PM for the first time, and a client with low expectations who preferred conversational feedback over formal written responses.</p>\n                    <p>Data-driven scope recommendations kept the ambition-versus-realism gap workable. When formal client feedback ran slow, conversational signals from presentations, meeting transcripts, and proactive tollgate reviews with the MDs before client sessions filled it.</p>\n\n                    <h2>Before and after</h2>\n                    <div class=\"case-table-wrap\">\n                        <table class=\"case-table\">\n                            <thead>\n                                <tr>\n                                    <th scope=\"col\">Dimension</th>\n                                    <th scope=\"col\">Before</th>\n                                    <th scope=\"col\">After Define Phase</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr><th scope=\"row\">Brief clarity</th><td>\"Modernize the site\"</td><td>Every initiative tied to a measurable audience outcome</td></tr>\n                                <tr><th scope=\"row\">Methodology</th><td>Design-first</td><td>Requirements-first (CRD as single source of truth)</td></tr>\n                                <tr><th scope=\"row\">Subsite strategy</th><td>16 independent properties</td><td>5-subsite consolidation plan with SEO protection</td></tr>\n                                <tr><th scope=\"row\">Measurement</th><td>Baselines not tracked</td><td>25+ KPIs across engagement, discovery, retention, SEO</td></tr>\n                                <tr><th scope=\"row\">Feature justification</th><td>Design instinct</td><td>Every feature mapped to KPI or audience need</td></tr>\n                                <tr><th scope=\"row\">Scope</th><td>Ambiguous</td><td>T-shirt sizing, sprint assignments, prioritization workshop</td></tr>\n                                <tr><th scope=\"row\">Agency methodology</th><td>Design-led</td><td>Requirements-first adopted as model for future projects</td></tr>\n                            </tbody>\n                        </table>\n                    </div>\n\n                    <h2>Tooling and reporting</h2>\n                    <ul>\n                        <li><strong>Product management.</strong> Airtable (CRD with full KPI traceability), Confluence (documentation).</li>\n                        <li><strong>Design.</strong> Figma (wireframes, component specs), workshop outputs.</li>\n                        <li><strong>Analytics.</strong> Google Analytics (baselines), analytics partnership (measurement strategy).</li>\n                        <li><strong>Platform (planned).</strong> Headless CMS, consent management platform, newsletter API, React with ISR.</li>\n                        <li><strong>Frameworks.</strong> OGSM, RICE, MoSCoW, T-shirt sizing, Jobs to Be Done.</li>\n                    </ul>\n\n                    <h2>Results</h2>\n                    <ul class=\"case-results-list\">\n                        <li><strong>100% initiative-to-KPI traceability</strong> across the modernization roadmap.</li>\n                        <li><strong>Requirements-first methodology</strong> adopted as agency model for future projects.</li>\n                        <li><strong>5-subsite consolidation strategy</strong> with SEO monitoring and rollback protecting 65M+ views and 65/100 DA.</li>\n                        <li><strong>25+ KPI measurement framework</strong> with documented baselines.</li>\n                        <li><strong>CRD approach</strong> (Airtable-based) becoming the template for future agency projects.</li>\n                        <li><strong>Design phase transition</strong> defined with a 4-sprint structure.</li>\n                    </ul>\n\n                    <h2>Why this worked</h2>\n                    <p>Forcing every feature to justify itself through a KPI was cultural change inside a design-led agency. It worked because nobody fought the design culture; the CRD simply handed it better inputs. Design, technology, content, and strategy all contributed to that one artifact, so by the time the client saw the work, alignment was already built in.</p>\n                    <p>The subsite consolidation strategy protected revenue by design. Folding 5 properties into the flagship as section pages, one at a time, with weekly SEO monitoring and rollback capability, meant the 65M+ monthly views were never at risk from a single decision. The measurement framework made it possible to verify after every step.</p>\n\n                    <p class=\"case-pull\">A loyal audience wants their site, just better. Forget that, and modernization turns into destruction with a design brief.</p>",
    "metaDescription": "A 16-property media ecosystem with 65M+ monthly views needed modernization without destroying audience value. Every feature had to justify itself through a KPI before design began."
  },
  "retail-ecommerce-modernisation": {
    "title": "Checkout, payments, and peak capacity fixed before the 2020 window closed",
    "eyebrow": "Case study 05 &middot; [NDA Client] &middot; Global apparel retail group",
    "pillar": "Retention and growth",
    "tagline": "Demand was surging and the platform kept leaking it: checkout friction, no modern payments, fragile peak capacity. The fixes had to land before holiday season or the biggest e-commerce window in retail history would pass.",
    "tags": [
      "Retail and e-commerce",
      "Digital transformation",
      "Checkout",
      "BNPL",
      "Performance",
      "Growth"
    ],
    "outcomes": [
      {
        "value": "+50%",
        "label": "Online sales growth, year over year"
      },
      {
        "value": "+40%",
        "label": "Peak traffic capacity"
      },
      {
        "value": "+10%",
        "label": "Sales lift from payment flexibility"
      }
    ],
    "rail": [
      {
        "dt": "Company",
        "dd": "ThoughtWorks"
      },
      {
        "dt": "Client",
        "dd": "[NDA]"
      },
      {
        "dt": "Role",
        "dd": "Business Analyst"
      },
      {
        "dt": "Industry",
        "dd": "Retail and e-commerce"
      },
      {
        "dt": "Timeline",
        "dd": "September 2019 to November 2020"
      }
    ],
    "related": [
      {
        "href": "/work/liferay-enterprise-dxp",
        "num": "06 &middot; Liferay &middot; Enterprise DXP vendor",
        "title": "Eight on-time releases closed churn-driving gaps"
      },
      {
        "href": "/work/thoughtworks-pm-practice",
        "num": "07 &middot; ThoughtWorks &middot; Global engineering consultancy",
        "title": "A PM practice that grew 80% during headcount cuts"
      }
    ],
    "body": "<p class=\"case-summary\">One of the largest US apparel specialty retail groups. Online represented roughly a quarter of revenue. The platform struggled during peak traffic, offered no Apple Pay or BNPL, and had checkout friction contributing to above-average cart abandonment. Then COVID created the largest surge in e-commerce demand in retail history. Growth was coming either way. The platform would either capture it or leak it to competitors who had already modernized payments and performance.</p>\n\n                    <h2>The challenge</h2>\n                    <ul>\n                        <li><strong>Low digital penetration.</strong> Online revenue share around 25% pre-pandemic.</li>\n                        <li><strong>Peak traffic fragility.</strong> Platform struggled during Black Friday and holiday surges.</li>\n                        <li><strong>No modern payments.</strong> No Apple Pay, no BNPL. Competitors were adopting both.</li>\n                        <li><strong>Cart abandonment.</strong> Industry average ~67%, with the client's checkout friction contributing to above-average rates.</li>\n                        <li><strong>Corporate restructuring.</strong> Already reorganizing when COVID hit.</li>\n                    </ul>\n\n                    <h2>The solution</h2>\n                    <p>Platform modernization targeting performance, checkout, and payment flexibility at the same time.</p>\n\n                    <h2>My role</h2>\n                    <p>Business Analyst bridging into product thinking. The work covered requirements written as user stories with acceptance criteria, stakeholder workshop facilitation, deliverable tracking, and coordination between PM, tech lead, and development. This was the role where the shift from BA to PM took shape, judged on user outcomes and business impact rather than requirements documentation alone.</p>\n\n                    <h2>Strategy and approach</h2>\n                    <p>Three simultaneous layers.</p>\n                    <ol>\n                        <li><strong>Platform performance.</strong> 40%+ more peak traffic capacity, capturing Black Friday revenue.</li>\n                        <li><strong>Checkout optimization.</strong> Apple Pay and BNPL integration.</li>\n                        <li><strong>User experience.</strong> Design improvements reducing cart abandonment.</li>\n                    </ol>\n\n                    <h2>Planning</h2>\n                    <p>Coordinated with project manager and tech lead on deliverable tracking and deadlines. Requirements documented as user stories, stakeholder meetings facilitated, demos presented.</p>\n\n                    <h2>Cross-functional alignment</h2>\n                    <ul>\n                        <li><strong>Project manager and tech lead.</strong> Weekly deliverable tracking.</li>\n                        <li><strong>Development teams.</strong> User stories with acceptance criteria.</li>\n                        <li><strong>Stakeholders.</strong> Workshops and demos.</li>\n                        <li><strong>User research.</strong> Interviews analysing pain points for conversion funnel optimization.</li>\n                    </ul>\n\n                    <h2>Stakeholder trust</h2>\n                    <p>This was a high-stakes engagement during the client's restructuring. Trust came from consistent deliverable quality and clear requirements documentation that kept development aligned with business goals during organizational turbulence.</p>\n\n                    <h2>Before and after</h2>\n                    <div class=\"case-table-wrap\">\n                        <table class=\"case-table\">\n                            <thead>\n                                <tr>\n                                    <th scope=\"col\">Dimension</th>\n                                    <th scope=\"col\">Before</th>\n                                    <th scope=\"col\">After</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr><th scope=\"row\">Online revenue share</th><td>~25%</td><td>~45%</td></tr>\n                                <tr><th scope=\"row\">Online sales growth</th><td>Baseline</td><td>+50%+ year over year</td></tr>\n                                <tr><th scope=\"row\">E-commerce revenue</th><td>Baseline</td><td>+20%+</td></tr>\n                                <tr><th scope=\"row\">Peak traffic capacity</th><td>Struggled during surges</td><td>+40%+</td></tr>\n                                <tr><th scope=\"row\">Payment options</th><td>Credit and debit only</td><td>Apple Pay plus BNPL</td></tr>\n                                <tr><th scope=\"row\">Cart additions</th><td>Baseline</td><td>+15%+</td></tr>\n                                <tr><th scope=\"row\">Sales from payments</th><td>Baseline</td><td>+10%+ from flexibility</td></tr>\n                            </tbody>\n                        </table>\n                    </div>\n\n                    <h2>Tooling and reporting</h2>\n                    <ul>\n                        <li><strong>Requirements.</strong> User stories with acceptance criteria.</li>\n                        <li><strong>Agile.</strong> Daily standups, sprint planning, retrospectives.</li>\n                        <li><strong>Tracking.</strong> Deliverable tracking with PM and tech lead.</li>\n                        <li><strong>Research.</strong> User interviews, conversion funnel analysis.</li>\n                    </ul>\n\n                    <h2>Results</h2>\n                    <ul class=\"case-results-list\">\n                        <li><strong>50%+ online sales increase</strong> verified against public filings.</li>\n                        <li><strong>20%+</strong> e-commerce revenue growth.</li>\n                        <li><strong>40%+</strong> platform scalability improvement.</li>\n                        <li><strong>Apple Pay and BNPL</strong> integrated at scale.</li>\n                        <li><strong>10%+</strong> sales lift from payment flexibility.</li>\n                        <li><strong>15%+</strong> cart additions increase.</li>\n                        <li>Cart abandonment improved against the <strong>~67% industry benchmark</strong>.</li>\n                    </ul>\n\n                    <h2>Industry context</h2>\n                    <p>US e-commerce grew ~40% in 2020. The client's growth outpaced the market by double-digit points, suggesting genuine platform improvements beyond pandemic tailwinds. The digital shift proved permanent: years later, online still represented a meaningfully larger share of revenue than pre-transformation baseline.</p>\n\n                    <h2>Why this worked</h2>\n                    <p>The timing did half the work. Corporate restructuring plus a pandemic meant lower institutional resistance to digital investment, and higher stakes: the improvements had to ship before Black Friday or the window closed. The team attacked all three constraints at once (performance, checkout, payments) because fixing any one alone would still leak revenue through the other two.</p>\n                    <p>Outpacing a market that grew ~40% is what separates real platform improvement from pandemic tailwinds.</p>\n\n                    <p class=\"case-pull\">Platform constraints tax revenue whether or not anyone measures the leak. The 2020 surge made the bill impossible to ignore.</p>",
    "metaDescription": "Checkout friction and fragile peak capacity were leaking a once-in-history demand surge. The modernization landed before the 2020 holiday season and online sales grew 50%+, outpacing the market."
  },
  "sports-league-design-system": {
    "title": "Specs that crossed a 32-property handoff with zero clarification cycles",
    "eyebrow": "Case study 02 &middot; [NDA Client] &middot; US professional sports league",
    "pillar": "Platform modernization",
    "tagline": "With the client's own engineers doing the build, any ambiguity in a spec turns straight into rework. A requirements-first operating model locked every state and variation before design began.",
    "tags": [
      "Sports and entertainment",
      "Design systems",
      "Enterprise",
      "Cross-platform",
      "Requirements"
    ],
    "outcomes": [
      {
        "value": "9",
        "label": "Component specs, 4 breakpoints"
      },
      {
        "value": "30+",
        "label": "Entitlement states per component"
      },
      {
        "value": "0",
        "label": "Clarification cycles to engineering"
      }
    ],
    "rail": [
      {
        "dt": "Company",
        "dd": "Code and Theory"
      },
      {
        "dt": "Client",
        "dd": "[NDA]"
      },
      {
        "dt": "Role",
        "dd": "Senior Product Manager"
      },
      {
        "dt": "Industry",
        "dd": "Sports, media, digital experience"
      },
      {
        "dt": "Timeline",
        "dd": "April 2025 to present (Phase 3 of a multi-year engagement)"
      }
    ],
    "related": [
      {
        "href": "/work/political-media-ecosystem",
        "num": "03 &middot; [NDA Client] &middot; US political media network",
        "title": "\"Modernize the site\" without risking 65M monthly views"
      },
      {
        "href": "/work/fitness-membership-platform",
        "num": "04 &middot; [NDA Client] &middot; Major US fitness franchise",
        "title": "Easy cancellation, then 150% revenue growth"
      }
    ],
    "body": "<p class=\"case-summary\">One of the largest professional sports leagues in the US, running a multi-year digital transformation with the lead agency. Phase 3 carried a specific risk: the agency designed, but the client's engineers built. Any ambiguity in component specifications would surface as rework on a high-visibility engagement spanning 32 club properties. The open question: could the design system's logic, its entitlement states, seasonal variations, and breakpoint behavior, cross an organizational boundary without information loss?</p>\n\n                    <h2>The challenge</h2>\n                    <p>Phase 3 inherited complexity from two directions.</p>\n                    <p><strong>Client side.</strong> The client's PM and engineering teams owned Jira, CMS, and QA. The agency designed and specified; the client built. Requirements had to be precise enough for another organization's engineers to implement without clarification.</p>\n                    <p><strong>Agency side.</strong> A new design team with zero prior system experience was onboarded. They needed to understand a legacy component library, complex entitlement logic (logged-out vs. subscriber vs. premium), seasonal variations (pre, regular, post, off-season), and day-parting windows (morning, afternoon, primetime), all before sprint one.</p>\n                    <p>Ambiguity anywhere in those requirements would resurface later as rework, on an engagement everyone was watching.</p>\n\n                    <h2>The solution</h2>\n                    <p>A requirements-first approach that locked every component's states, variations, and decisions before design began. The centerpiece was a two-hour in-person requirements workshop.</p>\n\n                    <h2>My role</h2>\n                    <p>Product Manager embedded within the agency team, partnered directly with the client's web PM and main stakeholder. The job sat in the connective layer between design output and development execution, with no ownership of the client's Jira, CMS, or QA.</p>\n\n                    <h2>Strategy and approach</h2>\n                    <p>The first two weeks absorbed all of the ambiguity, on purpose.</p>\n                    <ol>\n                        <li><strong>Current-state UX audit</strong> across the client's web, mobile app, premium product, and competitive platforms (other major leagues, streaming services, sports media), surfacing structural gaps, navigation inconsistencies, and off-site link leakage.</li>\n                        <li><strong>Legacy component matching.</strong> Every existing component categorized as kill, reskin, or redesign against the updated design system.</li>\n                        <li><strong>Requirements workshop.</strong> Two hours in person produced a complete component list per page, confirmed states and variations, and clear decisions for each legacy element.</li>\n                        <li><strong>Component specification.</strong> 9 detailed specs in Figma across four breakpoints (mobile, tablet, small desktop, large desktop) with element descriptions, required/optional flags, responsiveness notes, and accessibility considerations.</li>\n                    </ol>\n\n                    <h2>Planning</h2>\n                    <p>Delivery ran on a weekly staggered cadence, most complex components first, to maximise development lead time. Every Friday a completed component package went out, and that rhythm kept the multi-year engagement on track across both organizations.</p>\n                    <p>Sprint 0 had two priorities, navigation and the link list, the foundations that unblocked everything after them.</p>\n\n                    <h2>Cross-functional alignment</h2>\n                    <ul>\n                        <li><strong>Twice-weekly design reviews</strong> with the client's web PM and stakeholder, maintaining a 48-hour feedback turnaround.</li>\n                        <li><strong>48-hour lock rule.</strong> Requirements locked before design started, no late-stage scope additions.</li>\n                        <li><strong>Accessibility co-authoring.</strong> Component-level requirements written with the accessibility lead.</li>\n                        <li><strong>New team onboarding.</strong> Brought a design team with no prior system experience up to speed through component matching and workshop outputs.</li>\n                        <li><strong>Coordinated delivery</strong> across agency designers, developers, QA, and the client's Product, Engineering, and Analytics teams.</li>\n                    </ul>\n\n                    <h2>Stakeholder trust</h2>\n                    <p>One outcome measured trust: the client's internal PM could write development acceptance criteria directly from the Figma documentation, with no extra clarification cycles. The specs made the full trip, agency to client to client's engineering, intact.</p>\n                    <p>The twice-weekly design reviews and 48-hour feedback SLA created a predictable rhythm. Both sides knew exactly when decisions would be made and when deliverables would arrive.</p>\n\n                    <h2>Before and after</h2>\n                    <div class=\"case-table-wrap\">\n                        <table class=\"case-table\">\n                            <thead>\n                                <tr>\n                                    <th scope=\"col\">Dimension</th>\n                                    <th scope=\"col\">Before (typical agency handoff)</th>\n                                    <th scope=\"col\">After (requirements-first)</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr><th scope=\"row\">Edge case discovery</th><td>During development</td><td>Before design started</td></tr>\n                                <tr><th scope=\"row\">Entitlement coverage</th><td>Partial (logged-out vs. subscriber)</td><td>Full (3 user types, 4 seasons, 3 day-parting windows)</td></tr>\n                                <tr><th scope=\"row\">Design rework</th><td>Frequent mid-sprint</td><td>Eliminated through upfront lock</td></tr>\n                                <tr><th scope=\"row\">Acceptance criteria</th><td>Required clarification cycles</td><td>Client PM wrote criteria directly from Figma</td></tr>\n                                <tr><th scope=\"row\">New team ramp-up</th><td>Weeks of context gathering</td><td>Compressed into workshop and component matching</td></tr>\n                                <tr><th scope=\"row\">Legacy decisions</th><td>Unclear, debated per component</td><td>Kill / reskin / redesign confirmed for every element</td></tr>\n                            </tbody>\n                        </table>\n                    </div>\n\n                    <h2>Tooling and reporting</h2>\n                    <ul>\n                        <li><strong>Requirements.</strong> Figma (component specs, 4 breakpoints), workshop documentation.</li>\n                        <li><strong>Tracking.</strong> Client's Jira (agency didn't own), agency-side sprint cadence.</li>\n                        <li><strong>Communication.</strong> Twice-weekly design reviews, 48-hour feedback SLA.</li>\n                        <li><strong>Research.</strong> Competitive audit across six platforms.</li>\n                        <li><strong>Accessibility.</strong> Co-authored requirements with the accessibility lead.</li>\n                    </ul>\n\n                    <h2>Results</h2>\n                    <ul class=\"case-results-list\">\n                        <li><strong>9 component specifications</strong> covering 3 entitlement states, 4 seasonal variations, 3 day-parting windows.</li>\n                        <li><strong>Kill / reskin / redesign</strong> decided for every legacy component across 4 page types.</li>\n                        <li><strong>Zero clarification cycles</strong> between agency specs and client engineering.</li>\n                        <li><strong>Consistent Friday delivery</strong> maintained throughout the phase.</li>\n                        <li><strong>New design team</strong> productive within first sprint despite no prior system experience.</li>\n                    </ul>\n\n                    <h2>Entitlement logic</h2>\n                    <p>The subscription hub required component states that changed based on three dimensions simultaneously.</p>\n                    <ul>\n                        <li><strong>User type:</strong> logged-out, standard subscriber, premium subscriber.</li>\n                        <li><strong>Season:</strong> pre, regular, post, off-season.</li>\n                        <li><strong>Time of day:</strong> morning, afternoon, primetime.</li>\n                    </ul>\n                    <p>A single component could have 30+ possible states (3 by 4 by 3). Documenting this in Figma across four breakpoints meant each component spec was essentially a decision tree. Getting it right before design began, rather than discovering edge cases during development, was the entire value of the requirements-first approach.</p>\n\n                    <h2>Why this worked</h2>\n                    <p>Most agencies design first and discover complexity during development. This engagement inverted that. Entitlement logic (3 user types, 4 seasons, 3 day-parting windows) means a single component could have 30+ possible states. Discovering those edge cases mid-sprint would have cost weeks per component. Discovering them in a two-hour workshop cost one afternoon.</p>\n                    <p>The governance model, 48-hour lock rule, weekly Friday delivery, staggered complexity, created predictability for both organizations. The client's PM wrote acceptance criteria straight from the Figma documentation, and not one spec came back with questions.</p>\n\n                    <p class=\"case-pull\">On a design system engagement, the PM earns their keep on requirement precision, the kind that survives a handoff to another company's engineers.</p>",
    "metaDescription": "Requirements ambiguity threatened rework across a high-visibility sports ecosystem. A requirements-first approach eliminated every clarification cycle before design began."
  },
  "thoughtworks-pm-practice": {
    "title": "A PM practice that grew 80% while the consultancy cut headcount",
    "eyebrow": "Case study 07 &middot; ThoughtWorks &middot; Global engineering consultancy",
    "pillar": "Product capability",
    "tagline": "The consultancy was cutting headcount globally, so the Brazil PM practice couldn't grow by hiring. It grew 80%+ anyway, on mentorship, training, and process that outlasted the downturn.",
    "tags": [
      "Technology consulting",
      "Practice leadership",
      "Mentorship",
      "C2C marketplace",
      "Growth"
    ],
    "outcomes": [
      {
        "value": "+80%",
        "label": "PM practice growth"
      },
      {
        "value": "8",
        "label": "Training workshops shipped"
      },
      {
        "value": "+45%",
        "label": "Feature relevance, marketplace"
      }
    ],
    "rail": [
      {
        "dt": "Company",
        "dd": "ThoughtWorks"
      },
      {
        "dt": "Role",
        "dd": "Technical Product Manager"
      },
      {
        "dt": "Industry",
        "dd": "Technology consulting, consumer marketplace"
      },
      {
        "dt": "Timeline",
        "dd": "December 2022 to November 2023"
      }
    ],
    "related": [
      {
        "href": "/work/enterprise-ai-platform-launch",
        "num": "01 &middot; Code and Theory &middot; Engineering analytics SaaS",
        "title": "A manual audit rebuilt as an AI product"
      },
      {
        "href": "/work/fitness-membership-platform",
        "num": "04 &middot; [NDA Client] &middot; Major US fitness franchise",
        "title": "Easy cancellation, then 150% revenue growth"
      }
    ],
    "body": "<p class=\"case-summary\">A global engineering consultancy at peak revenue, facing an industry-wide slowdown that would soon lead to global headcount reduction. The mandate ran on two tracks: grow the Brazil PM practice (capability, career paths, delivery quality) alongside the Head of Product, and serve as Technical Product Manager for a C2C marketplace platform. With hiring off the table, growth had to come from making existing PMs better and building repeatable capability that could survive organizational pressure.</p>\n\n                    <h2>The challenge</h2>\n                    <p><strong>Practice side.</strong> The Brazil PM function needed more trained PMs, stronger practices, and better career pathways. All this during a year when the consultancy was reducing headcount globally.</p>\n                    <p><strong>Product side.</strong> A C2C marketplace where feedback from users and stakeholders was collected but not systematically channelled into the product lifecycle.</p>\n\n                    <h2>The solution</h2>\n                    <p><strong>Practice.</strong> Capability building through individual mentorship and structured training, since new headcount wasn't coming.</p>\n                    <p><strong>Product.</strong> Bi-weekly feedback loops systematically capturing input from users, stakeholders, feature requests, evaluation notes, and usage data, directly feeding the product lifecycle.</p>\n\n                    <h2>My role</h2>\n                    <p>Technical Product Manager spanning internal practice leadership and external client delivery.</p>\n\n                    <h2>Strategy and approach</h2>\n                    <p><strong>Practice growth.</strong> Hands-on mentorship (5 PMs individually) and structured training (8 workshops on discovery, delivery, stakeholder management, career progression). With no room to hire, the practice bet on making its existing PMs better.</p>\n                    <p><strong>Marketplace.</strong> Replaced ad-hoc feedback collection with structured bi-weekly loops using Figma and Jira. This created a direct pipeline from user insight to product decision.</p>\n\n                    <h2>Cross-functional alignment</h2>\n                    <ul>\n                        <li>Partnered with Head of Product on strategy and roadmap execution.</li>\n                        <li>Collaborated with engineering and design teams on feedback integration.</li>\n                        <li>Engaged with product leadership on both internal and external partner strategies.</li>\n                        <li>Contributed to pro-bono initiatives for small agriculture businesses.</li>\n                    </ul>\n\n                    <h2>Stakeholder trust</h2>\n                    <p>The practice growth happened during the consultancy's most difficult year. Holding delivery quality and growing capability while the organization restructured around the team meant constant triage across morale, priorities, and resource constraints.</p>\n\n                    <h2>Results</h2>\n                    <ul class=\"case-results-list\">\n                        <li><strong>80%+ growth</strong> in PM practice size.</li>\n                        <li><strong>5 product managers</strong> mentored with career guidance.</li>\n                        <li><strong>8 training workshops</strong> on discovery and delivery.</li>\n                        <li><strong>45%+ increase</strong> in feature relevance for C2C marketplace.</li>\n                        <li><strong>50+ use cases</strong> with test plans, cutting clarification cycles 60%+.</li>\n                        <li>Contributed to a disability inclusion study.</li>\n                        <li>Built digital platforms for agriculture businesses (pro bono).</li>\n                    </ul>\n\n                    <h2>Why this worked</h2>\n                    <p><strong>Capability scales differently than headcount.</strong> Five individually mentored PMs with stronger discovery, delivery, and stakeholder skills created more impact than five additional hires would have, and the workshops turned that mentoring into reusable institutional knowledge. When the market contracted further, that depth held.</p>\n                    <p><strong>Structured feedback changed the marketplace product.</strong> The C2C platform had plenty of user and stakeholder input. None of it was systematically connected to the product lifecycle. Bi-weekly feedback loops in Figma and Jira created a direct pipeline from insight to decision. Feature relevance improved 45%+ because the roadmap finally reflected what users were actually asking for.</p>\n\n                    <p class=\"case-pull\">The practice grew 80% in the year the industry shrank, without hiring its way there.</p>",
    "metaDescription": "The consultancy was at peak revenue but heading into contraction. The PM practice still grew 80%+, built on mentorship and training rather than hiring, alongside delivery for a C2C marketplace client."
  }
}
