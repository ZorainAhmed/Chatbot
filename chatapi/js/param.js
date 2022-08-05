var chatbotWidgetApp = {
    title:'Default',
    introMessage: 'Default',
    mainColor:'#408591',
    aboutText:'Default',
    bubbleBackground:'#408591',
    headerTextColor: 'Default',
  }
  chatbotWidget.title ? chatbotWidgetApp.title = chatbotWidget.title : ''; 
  chatbotWidget.introMessage ? chatbotWidgetApp.introMessage = chatbotWidget.introMessage : ''; 
  chatbotWidget.bubbleBackground ? chatbotWidgetApp.bubbleBackground = chatbotWidget.bubbleBackground : ''; 
  chatbotWidget.headerTextColor ? chatbotWidgetApp.headerTextColor = chatbotWidget.headerTextColor : ''; 
  export {chatbotWidgetApp};