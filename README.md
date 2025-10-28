# TicketApp - React (plain CSS)

## Quick start

1. Install dependencies:
   ```
   npm install
   ```
2. Run dev server:
   ```
   npm run dev
   ```
3. Open the URL shown by Vite (usually http://localhost:5173)

## Notes
- No Tailwind or external UI libraries; plain CSS is used.
- Session is stored in localStorage with key: `ticketapp_session`.
- Tickets are stored in localStorage with key: `ticketapp_tickets`.
- Test credentials: `test@example.com` / `password123` (or use Signup).


## Tailwind conversion
This project has been converted to use Tailwind CSS. Install dependencies and run:

```
npm install
npm run dev
```

Tailwind files:
- tailwind.config.cjs
- postcss.config.cjs
- src/tailwind.css
