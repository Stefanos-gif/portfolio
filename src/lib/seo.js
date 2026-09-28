export function getMetaForPath(pathname) {
  const site = 'https://stefanossiathas.com';

  const defaults = {
    title: 'Stefanos Siathas — Portfolio',
    description:
      "Stefanos Siathas — projects and experiments in embedded systems, data, and web development.",
    image: `${site}/namet.png`,
    canonical: `${site}${pathname}`
  };

  const projectMeta = {
    '/projects/thalasat': {
      title: 'Thalasat — Space & AI for the Mediterranean',
      description: 'Copernicus satellite data + ML to monitor sea surface temperature, chlorophyll, and coastal change.',
      image: `${site}/namet.png`,
    },
    '/projects/solar-system': {
      title: 'Solar System — interactive demo',
      description: 'A small interactive solar system demo built with Svelte.',
      image: `${site}/solar-system-preview.png`,
    },
    '/projects/meteor': {
      title: 'Meteor Counter',
      description: 'Track meteors/hour with a live leaderboard — Meteor Counter.',
      image: `${site}/meteor-counter-og.png`,
    },
    '/projects/aquawise': {
      title: 'AquaWise — Smart Irrigation',
      description: 'AI-powered smart irrigation system for efficient water management.',
      image: `${site}/aquawise/aq1.jpg`,
    },
    '/projects/eratosthenes': {
      title: 'Promotional Game Console — Eratosthenes Internship',
      description: 'Intern project: handheld promotional game console introducing satellite telemetry concepts.',
      image: `${site}/eratosthenes/era1.jpg`,
    }
  };

  // root and main pages
  if (pathname === '/' || pathname === '') {
    return {
      title: defaults.title,
      description: defaults.description,
      image: defaults.image,
      canonical: defaults.canonical
    };
  }

  if (pathname === '/about') {
    return {
      title: 'About — Stefanos Siathas',
      description: 'About Stefanos Siathas — bio, contact, and achievements.',
      image: `${site}/namet.png`,
      canonical: `${site}${pathname}`
    };
  }

  if (pathname === '/background') {
    return {
      title: 'Background — Stefanos Siathas',
      description: 'Background, experience, and past roles.',
      image: `${site}/namet.png`,
      canonical: `${site}${pathname}`
    };
  }

  if (projectMeta[pathname]) {
    return {
      title: projectMeta[pathname].title,
      description: projectMeta[pathname].description,
      image: projectMeta[pathname].image,
      canonical: `${site}${pathname}`
    };
  }

  // Fallback
  return {
    title: defaults.title,
    description: defaults.description,
    image: defaults.image,
    canonical: defaults.canonical
  };
}

export function getStructuredDataForPath(pathname) {
  const meta = getMetaForPath(pathname);
  const site = 'https://stefanossiathas.com';

  // Basic WebPage schema for general pages
  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": meta.canonical,
    "name": meta.title,
    "description": meta.description,
    "publisher": {
      "@type": "Person",
      "name": "Stefanos Siathas"
    }
  };

  // For project pages, provide a richer CreativeWork schema
  const projectPaths = ['/projects/thalasat','/projects/solar-system','/projects/meteor','/projects/aquawise','/projects/eratosthenes'];
  if (projectPaths.includes(pathname)) {
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "url": meta.canonical,
      "headline": meta.title,
      "description": meta.description,
      "image": meta.image,
      "author": {
        "@type": "Person",
        "name": "Stefanos Siathas",
        "url": site
      },
      "publisher": {
        "@type": "Organization",
        "name": "Stefanos Siathas Portfolio",
        "url": site
      }
    };
  }

  return webpage;
}

