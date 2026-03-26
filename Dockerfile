FROM node:18-alpine AS base

# Step 1: Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./
RUN npm install

# Step 2: Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Step 3: Production environment
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]
