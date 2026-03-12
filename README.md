# OxygenAZ

Next.js 16, TypeScript, Tailwind CSS v4
Deployed on Vercel: https://oxygenaz.vercel.app
Production: https://oxygenaz.com
Local dev: http://localhost:3000

## Run Agents

WORK=/Users/brandonhopkins/Projects/oxygenaz/agents/design-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh

WORK=/Users/brandonhopkins/Projects/oxygenaz/agents/content-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh

WORK=/Users/brandonhopkins/Projects/oxygenaz/agents/seo-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh

WORK=/Users/brandonhopkins/Projects/oxygenaz/agents/pagespeed-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
