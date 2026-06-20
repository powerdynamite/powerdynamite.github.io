/* =============================================================
   DRAWER  —  slide-in panel for project details
   ============================================================= */

const projects = {
  altus: {
    tag: { text: 'DE Microsoft Partner', cls: 'tag-ind' },
    title: 'Altus PPM & xPM — Client Enhancements & Migrations',
    subtitle: 'Technical Lead · Solution Designer · Developer',
    overview: 'Led end-to-end product enhancement and migration work across two enterprise PPM platforms — Altus PPM and Projectum xPM — for manufacturing and technology clients across Germany and Austria. Worked hands-on from solution design through to deployment.',
    highlights: [
      'Delivered client-specific feature enhancements on both Altus PPM and Projectum xPM platforms, adapting product capabilities to each client\'s unique project management processes.',
      'Architected and executed end-of-life migrations from Microsoft Project Online to Power Platform-based PPM solutions — covering Dataverse schema design, data migration, and ALM pipeline setup.',
      'Integrated PPM solutions with Jira, Azure DevOps, and Microsoft Teams to support SAFe-aligned Value Stream Management across enterprise engineering teams.',
      'Designed Custom APIs and C# Plugins for complex business logic including financial calculations, resource utilisation tracking, and portfolio rollup reporting.',
      'Built Power BI and SSRS dashboards for project health, cost tracking, and executive KPI reporting across European PMOs.',
      'Led discovery workshops and stakeholder reviews; mentored junior developers and established coding and ALM standards across the team.'
    ],
    tech: ['Altus PPM', 'Projectum xPM', 'Dataverse', 'C# Plugins', 'Custom APIs', 'Power Automate', 'Power BI', 'SSRS', 'PAC CLI', 'Azure DevOps', 'Jira', 'SAFe / VSM', 'Microsoft Teams']
  },

  copilot: {
    tag: { text: 'Copilot Studio · AI', cls: 'tag-sky' },
    title: 'Copilot Studio AI Agents — Teams & Enterprise Deployment',
    subtitle: 'AI Agent Designer · Technical Lead',
    overview: 'Extensively designed, built, and deployed Copilot Studio AI agents for enterprise internal use cases. Explored the full spectrum of agent capabilities from knowledge-grounded conversational bots to Computer-Using Agents (CUA) — evaluating where AI automation could replace or augment human workflows.',
    highlights: [
      'Designed and deployed Teams-integrated Copilot Studio agents grounded in enterprise knowledge sources — enabling employees to query project data, policies, and operational documentation through natural language.',
      'Built and evaluated CUA (Computer-Using Agent) capabilities in Copilot Studio — testing autonomous task completion across browser-based enterprise tools.',
      'Conducted deep Microsoft E5 licensing evaluation for Copilot Studio at scale — mapping message capacity, connector requirements, and per-user vs per-tenant cost models.',
      'Authored Copilot Studio agent YAML configurations, topics, adaptive cards, and Power Automate-connected actions for multi-step enterprise workflows.',
      'Integrated agents with Dataverse, SharePoint, and REST APIs to surface live project and operational data within the Teams chat interface.',
      'Evaluated agent safety, fallback handling, and escalation paths for production enterprise deployment.'
    ],
    tech: ['Copilot Studio', 'Microsoft Teams', 'Power Automate', 'Dataverse', 'SharePoint', 'Adaptive Cards', 'CUA', 'REST APIs', 'Microsoft E5', 'Azure OpenAI', 'Agent YAML']
  },

  banking: {
    tag: { text: 'UAE Microsoft Partner · Banking', cls: 'tag-amb' },
    title: 'Banking CRM — Customer 360 & Onboarding (Gulf Region)',
    subtitle: 'D365 CE Developer · Production Support',
    overview: 'Worked on a specialised Dynamics 365 CE banking CRM product deployed at major Islamic banks in the Gulf region. Responsible for core CRM module development including Customer 360 and the full Customer Onboarding journey — then extended into production support for a flagship client.',
    highlights: [
      'Built the Customer 360 module — a unified view of customer relationships, accounts, products, cases, and interactions for relationship managers and branch staff.',
      'Developed the Customer Onboarding module for Individual and Corporate streams — multi-stage Business Process Flows covering document collection, KYC/AML checks, risk scoring, and approval routing.',
      'Implemented C# Plugin and JavaScript-enforced KYC/AML compliance logic — ensuring regulatory validation at every onboarding stage before progression.',
      'Configured document verification workflows with automated alerts, status tracking, and compliance audit trails.',
      'Managed Dev → UAT → Production deployments including solution layering, environment management, and release coordination across banking client teams.',
      'Transitioned into production support role for a major Islamic bank — managing live system issues, hotfix deployments, data corrections, and post-go-live user queries.'
    ],
    tech: ['Dynamics 365 CE', 'D365 Sales', 'D365 Customer Service', 'C# Plugins', 'JavaScript', 'Business Process Flows', 'KYC / AML', 'Dataverse', 'Security Roles', 'Solution Management', 'Power Automate']
  },

  ppm: {
    tag: { text: 'AU Microsoft Partner · PPM', cls: 'tag-grn' },
    title: 'AppSource PPM SaaS — Customer-Driven Enhancements',
    subtitle: 'Power Platform & BI Developer',
    overview: 'Worked on an AppSource-listed Project Portfolio Management SaaS product built on Microsoft Power Platform — enhancing and extending the product during client delivery engagements to meet each organisation\'s specific PMO requirements across APAC corporate and government sectors.',
    highlights: [
      'Built and extended Power Automate Cloud Flows for portfolio reporting automation, risk management workflows, budget approval processes, and resource scheduling notifications.',
      'Developed and customised Model-Driven App forms, views, dashboards, and Dataverse schema to support client-specific PMO data structures and governance processes.',
      'Integrated the PPM platform with Azure DevOps, Microsoft Project for the Web, Project Online, and Jira via REST APIs and Azure Functions for seamless project data synchronisation.',
      'Built Power BI dashboards and SSRS governance reports aligned with PMI standards — covering portfolio health, resource utilisation, capacity planning, and budget variance.',
      'Implemented time tracking and capacity planning Canvas App modules tailored to individual client workforce management requirements.',
      'Delivered solutions for enterprise and government sector clients — ensuring PMI-aligned reporting standards and Microsoft Preferred Solution compliance.'
    ],
    tech: ['Power Apps (Model-Driven)', 'Canvas Apps', 'Power Automate', 'Dataverse', 'Power BI', 'SSRS', 'Azure Functions', 'REST APIs', 'Project Online', 'Azure DevOps', 'Jira', 'SharePoint']
  },

  formengine: {
    tag: { text: 'Personal Project · Mature & Active', cls: 'tag-grn' },
    title: 'Configurable Form Engine',
    subtitle: 'Creator · Power Platform Developer',
    overview: 'A Power Platform-based open-source project that solves a real enterprise pain point — the need to change form structures in Dataverse without creating new solution versions or deploying code. The engine lets administrators define, version, and publish dynamic forms entirely through configuration.',
    highlights: [
      'Built a metadata-driven form rendering engine using Canvas Apps and Dataverse — form fields, sections, validations, and layouts are all stored as configuration records, not hardcoded in the app.',
      'Supports field-level configuration including data type, label, placeholder, required rules, conditional visibility logic, and display order — all manageable by non-developers.',
      'Implemented form versioning so multiple versions of a form can coexist — enabling A/B testing, gradual rollouts, and safe changes without breaking existing submissions.',
      'Designed for reuse across multiple entity types — the same engine can render onboarding forms, inspection forms, survey forms, or any structured data entry form in a D365 environment.',
      'Published as an open-source GitHub project — documented for community use and actively maintained with improvements from real-world enterprise usage patterns.',
      'Addresses a genuine gap in Power Platform where form structure changes typically require developer intervention and solution deployments.'
    ],
    tech: ['Canvas Apps', 'Dataverse', 'Power Automate', 'Model-Driven Apps', 'Power Fx', 'JSON Config', 'Open Source'],
    github: 'https://github.com/Abdul-Basit-545/configurable-form-engine'
  },

  ppskill: {
    tag: { text: 'Personal Project · Claude Code Skill', cls: 'tag-ind' },
    title: 'Power Platform Architect Skill',
    subtitle: 'Creator · AI Tool Builder',
    overview: 'A custom Claude Code skill built to make Power Platform architecture work faster and cheaper with AI. Instead of repeatedly explaining Dataverse patterns, plugin conventions, ALM structures, and Copilot Studio YAML syntax to an AI assistant, this skill pre-loads all that domain knowledge — so you can work at architect speed from the first prompt.',
    highlights: [
      'Packages deep Power Platform architect knowledge as a Claude Code skill — covering Dataverse schema design patterns, C# plugin best practices, solution layering strategies, and Custom API conventions.',
      'Dramatically reduces token usage by eliminating the need to re-explain context in every session — the skill provides the baseline knowledge so prompts can be concise and targeted.',
      'Includes Copilot Studio YAML authoring guidance — topic design, trigger patterns, action configurations, and adaptive card structures built into the skill context.',
      'Covers ALM pipeline patterns using PAC CLI and Dataverse Web API — enabling the AI to generate accurate pipeline scripts and deployment automation without trial-and-error.',
      'Open-sourced on GitHub for the Power Platform community — any developer using Claude Code can install this skill and immediately gain architecture-level AI assistance.',
      'Built using the Claude Code Agent SDK — demonstrates how domain specialists can package their expertise into reusable AI skills for their own or team productivity.'
    ],
    tech: ['Claude Code SDK', 'Anthropic Agent SDK', 'Power Platform', 'Dataverse', 'C# Plugins', 'Copilot Studio YAML', 'PAC CLI', 'ALM', 'Open Source'],
    github: 'https://github.com/Abdul-Basit-545/powerplatform-architect-skill'
  },

  auditdash: {
    tag: { text: 'Personal Project · Coming Soon', cls: 'tag-amb' },
    title: 'Dataverse Audit Insights Dashboard',
    subtitle: 'Concept · In Planning',
    overview: 'A Power BI dashboard solution that transforms Dataverse audit logs from a passive investigation tool into an active governance and adoption intelligence layer. Most organisations enable Dataverse auditing for compliance but never extract actionable insights from it — this project changes that.',
    highlights: [
      'Surfaces most active users across Dataverse — identifying power users, adoption leaders, and potential training needs without any manual analysis.',
      'Tracks most modified tables — revealing which parts of the system are seeing the highest activity, helping prioritise performance optimisation and data quality efforts.',
      'Visualises record creation trends over time — enabling teams to correlate platform adoption with business events, training rollouts, or seasonal patterns.',
      'Identifies data quality indicators from audit patterns — repeated updates to the same field, bulk corrections, and abnormal modification frequencies signal data entry or process issues.',
      'Delivers governance and compliance metrics — user access patterns, after-hours activity, bulk deletes, and sensitive field changes surfaced in a compliance-ready format.',
      'Reframes audit logs from a break-glass investigation tool into a continuous operational intelligence feed for Dynamics 365 and Power Platform admins.'
    ],
    tech: ['Power BI', 'Dataverse', 'Audit Logs API', 'Power Query', 'DAX', 'Dynamics 365', 'Power Platform Admin', 'Data Governance']
  },

  azsearch: {
    tag: { text: 'DE Microsoft Partner · Azure AI', cls: 'tag-sky' },
    title: 'Azure AI Search + Copilot Studio Knowledge Bot',
    subtitle: 'Solution Designer · Azure Developer',
    overview: 'Designed and built a full end-to-end enterprise RAG (Retrieval-Augmented Generation) pipeline for a German client — enabling employees to query internal SharePoint knowledge bases through a natural language Copilot Studio agent. The solution automatically keeps the AI Search index in sync with SharePoint document changes.',
    highlights: [
      'Built an Azure Function App that syncs SharePoint document libraries to Azure Blob Storage on a scheduled trigger — handling file additions, updates, and deletions to keep the knowledge base current.',
      'Configured an Azure AI Search index and indexer pointing at the Blob container — enabling full-text and semantic search across all synced SharePoint documents including PDFs, Word files, and other content types.',
      'Set up an App Registration with Sites.Read.All and Files.Read.All permissions using certificate-based authentication — enabling the Function App to access SharePoint securely without user credentials.',
      'Grounded a Copilot Studio agent on the Azure AI Search knowledge source — enabling employees to ask natural language questions and receive answers cited directly from internal company documents.',
      'Deployed the Function App to Azure with proper environment variable configuration for tenant ID, client ID, certificate thumbprint, SharePoint host, site, and storage connection strings.',
      'Coordinated admin consent process with the Global Admin — a required step for the App Registration to gain tenant-wide SharePoint read access, with a pre-built consent URL flow.'
    ],
    tech: ['Azure Functions', 'Azure Blob Storage', 'Azure AI Search', 'Copilot Studio', 'SharePoint', 'Microsoft Graph API', 'App Registration', 'Certificate Auth', 'RAG Pipeline', 'Azure Resource Manager']
  },

  alm: {
    tag: { text: 'Power Platform · DevOps', cls: 'tag-rose' },
    title: 'ALM Pipeline Automation — PAC CLI + Dataverse Web API',
    subtitle: 'Power Platform Architect · Developer',
    overview: 'Designed and implemented a fully automated ALM pipeline system for Power Platform solutions — replacing time-consuming manual portal-based deployment steps with programmatic, repeatable processes using PAC CLI and the Dataverse Web API.',
    highlights: [
      'Built programmatic pipeline record creation using the Dataverse Web API — automating the setup of deployment pipelines across Dev, UAT, and Production environments without manual portal configuration.',
      'Implemented PAC CLI-based solution export, import, and publish automation — enabling consistent, version-controlled environment-to-environment deployments as part of a CI/CD workflow.',
      'Designed solution layering strategies to handle managed vs unmanaged layers correctly across environment tiers — preventing deployment conflicts and layer pollution.',
      'Integrated the pipeline with Azure DevOps for trigger-based automated deployments on code merge — reducing deployment cycle time significantly.',
      'Built pre-deployment validation checks using Power Platform Build Tools to catch missing dependencies, connection references, and environment variable gaps before promotion.',
      'Documented ALM standards and mentored the team on solution architecture best practices for multi-environment Power Platform delivery.'
    ],
    tech: ['PAC CLI', 'Dataverse Web API', 'Power Platform Build Tools', 'Azure DevOps', 'Solution Layering', 'Managed Solutions', 'Environment Variables', 'Connection References', 'CI/CD', 'PowerShell']
  }
};

/* ── Drawer open / close ─────────────────────────────────── */
function openDrawer(id) {
  const p = projects[id];
  if (!p) return;

  document.getElementById('drawerHeaderContent').innerHTML = `
    <div>
      <span class="d-tag ${p.tag.cls}" style="margin-bottom:0.4rem;">${p.tag.text}</span>
      <div class="d-title">${p.title}</div>
      <div class="d-subtitle">${p.subtitle}</div>
    </div>`;

  const githubBtn = p.github
    ? `<a href="${p.github}" target="_blank" class="btn btn--ghost" style="font-size:0.8rem;">
         <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
         View on GitHub ↗
       </a>`
    : '';

  document.getElementById('drawerBody').innerHTML = `
    <div class="d-section">
      <div class="d-section-label">Overview</div>
      <div class="d-text">${p.overview}</div>
    </div>
    <div class="d-section">
      <div class="d-section-label">Key Contributions</div>
      <ul class="d-bullets">${p.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
    </div>
    <div class="d-section">
      <div class="d-section-label">Tech Stack</div>
      <div class="d-tags-row">${p.tech.map(t => `<span class="d-tech">${t}</span>`).join('')}</div>
    </div>
    ${githubBtn ? `<div>${githubBtn}</div>` : ''}`;

  document.getElementById('drawerOverlay').classList.add('open');
  document.getElementById('drawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  document.getElementById('drawerOverlay').classList.remove('open');
  document.getElementById('drawer').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Wire up click handlers via data attributes ──────────── */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-project]').forEach(function (el) {
    el.addEventListener('click', function () {
      openDrawer(el.dataset.project);
    });
  });
});

/* Escape key to close */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeDrawer();
});
