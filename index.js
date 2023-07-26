// class Receiver{
// 	exec(){
// 		console.log("this is receiver");
// 	}
// }

class Command{
	constructor(receiver){
		this.receiver = receiver;
	}

	cmd(){
		this.receiver.exec();
	}
}

class Invoker{
	constructor(command){
		this.command = command;
	}

	invoke(){
		this.command.cmd();
	}
}

// var soldier = new Receiver();

// var trumpeter = new Command(soldier);

// var general = new Invoker(trumpeter);

// general.invoke();

// class CreateTask{
// 	exec(){
// 		console.log("this is create task");
// 	}
// }

const menu = {
	createTask: {
		exec: ()=>{
			console.log("this is create task");
		}
	},
	dealTask: {
		exec: ()=>{
			console.log("this is deal task");
		}
	}
}

function setCommand(dom, cmd){
	const command = new Command(cmd);
	const invoker = new Invoker(command);
	dom.onclick = function(){
		invoker.invoke();
	}
}

const btn = document.createElement("button");
btn.textContent = "创建任务";
document.body.appendChild(btn);

setCommand(btn, menu.createTask);

const dealDom = document.createElement("button");
dealDom.textContent = "处理任务";
document.body.appendChild(dealDom);

setCommand(dealDom, menu.dealTask);
