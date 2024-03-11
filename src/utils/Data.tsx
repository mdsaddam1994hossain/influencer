import {
    Settings,
    LayoutDashboard,
    ChevronDown,
    Palette,
    CarTaxiFront,
    Music4,
    Award,
    ShoppingBag,
    UtensilsCrossed,
    Dumbbell,
    CandlestickChart,
    Rocket,
    Factory,
    MessagesSquare
  } from "lucide-react"

  import blogImage from "../../public/images/blog-1.jpeg"
  import blogImage2 from "../../public/images/blog-2.jpeg"
  import blogImage3 from "../../public/images/blog-3.jpeg"
  import blogImage4 from "../../public/images/blog-4.jpeg"
  import blogImage5 from "../../public/images/blog-5.jpeg"
  import blogImage6 from "../../public/images/blog-6.jpeg"

export const catagoryData =[
    {label: "Design and art",
     icon: <Palette  className="mr-4 h-4 w-4 text-gray-400 " />
    },
    {label: "Cars",
     icon:  <CarTaxiFront className="mr-2 h-4 w-4 text-gray-400" />
    },
    {label: "Beauty and makeup",
     icon:  <Settings className="mr-2 h-4 w-4 text-gray-400" />
    },
    {label: "Trade and entrepreneurship",
     icon:  <CandlestickChart  className="mr-2 h-4 w-4 text-gray-400" />
    },
    {label: "Music",
     icon:  <Music4 className="mr-2 h-4 w-4 text-gray-400" />
    },
    {label: "Shopping",
     icon:  <ShoppingBag className="mr-2 h-4 w-4 text-gray-400" />
    },
    {label: "Sports",
     icon:  <Award className="mr-2 h-4 w-4 text-gray-400" />
    },
    {label: "Physical fitness and health",
     icon:  <Dumbbell className="mr-2 h-4 w-4 text-gray-400" />
    },
    {label: "Food and drinks",
     icon:  <UtensilsCrossed className="mr-2 h-4 w-4 text-gray-400" />
    }
   
]




export const blogData = [
     {
      img: blogImage,
      date:"04 June 2023",
      title:"How Brands Can Break Barriers Empo"
     },
     {
      img: blogImage2,
      date:"14 July 2023",
      title:"Influencer Is a Real the Job It's Time to Act"
     },
     {
      img: blogImage3,
      date:"24 March 2023",
      title:"90% Social as Media Influencers"
     },
     {
      img: blogImage4,
      date:"20 June 2023",
      title:"Influencer engagement everything you"
     },
     {
      img: blogImage5,
      date:"04 February 2024",
      title:"7 types of influencer marketing campaigns"
     },
     {
      img: blogImage6,
      date:"15 January 2024",
      title:"Establishing a content marketing strategy"
     },
]

export const serviceData =[
  {title:"No upfront Cost",
  description:"Nulla eget metus mauris. Sed in ips um mollis, sagittis ligula.",
  icon:<Factory  color="white" size={30}/>,
  bgColor:"bg-red-500"
   },
  {title:"Verified Creators",
  description:"Nulla eget metus mauris. Sed in ips um mollis, sagittis ligula.",
  icon:<Rocket color="white" size={30}/>,
  bgColor:"bg-blue-600"
   },
  {title:"Live Chat",
  description:"Nulla eget metus mauris. Sed in ips um mollis, sagittis ligula.",
  icon:<MessagesSquare  color="white" size={30} />,
  bgColor:"bg-purple-500"
   },
  {title:"No upfront Cost",
  description:"Nulla eget metus mauris. Sed in ips um mollis, sagittis ligula.",
  icon:<Rocket color="white" size={30}/>,
  bgColor:"bg-yellow-500"
   },
]

export const navData = [
  { label: "nav:home", path: "/" },
  { label: "nav:contact", path: "/contact" },
  { label: "nav:who_are", path: "/about" },
  { label: "nav:blog", path: "/blog" },
]

export const influencerData = [
   {
    id:1,
    name:"Nawyantong",
    catagory:"Life Style",
    followers:1250,
    following:60,
    gender:"male"
   },
   {
    id:2,
    name:"Sufankho Jhon",
    catagory:"Photographer",
    followers:1420,
    following:36,
    gender:"male"
   },
   {
    id:3,
    name:"Goltulkjhan",
    catagory:"Beauty-lifestyle",
    followers:890,
    following:18,
    gender:"female"
   },
   {
    id:4,
    name:"Alvantan Khan",
    catagory:"Sport & Fitness",
    followers:2263,
    following:32,
    gender:"male"
   },
   {
    id:5,
    name:"Murawij Alruhayli",
    catagory:"Beauty-lifestyle",
    followers:1050,
    following:50,
    gender:"female"
   },
   {
    id:6,
    name:"Ibrahim Pasha",
    catagory:"Sport & Fitness",
    followers:1530,
    following:24,
    gender:"male"
   },
   {
    id:7,
    name:"Nayif hamdan",
    catagory:"Historical storyteller",
    followers:3400,
    following:25,
    gender:"male"
   },
   {
    id:8,
    name:"Yara Alnamlah",
    catagory:"Beauty-lifestyle",
    followers:3240,
    following:36,
    gender:"female"
   },
   {
    id:9,
    name:"Ahmed Al-Barqi",
    catagory:"Public figure",
    followers:4250,
    following:32,
    gender:"male"
   },
   {
    id:10,
    name:"Latifa Turki",
    catagory:"memoirs",
    followers:4350,
    following:21,
    gender:"female"
   },
   {
    id:11,
    name:"Donna Al Hussein",
    catagory:"Lifestyle diary",
    followers:1240,
    following:14,
    gender:"female"
   },
   {
    id:12,
    name:"Moath Al-Fadaghi",
    catagory:"a cook",
    followers:5240,
    following:42,
    gender:"male"
   },

]