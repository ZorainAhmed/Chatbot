// export let f = firstmsg;
// export let c = mainbgcolor; 
let firstmsg;
let mainbgcolor;
if($('#chatbot_id').children().length == 0){
  $('#chatbot_id').append("<iframe class='main-chatbot' src="+chatbotWidget.frameEndpoint+"></iframe>");
  // firstmsg = chatbotWidget.introMessage;
  // mainbgcolor = chatbotWidget.bubbleBackground;
  // console.log(mainbgcolor);
};

  
// export {firstmsg,mainbgcolor};


// alert(simple().introMessage);
// let src = simple().frameEndpoint;
// let firstmsg = simple().introMessage;
// let mainbgcolor = simple().bubbleBackground;
// // console.log('<p>'+firstmsg+'</p>');
// // console.log(mainbgcolor);
// var mainWidget = $( document ).ready(function() {
//   setTimeout(function() {
//     $('#chatbot_id').append("<iframe class='main-chatbot' src="+src+"></iframe>");
//   }, 1000);
// });

// let firstmsg = chatbotWidget.introMessage;
// let mainbgcolor = chatbotWidget.bubbleBackground;
// var something = (function() {
//   var executed = false;
//   return function() {
//       if (!executed) {
//           executed = true;
          
//           console.log('App: '+'<p>'+firstmsg+'</p>');
//           console.log('App: '+mainbgcolor);
//           $('#chatbot_id').append("<iframe class='main-chatbot' src="+chatbotWidget.frameEndpoint+"></iframe>");
//       }
//   };
// });
// something();
// export {firstmsg,mainbgcolor};


// console.log('<p>'+firstmsg+'</p>');
// console.log(mainbgcolor);

