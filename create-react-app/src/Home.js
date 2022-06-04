import Header from './Header';
import { useGetUsers } from './hooks/users.hook';
import useLocale from './hooks/locale.hook';

const Home = () => {    
    const {content1, content2, price} = useLocale();
    const {users, loading , error} = useGetUsers()
    console.log('f: {users, loading , error}',  {users, loading , error})

    return <div className="App">
        <Header />                              
            <section>
                <h2>Example of redux data: </h2>
            </section>
            <section>
                <h2>Example of rendering locale: </h2>
                static locale: {content1} <code>src/App.js</code>{content2} <br/>
                computed locale: {price(10.5541)}
            </section>        
    </div>
}

export default Home