import useLocale from './hooks/locale.hook';

const Header = () => {
    const {title} = useLocale();
    return <header className="App-header">
        <h1  className="App-title">
            {title}
        </h1>
    </header>
}

export default Header