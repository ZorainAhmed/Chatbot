export const chatbotWidgetApp = {
    title:'Default',
    introMessage: 'Default',
    mainColor:'#408591',
    aboutText:'Default',
    bubbleBackground:'#408591',
    headerTextColor: 'Default',
    side: 'right',
  }
  chatbotWidget.title ? chatbotWidgetApp.title = chatbotWidget.title : ''; 
  chatbotWidget.introMessage ? chatbotWidgetApp.introMessage = chatbotWidget.introMessage : ''; 
  chatbotWidget.mainColor ? chatbotWidgetApp.mainColor = chatbotWidget.mainColor : ''; 
  chatbotWidget.bubbleBackground ? chatbotWidgetApp.bubbleBackground = chatbotWidget.bubbleBackground : ''; 
  chatbotWidget.headerTextColor ? chatbotWidgetApp.headerTextColor = chatbotWidget.headerTextColor : ''; 
  chatbotWidget.side ? chatbotWidgetApp.side = chatbotWidget.side : ''; 
  // export {chatbotWidgetApp};