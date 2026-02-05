# Security & Secrets Handling

This repository is public. **Do not commit secrets** (API keys, tokens, credentials, private endpoints).

## Where to Store Secrets
- **Cloudflare Pages**: Store sensitive values in the project’s Environment Variables (mark as secret).
- **Local development**: Use `.env` files and keep them out of git.

## Preventing Accidental Exposure
- Do not echo environment variables in build scripts or logs.
- Scope tokens to the minimum required permissions and rotate if exposed.
- Keep draft or sensitive content in a private repo until ready to publish.

## If a Secret Is Exposed
1. Revoke or rotate it immediately.
2. Remove it from history (git filter-repo) if it was committed.
3. Update affected systems and notify stakeholders if needed.
