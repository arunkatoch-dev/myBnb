const data = [
  {
    id: 0,
    imgSrc: [
      `https://images.unsplash.com/photo-1579689189009-874f5cac2db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80`,
      `https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      `https://images.unsplash.com/photo-1593181629936-11c609b8db9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`,
      `https://images.unsplash.com/photo-1516406742981-2b7d67ec4ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      `https://images.unsplash.com/photo-1497267049703-01d7eb538c99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
    ],
    location: `Manali, India`,
    distance: `171 kilometres away`,
    date: `10-15 Mar`,
    price: `₹19,933`,
    rating: `4.79`,
  },
  {
    id: 1,
    imgSrc: [
      `https://images.unsplash.com/photo-1651478890983-015704de2ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
      `https://images.unsplash.com/photo-1663776376156-2baabcb56486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
      `https://images.unsplash.com/photo-1644809827077-f6ca281827f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      `https://images.unsplash.com/photo-1663776376153-36a16627d7e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
      `https://images.unsplash.com/photo-1643778765874-23e79f4e38b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80`,
    ],
    location: `Kasauli, India`,
    distance: `150 kilometres away`,
    date: `10-15 Mar`,
    price: `₹8000`,
    rating: `4.5`,
  },
  {
    id: 2,
    imgSrc: [
      `https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      `https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      `https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
    ],
    location: `Male, Maldives`,
    distance: `1000+ kilometres away`,
    date: `10-15 Mar`,
    price: `₹45,000`,
    rating: `5`,
  },
  {
    id: 3,
    imgSrc: [
      `https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      `https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80`,
      `https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80`,
    ],
    location: ` swimming pool at The Anam,`,
    distance: `171 kilometres away`,
    date: `10-15 Mar`,
    price: `₹19,933`,
    rating: `4.79`,
  },
  {
    id: 4,
    imgSrc: [
      `https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80`,
      `https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80`,
      `https://images.unsplash.com/photo-1596386461350-326ccb383e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813&q=80`,
      `https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
    ],
    location: `Cottage in Jibhi, India`,
    distance: `171 kilometres away`,
    date: `10-15 Mar`,
    price: `₹19,933`,
    rating: `4.88`,
  },
  {
    id: 5,
    imgSrc: [
      `https://images.unsplash.com/photo-1615354310157-c78b1be66eed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80`,
      `https://images.unsplash.com/photo-1550934482-7904d33d1b54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
      `https://images.unsplash.com/photo-1550355191-aa8a80b41353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
    ],
    location: `Tree House in Bahu`,
    distance: `The Burton's Treehouse`,
    date: `10-15 Mar`,
    price: `₹5,705`,
    rating: `5.0`,
  },
  {
    id: 6,
    imgSrc: [
      `https://images.unsplash.com/photo-1604601638406-edc29b54dcf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80`,
      `https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      `https://images.unsplash.com/photo-1603862026184-14a7f7b91026?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80`,
      `https://images.unsplash.com/photo-1509648033237-ae6ef40c2838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=850&q=80`,
      `https://images.unsplash.com/photo-1580202313707-46a966af5c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=862&q=80`,
    ],
    location: `Cottage in Dharamshala`,
    distance: `Chic Luxury Farm Stay`,
    date: `10-15 Mar`,
    price: `₹15,385`,
    rating: `7.5`,
  },
  {
    id: 7,
    imgSrc: [
      `https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80`,
      `https://images.unsplash.com/photo-1576874748772-584aa2bee2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
      `https://images.unsplash.com/photo-1575403071235-5dcd06cbf169?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
      `https://images.unsplash.com/photo-1573652102907-b75d25910c11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80`,
      `https://images.unsplash.com/photo-1570127828934-c60aa3e1e5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
    ],
    location: `Place to stay in Tandi`,
    distance: `Gatsby's Aframe`,
    date: `10-15 Mar`,
    price: `₹3,422`,
    rating: `3.45`,
  },
  {
    id: 8,
    imgSrc: [
      `https://images.unsplash.com/photo-1609232530947-0aeb23338a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80`,
      `https://images.unsplash.com/photo-1610178009236-02461f18b272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80`,
      `https://images.unsplash.com/photo-1634539132466-abaca3a2438b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`,
      `https://images.unsplash.com/photo-1609948545248-b4f2b2054f15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80`,
      `https://images.unsplash.com/photo-1595928562954-46d7d0d96728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
    ],
    location: `Shimla, India`,
    distance: `Royal Estate, Queen of Hills`,
    date: `10-15 Mar`,
    price: `₹12,999`,
    rating: `6.75`,
  },
  {
    id: 9,
    imgSrc: [
      `https://images.unsplash.com/photo-1518219051733-d8d4fbbf9797?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=604&q=80`,
      `https://images.unsplash.com/photo-1497601089782-06319e8be3a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
      `https://images.unsplash.com/photo-1528372962917-5d0b57649c3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=861&q=80`,
    ],
    location: `Rajasthan, India`,
    distance: `The Desert View`,
    date: `10-15 Mar`,
    price: `₹15,550`,
    rating: `4.75`,
  },
  {
    id: 10,
    imgSrc: [
      `https://images.unsplash.com/photo-1598519102179-6547728a67b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
      `https://images.unsplash.com/photo-1442544213729-6a15f1611937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80`,
      `https://images.unsplash.com/photo-1604824338889-ce1c51f1af7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
      `https://images.unsplash.com/photo-1572908721147-0a9eb395762d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
    ],
    location: `Punjab, India`,
    distance: `Shan E Punjab`,
    date: `10-15 Mar`,
    price: `₹5,000`,
    rating: `4.5`,
  },
  {
    id: 11,
    imgSrc: [
      `https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`,
      `https://images.unsplash.com/photo-1620200221658-542a4d2266f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80`,
      `https://images.unsplash.com/photo-1599832976672-5923b10683d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80`,
      `https://images.unsplash.com/photo-1590602391458-7aaa83454938?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80`,
      `https://images.unsplash.com/photo-1590580672645-68ade56b8a21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1140&q=80`,
    ],
    location: `The Maldives`,
    distance: `Conrad Rangali Islands`,
    date: `10-15 Mar`,
    price: `₹54,999`,
    rating: `7.75`,
  },
];

export default data;