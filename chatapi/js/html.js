import {chatbotWidgetApp} from './param.js';
export let html = '';
html += '<div id="WidgetRoot">';
    html += '<div class="chatbot-wrapper">';
        html += '<div class="chatbot-content">';
            html += '<div class="chatbot-icon" style="background:' +chatbotWidgetApp.bubbleBackground+'">';
                html += '<img src="https://botman.io/img/logo.png">';
            html += '</div>';
        html += '</div>';
        html += '<div class="chatbot-field">';
            html += '<div class="chat-textarea">';
                html += '<div class="chat-head" style="background:' +chatbotWidgetApp.mainColor+ ';">';
                    html += '<div style="display: flex; align-items: center; padding: 0px 30px 0px 0px; font-size: 15px; font-weight: normal;">' + chatbotWidgetApp.title + '</div>';
                    html += '<div class="chat-close">';
                        html += '<svg fill="#FFFFFF" height="15" viewBox="0 0 15 15" width="15" xmlns="http://www.w3.org/2000/svg" style="margin-right: 15px; margin-top: 6px; vertical-align: middle;">';
                            html += '<line x1="1" y1="15" x2="15" y2="1" stroke="white" stroke-width="1"></line>';
                            html += '<line x1="1" y1="1" x2="15" y2="15" stroke="white" stroke-width="1"></line>';
                        html += '</svg>';
                    html += '</div>';
                html += '</div>';
                html += '<div style="display: block; height: 415px; overflow: auto;">';
                    html += '<ol class="chat-message" style="height: 415px;">';
                        html += '<li class="chatbot-msg">';
                            html += '<div class="msg">';
                                html += '<div id="message" class="msg-text">';
                                    html += '<p>' + chatbotWidgetApp.introMessage +'</p>';
                                html += '</div>';
                                html += '<div class="message-time"></div>';
                            html += '</div>';
                        html += '</li>';
                    html += '</ol>';
                    html += '<input id="userText" class="user-textarea" type="text" autocomplete="off" placeholder="Send a message...">';
                    html += '<input class="submit-msg" type="submit" value="submit">';
                html += '</div>';
            html += '</div>';
        html += '</div>';
    html += '</div>';
html += '</div>';

// export {html};