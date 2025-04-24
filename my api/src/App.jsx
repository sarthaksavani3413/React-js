import InstagramScraper from './Social-media/InstagramScraper' ;
import FacebookScraper from './Social-media/FacebookScraper';
// import {Scrape} from './Web-scraper/Scrap';
import {MenuList} from './Web-scraper/Scrap';


const App = () => {

  return (
    <div className="App">
      <InstagramScraper/>
      <FacebookScraper/>
      <MenuList />
    </div>
  );
};

export default App;