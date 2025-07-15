# Refit - Architecture & Remodeling Website

A modern, responsive, and interactive portfolio website for "Refit", an architecture and remodeling company. Built with Next.js, TypeScript, and Tailwind CSS, this project showcases the company's services, portfolio, and client testimonials through a clean and highly dynamic user interface.

## ✨ Features

- **Interactive UI Components**: Built with shadcn/ui, featuring accordions for FAQs and services, tooltips, and a sheet-based mobile menu.
- **Rich Animations**: Smooth page transitions and component animations powered by Framer Motion.
- **Fully Responsive**: A mobile-first design that adapts seamlessly to all screen sizes.
- **Image Gallery**: A scrolling marquee to display project images in the "About" section.
- **Portfolio Showcase**: A dedicated section to display detailed project information, including images, descriptions, and client testimonials.
- **Client Testimonials**: A dynamic marquee that scrolls through customer reviews.
- **Contact Form**: A functional contact form with client-side validation using Zod and React Hook Form.
- **SEO Optimized**: Built with Next.js App Router for optimal performance and search engine visibility.

## 🚀 Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (built on Radix UI)
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Schema Validation**: Zod
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js v18.17 or later
- npm, yarn, or pnpm

## 📦 Installation and Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/next-refit-website.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd next-refit-website
    ```

3.  **Install the dependencies:**

    Using npm:

    ```bash
    npm install
    ```

    Or using yarn:

    ```bash
    yarn install
    ```

    Or using pnpm:

    ```bash
    pnpm install
    ```

4.  **(Optional) Environment Variables:**

    This project does not require any environment variables to run locally, but if you need to add any in the future, you can create a `.env.local` file in the root of the project:

    ```env
    # Example environment variable
    NEXT_PUBLIC_API_URL=https://api.example.com
    ```

## ▶️ How to Run

To start the development server, run one of the following commands:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
