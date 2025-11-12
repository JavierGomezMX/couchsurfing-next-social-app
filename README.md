# SocialApp (Next.js App Router)

This is a basic social web application built with Next.js 14 and the App Router architecture. It simulates core social features such as user profiles, a friends' post feed, and detailed post views, utilizing a public external API for mock data.

## 🚀 Key Technologies

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Data Source:** JSONPlaceholder (Mock API)

---

## 🎯 Architectural Approach and Justification

The core objective of this project was to **maximize Next.js Server Components and modern data fetching capabilities** using the new App Router.

- **Server-Side Data Fetching:** All asynchronous data operations (`fetch`) are executed inside Server Components (`/posts/page.tsx`, `[postId]/page.tsx`, etc.).
  - **Justification:** This approach ensures the HTML is fully rendered on the server before reaching the client, reducing client-side JavaScript burden, improving SEO, and accelerating the **LCP (Largest Contentful Paint)** metric.
- **Built-in Caching:** Next.js's native `fetch` extension allows for powerful caching strategies without external libraries.
  - **Justification:** By using the default `force-cache` behavior and specifying `next: { revalidate: N }`, I combine the speed of static generation with the freshness of server-side rendering (known as Incremental Static Regeneration - ISR), ensuring fast initial loads and near real-time updates.

---

## 🤯 Challenges and Learning Curve

The development process involved a significant shift in thinking due to the move from traditional React to the Next.js App Router architecture.

- **Next.js Learning Curve:** Having previous experience primarily with **Client-Side Rendering (CSR) in React**, the biggest challenge was adapting to the **Server Components** model.
  - **Adaptation:** Mastering the separation of concerns (where to use Server vs. Client Components) and understanding the new data fetching paradigm was crucial.
- **State Management and Interactivity:** Initially, there was confusion regarding how to handle local state in components that were now rendered on the server.
  - **Solution:** The solution involved carefully passing data fetched by Server Components down to necessary **"use client" components** (like `error.tsx` for error handling) only when interactivity or hooks were strictly required.
- **Error Handling in Suspense:** Implementing the `error.tsx` boundary required understanding how it works in conjunction with Next.js's Suspense (`loading.tsx`) tree to gracefully handle failures during server-side data fetching.

---

## 💡 Core Features

- **Home Redirection:** The root path (`/`) automatically redirects to the post feed (`/posts`).
- **Server-Side Data Fetching:** All data fetching is performed within Server Components, maximizing caching and Next.js performance.
- **Caching Strategy:** Implementation of ISR (Incremental Static Regeneration) to keep data fresh without requiring a full application rebuild.
    - Posts: Revalidation every 60 seconds.
    - Profile: Revalidation every 1 hour.
- **User Experience:**
    - **Loading States:** Uses `loading.tsx` to display a Skeleton UI while data is pending.
    - **Error Handling:** Uses `error.tsx` as an Error Boundary to catch API failures and allow the user to retry loading.

## 📁 Project Structure (App Router)

| Route                               | Description                                         | Component Type           |
| :---------------------------------- | :-------------------------------------------------- | :----------------------- |
| `/src/app/page.tsx`                 | Immediately redirects to `/posts`.                  | Server                   |
| `/src/app/layout.tsx`               | Global application structure (Header, Nav).         | Server                   |
| `/src/app/posts/page.tsx`           | Main post list (the feed).                          | Server                   |
| `/src/app/posts/[postId]/page.tsx`  | Detailed view of a post and its author.             | Server (Dynamic Route)   |
| `/src/app/perfil/page.tsx`          | Detailed profile of the simulated user (ID 1).      | Server                   |
| `/src/app/posts/loading.tsx`        | Skeleton UI for the posts feed.                     | Server (Suspense)        |
| `/src/app/posts/error.tsx`          | Fallback UI for data fetching errors.               | Client (Error Boundary)  |
| `/src/types/index.ts`               | TypeScript interface definitions (`User`, `Post`).  | N/A                      |

## 🛠️ Configuration and Execution

### Requirements

- Node.js (version 20.x or higher)
- npm or yarn

### Getting Started Steps

1.  **Install dependencies:**

`bash
    npm install
    # or
    yarn install
    `

2.  **Run the development server:**

`bash
    npm run dev
    # or
    yarn dev
    `

3.  **Access the Application:**
        The application will be available at [http://localhost:3000](http://localhost:3000). When you open the URL, you will be automatically redirected to the post list.
