export const SITE_URL = 'https://www.stefanossiathas.com';
export const OG_IMAGE_URL = `${SITE_URL}/og-default.jpg`;

const projectEntries = [
  {
    slug: 'ai-pro',
    title: 'AI (Pro) Debate',
    description: 'A debate project exploring leadership, strategy, and AI-focused argumentation.',
    image: OG_IMAGE_URL
  },
  {
    slug: 'aquawise',
    title: 'AquaWise — Smart Irrigation',
    description: 'AI-powered smart irrigation system for efficient water management.',
    image: OG_IMAGE_URL
  },
  {
    slug: 'barbershop-website',
    title: 'Barbershop Website',
    description: 'A premium responsive barbershop website design built with modern frontend tooling.',
    image: OG_IMAGE_URL
  },
  {
    slug: 'cpp-games',
    title: 'C++ Games',
    description: 'Classic C++ games including a maze game and a two-player Tic-Tac-Toe challenge.',
    image: OG_IMAGE_URL
  },
  {
    slug: 'cpp-lvl3',
    title: 'C++ Level 3 Project',
    description: 'A C++ programming project showcasing game loops, interactive logic, and DSA-driven design.',
    image: OG_IMAGE_URL
  },
  {
    slug: 'data-analysis-with-pandas',
    title: 'Data Analysis with Pandas',
    description: 'Python-based exploratory data analysis and visual storytelling with Pandas and Matplotlib.',
    image: OG_IMAGE_URL
  },
  {
    slug: 'edu-bridge-ltd',
    title: 'Edu Bridge LTD',
    description: 'An educational technology concept bridging traditional learning with digital tools.',
    image: OG_IMAGE_URL
  },
  {
    slug: 'eratosthenes',
    title: 'Promotional Game Console — Eratosthenes Internship',
    description: 'A promotional handheld game console built during an internship in satellite and IoT systems.',
    image: OG_IMAGE_URL
  },
  {
    slug: 'flask-web-app',
    title: 'Flask Web Application',
    description: 'A useful Flask task manager that keeps projects organized with a clean Python backend.',
    image: OG_IMAGE_URL
  },
  {
    slug: 'meteor',
    title: 'Meteor Counter',
    description: 'Track meteors per hour with a live leaderboard and quick observational workflow.',
    image: OG_IMAGE_URL
  },
  {
    slug: 'python-web-scraper',
    title: 'Python Web Scraper',
    description: 'A lightweight Python scraper that extracts links and exports structured data to CSV.',
    image: OG_IMAGE_URL
  },
  {
    slug: 'satfire',
    title: 'Satfire',
    description: 'A space-focused project combining mission planning, data storytelling, and engineering ideas.',
    image: OG_IMAGE_URL
  },
  {
    slug: 'solar-system',
    title: 'Solar System — interactive demo',
    description: 'A small interactive solar system project built with Svelte and live planetary data.',
    image: OG_IMAGE_URL
  },
  {
    slug: 'taskmanager',
    title: 'Stemfreak Task Manager',
    description: 'A student-friendly task manager built with SvelteKit, TypeScript, Prisma, and PostgreSQL.',
    image: OG_IMAGE_URL
  },
  {
    slug: 'thalasat',
    title: 'Thalasat — Space & AI for the Mediterranean',
    description: 'Copernicus satellite data + machine learning to monitor sea temperature, chlorophyll, and coastal change.',
    image: OG_IMAGE_URL
  },
  {
    slug: 'watchlist-app',
    title: 'Watchlist App',
    description: 'A modern watchlist app for tracking movies, shows, books, and personal recommendations.',
    image: OG_IMAGE_URL
  }
];

export const getProjectRoutes = () => projectEntries.map(({ slug }) => `/projects/${slug}`);

const projectMeta = Object.fromEntries(
  projectEntries.map(({ slug, title, description, image }) => [`/projects/${slug}`, { title, description, image }])
);

export function getMetaForPath(pathname = '/') {
  const normalizedPath = pathname && pathname !== '/' ? pathname.replace(/\/+$/, '') : '/';
  const defaults = {
    title: 'Stefanos Siathas — Portfolio',
    description: 'Stefanos Siathas builds software, AI projects, and creative engineering work across full-stack development and STEM.',
    image: OG_IMAGE_URL,
    canonical: `${SITE_URL}${normalizedPath === '/' ? '' : normalizedPath}`
  };

  if (normalizedPath === '/') {
    return defaults;
  }

  if (normalizedPath === '/about') {
    return {
      title: 'About — Stefanos Siathas',
      description: 'Learn more about Stefanos Siathas, his software projects, and his work in engineering, STEM, and creative problem solving.',
      image: OG_IMAGE_URL,
      canonical: `${SITE_URL}/about`
    };
  }

  if (normalizedPath === '/background') {
    return {
      title: 'Background — Stefanos Siathas',
      description: 'A look at Stefanos Siathas’s background, experience, and technical interests across software engineering and STEM.',
      image: OG_IMAGE_URL,
      canonical: `${SITE_URL}/background`
    };
  }

  if (projectMeta[normalizedPath]) {
    return {
      ...projectMeta[normalizedPath],
      canonical: `${SITE_URL}${normalizedPath}`
    };
  }

  return defaults;
}

export function getStructuredDataForPath(pathname = '/') {
  const meta = getMetaForPath(pathname);

  if (pathname === '/' || pathname === '') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Stefanos Siathas',
      jobTitle: 'Software Engineer and STEM Ambassador',
      url: SITE_URL,
      sameAs: [
        'https://github.com/Stefanos-gif',
        SITE_URL
      ],
      image: OG_IMAGE_URL
    };
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: meta.canonical,
    name: meta.title,
    description: meta.description,
    publisher: {
      '@type': 'Person',
      name: 'Stefanos Siathas'
    }
  };

  if (projectMeta[pathname] || projectMeta[pathname.replace(/\/+$/, '')]) {
    return {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      url: meta.canonical,
      headline: meta.title,
      description: meta.description,
      image: meta.image,
      author: {
        '@type': 'Person',
        name: 'Stefanos Siathas',
        url: SITE_URL
      },
      publisher: {
        '@type': 'Organization',
        name: 'Stefanos Siathas Portfolio',
        url: SITE_URL
      }
    };
  }

  return webpage;
}

