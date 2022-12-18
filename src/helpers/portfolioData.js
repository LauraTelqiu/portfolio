import Expense from "../images/expense.png";
import PigGame from "../images/pig-game.png";
import GuessNumber from "../images/guessnum.png";
import FlashCards from "../images/flashCards.jpg";
import CatFacts from "../images/catFacts.jpg";
import PaintStore from "../images/paintStore.jpg";
import Hater from "../images/hater.jpg";
import TicTacToe from "../images/tic-tac-toe.jpg";
import WhereTo from "../images/whereTo.jpg";
import FriendsApi from "../images/friendsApi.jpg";
import WhereToApi from "../images/whereToApi.jpg";
import RestaurantApi from "../images/restaurant.jpg";

export const portfolioData = [
  {
    name: "Expense Tracker",
    image: Expense,
    summary: 'Application where users can see,add and filter their expenses.',
    tech: "JavaScript, React, CSS",
    gitHub: "https://github.com/LauraTelqiu/Expense-Tracker",
    link: "https://expense-tracker-5b555b.netlify.app/",
  },
  {
    name: "Pig Game",
    image: PigGame,
    summary: "Players take turns to roll a single die as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn if they roll a 1.",
    tech: "HTML, CSS, JavaScript",
    gitHub: "https://github.com/LauraTelqiu/pig-game",
    link: "https://piggameplaynow.netlify.app/",
  },
  {
    name: "Guess My Number",
    image: GuessNumber,
    summary: "A simple guessing game where a user is supposed to guess a number between 0 and 20.",
    tech: "JavaScript, CSS, HTML",
    gitHub: "https://github.com/LauraTelqiu/Guess-my-number",
    link: "https://guessnumbernow.netlify.app/",
  },

  {
    name: "Flash Cards Game",
    image: FlashCards,
    summary:
      "Flash Cards Game to test the knowledge of capials of Europiean Countires",
    tech: "React, Node.js, MongoDB",
    gitHub: "https://github.com/LauraTelqiu/Flash-Cards-Game.git",
    link: "https://laee.netlify.app",
  },
  {
    name: "Cat Facts",
    image: CatFacts,
    summary: "Cat Facts UI Pattern using third party API ",
    tech: "JavaScript, React, REST API, HTML, CSS",
    gitHub: "https://github.com/LauraTelqiu/React-API-UI-Pattern.git",
    link: "https://catland-react.netlify.app/",
  },

  {
    name: "Paint Store",
    image: PaintStore,
    summary: "Color-rich web page for a home paint business. It displays information about using color in a home and color swatches with varying lightness, saturation, and hue.",
    tech: "HTMl, CSS",
    gitHub: "https://github.com/LauraTelqiu/Paint-Store.git",
    link: "https://lauratelqiu.github.io/Paint-Store/",
  },

  {
    name: "Hater - Group Project",
    image: Hater,
    summary: "Group Project on Twitter clone called Hater",
    tech: "JavaScript, SQL, Django, REST API, CSS",
    gitHub: "https://github.com/LauraTelqiu/hater.git",
    link: "https://haterip.netlify.app/",
  },
  {
    name: "Tic-Tac-Toe Game",
    image: TicTacToe,
    summary:
      "A game in which two players take turns in drawing either an ` O' or an ` X' in one square of a grid consisting of nine squares.",
    tech: "JavaScript, HTML, CSS",
    gitHub: "https://github.com/LauraTelqiu/tic-tac-toe.git",
    link: "https://ticttactoe.netlify.app",
  },
  {
    name: "CRUD WebApp",
    image: WhereTo,
    summary:
      "Team Project on a CRUD web application displaying the top-rated restaurant in NYC.",
    tech: "JavaScript, React, HTML, CSS",
    gitHub: "https://github.com/LauraTelqiu/Restaurant-CRUD-WebApp",
    link: "https://whereny.netlify.app/",
  },

  {
    name: "REST API",
    image: FriendsApi,
    summary: "REST API with data from the Friends 90's comedy TV show.",
    tech: "JavaScript, ReactJs, HTML, CSS",
    gitHub: "https://github.com/LauraTelqiu/friends-tv-show-api.git",
    link: "https://friends-show-api.herokuapp.com/api/",
  },
  {
    name: "JSON API",
    image: WhereToApi,
    summary:
      "A JSON API that offers data on the most coveted restaurants, bars, and activity spots in NYC.",
    tech: "ExpressJS, MongoDB JavaScript, NodeJS, REST API ",
    gitHub: "https://github.com/LauraTelqiu/backend_api_restaurant",
    link: "https://restaurant-backend-appication.herokuapp.com/api/",
  },
  {
    name: "Restaurant Categories API",
    image: RestaurantApi,
    summary: "REST API that offers data on categoires of restaurants",
    tech: "Python, Django",
    gitHub: "https://github.com/LauraTelqiu/API-using-Python-Flask-and-SQL.git",
    link: "",
  },
];
export default portfolioData;
