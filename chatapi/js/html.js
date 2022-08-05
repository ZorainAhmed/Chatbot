import {chatbotWidgetApp} from './param.js';
var html = () => {
    $('body').append('<div id="chatbot_id"></div>');
  $('#chatbot_id').append(
    `<div id="WidgetRoot">
    <div class="chatbot-wrapper">
        <div class="chatbot-content">
            <div class="chatbot-icon" style="background: `+chatbotWidgetApp.bubbleBackground+`">
                <img src="https://botman.io/img/logo.png">
            </div>
        </div>
        <div class="chatbot-field">
            <div class="chat-textarea">
                <div class="chat-head" >
                    <div style="display: flex; align-items: center; padding: 0px 30px 0px 0px; font-size: 15px; font-weight: normal;">` + chatbotWidgetApp.title + `</div>
                    <div class="chat-close">
                        <svg fill="#FFFFFF" height="15" viewBox="0 0 15 15" width="15" xmlns="http://www.w3.org/2000/svg" style="margin-right: 15px; margin-top: 6px; vertical-align: middle;">
                            <line x1="1" y1="15" x2="15" y2="1" stroke="white" stroke-width="1"></line>
                            <line x1="1" y1="1" x2="15" y2="15" stroke="white" stroke-width="1"></line>
                        </svg>
                    </div>
                </div>
                <div style="display: block; height: 415px; overflow: auto;">
                    <ol class="chat-message" style="height: 390px;">
                        <li class="chatbot-msg">
                            <div class="msg">
                                <div id="message" class="msg-text">
                                    <p>`
                                      + chatbotWidgetApp.introMessage +
                                    `</p>
                                </div>
                                <div class="time"></div>
                            </div>
                        </li>
                    </ol>
                    <div>
                        <input id="userText" class="user-textarea" type="text" placeholder="Send a message...">
                        <input class="submit-msg" type="submit" value="submit">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`);
  }
  export {html};