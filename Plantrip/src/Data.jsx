const data = [
  {
    id: 1,
    name: "Agra",
    info: "Agra, located in Uttar Pradesh, is famous for the Taj Mahal, a UNESCO World Heritage Site and one of the Seven Wonders of the World. The city also houses the Agra Fort and Fatehpur Sikri, reflecting the grandeur of Mughal architecture. It is a major tourist hub with rich history, handicrafts, and Mughlai cuisine.",
    image: "https://c4.wallpaperflare.com/wallpaper/320/1011/669/taj-mahal-agra-india-4k-wallpaper-preview.jpg",
    price: "34000"
  },
  {
    id: 2,
    name: "Jaipur",
    info: "Jaipur, the capital of Rajasthan, is famously called the 'Pink City' for its distinct pink-colored buildings. It is known for majestic forts like Amer Fort, palaces such as Hawa Mahal, and the City Palace. Jaipur is also part of the Golden Triangle tourist circuit and is a hub for handicrafts, jewelry, and Rajasthani culture.",
    image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "28000"
  },
  {
    id: 3,
    name: "Delhi",
    info: "Delhi, the capital of India, is a vibrant blend of history and modernity. It is home to landmarks like the Red Fort, Qutub Minar, India Gate, and Humayun’s Tomb. The city is known for its bustling markets, street food, political significance, and as a gateway to explore North India. Old Delhi and New Delhi showcase two different worlds within the same city.",
    image: "https://media.istockphoto.com/id/1475568218/photo/the-india-gate-is-a-war-memorial-located-at-kartavya-path-new-delhi-india.jpg?s=612x612&w=0&k=20&c=gpsGqunmvZsOLAK5320GA6tUnSf6DpmeVcSEAqUmNKs=",
    price: "30000"
  },
  {
    id: 4,
    name: "Varanasi",
    info: "Varanasi, also known as Kashi or Banaras, is one of the world’s oldest continuously inhabited cities. Situated on the banks of the Ganges, it is a major spiritual center for Hindus. The city is famous for its ghats, temples, classical music, silk weaving, and evening Ganga Aarti ceremonies that attract thousands of pilgrims and tourists.",
    image: "https://t4.ftcdn.net/jpg/04/08/25/05/360_F_408250543_MVaEVGeWxb4FiFy7mEGKj8nfYkwoAZON.jpg",
    price: "25000"
  },
  {
    id: 5,
    name: "Mumbai",
    info: "Mumbai, the financial capital of India, is a bustling metropolis known for Bollywood, the Gateway of India, Marine Drive, and the vibrant nightlife. It is a melting pot of cultures and opportunities, with colonial-era architecture, Juhu Beach, Elephanta Caves, and delicious street food like vada pav. The city never sleeps and thrives on its spirit of resilience.",
    image: "https://cdn.wallpapersafari.com/78/78/8SYIUJ.jpg",
    price: "45000"
  },
  {
    id: 6,
    name: "Goa",
    info: "Goa is a coastal paradise famous for its sandy beaches, Portuguese heritage, and vibrant nightlife. Popular beaches include Baga, Anjuna, and Palolem. Goa is also known for its churches, flea markets, water sports, seafood, and festivals. It attracts both domestic and international tourists seeking relaxation and adventure.",
    image: "https://media.istockphoto.com/id/535168027/photo/india-goa-palolem-beach.jpg?s=612x612&w=0&k=20&c=iGV1Ue0Efj87dQirWnUpZVG1dNobUjfVvMGdKHTJ7Qg=",
    price: "38000"
  },
  {
  id: 7,
  name: "Ahmedabad",
  info: "Ahmedabad, the largest city in Gujarat, is famous for its Sabarmati Ashram established by Mahatma Gandhi, intricately carved temples, and the bustling Manek Chowk market. The city is a UNESCO World Heritage City, known for its textile industry, rich heritage, and the annual kite festival.",
  image: "https://www.kuntal.org/photo/Atal_Pedestrian_Bridge_at_Night-HD%20Photo.jpg",
  price: "29000"
},
{
  id: 8,
  name: "Nashik",
  info: "Nashik, located in Maharashtra, is one of the holiest cities in India, known for the Kumbh Mela and sacred temples like Trimbakeshwar. Surrounded by vineyards, it is also known as the ‘Wine Capital of India’. The Godavari River flows through the city, adding to its spiritual and cultural significance.",
  image: "https://kumbhamela2015.wordpress.com/wp-content/uploads/2015/08/33319-kumbhmela2015nashik.jpeg",
  price: "32000"
},
{
  id: 9,
  name: "Indore",
  info: "Indore, the commercial capital of Madhya Pradesh, is known for its vibrant food culture, clean streets, and historical landmarks. Popular attractions include Rajwada Palace, Lal Bagh Palace, and Sarafa Bazaar’s famous night street food market. The city is a perfect blend of modern lifestyle and cultural heritage.",
  image: "https://thumbs.dreamstime.com/b/ancient-rajwada-indore-night-lights-royal-palace-decoration-statue-sculpture-ahilya-bai-holkar-also-seen-40777212.jpg",
  price: "36000"
},
{
  id: 10,
  name: "Surat",
  info: "Surat, located in Gujarat, is known as the 'Diamond City' and 'Silk City' due to its diamond cutting and textile industries. The city is famous for its vibrant street food, the Tapi Riverfront, Surat Castle, and bustling markets that attract tourists and business visitors alike.",
  image: "https://i.pinimg.com/736x/1e/e3/0a/1ee30a5f2f47ddfb14e303bb55ef966b.jpg",
  price: "26000"
},
{
  id: 11,
  name: "Ahilyanagar",
  info: "Ahilyanagar (Indore region) is a city steeped in cultural heritage, known for historical temples, palaces, and traditional markets. The city celebrates festivals with grandeur and offers a glimpse into the lifestyle and customs of Madhya Pradesh.",
  image: "https://static.toiimg.com/thumb/msid-108496034,width-1070,height-580,resizemode-75/108496034,pt-32,y_pad-40/108496034.jpg",
  price: "23000"
},
{
  id: 12,
  name: "Vadodara",
  info: "Vadodara, also called Baroda, is a cultural hub in Gujarat famous for the Laxmi Vilas Palace, Sayaji Baug garden, and rich art heritage. It is a city of festivals, museums, and architectural marvels blending Maratha, Mughal, and colonial influences.",
  image: "https://www.gujarattourism.com/content/dam/gujrattourism/images/flora--fauna/sursagar-lake/Sursagar-Lake-Thumbnail.jpg",
  price: "28000"
}


];
export default data;