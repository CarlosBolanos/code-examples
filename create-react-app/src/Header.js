import logo from './logo.svg';
import useLocale from './hooks/locale.hook';

const Header = () => {
    const {translate} = useLocale();

    return <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1  className="App-title">
            {translate('title')}
        </h1>
    </header>
}

export default Header