# SocialApp (Next.js App Router)

This is a basic social web application built with Next.js 14 and the App Router architecture. It simulates core social features such as user profiles, a friends' post feed, and detailed post views, utilizing a public external API for mock data.

## 🚀 Key Technologies

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Data Source:** JSONPlaceholder (Mock API)

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

| Route                              | Description                                        | Component Type          |
| :--------------------------------- | :------------------------------------------------- | :---------------------- |
| `/src/app/page.tsx`                | Immediately redirects to `/posts`.                 | Server                  |
| `/src/app/layout.tsx`              | Global application structure (Header, Nav).        | Server                  |
| `/src/app/posts/page.tsx`          | Main post list (the feed).                         | Server                  |
| `/src/app/posts/[postId]/page.tsx` | Detailed view of a post and its author.            | Server (Dynamic Route)  |
| `/src/app/perfil/page.tsx`         | Detailed profile of the simulated user (ID 1).     | Server                  |
| `/src/app/posts/loading.tsx`       | Skeleton UI for the posts feed.                    | Server (Suspense)       |
| `/src/app/posts/error.tsx`         | Fallback UI for data fetching errors.              | Client (Error Boundary) |
| `/src/types/index.ts`              | TypeScript interface definitions (`User`, `Post`). | N/A                     |

## 🛠️ Configuration and Execution

### Requirements

- Node.js (version 20.x or higher)
- npm or yarn

### Getting Started Steps

1.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

2.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

3.  **Access the Application:**
    The application will be available at [http://localhost:3000](http://localhost:3000). When you open the URL, you will be automatically redirected to the post list.
