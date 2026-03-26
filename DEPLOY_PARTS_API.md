# Deploy Parts API for Vercel Frontend

## Recommended architecture

- Frontend: **Vercel**
- Parts API: **this server**
- Public frontend domain: `https://your-domain.com`
- Public API domain: `https://api.your-domain.com`

## 1. Run API locally on the server

```bash
cd /home/tiger/.openclaw/workspace/iGEM-Idea-Library
PARTS_PORT=3031 \
PARTS_ALLOW_ORIGIN=https://your-domain.com \
IGEM_FASTA_PATH=/home/tiger/.openclaw/workspace/iGEM-Idea-Library/data/igem_all_parts.fasta \
npm run parts:server
```

For temporary open testing:

```bash
PARTS_ALLOW_ORIGIN=* npm run parts:server
```

## 2. Frontend env in Vercel

Set this environment variable in Vercel:

```bash
VITE_PARTS_API_BASE=https://api.your-domain.com
```

If omitted, frontend falls back to relative `/api/*` and expects same-origin proxying.

## 3. Suggested reverse proxy

Use nginx or caddy on this server and point `api.your-domain.com` to `127.0.0.1:3031`.

Example nginx site:

```nginx
server {
    server_name api.your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:3031;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Then add TLS via certbot.

## 4. Suggested process manager

Use pm2 or systemd instead of a raw terminal.

Example pm2:

```bash
pm2 start server/partsServer.mjs --name igem-parts-api --interpreter node -- 
pm2 save
```

For env vars, prefer an ecosystem file or systemd unit.

## 5. Notes

- The FASTA file is intentionally **not committed** to GitHub because it exceeds GitHub's 100MB file limit.
- Keep the FASTA on the server disk.
- Public website should call the API domain, not expect the API to exist inside Vercel itself.
