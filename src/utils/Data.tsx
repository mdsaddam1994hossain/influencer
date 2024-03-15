import {
  Settings,
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
  MessagesSquare,
  Plane
} from "lucide-react"

import blogImage from "../../public/images/blog-1.jpeg"
import blogImage2 from "../../public/images/blog-2.jpeg"
import blogImage3 from "../../public/images/blog-3.jpeg"
import blogImage4 from "../../public/images/blog-4.jpeg"
import blogImage5 from "../../public/images/blog-5.jpeg"
import blogImage6 from "../../public/images/blog-6.jpeg"
import paint from "../../public/images/paint.png"
import cars from "../../public/images/cars.png"
import beauty from "../../public/images/beauty.png"
import trade from "../../public/images/trade.png"
import interior from "../../public/images/interior.png"
import music from "../../public/images/music.png"
import shopping from "../../public/images/shopping.png"
import sport from "../../public/images/sport.png"
import physical from "../../public/images/physical.png"
import food from "../../public/images/food.png"
import games from "../../public/images/games.png"
import health from "../../public/images/health.png"
import movies from "../../public/images/movies.png"
import travel from "../../public/images/travel.png"
import technology from "../../public/images/technology.png"
import photography from "../../public/images/photography.png"
import family from "../../public/images/family.png"
import fashion from "../../public/images/fashion.png"
import entertainment from "../../public/images/entertainment.png"
import offers from "../../public/images/offers.png"
import trainers from "../../public/images/trainers.png"
import media from "../../public/images/media.png"
import home from "../../public/images/home.png"
import press from "../../public/images/press.png"
import actors from "../../public/images/actors.png"
import education from "../../public/images/education.png"
import performing from "../../public/images/performing.png"
import restaurants from "../../public/images/restaurants.png"


export const catagoryData = [
  {
    id: 1,
    label: "categories.design_art",
    icon: paint
  },
  {
    id: 2,
    label: "categories.car",
    icon: cars
    
  },
  {
    id: 3,
    label: "categories.beauty_makeup",
    icon: beauty
  },
  {
    id: 4,
    label: "categories.trade_entrep",
    icon: trade
  },
  {
    id: 5,
    label: "categories.interior_design",
    icon: interior
  },
  {
    id: 6,
    label: "categories.music",
    icon: music
  },
  {
    id: 7,
    label: "categories.shopping",
    icon: shopping
  },
  {
    id: 8,
    label: "categories.sports",
    icon: sport
  },
  {
    id: 9,
    label: "categories.physical_fitness",
    icon: physical
  },
  {
    id: 10,
    label: "categories.food_drinks",
    icon: food
  },
  {
    id: 11,
    label: "categories.games",
    icon: games
  },
  {
    id: 12,
    label: "categories.health_care",
    icon: health
  },
  {
    id: 13,
    label: "categories.movies_series",
    icon: movies
  },
  {
    id: 14,
    label: "categories.travel_tourism",
    icon: travel
  },
  {
    id: 15,
    label: "categories.technology",
    icon: technology
  },
  {
    id: 16,
    label: "categories.photography_cameras",
    icon: photography
  },
  {
    id: 17,
    label: "categories.family",
    icon: family
  },
  {
    id: 18,
    label: "categories.fashion",
    icon: fashion
  },
  {
    id: 19,
    label: "categories.entertainment",
    icon: entertainment
  },
  {
    id: 20,
    label: "categories.offers_discounts",
    icon: offers
  },
  {
    id: 21,
    label: "categories.trainers",
    icon: trainers
  },
  {
    id: 22,
    label: "categories.media_television",
    icon: media
  },
  {
    id: 23,
    label: "categories.home",
    icon: home
  },
  {
    id: 24,
    label: "categories.press",
    icon: press
  },
  {
    id: 25,
    label: "categories.actors",
    icon: actors
  },
  {
    id: 26,
    label: "categories.education",
    icon: education
  },
  {
    id: 27,
    label: "categories.performing",
    icon: performing
  },
  {
    id: 28,
    label: "categories.restaurants_cafes",
    icon: restaurants
  },

]




export const blogData = [
  {
    img: blogImage,
    date: "04 June 2023",
    title: "How Brands Can Break Barriers Empo"
  },
  {
    img: blogImage2,
    date: "14 July 2023",
    title: "Influencer Is a Real the Job It's Time to Act"
  },
  {
    img: blogImage3,
    date: "24 March 2023",
    title: "90% Social as Media Influencers"
  },
  {
    img: blogImage4,
    date: "20 June 2023",
    title: "Influencer engagement everything you"
  },
  {
    img: blogImage5,
    date: "04 February 2024",
    title: "7 types of influencer marketing campaigns"
  },
  {
    img: blogImage6,
    date: "15 January 2024",
    title: "Establishing a content marketing strategy"
  },
]

export const serviceData = [
  {
    id: 1,
    title: "about.influencer_marketing",
    description: "about.marketing_description",
    icon: <Factory color="white" size={30} />,
    bgColor: "bg-red-500"
  },
  {
    id: 2,
    title: "about.digital_marketing",
    description: "about.digital_description",
    icon: <Rocket color="white" size={30} />,
    bgColor: "bg-blue-600"
  },
  {
    id: 3,
    title: "about.manage_social_site",
    description: "about.social_site_description",
    icon: <MessagesSquare color="white" size={30} />,
    bgColor: "bg-purple-500"
  },
  {
    id: 4,
    title: "about.marketing_strategies",
    description: "about.strategies_description",
    icon: <Rocket color="white" size={30} />,
    bgColor: "bg-yellow-500"
  },
  {
    id: 5,
    title: "about.idea",
    description: "about.idea_description",
    icon: <Rocket color="white" size={30} />,
    bgColor: "bg-green-500"
  },
]

export const navData = [
  { label: "nav.home", path: "/" },
  { label: "nav.contact", path: "/contact" },
  { label: "nav.who_are", path: "/about" },
  { label: "nav.blog", path: "/blog" },
]

export const influencerData = [
  {
    id: 1,
    name: "Nawyantong",
    catagory: "Life Style",
    followers: 1250,
    following: 60,
    gender: "male"
  },
  {
    id: 2,
    name: "Sufankho Jhon",
    catagory: "Photographer",
    followers: 1420,
    following: 36,
    gender: "male"
  },
  {
    id: 3,
    name: "Goltulkjhan",
    catagory: "Beauty-lifestyle",
    followers: 890,
    following: 18,
    gender: "female"
  },
  {
    id: 4,
    name: "Alvantan Khan",
    catagory: "Sport & Fitness",
    followers: 2263,
    following: 32,
    gender: "male"
  },
  {
    id: 5,
    name: "Murawij Alruhayli",
    catagory: "Beauty-lifestyle",
    followers: 1050,
    following: 50,
    gender: "female"
  },
  {
    id: 6,
    name: "Ibrahim Pasha",
    catagory: "Sport & Fitness",
    followers: 1530,
    following: 24,
    gender: "male"
  },
  {
    id: 7,
    name: "Nayif hamdan",
    catagory: "Historical storyteller",
    followers: 3400,
    following: 25,
    gender: "male"
  },
  {
    id: 8,
    name: "Yara Alnamlah",
    catagory: "Beauty-lifestyle",
    followers: 3240,
    following: 36,
    gender: "female"
  },
  {
    id: 9,
    name: "Ahmed Al-Barqi",
    catagory: "Public figure",
    followers: 4250,
    following: 32,
    gender: "male"
  },
  {
    id: 10,
    name: "Latifa Turki",
    catagory: "memoirs",
    followers: 4350,
    following: 21,
    gender: "female"
  },
  {
    id: 11,
    name: "Donna Al Hussein",
    catagory: "Lifestyle diary",
    followers: 1240,
    following: 14,
    gender: "female"
  },
  {
    id: 12,
    name: "Moath Al-Fadaghi",
    catagory: "a cook",
    followers: 5240,
    following: 42,
    gender: "male"
  },

]