import BurgerMenu from './BurgerMenu';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white text-center py-4 flex justify-between items-center relative h-20">
            <h1 className="text-3xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">雑談ニュース</h1>
            <div className="flex-none mr-3 absolute top-1/2 right-4 transform -translate-y-1/2">
                <BurgerMenu />
            </div>
        </header>
    );
};

export default Header;
