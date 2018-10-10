import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../Sass/base.sass';

export default (props) => 
    <div>
        <Header />
            <main className="content container" role="main">
                {props.children}
            </main>
        <Footer />
    </div>;
