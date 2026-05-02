export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const defaultLang = 'es' as const;
export type Lang = keyof typeof languages;

export const ui = {
  es: {
    meta: {
      title: 'Dennys Carrillo · DJ & Productor',
      description: 'Más de una década creando sonido. Open format. Latino de raíz, libre por esencia.',
    },
    nav: {
      home: 'Inicio',
      bio: 'Bio',
      music: 'Música',
      events: 'Eventos',
      gallery: 'Galería',
      blog: 'Diario',
      contact: 'Contacto',
      booking: 'Booking',
    },
    hero: {
      eyebrow: 'Locutor · Productor · DJ',
      title_1: 'La música',
      title_2: 'nació',
      title_3: 'libre.',
      subtitle: 'Más de diez años entre cabinas y emisoras. Latino de raíces, open format por instinto — de lo urbano al tropical, del disco de los 70 a la electrónica pura.',
      cta_listen: 'Escuchar sesión',
      cta_book: 'Contratar',
      scroll: 'Desliza',
    },
    marquee: [
      'La música nació libre',
      'Open Format',
      '100% Latin Soul',
      '+10 años en cabina',
      'Urbano · Tropical · Electrónica · Rock · Disco',
    ],
    bio: {
      chip: 'Sobre mí',
      title: 'De la radio a la pista.',
      p1: 'Con más de diez años de recorrido entre cabinas y emisoras de radio, Dennys Carrillo es un apasionado de la creación sonora que sabe cómo conectar con la gente. De raíces cien por cien latinas, lleva el ritmo de serie y se mueve con total naturalidad por todo el espectro de la música latina — desde los sonidos urbanos actuales hasta los ritmos tropicales de toda la vida.',
      p2: 'Su estilo destaca por ser cercano y adaptable. Educado musicalmente en casa entre el rock clásico y el disco de los 70, y atrapado más tarde por la electrónica pura, tiene la sensibilidad necesaria para leer al público y llevar la sesión hacia donde la noche lo pida.',
      p3: 'Más que buscar ser un experto infalible, su objetivo es hacer disfrutar a la gente, guiado siempre por una idea que le acompaña desde niño: "la música nació libre".',
      stats: [
        { k: '+10', v: 'Años en cabina' },
        { k: '∞', v: 'Géneros Musicales' },
        { k: 'Open', v: 'Format' },
        { k: '100%', v: 'Raíz latina' },
      ],
    },
    music: {
      chip: 'Sesiones & Tracks',
      title: 'Escucha el sonido.',
      subtitle: 'Producciones, mezclas y señas de cabina. Pulsa play y siéntete como en la pista.',
      more_title: '¿Quieres escuchar más?',
      more_sub: 'Explora todas las sesiones, remixes y producciones en mi perfil.',
      more_cta: 'Ir a SoundCloud',
    },
    events: {
      chip: 'Agenda',
      title: 'Próximas fechas.',
      subtitle: 'Nuevas sesiones en preparación. Vuelve pronto o escríbeme para reservar.',
      status: 'Próximamente',
      book: 'Contratar sesión',
    },
    gallery: {
      chip: 'Galería',
      title: 'En cabina.',
      subtitle: 'Momentos, sesiones y retratos.',
    },
    blog: {
      chip: 'Diario',
      title: 'Notas de cabina.',
      subtitle: 'Crónicas, reflexiones y detrás de las sesiones. Escrito entre viaje y viaje.',
      read: 'Leer más',
      all: 'Ver todos los artículos',
      back: '← Volver al diario',
      minutes: 'min de lectura',
      empty: 'Pronto nuevos artículos.',
    },
    contact: {
      chip: 'Hablemos',
      title: 'Contrata una sesión.',
      subtitle: 'Eventos privados, clubs, bodas, corporativos. Cuéntame la idea y damos con el set perfecto.',
      name: 'Nombre',
      email: 'Email',
      date: 'Fecha del evento',
      message: 'Cuéntame sobre el evento y un teléfono de contacto.',
      send: 'Enviar mensaje',
      or: 'o escríbeme a',
      soon: 'Redes sociales próximamente',
    },
    footer: {
      tagline: 'La música nació libre.',
      rights: 'Todos los derechos reservados.',
      made: 'Powered by',
    },
  },
  en: {
    meta: {
      title: 'Dennys Carrillo · DJ & Producer',
      description: 'Over a decade crafting sound. Open format. Latin at the root, free by essence.',
    },
    nav: {
      home: 'Home',
      bio: 'Bio',
      music: 'Music',
      events: 'Events',
      gallery: 'Gallery',
      blog: 'Diary',
      contact: 'Contact',
      booking: 'Booking',
    },
    hero: {
      eyebrow: 'DJ · Producer · Open Format',
      title_1: 'Music was',
      title_2: 'born',
      title_3: 'free.',
      subtitle: 'Over ten years between booths and radio stations. Latin at the root, open format by instinct — from urban beats to tropical grooves, 70s disco to pure electronic.',
      cta_listen: 'Listen to a set',
      cta_book: 'Book now',
      scroll: 'Scroll',
    },
    marquee: [
      'Music was born free',
      'Open Format',
      '100% Latin Soul',
      'Dennys Carrillo',
      '+10 years on decks',
      'Urban · Tropical · Electronic',
    ],
    bio: {
      chip: 'About me',
      title: 'From radio to the floor.',
      p1: 'With more than ten years of experience between booths and radio stations, Dennys Carrillo is passionate about crafting sound and knows how to connect with a crowd. Fully Latin at the root, rhythm runs in his DNA and he moves naturally through every corner of Latin music — from today\'s urban sounds to the tropical grooves of a lifetime.',
      p2: 'His style is close, warm and adaptable. Musically raised at home between classic rock and 70s disco, and later captured by pure electronic music, he has the sensitivity to read the room and steer the set wherever the night asks.',
      p3: 'More than being the infallible expert, his goal is to make people enjoy — guided by an idea he\'s carried since childhood: "music was born free".',
      stats: [
        { k: '+10', v: 'Years on decks' },
        { k: '∞', v: 'Latin genres' },
        { k: 'Open', v: 'Format' },
        { k: '100%', v: 'Latin root' },
      ],
    },
    music: {
      chip: 'Sets & Tracks',
      title: 'Hear the sound.',
      subtitle: 'Productions, mixes and booth signatures. Hit play and step on the floor.',
      more_title: 'Want to hear more?',
      more_sub: 'Explore all sessions, remixes and productions on my profile.',
      more_cta: 'Go to SoundCloud',
    },
    events: {
      chip: 'Tour',
      title: 'Upcoming dates.',
      subtitle: 'New sets in the making. Check back soon — or reach out to book.',
      status: 'Coming soon',
      book: 'Book a set',
    },
    gallery: {
      chip: 'Gallery',
      title: 'In the booth.',
      subtitle: 'Moments, sets and portraits.',
    },
    blog: {
      chip: 'Diary',
      title: 'Notes from the booth.',
      subtitle: 'Chronicles, thoughts and behind-the-scenes of the sets. Written between one trip and the next.',
      read: 'Read more',
      all: 'See all posts',
      back: '← Back to diary',
      minutes: 'min read',
      empty: 'New posts coming soon.',
    },
    contact: {
      chip: 'Let\'s talk',
      title: 'Book a set.',
      subtitle: 'Private events, clubs, weddings, corporate. Tell me the idea and we\'ll design the perfect set.',
      name: 'Name',
      email: 'Email',
      date: 'Event date',
      message: 'Tell me about your event',
      send: 'Send message',
      or: 'or write me at',
      soon: 'Social links coming soon',
    },
    footer: {
      tagline: 'Music was born free.',
      rights: 'All rights reserved.',
      made: 'Powered by',
    },
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t<K extends keyof typeof ui['es']>(key: K): typeof ui['es'][K] {
    return (ui[lang] as any)[key] ?? (ui[defaultLang] as any)[key];
  };
}

export function getLangFromUrl(url: URL): Lang {
  const [, maybe] = url.pathname.split('/');
  if (maybe && maybe in ui) return maybe as Lang;
  return defaultLang;
}

export function switchPath(currentPath: string, target: Lang): string {
  const parts = currentPath.split('/').filter(Boolean);
  if (parts[0] === 'es' || parts[0] === 'en') parts.shift();
  const rest = parts.join('/');
  if (target === defaultLang) return '/' + rest;
  return '/' + target + (rest ? '/' + rest : '');
}
