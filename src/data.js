export const productList = [
  {
    id: 1,
    name: 'Карточная игра МАФИЯ',
    slug: 'mafia',
    image: ['/img/product-1.jpg'],
    price: 1200,
    weight: 100,
    desc: <>Описание</>,
    specs: <>Спецификация</>,
    authors: <>Авторы</>,
    content: (
      <>
        <p>
          {' '}
          <h3>Irure velit amet ullamco ad non laboris ea nostrud ullamco veniam.</h3>
        </p>
        <img class="img_article" src={'http://localhost:3000/img/product-1.jpg'} />
        <p>
          <strong>Handshake release assets</strong>&nbsp;validation metrics first mover advantage ownership prototype. Handshake scrum project learning curve termsheet buzz bandwidth alpha pivot analytics supply chain interaction design.&nbsp; Pitch analytics assets. <a href="#">Link</a>
        </p>
      </>
    ),
  },
  {
    id: 2,
    name: 'Календарь 2024 – Identity V',
    slug: 'mafia2',
    image: ['/img/product-1.jpg'],
    price: 222,
    weight: 222,
    desc: <>Описание</>,
    specs: <>Спецификация</>,
    authors: <>Авторы</>,
    content: (
      <>
        <p>
          {' '}
          <h3>Irure velit amet ullamco ad non laboris ea nostrud ullamco veniam.</h3>
        </p>
        <img class="img_article" src={'http://localhost:3000/img/product-1.jpg'} />
        <p>
          <strong>Handshake release assets</strong>&nbsp;validation metrics first mover advantage ownership prototype. Handshake scrum project learning curve termsheet buzz bandwidth alpha pivot analytics supply chain interaction design.&nbsp; &nbsp;Pitch analytics assets. <a href="#">Link</a>
        </p>
      </>
    ),
  },
];
export const socialData = [
  {
    icon: (
      <svg viewBox="0 0 64 64" width="32" height="32">
        <circle cx="32" cy="32" r="32" fill="#4C75A3"></circle>
        <path
          d="M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z"
          fill="white"></path>
      </svg>
    ),
    name: (
      <div>
        {' '}
        Вконтакте <b style={{ color: '#ff9909' }}>mafia_tiktok</b>
      </div>
    ),
    link: '',
  },
  {
    icon: (
      <svg fill="none" height="32" width="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
        <path d="M250 500c138.071 0 250-111.929 250-250S388.071 0 250 0 0 111.929 0 250s111.929 250 250 250z" fill="#34aadf" />
        <path
          d="M104.047 247.832s125-51.3 168.352-69.364c16.619-7.225 72.977-30.347 72.977-30.347s26.012-10.115 23.844 14.451c-.723 10.116-6.503 45.52-12.283 83.815-8.671 54.191-18.064 113.439-18.064 113.439s-1.445 16.619-13.728 19.509-32.515-10.115-36.127-13.006c-2.891-2.167-54.191-34.682-72.977-50.578-5.058-4.335-10.838-13.005.722-23.121 26.012-23.844 57.081-53.468 75.867-72.254 8.671-8.671 17.341-28.902-18.786-4.336-51.3 35.405-101.878 68.642-101.878 68.642s-11.561 7.225-33.237.722c-21.677-6.502-46.966-15.173-46.966-15.173s-17.34-10.838 12.284-22.399z"
          fill="#fff"
        />
      </svg>
    ),
    name: (
      <div>
        {' '}
        Telegram <b style={{ color: '#ff9909' }}>@mafia_telg</b>
      </div>
    ),
    link: '',
  },
  {
    icon: <img style={{ width: '32px', height: '32px', borderRadius: '50%' }} src={'/img/tiktok.png'} />,
    name: (
      <div>
        {' '}
        TikTok <b style={{ color: '#ff9909' }}>@mafia_tikt</b>
      </div>
    ),
    link: '',
  },
  {
    icon: <img style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'contain' }} src={'/img/youtube.svg'} />,
    name: (
      <div>
        {' '}
        YouTube <b style={{ color: '#ff9909' }}>@mafia_youtube</b>
      </div>
    ),
    link: 'https://www.youtube.com/@vladkozyra',
  },
  {
    icon: <img style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'contain' }} src={'/img/instagram.svg'} />,
    name: (
      <div>
        {' '}
        Instagram <b style={{ color: '#ff9909' }}>@mafia_instagram</b>
      </div>
    ),
    link: 'https://www.youtube.com/@vladkozyra',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" width="32" height="32">
        <circle cx="32" cy="32" r="32" fill="#000000"></circle>
        <path d="M 41.116 18.375 h 4.962 l -10.8405 12.39 l 12.753 16.86 H 38.005 l -7.821 -10.2255 L 21.235 47.625 H 16.27 l 11.595 -13.2525 L 15.631 18.375 H 25.87 l 7.0695 9.3465 z m -1.7415 26.28 h 2.7495 L 24.376 21.189 H 21.4255 z" fill="white"></path>
      </svg>
    ),
    name: (
      <div>
        {' '}
        X <b style={{ color: '#ff9909' }}>@mafia_x</b>
      </div>
    ),
    link: 'https://www.youtube.com/@vladkozyra',
  },
];
export const questionData = [
  {
    question: 'What is an NFT?',
    answer: ` NFTs or non-fungible tokens, are cryptographic assets on blockchain with unique identification codes and metadata that distinguish them from each other. NFTs are unique and not mutually interchangeable, which means no two NFTs are the same. NFTs can be a unique digital artwork,
                  sneaker in a limited-run fashion line, in-game item, digital collectible etc.`,
  },
  {
    question: 'What is an NFT?',
    answer: ` NFTs or non-fungible tokens, are cryptographic assets on blockchain with unique identification codes and metadata that distinguish them from each other. NFTs are unique and not mutually interchangeable, which means no two NFTs are the same. NFTs can be a unique digital artwork,
                  sneaker in a limited-run fashion line, in-game item, digital collectible etc.`,
  },
];
