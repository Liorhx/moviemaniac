const API_KEY = "91148ead1b793af27a3e91e4835197e4";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export const GENRE_MAP = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

export const getGenreNames = (genreIds = [], fallbackGenres = "") => {
  if (fallbackGenres) return fallbackGenres;
  if (!genreIds || !Array.isArray(genreIds) || genreIds.length === 0) {
    return "Cinema";
  }
  const names = genreIds
    .map((id) => (typeof id === "object" ? id.name : GENRE_MAP[id]))
    .filter(Boolean)
    .slice(0, 2);
  return names.length > 0 ? names.join("/") : "Cinema";
};

// Curated high-definition dataset matching the exact reference image
export const CURATED_MOVIES = {
  trending: [
    {
      id: 693134,
      title: "Dune: Part Two",
      original_title: "DUNE: PART TWO",
      poster_path: "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
      backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s520fff.jpg",
      vote_average: 8.3,
      display_rating: "5.0",
      stars: 5,
      release_date: "2024-03-01",
      genres_text: "Sci-Fi/Adventure",
      genre_ids: [878, 12],
      overview:
        "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
      trailer_url: "https://www.youtube.com/watch?v=Way9Dexny3w",
    },
    {
      id: 872585,
      title: "Oppenheimer",
      original_title: "OPPENHEIMER",
      poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      backdrop_path: "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
      vote_average: 8.1,
      display_rating: "4.9",
      stars: 5,
      release_date: "2023-07-21",
      genres_text: "Biography/Drama",
      genre_ids: [18, 36],
      overview:
        "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
      trailer_url: "https://www.youtube.com/watch?v=uYPbbksJxIg",
    },
    {
      id: 346698,
      title: "Barbie",
      original_title: "BARBIE",
      poster_path: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      backdrop_path: "/ctMserH8g2SeOAnCw5gFjd2NTLq.jpg",
      vote_average: 7.2,
      display_rating: "4.7",
      stars: 5,
      release_date: "2023-07-21",
      genres_text: "Comedy/Fantasy",
      genre_ids: [35, 14],
      overview:
        "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land.",
      trailer_url: "https://www.youtube.com/watch?v=pBk4NYhWNMM",
    },
    {
      id: 569094,
      title: "Spider-Man: Across the Spider-Verse",
      original_title: "SPIDER-MAN: ACROSS...",
      poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
      backdrop_path: "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
      vote_average: 8.4,
      display_rating: "4.8",
      stars: 5,
      release_date: "2023-06-02",
      genres_text: "Animation/Action",
      genre_ids: [16, 28, 12],
      overview:
        "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
      trailer_url: "https://www.youtube.com/watch?v=cqGjhVJWtEg",
    },
    {
      id: 76600,
      title: "Avatar: The Way of Water",
      original_title: "AVATAR: THE WAY OF...",
      poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      backdrop_path: "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
      vote_average: 7.7,
      display_rating: "4.5",
      stars: 5,
      release_date: "2022-12-16",
      genres_text: "Sci-Fi/Action",
      genre_ids: [878, 28, 12],
      overview:
        "Set more than a decade after the events of the first film, Jake Sully and Ney'tiri have formed a family and are doing everything to stay together.",
      trailer_url: "https://www.youtube.com/watch?v=d9MyW72ELq0",
    },
    {
      id: 466420,
      title: "Killers of the Flower Moon",
      original_title: "KILLERS OF THE...",
      poster_path: "/dB6Krk806zeqd075UMmQez2Et7w.jpg",
      backdrop_path: "/mZLnkzZ7y3fC2P5iQ8j70Z4z9Wf.jpg",
      vote_average: 7.5,
      display_rating: "4.6",
      stars: 5,
      release_date: "2023-10-20",
      genres_text: "Crime/Drama",
      genre_ids: [80, 18, 36],
      overview:
        "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one.",
      trailer_url: "https://www.youtube.com/watch?v=EP34Yoxs3FQ",
    },
    {
      id: 666277,
      title: "Past Lives",
      original_title: "PAST LIVES",
      poster_path: "/k3waqVXSnvCZWfJYNtdamTgTtTA.jpg",
      backdrop_path: "/m90O48CqL8Jk8WzD8K8u3mF7qHk.jpg",
      vote_average: 7.9,
      display_rating: "4.8",
      stars: 5,
      release_date: "2023-06-02",
      genres_text: "Drama/Romance",
      genre_ids: [18, 10749],
      overview:
        "Nora and Hae Sung, two deeply connected childhood friends, are wrest apart after Nora's family emigrates from South Korea.",
      trailer_url: "https://www.youtube.com/watch?v=kA244xewjcI",
    },
    {
      id: 840430,
      title: "The Holdovers",
      original_title: "THE HOLDOVERS",
      poster_path: "/5qGIxdEWtlPpKbVj97X1T74qG1V.jpg",
      backdrop_path: "/bckxSN9swvJzbR5Xl8G58tZ1c2d.jpg",
      vote_average: 7.7,
      display_rating: "4.7",
      stars: 5,
      release_date: "2023-10-27",
      genres_text: "Comedy/Drama",
      genre_ids: [35, 18],
      overview:
        "A curmudgeonly instructor at a New England prep school is forced to remain on campus during Christmas break to babysit the handful of students with nowhere to go.",
      trailer_url: "https://www.youtube.com/watch?v=AhKLpJmHhIg",
    },
  ],
  popular: [
    {
      id: 533535,
      title: "Deadpool & Wolverine",
      original_title: "DEADPOOL & WOLVERINE",
      poster_path: "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
      backdrop_path: "/yDHYTfA3R0jFYba16jBB128QIKI.jpg",
      vote_average: 7.8,
      display_rating: "4.8",
      stars: 5,
      release_date: "2024-07-26",
      genres_text: "Action/Comedy",
      genre_ids: [28, 35, 878],
      overview:
        "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary behind him.",
      trailer_url: "https://www.youtube.com/watch?v=73_1biulkYk",
    },
    {
      id: 1022789,
      title: "Inside Out 2",
      original_title: "INSIDE OUT 2",
      poster_path: "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
      backdrop_path: "/stKGOmPAg4bX8bHk3eKx3V8d0e.jpg",
      vote_average: 7.6,
      display_rating: "4.7",
      stars: 5,
      release_date: "2024-06-14",
      genres_text: "Animation/Family",
      genre_ids: [16, 10751, 12],
      overview:
        "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for unexpected new Emotions!",
      trailer_url: "https://www.youtube.com/watch?v=LEjhY15eCx0",
    },
    {
      id: 792307,
      title: "Poor Things",
      original_title: "POOR THINGS",
      poster_path: "/kCGlIMHnOm8JPXq3rXM6c5wWW4T.jpg",
      backdrop_path: "/bQS43HSLZzMjZkcHJz49MrCG8dL.jpg",
      vote_average: 7.8,
      display_rating: "4.8",
      stars: 5,
      release_date: "2023-12-08",
      genres_text: "Sci-Fi/Comedy",
      genre_ids: [878, 35, 10749],
      overview:
        "The incredible tale and fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant scientist Dr. Godwin Baxter.",
      trailer_url: "https://www.youtube.com/watch?v=RlbR5N6veqw",
    },
    {
      id: 414906,
      title: "The Batman",
      original_title: "THE BATMAN",
      poster_path: "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
      backdrop_path: "/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
      vote_average: 7.7,
      display_rating: "4.7",
      stars: 5,
      release_date: "2022-03-04",
      genres_text: "Action/Crime",
      genre_ids: [28, 80, 18],
      overview:
        "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
      trailer_url: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
    },
    {
      id: 693134,
      title: "Dune: Part Two",
      original_title: "DUNE: PART TWO",
      poster_path: "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
      backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s520fff.jpg",
      vote_average: 8.3,
      display_rating: "5.0",
      stars: 5,
      release_date: "2024-03-01",
      genres_text: "Sci-Fi/Adventure",
      genre_ids: [878, 12],
      overview:
        "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
      trailer_url: "https://www.youtube.com/watch?v=Way9Dexny3w",
    },
    {
      id: 872585,
      title: "Oppenheimer",
      original_title: "OPPENHEIMER",
      poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      backdrop_path: "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
      vote_average: 8.1,
      display_rating: "4.9",
      stars: 5,
      release_date: "2023-07-21",
      genres_text: "Biography/Drama",
      genre_ids: [18, 36],
      overview:
        "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
      trailer_url: "https://www.youtube.com/watch?v=uYPbbksJxIg",
    },
    {
      id: 346698,
      title: "Barbie",
      original_title: "BARBIE",
      poster_path: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      backdrop_path: "/ctMserH8g2SeOAnCw5gFjd2NTLq.jpg",
      vote_average: 7.2,
      display_rating: "4.7",
      stars: 5,
      release_date: "2023-07-21",
      genres_text: "Comedy/Fantasy",
      genre_ids: [35, 14],
      overview:
        "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land.",
      trailer_url: "https://www.youtube.com/watch?v=pBk4NYhWNMM",
    },
    {
      id: 569094,
      title: "Spider-Man: Across the Spider-Verse",
      original_title: "SPIDER-MAN: ACROSS...",
      poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
      backdrop_path: "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
      vote_average: 8.4,
      display_rating: "4.8",
      stars: 5,
      release_date: "2023-06-02",
      genres_text: "Animation/Action",
      genre_ids: [16, 28, 12],
      overview:
        "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
      trailer_url: "https://www.youtube.com/watch?v=cqGjhVJWtEg",
    },
  ],
  top_rated: [
    {
      id: 238,
      title: "The Godfather",
      original_title: "THE GODFATHER",
      poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      backdrop_path: "/tmU7GeKVybMWF92vG6eGN6G6z0n.jpg",
      vote_average: 8.7,
      display_rating: "5.0",
      stars: 5,
      release_date: "1972-03-14",
      genres_text: "Drama/Crime",
      genre_ids: [18, 80],
      overview:
        "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family.",
      trailer_url: "https://www.youtube.com/watch?v=sY1S34973zA",
    },
    {
      id: 278,
      title: "The Shawshank Redemption",
      original_title: "SHAWSHANK REDEMPTION",
      poster_path: "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
      backdrop_path: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
      vote_average: 8.7,
      display_rating: "5.0",
      stars: 5,
      release_date: "1994-09-23",
      genres_text: "Drama/Crime",
      genre_ids: [18, 80],
      overview:
        "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison.",
      trailer_url: "https://www.youtube.com/watch?v=PLl99DlL6b4",
    },
    {
      id: 155,
      title: "The Dark Knight",
      original_title: "THE DARK KNIGHT",
      poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      backdrop_path: "/dqK9Hag1054tghRQSqLSfrkvQnA.jpg",
      vote_average: 8.5,
      display_rating: "4.9",
      stars: 5,
      release_date: "2008-07-16",
      genres_text: "Action/Crime",
      genre_ids: [28, 80, 18],
      overview:
        "Batman raises the stakes in his war on crime with the help of Lt. Jim Gordon and District Attorney Harvey Dent.",
      trailer_url: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    },
    {
      id: 157336,
      title: "Interstellar",
      original_title: "INTERSTELLAR",
      poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      backdrop_path: "/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
      vote_average: 8.4,
      display_rating: "4.9",
      stars: 5,
      release_date: "2014-11-05",
      genres_text: "Sci-Fi/Adventure",
      genre_ids: [878, 12, 18],
      overview:
        "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel.",
      trailer_url: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    },
    {
      id: 872585,
      title: "Oppenheimer",
      original_title: "OPPENHEIMER",
      poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      backdrop_path: "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
      vote_average: 8.1,
      display_rating: "4.9",
      stars: 5,
      release_date: "2023-07-21",
      genres_text: "Biography/Drama",
      genre_ids: [18, 36],
      overview:
        "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
      trailer_url: "https://www.youtube.com/watch?v=uYPbbksJxIg",
    },
    {
      id: 569094,
      title: "Spider-Man: Across the Spider-Verse",
      original_title: "SPIDER-MAN: ACROSS...",
      poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
      backdrop_path: "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
      vote_average: 8.4,
      display_rating: "4.8",
      stars: 5,
      release_date: "2023-06-02",
      genres_text: "Animation/Action",
      genre_ids: [16, 28, 12],
      overview:
        "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
      trailer_url: "https://www.youtube.com/watch?v=cqGjhVJWtEg",
    },
  ],
  upcoming: [
    {
      id: 558449,
      title: "Gladiator II",
      original_title: "GLADIATOR II",
      poster_path: "/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
      backdrop_path: "/euYIwmwkmz95mnXvufEmbL69ovr.jpg",
      vote_average: 7.2,
      display_rating: "4.6",
      stars: 5,
      release_date: "2024-11-22",
      genres_text: "Action/Adventure",
      genre_ids: [28, 12, 18],
      overview:
        "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius must enter the Colosseum.",
      trailer_url: "https://www.youtube.com/watch?v=4rgYUipGJNo",
    },
    {
      id: 889737,
      title: "Joker: Folie à Deux",
      original_title: "JOKER: FOLIE À DEUX",
      poster_path: "/aciP8Km0waTLXEYf5zyFKxHgVar.jpg",
      backdrop_path: "/uGmYVIxmAqYRN0pqiovlBGKyM2h.jpg",
      vote_average: 6.8,
      display_rating: "4.4",
      stars: 4,
      release_date: "2024-10-04",
      genres_text: "Drama/Crime",
      genre_ids: [18, 80, 53],
      overview:
        "While struggling with his dual identity, Arthur Fleck not only stumbles upon true love, but also finds the music that's always been inside him.",
      trailer_url: "https://www.youtube.com/watch?v=_OKAwz2NiOI",
    },
    {
      id: 1241982,
      title: "Moana 2",
      original_title: "MOANA 2",
      poster_path: "/aLVkiINNObeVNsZ4Qo455pS0R5E.jpg",
      backdrop_path: "/tElnmtQ6yz1PjN1kePNl8yMSb59.jpg",
      vote_average: 7.1,
      display_rating: "4.5",
      stars: 5,
      release_date: "2024-11-27",
      genres_text: "Animation/Adventure",
      genre_ids: [16, 12, 10751],
      overview:
        "After receiving an unexpected call from her wayfinding ancestors, Moana journeys to the far seas of Oceania into dangerous, long-lost waters.",
      trailer_url: "https://www.youtube.com/watch?v=hDZ7y8RP5HE",
    },
    {
      id: 912649,
      title: "Venom: The Last Dance",
      original_title: "VENOM: THE LAST DANCE",
      poster_path: "/aosm8Vh92loPLstFA9Av5AIFZye.jpg",
      backdrop_path: "/3V4kLQg0kSqPLctI5ziYWMEAZYF.jpg",
      vote_average: 6.8,
      display_rating: "4.4",
      stars: 4,
      release_date: "2024-10-25",
      genres_text: "Action/Sci-Fi",
      genre_ids: [28, 878],
      overview:
        "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision.",
      trailer_url: "https://www.youtube.com/watch?v=__2bjWbetsA",
    },
    {
      id: 693134,
      title: "Dune: Part Two",
      original_title: "DUNE: PART TWO",
      poster_path: "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
      backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s520fff.jpg",
      vote_average: 8.3,
      display_rating: "5.0",
      stars: 5,
      release_date: "2024-03-01",
      genres_text: "Sci-Fi/Adventure",
      genre_ids: [878, 12],
      overview:
        "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
      trailer_url: "https://www.youtube.com/watch?v=Way9Dexny3w",
    },
    {
      id: 533535,
      title: "Deadpool & Wolverine",
      original_title: "DEADPOOL & WOLVERINE",
      poster_path: "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
      backdrop_path: "/yDHYTfA3R0jFYba16jBB128QIKI.jpg",
      vote_average: 7.8,
      display_rating: "4.8",
      stars: 5,
      release_date: "2024-07-26",
      genres_text: "Action/Comedy",
      genre_ids: [28, 35, 878],
      overview:
        "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary behind him.",
      trailer_url: "https://www.youtube.com/watch?v=73_1biulkYk",
    },
  ],
};

// Map route/type names
const normalizeType = (type) => {
  if (type === "top_rated" || type === "highest_rated") return "top_rated";
  if (type === "upcoming") return "upcoming";
  if (type === "trending") return "trending";
  return "popular";
};

// Safe helper with timeout
const fetchWithTimeout = async (url, options = {}, timeout = 3500) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
};

/**
 * Robust multi-tier fetcher:
 * 1. Try local/production rewrite proxy (/api/tmdb/movie/...)
 * 2. Try direct TMDB API (works on broadband/custom DNS)
 * 3. Fallback safely to curated offline datasets
 */
export const getMovies = async (type = "popular") => {
  const normType = normalizeType(type);
  const endpointType = normType === "trending" ? "popular" : normType;

  // Tier 1: Try relative proxy endpoint (configured in vite.config.js, vercel.json, _redirects)
  try {
    const proxyRes = await fetchWithTimeout(
      `/api/tmdb/movie/${endpointType}?api_key=${API_KEY}`,
      {},
      3000
    );
    if (proxyRes.ok) {
      const data = await proxyRes.json();
      if (data && Array.isArray(data.results) && data.results.length > 0) {
        return {
          source: "proxy",
          movies: formatMovies(data.results),
        };
      }
    }
  } catch (_) {
    // Proceed to direct attempt
  }

  // Tier 2: Try direct TMDB API
  try {
    const directRes = await fetchWithTimeout(
      `${TMDB_BASE_URL}/movie/${endpointType}?api_key=${API_KEY}`,
      {},
      3500
    );
    if (directRes.ok) {
      const data = await directRes.json();
      if (data && Array.isArray(data.results) && data.results.length > 0) {
        return {
          source: "direct",
          movies: formatMovies(data.results),
        };
      }
    }
  } catch (err) {
    console.warn(
      "TMDB direct connection failed (mobile ISP blocking or offline). Using offline dataset.",
      err.message
    );
  }

  // Tier 3: Curated guaranteed fallback matching the UI
  const fallbackList = CURATED_MOVIES[normType] || CURATED_MOVIES.popular;
  return {
    source: "curated",
    isFallback: true,
    movies: fallbackList,
  };
};

/**
 * Search movies either via API or in-memory fallback
 */
export const searchMovies = async (query = "") => {
  if (!query.trim()) return [];

  // Try API first
  try {
    const res = await fetchWithTimeout(
      `${TMDB_BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}`,
      {},
      3500
    );
    if (res.ok) {
      const data = await res.json();
      if (data?.results?.length) {
        return formatMovies(data.results);
      }
    }
  } catch (_) {
    // fallback to local filter
  }

  // Filter curated database
  const allMovies = [
    ...CURATED_MOVIES.trending,
    ...CURATED_MOVIES.popular,
    ...CURATED_MOVIES.top_rated,
    ...CURATED_MOVIES.upcoming,
  ];

  const unique = Array.from(new Map(allMovies.map((m) => [m.id, m])).values());
  const q = query.toLowerCase();
  return unique.filter(
    (m) =>
      m.title.toLowerCase().includes(q) ||
      m.overview.toLowerCase().includes(q) ||
      (m.genres_text && m.genres_text.toLowerCase().includes(q))
  );
};

// Format TMDB raw results to include formatted rating, star count, and genres
export const formatMovies = (rawMovies = []) => {
  return rawMovies.map((movie) => {
    const voteAvg = movie.vote_average || 7.0;
    // Calculate 5-star rating (scale 0-10 to 0-5)
    const starScore = Math.max(1, Math.min(5, Math.round(voteAvg / 2)));
    const displayRating = (voteAvg / 2).toFixed(1);

    return {
      ...movie,
      display_rating: displayRating,
      stars: starScore,
      genres_text: getGenreNames(movie.genre_ids),
    };
  });
};

