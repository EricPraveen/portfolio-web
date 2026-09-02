import { NoteItem } from './types';

export const notesData: NoteItem[] = [
  {
    slug: 'optimistic-locking-vs-pessimistic-locks',
    title: 'Architectural Trade-offs: Optimistic Concurrency vs. Row Locks in Booking Systems',
    publishedAt: '2025-09-20',
    summary:
      'An analysis of transaction duration, connection pool exhaustion, and user experience tradeoffs when designing high-concurrency reservation flows in PostgreSQL.',
    type: 'Architecture Note',
    tags: ['PostgreSQL', 'Databases', 'Concurrency', 'SQL', 'Spring Boot'],
    relatedProjectSlugs: ['travel-hub-platform'],
    relatedSkills: ['PostgreSQL', 'Database Design', 'SQL', 'Spring Boot'],
    featured: true,
    content: `
### The Problem Statement
During high-traffic booking windows, multiple concurrent requests attempt to reserve the same travel package or seat simultaneously. The database must guarantee that no package capacity is over-allocated while avoiding database connection pool starvation.

### The Evaluated Approaches

#### Approach 1: Pessimistic Row Locking (\`SELECT FOR UPDATE\`)
Locks the candidate record from the moment a user initiates reservation until checkout completes:

\`\`\`sql
BEGIN;
SELECT id, available_slots FROM travel_packages 
WHERE id = $1 AND available_slots > 0 
FOR UPDATE;

UPDATE travel_packages SET available_slots = available_slots - 1 
WHERE id = $1;
COMMIT;
\`\`\`

**The Trade-off**: Holding locks inside an open transaction quickly exhausts the connection pool, degrading latency for all other users browsing the catalog.

#### Approach 2: Optimistic Concurrency with Version Monotonicity
Relies on an atomic single-statement update checking a monotonic version column or slot condition:

\`\`\`sql
-- Atomic transition completed in < 4 milliseconds
UPDATE travel_packages 
SET available_slots = available_slots - 1, 
    version = version + 1
WHERE id = $1 
  AND available_slots >= $2 
  AND version = $3;
\`\`\`

### Why Optimistic Locking Won
1. **Connection Duration**: Transactions close in single-digit milliseconds rather than holding long-lived open sockets.
2. **Deadlock Immunity**: Since row locks are not held across multi-step queries, deadlock frequency drops to zero.
3. **UX Resilience**: If a conflict occurs, the API returns an immediate \`409 Conflict\` payload, enabling the React frontend to display real-time slot availability without hanging.
    `.trim(),
  },
  {
    slug: 'jwt-stateless-auth-architecture',
    title: 'Security Note: Stateless JWT Authentication and Role-Based Access Control in Spring Boot',
    publishedAt: '2025-10-15',
    summary:
      'Implementing once-per-request JWT validation filters, role extraction, and protected endpoint authorization in Spring Security.',
    type: 'Security Note',
    tags: ['Spring Boot', 'JWT', 'Security', 'Java', 'REST APIs'],
    relatedProjectSlugs: ['ideapad-blog-platform'],
    relatedSkills: ['Spring Boot', 'REST APIs & JWT Authentication', 'Java (OOP & Concurrency)'],
    featured: true,
    content: `
### The Threat Model & Architecture
In modern single-page applications, storing user session state on the backend introduces server memory scaling challenges. A stateless JWT architecture allows the Spring Boot backend to authenticate every request independently without querying a session store.

### Implementing OncePerRequestFilter
The filter intercepts incoming requests, extracts the Bearer token from the \`Authorization\` header, and populates the \`SecurityContextHolder\`:

\`\`\`java
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, 
                                    HttpServletResponse response, 
                                    FilterChain filterChain) throws ServletException, IOException {
        String jwt = getJwtFromRequest(request);

        if (StringUtils.hasText(jwt) && tokenProvider.validateToken(jwt)) {
            Long userId = tokenProvider.getUserIdFromJWT(jwt);
            UserDetails userDetails = customUserDetailsService.loadUserById(userId);
            
            UsernamePasswordAuthenticationToken authentication = 
                new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
            authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

            SecurityContextHolder.getContext().setAuthentication(authentication);
        }

        filterChain.doFilter(request, response);
    }
}
\`\`\`

### Method-Level Security
With security context established, endpoints use \`@PreAuthorize\` annotations for fine-grained role control:

\`\`\`java
@PreAuthorize("hasRole('ADMIN')")
@DeleteMapping("/api/v1/posts/{id}")
public ResponseEntity<ApiResponse> deletePost(@PathVariable Long id) {
    postService.deletePost(id);
    return ResponseEntity.ok(new ApiResponse(true, "Post deleted by admin"));
}
\`\`\`

### Key Takeaways
- Keep token payloads minimal (user ID, roles, expiry) to reduce HTTP header size.
- Always validate token expiration and cryptographic signatures before reading claims.
    `.trim(),
  },
  {
    slug: 'preventing-ecommerce-inventory-overselling',
    title: 'Debugging Postmortem: Preventing Race Conditions and Overselling in E-Commerce Checkout',
    publishedAt: '2024-11-28',
    summary:
      'How asynchronous MongoDB update operations caused inventory overselling during simultaneous checkouts, and the atomic query pattern that resolved it.',
    type: 'Debugging Postmortem',
    tags: ['MongoDB', 'Node.js', 'Express.js', 'E-Commerce', 'Debugging'],
    relatedProjectSlugs: ['eshop-ecommerce-platform'],
    relatedSkills: ['Node.js & Express.js', 'MongoDB', 'REST APIs & JWT Authentication'],
    featured: true,
    content: `
### Context & Symptom
While testing simultaneous checkout requests on our MERN e-commerce platform, two test users were able to simultaneously purchase the last available stock item (quantity = 1), causing inventory to drop to \`-1\`.

### The Root Cause
The initial Express.js checkout controller fetched the product document first, checked the stock quantity in JavaScript memory, and subsequently issued a separate save call:

\`\`\`javascript
// ANTI-PATTERN: Prone to race conditions between find and save
const product = await Product.findById(productId);
if (product.countInStock >= orderQty) {
  // If a second request arrives here before save() completes, both read the old quantity!
  product.countInStock -= orderQty;
  await product.save();
}
\`\`\`

### The Architectural Fix
We replaced the two-step find-and-save pattern with an atomic conditional update query using MongoDB's \`$inc\` operator with an explicit query guard:

\`\`\`javascript
// ATOMIC FIX: Single database operation with conditional guard
const updatedProduct = await Product.findOneAndUpdate(
  { _id: productId, countInStock: { $gte: orderQty } },
  { $inc: { countInStock: -orderQty } },
  { new: true }
);

if (!updatedProduct) {
  return res.status(400).json({ 
    message: 'Selected item is out of stock or insufficient quantity available' 
  });
}
\`\`\`

### Result
The atomic query executes as an indivisible database turn. If stock is insufficient, the query matches 0 documents and returns immediately with a clear error response, completely preventing overselling.
    `.trim(),
  },
  {
    slug: 'semantic-responsive-web-architecture',
    title: 'Concept in Practice: Semantic Layout Hierarchies and Fluid Responsive Breakpoints',
    publishedAt: '2024-06-12',
    summary:
      'Building zero-dependency responsive interfaces with CSS Grid, Flexbox, and semantic HTML5 landmarks for maximum accessibility and performance.',
    type: 'Concept in Practice',
    tags: ['HTML5', 'CSS3', 'Responsive Design', 'Accessibility', 'Frontend'],
    relatedProjectSlugs: ['edutrack-campus-portal'],
    relatedSkills: ['HTML5 & Responsive Web Design', 'JavaScript (ES6+)', 'Tailwind CSS & CSS3'],
    featured: false,
    content: `
### Clean Semantic Landmark Hierarchy
Structuring web portals with native HTML5 landmarks ensures instant screen reader navigability and clean DOM readability:

\`\`\`html
<header role="banner" class="campus-header">
  <nav aria-label="Main Campus Navigation" class="campus-nav">
    <!-- Navigation Links -->
  </nav>
</header>
<main id="main-content" class="campus-main">
  <section aria-labelledby="facilities-heading">
    <h2 id="facilities-heading">Campus Facilities</h2>
    <!-- Dynamic Cards -->
  </section>
</main>
\`\`\`

### Fluid Grid Layouts Without JavaScript
Using CSS Grid with \`minmax()\` creates naturally responsive card layouts that adapt across mobile, tablet, and widescreen displays without layout shift:

\`\`\`css
.campus-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
\`\`\`

### Key Takeaways
- Semantic structure is the foundation of accessible web engineering.
- Fluid CSS grids reduce reliance on heavy breakpoint media queries and prevent layout jumping.
    `.trim(),
  },
];
