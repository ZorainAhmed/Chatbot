export class ChatBot {
  constructor(){
    console.log('Chatbot constructor');
  }

  eventHandler(){
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
  }

  addDate(){
    let datetime = new Date().toLocaleTimeString();
    $('.message-time').append(datetime);
  }

  sendMsg(){
    $('.submit-msg').on('click',function(){
      $('li.chatbot-msg').clone().appendTo('ol.chat-message');
      $('li:last-child').removeClass('chatbot-msg').addClass('user-msg');
      $('li:last-child .msg .msg-text p').empty();
      let tmp = $('.user-textarea').val();
      $('li:last-child .msg .msg-text p').append(tmp);
      $('li:last-child .msg .message-time').empty();
      let datetime = new Date().toLocaleTimeString();
      $('li:last-child .msg .message-time').append(datetime);
      $('.user-textarea').val('');
      $('.chat-message').parent().animate({ scrollTop:3031 },"slow");
    })
    $('.user-textarea').on('keydown', function (e) {
      var key = e.which;
      if(key == 13) {
          $('.submit-msg').click();
          $('.chat-message').parent().animate({ scrollTop:3031 },"slow");
          return false;
      }
    });
  }
  
}

// export function chatbotFunc(){
//   $('.chatbot-icon > img').on('click',function(){
//     $('.chatbot-field').css('display','block');
//     $('.chat-textarea').css('box-shadow','rgb(0 0 0 / 10%) 0px 5px 15px');
//     $('.chatbot-icon').css('display','none');
//   });
    
//   $('.chat-close').on('click',function(){
//     $('.chatbot-field').css('display','none');
//     $('.chat-textarea').css('box-shadow','none');
//     $('.chatbot-icon').css('display','block');
//   });
// }