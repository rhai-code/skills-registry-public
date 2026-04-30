import { CodeBlock } from '@/components/CodeBlock';
import { SkillCards } from '@/components/SkillCards';
import { highlight } from '@/utils/highlight';

const skills = [
  {
    name: 'OpenShift Auth Trace',
    description: 'Trace minimum RBAC permissions for OpenShift scripts and commands',
    category: 'SRE / OpenShift',
  },
];

const categories = [
  {
    title: 'SRE',
    description: 'Site reliability engineering skills for OpenShift cluster operations, RBAC, monitoring, and incident response.',
  },
];

const agentsUrl = highlight(
`https://rhai-code.github.io/skills-registry/AGENTS.md`
);

const urlPattern = highlight(
`# HTML (for humans)
https://rhai-code.github.io/skills-registry/sre/openshift/openshift-auth-trace-skill

# Markdown (for agents)
https://rhai-code.github.io/skills-registry/sre/openshift/openshift-auth-trace-skill.md

# Claude Code plugin (for skills)
/plugin marketplace add rhai-code/skills-registry`
);

const marketplaceAdd = highlight(
`/plugin marketplace add rhai-code/skills-registry`
);

const marketplaceInstall = highlight(
`/plugin install openshift-auth-trace-skill@tmm-skills`
);

export default function Home() {
  return (
    <div className="PageContainer">
      <h1 className="MdH1">AI BU TMM Advocates Skill Registry</h1>
      <p className="MdSubtitle">
        Curated Claude Code skills from the Red Hat AI BU TMM Advocates team.
      </p>

      <p className="MdP">
        This registry provides reusable{' '}
        <strong className="MdStrong">Claude Code skills</strong> built by the
        AI BU TMM Advocates. Skills are agent capabilities — that you can install
        directly into your Claude Code session and use across your projects.
      </p>

      <p className="MdP">
        Skills are organised into categories that map to team specializations.
        Browse by category or install individual skills from the table below.
      </p>

      <p className="MdP">
        We are working on making the skills available publicly.
        For now, they are only available in our <a className="MdLink" href="https://github.com/rhai-code/skills-registry">private repository</a>.
      </p>


      <h2 className="MdH2" id="built-for-three-audiences">Built for Three Audiences</h2>

      <p className="MdP">
        This site serves the same content in three ways.{' '}
        <strong className="MdStrong">Humans</strong> get a rich browsable UI
        with syntax-highlighted code, tables, and responsive navigation.{' '}
        <strong className="MdStrong">AI agents</strong> get clean markdown with
        the same content — no scraping, no parsing HTML, no losing context to
        boilerplate. And{' '}
        <strong className="MdStrong">Claude Code</strong> gets a plugin
        marketplace — skills can be installed directly into a session with a
        single command.
      </p>

      <div className="ApiTable">
        <table>
          <thead>
            <tr>
              <th>Audience</th>
              <th>Access</th>
              <th>Format</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Humans</td>
              <td>Browse the site</td>
              <td>HTML with full UI</td>
            </tr>
            <tr>
              <td>AI agents</td>
              <td><code className="MdCode">/AGENTS.md</code> or append <code className="MdCode">.md</code> to any page URL</td>
              <td>Plain markdown</td>
            </tr>
            <tr>
              <td>Claude Code</td>
              <td><code className="MdCode">/plugin marketplace add</code></td>
              <td>Installable skills</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="MdP">
        Point any AI coding agent at
        the <code className="MdCode">AGENTS.md</code> URL — it lists every page
        with its markdown URL:
      </p>

      <CodeBlock title="Agent entry point">{agentsUrl}</CodeBlock>

      <p className="MdP">
        Every content page includes a{' '}
        <strong className="MdStrong">&ldquo;View as Markdown&rdquo;</strong> link
        at the top. Append <code className="MdCode">.md</code> to any page URL to
        get the markdown version directly:
      </p>

      <CodeBlock title="Three access patterns">{urlPattern}</CodeBlock>

      <h2 className="MdH2" id="categories">Categories</h2>

      <ul className="MdUl">
        {categories.map((cat) => (
          <li key={cat.title}>
            <strong className="MdStrong">{cat.title}</strong>
            {' — '}{cat.description}
          </li>
        ))}
      </ul>

      <h2 className="MdH2" id="skills">Skills</h2>

      <SkillCards skills={skills} />

      <div className="ApiTable">
        <table>
          <thead>
            <tr>
              <th>Skill</th>
              <th>Category</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code className="MdCode">openshift-auth-trace-skill</code></td>
              <td>SRE / OpenShift</td>
              <td>Trace minimum RBAC permissions required to run a script or command on OpenShift</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="MdH2" id="skills-marketplace">Skills Marketplace</h2>

      <p className="MdP">
        Add the marketplace to Claude Code:
      </p>

      <CodeBlock title="Add marketplace">{marketplaceAdd}</CodeBlock>

      <p className="MdP">
        Then install individual skills:
      </p>

      <CodeBlock title="Install a skill">{marketplaceInstall}</CodeBlock>

      <h2 className="MdH2" id="contributing">Contributing</h2>

      <p className="MdP">
        To add a new skill to the registry:
      </p>

      <ul className="MdUl">
        <li>
          Create a <code className="MdCode">SKILL.md</code> using the{' '}
          <code className="MdCode">/skill-creator</code> skill in Claude Code, or model it on an existing skill
        </li>
        <li>
          Place it in the appropriate category folder (e.g.{' '}
          <code className="MdCode">sre/openshift/</code>)
        </li>
        <li>
          Add a content page describing the skill
        </li>
        <li>
          Push code or open a pull request to{' '}
          <a className="MdLink" href="https://github.com/rhai-code/skills-registry">rhai-code/skills-registry</a>
        </li>
      </ul>
    </div>
  );
}
