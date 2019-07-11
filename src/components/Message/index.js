import React,{ Component } from 'react';
import './index.css';

class Message extends Component {
    constructor() {
    }

    componentDidMount() {
        const div = document.createElement('div');
        const body = document.body;
        div.className = 'corki-message';
        body.appendChild(div);
    }

    open(children, duration) {
        const message = document.querySelector('.corki-message');
        let notice = document.createElement('div');
        notice.className = 'corki-message-notice';
        message.appendChild(notice);

        notice = document.querySelectorAll('.corki-message-notice');
        notice = notice[notice.length - 1];
        let content = document.createElement('div');
        content.className = 'corki-message-notice-content';
        notice.append(content);

        content = document.querySelectorAll('.corki-message-notice-content');
        content = content[content.length - 1];
        content.innerHTML = children;

        if(duration > 0) {
            setTimeout(() => {
                const notice = document.querySelectorAll('.corki-message-notice');
                if(notice) {
                    for(let i = 0; i < notice.length; i++) {
                        document.querySelector('.corki-message').removeChild(notice[i]);
                    }
                }
            }, duration * 1000);
        }
    }

    destroy = () => {
        const notice = document.querySelectorAll('.corki-message-notice');
        if(notice) {
            for(let i = 0; i < notice.length; i++) {
                document.querySelector('.corki-message').removeChild(notice[i]);
            }
        }
    }
}

module.exports = Message;