```
npm install
npm run dev
```

```
npm run deploy
```

## Belajar Deploy Backend Serverless

### Belajar Menggunakan Hono karena express tidak bisa dideploy di cloudflare workers

### Belajar Menggunakan Cloudflare Workers

### Belajar Menggunakan Postgresql (neon.tech)

### Belajar Menggunakan Prisma

### Belajar Menggunakan Prisma Accelerate

Karena prisma tidak bisa langsung digunakan pada cloudflare workers
Karena Perlu Connection Pool sebelum masuk ke DB, sehingga perlu menggunakan Prisma Accelerate

Buat Connection String di neon.tech lalu generate di prisma accelerate agar menggunakan connection pool
Connection String yang baru dari prisma accelerate dimasukkan ke wrangler.toml
e.g

[vars]

DATABASE_URL="connection string yang baru dari prisma accelerate"

connection string yang lama dari neon.tech dimasukkan di .env dengan nama DIRECT_URL
