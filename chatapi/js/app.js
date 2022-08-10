import {html} from './html.js';

$('body').append('<div id="chatbot_id"></div>');
$('#chatbot_id').append(html);

var datetime = new Date().toLocaleTimeString();
$('.message-time').append(datetime);

$('.chatbot-icon > img').on('click',function(){
  $('.chatbot-field').css('display','block');
  $('.chat-textarea').css('box-shadow','rgb(0 0 0 / 10%) 0px 5px 15px');
  $('.chatbot-icon').css('display','none');
});

$('.chat-close').on('click',function(){
  $('.chatbot-field').css('display','none');
  $('.chat-textarea').css('box-shadow','none');
  $('.chatbot-icon').css('display','block');
});
  
