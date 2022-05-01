import { createWebHistory, createRouter } from "vue-router"
import HomePage from './pages/HomePage'
import GameDetails from './pages/GameDetails'
import GenreDetails from './pages/GenreDetails'
import ViewGames from './pages/ViewGames'
import AboutPage from './pages/AboutPage'

const routes = [
  { path: '/', component: HomePage, name: 'Home' },
  { path: '/games', component: ViewGames, name: 'ViewGames' },
  { path: '/details/:game_id', component: GameDetails, name: 'GameDetails' },
  { path: '/about', component: AboutPage, name: 'About' },
  { path: '/list/:genre_id', component: GenreDetails, name: 'GenreDetails'}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
