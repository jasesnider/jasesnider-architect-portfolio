# Dockerfile for a Next.js application

# 1. Base image for dependencies
FROM node:24-alpine AS deps
# On Alpine, Next.js needs this dependency for some native modules.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the lock file
COPY package.json package-lock.json ./
RUN npm ci

# 2. Builder image
FROM node:24-alpine AS builder
WORKDIR /app
# Copy dependencies from the 'deps' stage
COPY --from=deps /app/node_modules ./node_modules
# Copy the rest of the source code
COPY . .

# Build the Next.js application
# This will leverage the standalone output feature
RUN npm run build

# 3. Production image
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
# Optionally disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Set memory limits for the build process
ENV NODE_OPTIONS="--max-old-space-size=1024"

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy public assets
COPY --from=builder /app/public ./public

# Copy standalone output and static assets
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Run as non-root user
USER nextjs

EXPOSE 3000

# Set the port environment variable
ENV PORT 3000

# Start the server
CMD ["node", "server.js"]
