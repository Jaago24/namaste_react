const root = document.getElementById('root');
const ele = document.createElement("a");
const ele2 = document.createElement("p");
ele.innerHTML = "Hi there!";
ele2.innerHTML = "Hello...!";
root.appendChild(ele);
root.append(ele2);

root.appendChild("I will not work");
root.append("I will work");