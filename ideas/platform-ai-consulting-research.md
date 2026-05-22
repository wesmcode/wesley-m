# Platform & AI Consulting Research
## Sourced synthesis for Wesley Melo's fractional PM / enterprise advisor positioning
_Compiled 2026-05-22. Sources cited inline; full URL list at end of each section._

---

## 1. Platform / Application Modernization in 2026

### How leading consultancies describe modernization today

**ThoughtWorks** currently leads with the most aggressive AI-native modernization framing. Their service page for legacy modernization (thoughtworks.com/what-we-do/legacy-modernization) describes a methodology that "focuses on retiring obsolete components, replacing commodity functionality, and modernizing the capabilities that differentiate the business—enabling faster release cycles, lower transformation costs, and more sustainable modernization outcomes."

In January 2026, ThoughtWorks launched **AI/works**, described as "a new agentic development platform that sets the standard for modernizing legacy systems and building new industrial-grade technology products and platforms in the AI era." The platform uses "AI-enabled reverse engineering to interpret legacy applications and convert them into structured specifications enriched with regulatory, security and industry context. These specifications guide agentic workflows that generate production-grade code, automated tests and deployment pipelines." ThoughtWorks also earned AWS Mainframe Modernization Competency status in early 2026, adding credibility to their mainframe-to-cloud positioning.

Their stated delivery vehicle is the **3-3-3 model**: three phases (product concept → prototype → MVP), each taking one month, delivering idea-to-production in 90 days. Phase 1: "align stakeholders on scope, objectives and outcomes." Phase 2: "create prototype confirming desirability, viability and feasibility." Phase 3: "ship MVP leveraging AI/works and begin continuous evolution."

**Accenture** reorganized in September 2025 into a single "Reinvention Services" business with seven "Reinvention Partners." Their language for platform modernization is: "reinventing digital foundations—including technology strategy and architecture, data and AI, modernizing and managing applications, infrastructure, data and cloud." Accenture partnered with WaveMaker in 2026 specifically to target growth-stage companies "with annual revenue of up to US$3 billion," offering a lower-cost path to modernization that "reduce[s] development complexity and deliver[s] new digital experiences that drive measurable business outcomes." This signals awareness that their hyperscale model is losing to faster, cheaper alternatives in the sub-enterprise tier.

**Capgemini** introduced **CAALM** (Capgemini AI-Assisted Legacy Modernization) in May 2025, a gen AI + agentic AI platform that "analyzes legacy codebases, extract[s] business rules, and automate[s] portions of the migration process." Their engagement model is a three-stage framework: **Innovate → Optimize → Scale**. The Innovate stage develops "a strategic roadmap to drive continuous innovation across multiple cloud infrastructures for Product Oriented Delivery (POD)." The Optimize stage "optimizes deployments of multiple containers with a continuous measurement and optimization framework." HFS Research published a Capgemini capability assessment for legacy application modernization services in 2025, confirming their positioning as a global-scale, automation-first modernization partner.

**EPAM** (epam.com/services/engineering/modernization) describes its offer as "helping drive rapid optimization and growth through platform and application modernization," with strong engineering depth and recognized delivery quality. EPAM sits above boutique but below Accenture/Capgemini scale, making it a relevant competitive reference for mid-market buyers.

### Engagement shapes

The standard menu in 2026 is:

1. **Legacy monolith → microservices decomposition**: Still the core technical play. Often begins with domain boundary mapping, then strangler-fig extraction of the highest-value slices.
2. **On-prem → cloud migration** (lift-and-shift → re-platform → re-architect spectrum). Timelines: 3–6 months for lift-and-shift, 6–12 months for re-platform, 12–24+ months for full re-architecture.
3. **Mainframe offload**: Now a distinct sub-category, accelerated by AI-assisted reverse engineering of COBOL/legacy code.
4. **Multi-CMS consolidation / headless CMS adoption**: Mid-market companies are paying dearly for SaaS CMS sprawl. The headless CMS market is growing from $3.94 billion in 2025 to a projected $22.28 billion by 2034 (~21% CAGR), driven by the need to serve content across web, mobile, AI interfaces, and IoT without being locked into monolithic vendors.
5. **API-first re-architecture**: Often triggered when a company's front-end stack has outpaced its backend (teams want Next.js/SvelteKit delivery but are blocked by a templating-locked CMS or ERP).

### Where the PM/product layer fits—and why it's missing

Almost all consultancies sell modernization as a tech-led offer. The framing is about code migration velocity, AI-accelerated extraction, and cloud cost reduction. The buyer pain is real: enterprises spend "up to 80% of [their] IT budget just to maintain legacy operations, leaving only a small amount of money available for new capabilities." But the delivery model rarely includes a product layer that answers:

- What do we migrate first, and against what business outcome?
- What do we retire versus what we preserve?
- How do we sequence migration phases so each delivers standalone value without creating a multi-year transformation hostage situation?
- How do we communicate to the board in business terms, not architecture terms?

This is the **product-led modernization wedge** that a fractional PM with both ThoughtWorks delivery lineage and engineering depth can own. No Capgemini engagement manager and no ThoughtWorks principal consultant are going to sit with the VP of Product for four hours and build the business-case model for Phase 1. That's the white space.

### What's changed since ThoughtWorks's classic evolutionary architecture framing

ThoughtWorks's **evolutionary architecture** canon (articulated in the 2017/2022 O'Reilly book by Neal Ford, Rebecca Parsons, and Patrick Kua) held that "evolutionary architecture is an approach to building software designed to evolve over time as business priorities change, customer demands shift, and new technologies emerge." The specific mechanisms were:

- **Fitness functions**: Automated tests that measure architectural health—speed, security, data integrity, adaptability. "Fitness function-driven development communicates architectural standards as code and empowers development teams to deliver features that are aligned with architectural goals."
- **Strangler fig pattern**: Martin Fowler coined the metaphor in 2001; ThoughtWorks operationalized it as the default modernization pattern. The key mechanic is a façade/proxy that intercepts requests and routes them to either the legacy system or the new service, so the migration can proceed incrementally.
- **Contract testing**: Consumer-driven contracts (Pact) to prevent integration regressions when decomposing monoliths.
- **Incremental over big-bang**: "Evolutionary architecture provides the benefits of enterprise architecture without the problems caused by trying to accurately predict the future."

What's changed by 2026: ThoughtWorks's own Looking Glass 2026 report argues "the industry has moved beyond isolated AI experimentation and is entering a period of structural 'reconfiguration.'" The evolutionary architecture framing is now being overlaid with:

- **AI-accelerated reverse engineering** of legacy code (AI/works, CAALM)—fitness functions are still relevant, but they're being generated by tooling rather than hand-authored
- **Data Mesh 2.0** as the federated data layer for agentic AI—"product-centric architectures where domains own and govern their data"
- **"Computational governance"** rather than policy-based governance: "safety, privacy and security codified directly into the architecture and delivery pipeline"
- **MCP (Model Context Protocol)** as the dominant integration standard for agentic systems—ThoughtWorks Tech Radar Vol. 33 (Nov. 2025) called it "a hugely popular integration protocol that allows agents to work efficiently and semi-autonomously"
- **"Vibe coding" is dead**—Radar Vol. 33 noted it "has practically disappeared; the industry now sees a concerted effort to think through problems of context, infrastructure and security"

The ThoughtWorks CTO Rebecca Parsons predicted in 2023 that by 2025 "we'll see evolution in architecture, but not revolution"—accurate. The conceptual vocabulary (fitness functions, strangler fig, evolutionary architecture) has not been replaced; it's been absorbed into AI-accelerated tooling pipelines.

### Concrete deliverables a modernization engagement should produce

Based on what consultancies are selling and what buyers are buying in 2025–2026:

1. **Application portfolio assessment**: Inventory of existing systems, classification by age/technical debt/business criticality, retirement candidates vs. migration candidates
2. **Business-case model**: Cost-of-inaction quantification (the "80% of IT budget on maintenance" number vs. projected post-migration spend), phased investment model with expected ROI per phase
3. **Migration roadmap**: Phased plan with each phase delivering standalone business value; explicit sequencing rationale
4. **Fitness function suite**: Automated architectural health checks for the target state
5. **Change management playbook**: Team capability assessment, training plan, org design recommendations (Team Topologies–aligned)
6. **Vendor/tooling selection scorecard**: For cloud provider, CMS, API gateway, observability stack

### Price bands

Enterprise modernization consulting from Tier 1 firms (ThoughtWorks, Accenture, Capgemini): minimum engagements run several hundred thousand USD; large programs $1M–$10M+.

Independent/boutique market (2026 benchmarks):
- Senior modernization consultant day rate: $1,500–$3,000/day
- Hourly: $150–$350/hr for qualified mid-senior; $350–$500+/hr for principal-level
- Discovery/assessment engagement (4–8 weeks): $40K–$120K fixed-fee
- Full modernization advisory retainer: $10K–$25K/month
- Cloud migration projects: $50K–$500K depending on scope
- Rates for healthcare/financial services: 30–50% above generalist market
- The trend is toward **fixed-fee and value-based models** rather than T&M, particularly for phases with measurable outcomes

---

## 2. AI Consultation for Established Companies in 2026

### The big consultancies' AI advisory offers

**McKinsey QuantumBlack** (~1,700 people, 40+ offices) charges $500–700/hour for senior work. Their methodology, framed in the book "Rewired," defines six enterprise capabilities: (1) transformation roadmap tied to real value, (2) AI talent bench, (3) operating model that moves at pace, (4) distributed flexible technology environment, (5) data embedded throughout the organisation, (6) adoption and scaling that converts solutions into gains. A focused 8-week McKinsey AI strategy project runs ~$500K–$800K; full transformation programs exceed $3M.

Their State of AI survey (June–July 2025, n=1,993 across 105 nations) produced the most-cited data point in the market: **88% of organizations use AI in at least one function, but only 6% report more than 5% EBIT contribution from AI.** Nearly two-thirds have not begun scaling AI across the enterprise. "Only around one-third of organizations report scaling AI across the enterprise... the remaining two-thirds are stuck in 'pilot purgatory,' running AI experiments that never graduate to production." McKinsey's own diagnosis: "AI is 20% algorithms and 80% organizational rewiring. Workflow redesign has the biggest effect on an organization's ability to see EBIT impact" — yet only 21% of organizations using gen AI have redesigned at least some workflows.

In 2025 McKinsey partnered with Google Cloud to form the **McKinsey Google Transformation Group**, positioned to "bridge the gap between strategy and implementation." This is a concession that McKinsey's traditional advisory model (strategy only) was leaving clients stranded.

**BCG X** (~3,000 technologists) charges $400–600/hour. BCG X's differentiator is delivering "working AI prototypes alongside strategy recommendations"—a partial response to the same critique McKinsey is facing. Both firms announced multi-year OpenAI partnerships in February 2025 through the "Frontier Alliances" program, covering "strategy, workflow redesign, systems integration and change management."

**Deloitte AI Institute**: Their 2026 State of AI report (August–September 2025, n=3,235 leaders across 24 countries) found: "25% of leaders report AI is having a transformative effect on their companies—more than double from a year ago." But the execution gap is stark: "only 30% of organizations are redesigning key processes around AI and 37% report only using AI at a surface level with little or no change to underlying business processes." Most critically: **"only 21% of companies planning to deploy Agentic AI within two years have a mature model for agent governance."**

Deloitte launched the **Enterprise AI Navigator** in early 2026: a four-module advisory + software toolkit with an AI Identifier (task/agent fit analysis), Impact Analyzer (financial heatmap), Workflow Designer, and Agent Studio (build/buy/adapt agent library). It runs on their "Ascend" project management platform. This is Deloitte productizing what independent advisors have been doing on whiteboards.

**Accenture's Center for Advanced AI** sits within their AI and Data Reinvention Partner unit, responsible for advancing "AI and data training across Accenture" and developing "cutting-edge methods for designing, building and delivering the most modern AI and data foundation." Accenture trained tens of thousands of staff on ChatGPT Enterprise through their OpenAI collaboration. Their agentic AI push includes the ServiceNow "Forward Deployed Engineering Program" (launched 2026) to deploy agents into enterprise workflows at scale.

### Where independent practitioners are eating the consultancies' lunch

The decisive data point: boutique AI consulting firms "delivered comparable outcomes [to Tier 1 consultancies] in 6-8 weeks at £150k-£300k" versus "9-12 months with budgets exceeding £800k" for large firms. Boutique consulting is growing "2–3x faster than McKinsey, BCG, and Bain."

The structural reason: "67% of AI projects never reach production." Large consultancy engagements optimize for deliverable breadth, relationship management, and hourly billing. A senior independent practitioner optimizes for getting a system into production. The question buyers are learning to ask in 2025–2026: "Show me your production systems and what you learned building them." That question is unanswerable by a McKinsey team that has never deployed an LLM feature.

**The specific wedge for a practitioner with shipped multi-agent systems**: enterprise companies that have paid for strategy now need execution. McKinsey's own findings confirm 88% adoption, 6% impact—the gap is execution, not strategy. "Budget matters, but core scaling constraints include data fragmentation, workflow ambiguity, governance gaps, and change management—you can fund pilots forever and still not change the way work gets done."

The Gartner data point: **89% of enterprise AI implementations fail to deliver projected ROI**, primarily due to "inadequate platform selection and unrealistic deployment expectations." For Microsoft Copilot specifically: "only 5% of organizations moved from a pilot to larger-scale deployments." **"68% of enterprises are not ready for Copilot deployment, despite having already purchased licenses."** The implementation gap is the market.

### Standard AI advisory deliverables enterprise buyers expect

1. **AI readiness assessment** (2–3 weeks): Six-dimension diagnostic—strategy, data, technology, talent, governance, research capability—against defined maturity benchmarks. Produces a prioritized scorecard and gap analysis.
2. **Use-case discovery and prioritization**: Evaluation by feasibility, impact, and strategic fit. Produces a prioritized AI use-case portfolio.
3. **Build vs. buy vs. apply framework**: Decision guide for each use case against existing enterprise tooling (Copilot, Einstein, ServiceNow AI) versus custom build versus vendor AI API.
4. **AI risk and governance memo**: Addressing regulatory compliance, data privacy, model bias, security, and the agent governance gap (only 21% of companies have mature agent governance).
5. **ROI model**: Quantified financial impact by use case and phase.
6. **Pilot roadmap**: 90-day execution plan for the highest-value, lowest-risk use cases, with fitness criteria for graduation from pilot to production.
7. **Change management approach**: Workforce communication, role redesign, training.

### What separates a credible AI advisor from a PowerPoint consultant

The market has landed on a clear credibility test: production systems and specific lessons. "Boutiques on iteration 3+ of client systems maintained decisive advantages in implementation velocity and practical expertise." The critical question is now "Show me your production systems and what you learned building them."

Specific proof elements that matter to a corporate buyer in 2026:
- Named shipped systems (not case studies, actual production references)
- Lessons from failure (agents that didn't scale, RAG pipelines that hallucinated, governance gaps discovered post-deployment)
- Experience with enterprise constraints: IAM, audit trails, data residency, change management, procurement timelines
- Opinions on build/buy decisions for specific tooling (Copilot vs. custom LLM, which vector DB at scale)

Enterprise procurement questionnaires "started adding questions about AI governance, and by Q1 2026, these had moved from optional appendix to deal-blocker." A practitioner who has designed agent governance for production systems can answer these questions; a strategy consultant who has written frameworks about them cannot.

### The "AI executive advisor" niche in 2026

The **Fractional Chief AI Officer (CAIO)** is now a defined market role. "Unlike a traditional consultant who delivers a slide deck and departs, a Fractional CAIO provides embedded leadership, operating one to four days per week and attending executive meetings while driving accountability for AI adoption." The market framing: "gives mid-market companies strategic AI leadership, governance, and execution at 20–40% the cost of a full-time CAIO hire."

The role is specifically being sold to mid-market companies (roughly the $50M–$3B revenue band) that cannot justify a full-time CAIO but face enterprise procurement AI governance requirements, board-level AI questions, and the execution gap described above.

Pricing for fractional CAIO/AI advisor roles:
- Entry advisory (roadmap-only, ~1 day/week): $4,000–$8,000/month
- Standard mid-market engagement (governance-capable): $8,000–$15,000/month
- Senior strategic leadership (policy-producing, executive-attending): $15,000–$25,000/month
- Regulated industry specialist: $16,000–$28,000/month

The critical positioning note: the fractional CAIO that wins is not the one who produces strategy decks but the one who can "produce the policy the questionnaire asks about" and ensure that AI initiatives "graduate to production."

---

## 3. ThoughtWorks's 2025–2026 Positioning Specifically

### What ThoughtWorks is currently selling

**Legacy/Platform Modernization**:
Service description (thoughtworks.com/what-we-do/legacy-modernization): methodology focusing on "retiring obsolete components, replacing commodity functionality, and modernizing the capabilities that differentiate the business." Separate service page (thoughtworks.com/what-we-do/enterprise-platform-modernization): "Enterprise platform modernization is no longer [just a tech play]" (LinkedIn post, 2025).

**AI/works** (launched 2026):
- "Unifies legacy system understanding, requirements enhancement, dynamic automated specifications generation, and agentic code generation and testing in one platform built for complex enterprise environments"
- "AI-enabled reverse engineering to interpret legacy applications and convert them into structured specifications enriched with regulatory, security and industry context"
- "Once deployed, the platform continuously regenerates affected components as requirements evolve, reducing reliance on manual patching and avoiding large-scale rebuilds"
- "Modernization cycles that once took years can now be completed in months"
- 3-3-3 model: idea to production in 90 days

**Enterprise AI** (thoughtworks.com/what-we-do/enterprise-ai):
"Software engineering services help transform engineering teams into strategic, data-driven powerhouses by uncovering and eliminating hidden inefficiencies across the software delivery lifecycle, modernizing infrastructure and integrating AI accelerators."

**AI-First Software Engineering Transformation** (thoughtworks.com/what-we-do/ai-first-software-engineering-transformation):
Positioned as a transformation of the entire engineering delivery model, not just a tooling layer.

### ThoughtWorks Looking Glass 2026

Released January 27, 2026. Full PDF available at thoughtworks.com/content/dam/thoughtworks/documents/looking-glass-2026/tw_looking_glass_2026_accessible.pdf.

The six-edition report argues "the industry has moved beyond isolated AI experimentation and is entering a period of structural 'reconfiguration,' driven by the convergence of AI, platforms and data."

Five lenses:
1. **AI and Software Delivery**: "The shift to AI-First Software Delivery (AIFSD) offers massive potential to accelerate the entire development lifecycle and modernize legacy estates."
2. **Rewiring for Agents**: "Enterprises still treat AI as a set of isolated experiments, but the future belongs to those who rewire their core operations for intelligence to flow. Leaders must rebuild workflows and break down data silos so that agents can access information anywhere in the organization and deliver work with transparency, guardrails and continuous improvement."
3. **Data Ecosystems**: "Legacy data lakes are insufficient for the demands of agentic AI. Data ecosystems must evolve into product-centric, federated environments (Data Mesh 2.0) that supply trustworthy, real-time data to both humans and intelligent agents."
4. **Responsible Foundations**: "Responsible tech must shift from aspiration to operational discipline. Organizations must move toward 'computational governance,' where safety, privacy and security are codified directly into the architecture and delivery pipeline."
5. **Evolving Interactions**: AI shifting products "from screen-based interfaces to agentic, intent-driven experiences."

### ThoughtWorks Technology Radar highlights (Volumes 32–33, 2025)

**Volume 32** (April 2025): Supervised agents in coding assistants, developer oversight patterns, evolving observability with LLM tools and OpenTelemetry, "R in RAG" (corrective RAG, Fusion-RAG, Self-RAG).

**Volume 33** (November 2025): Four themes:
1. Infrastructure automation arriving for AI
2. "The rise of agents elevated by MCP" — MCP described as "a hugely popular integration protocol that allows agents to work efficiently and semi-autonomously"
3. AI coding workflows
4. Emerging AI antipatterns

Key quotes from Vol. 33: "'Vibe coding' — where developers provide prompts that feel right to an AI — has practically disappeared; the industry now sees a concerted effort to think through problems of context, infrastructure and security." And: "AI-accelerated shadow IT and complacency with AI-generated code" called out as emerging challenges "calling for sustained human judgment, oversight and healthy skepticism."

### Evolutionary architecture / fitness functions: the foundational frameworks

**Fitness functions** (thoughtworks.com/en-us/insights/articles/fitness-function-driven-development): "Fitness function-driven development communicates architectural standards as code and empowers development teams to deliver features that are aligned with architectural goals." Definition: "how close an architecture is to achieving an architectural aim." During TDD, "teams can write tests that measure a system's alignment to architectural goals." ThoughtWorks now extends this to AI: "How fitness functions can help us govern and measure AI" (podcast, 2025). Run cost as an architectural fitness function is also listed on the Technology Radar.

**Strangler fig** (martinfowler.com/bliki/StranglerFigApplication.html): Fowler coined this in 2001, ThoughtWorks published a three-part "Embracing the Strangler Fig pattern for legacy modernization" series in 2024. The core mechanic: "A façade (proxy) intercepts requests that go to the back-end legacy system, routing these requests either to the legacy application or to the new services." ThoughtWorks emphasizes the organizational layer: "Legacy systems become rigid and brittle because the design thinking and organizational processes that produced them built them that way. If there's no change in organizational culture and leadership, the new systems will end up in a similar mess."

**Product organization transformation** (thoughtworks.com/what-we-do/customer-experience-product-design/product-organization-transformation): ThoughtWorks uses the **Product Organization Wheel** (a multidimensional transformation framework) and their **Product Thinking Playbook**. Service language: "move from project thinking to a product-led way of working by quickly assessing current maturity and processes to build a transformation roadmap." Key emphasis: "Make decisions based on data, not just intuition, so organizations can focus on the products that will bring the most value." This is the closest ThoughtWorks gets to selling what Wesley could sell—but their delivery model requires a team; his can be a single practitioner with hands-on depth.

### How ThoughtWorks's language is dated vs. what 2026 buyers respond to

ThoughtWorks language strengths: technically rigorous, methodology-grounded, not buzzword-heavy. Phrases like "fitness function-driven development," "product-led way of working," "evolutionary architecture" signal practitioner credibility to a VP of Engineering or CTO.

ThoughtWorks language weaknesses for mid-market buyers: too abstract for a CPO or CFO. "Building Evolutionary Architectures" is a compelling book title for a principal engineer; it doesn't help a VP of Product explain to their board why Phase 1 migration costs $400K. The offering language is also implicitly team-sized—ThoughtWorks sells a 6–20 person embedded team, not an advisory relationship. Mid-market buyers who can't staff a ThoughtWorks engagement need a practitioner who speaks both the methodology language and the business-outcome language, who can do the whiteboard work without the headcount.

The reimagined fractional version: translate fitness functions into "measurable business outcomes per phase," translate strangler fig into "which parts of your platform do we touch first and why," translate evolutionary architecture into "a migration sequencing model that doesn't hold you hostage."

---

## 4. Buyer Signals — Who Is the Corporate Buyer

### VP of Product / CPO at 200–2000-person company

Pain: "Up to 80% of IT budget maintaining legacy operations." Their product roadmap is blocked by platform debt. They cannot ship the features their customers want because the underlying architecture is the wrong shape. They don't have budget for a ThoughtWorks engagement ($500K+) and don't want to hire a consulting firm's bench of mid-level engineers. They need:
- A practitioner who can assess their stack and tell them the honest migration cost/sequence without selling a 12-month engagement
- A business-case model they can take to the CFO
- A roadmap they can execute with their existing engineering team, potentially supplemented

They are not well-served by traditional fractional PM positioning (which targets founder-led startups) or by large consultancy positioning (which requires procurement processes and minimum engagement sizes). This is the gap.

### Mid-market CIO facing legacy CMS/DXP costs and SaaS sprawl

Pain: Expensive monolithic CMS licenses (Sitecore, Adobe Experience Manager, Episerver), limited ability to customize workflows, "content and marketing teams want editorial control—the ability to publish, update, and localize without filing a developer request every time." Meanwhile development teams want API-first infrastructure "that integrates with modern front-end stacks—Next.js, SvelteKit, Nuxt—without a vendor's templating constraints." Only 28% of enterprise marketers said their content strategy is "very or extremely effective" (January 2025 data). The headless migration decision is both a technical and a product decision, and neither their IT team nor their agency can make it alone.

### Companies that bought enterprise AI tooling and need it to work

**Microsoft Copilot**: "68% of enterprises are not ready for Copilot deployment, despite having already purchased licenses." "Only 5% of organizations moved from a pilot to larger-scale deployments." Enterprises signed 100,000-seat deals (Accenture, Volkswagen, Barclays) facing internal resistance because "employees want ChatGPT over Copilot." They need someone to redesign the workflows that make Copilot valuable—not someone to train employees on clicking buttons.

**Salesforce Einstein**: Companies that paid for Einstein/Agentforce and are not getting adoption. The implementation gap is about process redesign, data quality, and use-case selection—not technical configuration. The buyer is the VP of Sales Ops or VP of Product, not the IT architect.

**ServiceNow AI**: Accenture and ServiceNow launched a "Forward Deployed Engineering Program" in 2026 specifically for this problem—enterprises that bought ServiceNow AI and need someone embedded to make it work. An independent practitioner can compete here at a fraction of the cost and without the lock-in.

### Companies that paid for a McKinsey AI strategy and now need to ship from it

McKinsey's own data is the pitch: "nearly two-thirds have not yet begun scaling AI across the enterprise." Their strategy engagements produce the Rewired six-capability framework and a transformation roadmap. What they do not produce is someone who stays to build the first agent workflow, debug the RAG pipeline, and manage the change with the business unit. "Budget matters, but core scaling constraints include data fragmentation, workflow ambiguity, governance gaps, and change management—you can fund pilots forever and still not change the way work gets done."

This is the most direct competitive wedge: the company already believes in AI investment, already has a strategy document, and is now in the execution gap. They need a practitioner who has shipped multi-agent systems in production and can operate at the intersection of strategy and delivery without requiring a 9–12 month engagement.

---

## 5. Pricing and Engagement Structure

### Day rates and project bands for senior independent modernization/AI advisors (2025–2026)

**Hourly rates**:
- Generalist senior consultant: $150–$350/hr
- Principal modernization consultant: $300–$500+/hr
- AI specialist / LLM practitioner: $300–$500/hr
- Healthcare/financial services premium: +30–50% above generalist

**Day rates**:
- Senior independent modernization/AI consultant: $1,500–$3,000/day
- Principal-level with named enterprise AI production credits: $2,500–$4,000/day (implied by fractional CAIO rates below)

**Retainer models (monthly)**:
- Advisory/roadmap-only (~1 day/week): $4,000–$8,000/month
- Standard mid-market engagement (governance-capable, ~2 days/week): $8,000–$15,000/month
- Fractional CAIO / senior strategic leadership: $15,000–$25,000/month
- Regulated industries: $16,000–$28,000/month

**Project fees**:
- AI readiness assessment (2–3 weeks): $20K–$40K
- Discovery/modernization roadmap (4–8 weeks): $40K–$120K
- Pilot build (PoC/prototype): $20K–$60K (independent), $50K–$150K (agency)
- Full AI implementation project: $50K–$500K
- Application modernization program (advisory): $50K–$200K (independent advisory layer)

**Trend**: Fixed-fee and value-based models are winning over T&M. "The trend in 2025–2026 is toward fixed-fee and value-based models that align incentives—particularly for cloud migration where outcomes are measurable." Value-based framing: "Value = (Dream Outcome × Likelihood of Success) ÷ (Time to Success × Perceived Difficulty)."

### How enterprise procurement changes the pricing dynamic

When the buyer is enterprise procurement (not a founder or CPO with budget discretion), the engagement structure shifts:
- SOW-based, not retainer-based by default
- Deliverable-defined phases (assessment, roadmap, pilot) rather than open-ended advisory
- Legal/vendor qualification requirements (sometimes SOC 2 compliance, D&B lookup, insurance)
- Procurement minimum order sizes (some enterprise procurement floors start at $25K)
- Enterprise AI governance questions now on procurement checklists (Q1 2026 shift)

The implication: an independent practitioner targeting enterprise buyers needs a **productized service menu** (defined SOW templates for assessment, roadmap, pilot advisory) rather than an hourly/retainer menu. Fixed-fee phases with defined deliverables are both more appealing to enterprise procurement and more advantageous to the practitioner (no time-for-money trap).

### Equity / outcome-based deals at enterprise scale

Rare but real. The shift toward outcome-based pricing is structural: "Bloomberg estimates that subscription-based pricing could decline from 60% of software pricing models toward 30% over the next decade, while outcome-based pricing is expected to shift from 10% to 60%." For consulting, the equivalent is gain-share arrangements: "fees structured as a percentage (10–40%) of cost savings or revenue increases attributable to AI initiatives."

At enterprise scale this is almost never equity (public companies don't give equity to consultants); it takes the form of:
- Performance bonuses tied to measurable outcomes (e.g., cost reduction achieved by migration phase)
- Success-fee components added to base retainer
- Extended engagement rights if targets are hit

For a fractional PM advisor, the practical play is: lead with fixed-fee phases to reduce buyer risk, then offer outcome-tied components for phases with quantifiable ROI (e.g., "if Phase 1 migration reduces your licensing cost by the projected $X, we share in a defined percentage").

---

## The Wedge: Fractional 2026 vs. ThoughtWorks 2019

**How ThoughtWorks sold it in 2019**: An embedded team of 6–15 consultants (mix of PMs, engineers, designers, coaches) placed inside the client's building for 6–18 months. Daily collaboration. Gradual capability transfer. High-trust, relationship-intensive, high-cost. The value proposition was presence, methodology fidelity, and talent quality. ThoughtWorks's "build the right thing" framing meant they brought product thinking into tech engagements—but the delivery vehicle was still a team.

**How the reimagined fractional version works in 2026**:
- Single practitioner (or practitioner + small trusted network)
- SOW-defined phases, not open-ended embedding
- Outcome-contracted, not time-contracted
- The practitioner has shipped AI systems in production that ThoughtWorks principals in 2019 could not have—because those systems didn't exist
- Serves the buyer who is too small for ThoughtWorks (mid-market), too sophisticated for a generalist fractional PM, and too execution-focused for McKinsey
- The methodology vocabulary (fitness functions, strangler fig, evolutionary architecture, product operating model) is still load-bearing—it's the shared language with engineering leaders—but it gets delivered at advisory speed, not consulting team speed
- AI tooling (agents, code generation, automated spec generation) means one practitioner with the right methodology can do in 6 weeks what a ThoughtWorks team would have done in 6 months

The thesis Wesley can stake: "I absorbed the methodology at ThoughtWorks when it was being invented. I learned the systems at Accenture when they were the size of the problem. I shipped the agents in 2025 when the tools became real. The mid-market buyer needs all three of those things in a single engagement, and no consultancy can sell them at a price that fits."

---

## Primary Source URLs

### ThoughtWorks
- [Legacy Modernization Services](https://www.thoughtworks.com/what-we-do/legacy-modernization)
- [Enterprise Platform Modernization](https://www.thoughtworks.com/en-us/what-we-do/enterprise-platform-modernization)
- [AI/works Platform](https://www.thoughtworks.com/ai/works/)
- [AI-First Software Engineering Transformation](https://www.thoughtworks.com/what-we-do/ai-first-software-engineering-transformation)
- [Enterprise AI Services](https://www.thoughtworks.com/en-us/what-we-do/enterprise-ai)
- [AI/works press release](https://www.thoughtworks.com/about-us/news/2026/ai-works-heralds-new-era-of-agile-and-next-generation-software-development)
- [Looking Glass 2026 report page](https://www.thoughtworks.com/insights/looking-glass)
- [Looking Glass 2026 PDF](https://www.thoughtworks.com/content/dam/thoughtworks/documents/looking-glass-2026/tw_looking_glass_2026_accessible.pdf)
- [Looking Glass 2026 press release](https://www.thoughtworks.com/about-us/news/2026/looking-glass-report-2026)
- [Preparing for agentic transformation (Looking Glass 2026)](https://www.thoughtworks.com/insights/looking-glass/looking-glass-2026/preparing-for-agentic-transformation)
- [AI and software delivery (Looking Glass 2026)](https://www.thoughtworks.com/en-us/insights/looking-glass/looking-glass-2026/AI-and-software-delivery)
- [Technology Radar Vol. 33 PDF](https://www.thoughtworks.com/content/dam/thoughtworks/documents/radar/2025/11/tr_technology_radar_vol_33_en.pdf)
- [Technology Radar Vol. 32 PDF](https://www.thoughtworks.com/content/dam/thoughtworks/documents/radar/2025/04/tr_technology_radar_vol_32_en.pdf)
- [Tech Radar Vol. 33 highlights press release](https://www.thoughtworks.com/en-us/about-us/news/2025/thoughtworks-technology-radar-highlights-genai-s-impact-and-key-)
- [Themes from Technology Radar Vol. 33 podcast](https://www.thoughtworks.com/insights/podcasts/technology-podcasts/themes-technology-radar-33)
- [Fitness function-driven development](https://www.thoughtworks.com/en-us/insights/articles/fitness-function-driven-development)
- [How fitness functions can help govern and measure AI](https://www.thoughtworks.com/en-us/insights/podcasts/technology-podcasts/how-fitness-functions-help-govern-measure-ai)
- [Architectural fitness function (Technology Radar)](https://www.thoughtworks.com/radar/techniques/architectural-fitness-function)
- [Strangler Fig Part 1](https://www.thoughtworks.com/en-us/insights/articles/embracing-strangler-fig-pattern-legacy-modernization-part-one)
- [Strangler Fig Part 2](https://www.thoughtworks.com/insights/articles/embracing-strangler-fig-pattern-legacy-modernization-part-two)
- [Strangler Fig Part 3](https://www.thoughtworks.com/en-us/insights/articles/embracing-strangler-fig-pattern-legacy-modernization-part-three)
- [Building Evolutionary Architectures (book)](https://www.thoughtworks.com/en-us/insights/books/building-evolutionary-architectures)
- [Evolutionary architecture decoder](https://www.thoughtworks.com/en-us/insights/decoder/e/evolutionary-architecture)
- [Product Organization Transformation](https://www.thoughtworks.com/what-we-do/customer-experience-product-design/product-organization-transformation)
- [Product Innovation](https://www.thoughtworks.com/en-us/what-we-do/product-innovation)
- [AWS Mainframe Modernization Competency](https://www.thoughtworks.com/en-us/about-us/news/2026/thoughtworks-achieves-aws-mainframe-modernization-competency-sta)
- [Insights top picks 2025](https://www.thoughtworks.com/en-us/insights/blog/technology-strategy/insights-top-picks-from-2025)

### Martin Fowler
- [Strangler Fig Application (bliki)](https://martinfowler.com/bliki/StranglerFigApplication.html)
- [Strangler Fig for mobile apps (2024)](https://martinfowler.com/articles/strangler-fig-mobile-apps.html)

### McKinsey / QuantumBlack
- [State of AI 2025 (survey results)](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai)
- [State of AI 2025 PDF (March)](https://www.mckinsey.com/~/media/mckinsey/business%20functions/quantumblack/our%20insights/the%20state%20of%20ai/2025/the-state-of-ai-how-organizations-are-rewiring-to-capture-value_final.pdf)
- [State of AI November 2025 PDF](https://www.mckinsey.com/~/media/mckinsey/business%20functions/quantumblack/our%20insights/the%20state%20of%20ai/november%202025/the-state-of-ai-2025-agents-innovation_cmyk-v1.pdf)
- [AI Consulting (QuantumBlack)](https://www.mckinsey.com/capabilities/quantumblack/how-we-help-clients)
- [New economics of enterprise technology in an AI world](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-new-economics-of-enterprise-technology-in-an-ai-world)
- [McKinsey Google Transformation Group announcement](https://www.mckinsey.com/about-us/new-at-mckinsey-blog/mckinsey-and-google-cloud-launch-the-mckinsey-google-transformation-group-to-scale-enterprise-impact-for-the-ai-era)

### Deloitte
- [State of AI in the Enterprise 2026 (US)](https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html)
- [State of AI 2026 press release](https://www.deloitte.com/us/en/about/press-room/state-of-ai-report-2026.html)
- [Deloitte Enterprise AI Navigator launch (SiliconANGLE)](https://siliconangle.com/2026/02/26/deloitte-launches-toolkit-help-organizations-move-ai-experimentation-long-term-value/)

### Accenture
- [Reinvention Services](https://www.accenture.com/us-en/about/reinvention-services)
- [Accenture changes growth model for AI age](https://newsroom.accenture.com/news/2025/accenture-changes-growth-model-to-reinvent-itself-for-the-age-of-ai)
- [Accenture + WaveMaker (growth-stage modernization)](https://newsroom.accenture.com/news/2026/accenture-and-wavemaker-announce-strategic-intent-to-help-growth-focused-organizations-scale-with-agentic-ai-platform)
- [ServiceNow + Accenture Forward Deployed Engineering](https://newsroom.accenture.com/news/2026/servicenow-and-accenture-launch-forward-deployed-engineering-program-to-scale-agentic-ai-across-the-enterprise)
- [OpenAI + Accenture collaboration](https://newsroom.accenture.com/news/2025/openai-and-accenture-accelerate-enterprise-reinvention-with-advanced-ai)

### Capgemini
- [AI-Assisted Legacy Modernization PDF](https://www.capgemini.com/wp-content/uploads/2025/05/Capgemini-AI-assisted-Legacy-Modernization.pdf)
- [Engagement Model: Innovate stage](https://www.capgemini.com/us-en/resource/engagement-model-for-apps-modernization-the-innovate-stage/)
- [Engagement Model: Optimize stage](https://www.capgemini.com/us-en/resource/engagement-model-for-apps-modernization-the-optimize-stage/)
- [HFS Research Capgemini assessment 2025](https://www.hfsresearch.com/research/capgemini-legacy-application-modernization-services-capabilities-2025/)
- [Three pillars of app modernization](https://www.capgemini.com/us-en/insights/expert-perspectives/the-three-pillars-of-app-modernization/)

### EPAM
- [Modernization Services](https://www.epam.com/services/engineering/modernization)

### Pricing and market data
- [Application Modernization Consulting Rates 2026 Benchmark](https://softwaremodernizationservices.com/insights/application-modernization-consulting-rates/)
- [AI Consultant Cost 2026 (Leanware)](https://www.leanware.co/insights/how-much-does-an-ai-consultant-cost)
- [AI Consulting Rates 2026 (Groovyweb)](https://www.groovyweb.co/blog/ai-consulting-rates-2026)
- [AI Consultant Pricing US 2026 ($600-$1,200/day)](https://nicolalazzari.ai/guides/ai-consultant-pricing-us)
- [Fractional CAIO (HatchWorks)](https://hatchworks.com/blog/gen-ai/fractional-chief-ai-officer/)
- [Fractional Chief AI Officer: rise of the role (TheAIHat)](https://theaihat.com/the-rise-of-the-fractional-chief-ai-officer-caio/)
- [Fractional CPO pricing models](https://saasfractionalcpo.com/blog/fractional-cpo-pricing-models-roi/)
- [Fractional executive cost](https://www.fractionalofficer.com/cost-and-salary-of-a-fractional-executive)
- [Beyond T&M: rethinking pricing for AI-augmented consulting (Futurice)](https://www.futurice.com/blog/rethinking-pricing-models-ai-augmented-consulting)

### Enterprise buyer context
- [CIO Dive: why enterprise AI pilots fail](https://www.ciodive.com/news/why-enterprise-ai-pilots-fail/808751/)
- [Microsoft Copilot enterprise limitations (Xenoss)](https://xenoss.io/blog/microsoft-copilot-enterprise-limitations)
- [Microsoft Copilot readiness checklist 2026](https://www.copilotconsulting.com/insights/microsoft-365-copilot-readiness-checklist-cio-2026)
- [McKinsey vs BCG X AI consulting compared 2026](https://agent.nexus/blog/mckinsey-vs-bcg-ai)
- [Ex-McKinsey: boutiques winning in AI era](https://thefinancestory.com/ex-mckinsey-consultant-confirms-ai-will-power-the-rise-of-boutique-giants)
- [Boutique technical excellence for AI consulting (Agathon)](https://agathon.ai/insights/top-ai-consulting-companies-for-2025-the-rise-of-boutique-technical-excellence)
- [Headless CMS enterprise guide 2026](https://diatomenterprises.com/best-headless-cms-for-enterprise-2026/)
- [Headless CMS market leaders 2026](https://cloudtweaks.com/2026/04/headless-cms-platforms-ai/)
- [OpenAI Frontier Alliances (McKinsey, BCG)](https://openai.com/index/frontier-alliance-partners/)
- [AI readiness assessment framework (infomineo)](https://infomineo.com/artificial-intelligence/ai-readiness-assessment-a-practical-framework-for-enterprise-and-consulting-teams/)
