import React, {Component} from 'react';

class Footer extends Component {

    render() {
        return(
            <footer class="bg-dark text-center text-white">
            <div class="container p-4">
                <section class="mb-4">
                    <span >Find Me Here: </span>
                    <a class="btn btn-outline-light btn-floating m-1" href="mailto:cailiang1997@gmail.com" role="button" target="_blank" rel="noopener noreferrer"><i class="fas fa-envelope"></i></a>
                    <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/leoncai" role="button" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/leon-12138" role="button" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                    <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/l_cai_/" role="button" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                </section>  
                <p>© {new Date().getFullYear} Copyright Liang Cai, Created by React.js / GithubPages</p>
            </div>
            </footer>         
        );
    }
}


export default Footer;