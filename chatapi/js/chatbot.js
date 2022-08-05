//const {chatbotWidget} = require('./data.js');
//import { chatbotWidget } from './app.js';
//import {firstmsg, mainbgcolor} from './app.js';
// var chatbotWidget = {
//     frameEndpoint: '/chatapi/chatbot.html',
//     title:'Chatbot',
//     introMessage: 'Hello, I am a chatbot! Please enter your name',
//     mainColor:'#c02026',
//     aboutText:'',
//     bubbleBackground:'#c02026',
//     headerTextColor: '#fff',
// }
$('#chatbot_id').append("<iframe class='main-chatbot' src="+chatbotWidget.frameEndpoint+"></iframe>");
$('.msg-text').append('<p>'+chatbotWidget.introMessage+'</p>');
$('.chatbot-icon').css('background',chatbotWidget.bubbleBackground);
$('.chat-head').css('background',chatbotWidget.bubbleBackground);
console.log('chatbot: '+'<p>'+chatbotWidget.introMessage+'</p>');
console.log('chatbot: ' +chatbotWidget.bubbleBackground);   


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
