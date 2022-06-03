import Header from './Header';
import useLocale from './hooks/locale.hook';

const Home = () => {    
    const {messages, translate} = useLocale();
    return <div className="App">
        <Header />
        <p className="App-intro">            
            <br />
            {messages.content1}
            <code>src/App.js</code> 
            {translate('content2')}
        </p>
    </div>
}

export default Home