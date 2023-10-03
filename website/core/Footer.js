/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
    docUrl(doc) {
        const baseUrl = this.props.config.baseUrl;
        return baseUrl + 'docs/' + doc;
    }

    pageUrl(doc) {
        const baseUrl = this.props.config.baseUrl;
        return baseUrl + doc;
    }

    render() {
        const currentYear = new Date().getFullYear();
        return (
            <footer
                className='nav-footer'
                id='footer'
            >
                <section className='sitemap'>
                    <a
                        href={this.props.config.baseUrl}
                        className='nav-home'
                    >
                        {this.props.config.footerIcon && (
                            <img
                                src={this.props.config.baseUrl + this.props.config.footerIcon}
                                alt={this.props.config.title}
                                width='66'
                                height='58'
                            />
                        )}
                    </a>
                    <div>
                        <h5>Docs</h5>
                        <a href={this.docUrl('quickstart.html')}>Quick Start</a>
                        <a href={this.docUrl('library-api.html')}>ttag API</a>
                        <a href={this.docUrl('plugin-api.html')}>babel-plugin-ttag API</a>
                    </div>
                    <div>
                        <h5>Community</h5>
                        <a href={this.pageUrl('users.html')}>User Showcase</a>
                        <a
                            href='https://stackoverflow.com/questions/tagged/ttag/'
                            target='_blank'
                            rel='noreferrer noopener'
                        >
                            Stack Overflow
                        </a>
                        <a
                            href='https://twitter.com/'
                            target='_blank'
                            rel='noreferrer noopener'
                        >
                            Twitter
                        </a>
                    </div>
                    <div>
                        <h5>More</h5>
                        <a href={this.props.config.baseUrl + 'blog'}>Blog</a>
                        <a href='https://github.com/ttag-org/ttag'>GitHub</a>
                        <a
                            className='github-button'
                            href={this.props.config.repoUrl}
                            data-icon='octicon-star'
                            data-show-count={true}
                            data-count-aria-label='# stargazers on GitHub'
                            aria-label='Star this project on GitHub'
                        >
                            Star
                        </a>
                    </div>
                </section>

                <section className='copyright'>{this.props.config.copyright}</section>
            </footer>
        );
    }
}

module.exports = Footer;
