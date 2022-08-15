import {html} from './html.js';
import {ChatBot} from './funs.js';

$('body').append('<div id="chatbot_id"></div>');
$('#chatbot_id').append(html);

var func = new ChatBot;

func.eventHandler();
func.addDate();
func.sendMsg();