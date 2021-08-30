import React, {Component} from 'react';

class Footer extends Component {

    render() {
        return(
            <footer className="bg-dark text-center text-white">
            <div className="container p-4">
                <p>© {new Date().getFullYear()} Copyright : Liang Cai, Created by React.js / GithubPages</p>
            </div>
            </footer>         
        );
    }
}


export default Footer;