function header_build() {
  var element = document.createElement('header');

  var headerLeftDiv = document.createElement('div');
  headerLeftDiv.classList.add('col-6');
  var imageTag = document.createElement('img');
  imageTag.src = "./assets/img/logo.png";
  imageTag.alt = "Logo";
  imageTag.title = "Trello";
  headerLeftDiv.appendChild(imageTag);
  element.appendChild(headerLeftDiv);

  var headerRightDiv = document.createElement('div');
  headerRightDiv.classList.add('col-6');
  headerRightDiv.classList.add('text-right');
  headerRightDiv.textContent = 'Welcome Admin';
  element.appendChild(headerRightDiv);
  return element;
}
document.body.appendChild(header_build());


function section_build() {
  var element = document.createElement('section');

  var topDiv = document.createElement('div');
  topDiv.classList.add('grid-container');

  var innerDiv = document.createElement('div');
  innerDiv.classList.add('row');
  topDiv.appendChild(innerDiv);

  element.appendChild(topDiv);
  return element;
}
document.body.appendChild(section_build());

function card_build(id, add_id) {
  try{
    var element = document.createElement('div');
    element.classList.add('col-3');

    var topDiv = document.createElement('div');
    topDiv.classList.add('card');
    element.appendChild(topDiv);

    var titleDiv = document.createElement('div');
    titleDiv.classList.add('card-title');
    var textHeader = document.createElement('h3');
    var footer_flag = 0;
    switch(id){
      case 'task_div':
        textHeader.textContent = 'Task List';
        footer_flag = 1;
        break;
      case 'dev_div':
        textHeader.textContent = 'In Development';
        break;
      case 'qa_div':
        textHeader.textContent = 'Q & A';
        break;
      case 'completed_div':
        textHeader.textContent = 'Completed';
        break;
    }
    titleDiv.appendChild(textHeader);
    topDiv.appendChild(titleDiv);

    var contentDiv = document.createElement('div');
    contentDiv.classList.add('card-content');
    contentDiv.id  = id;
    topDiv.appendChild(contentDiv);

    if(footer_flag == 1){
      var footerDiv = document.createElement('div');
      footerDiv.classList.add('card-footer');
      footerDiv.classList.add('fa');
      footerDiv.classList.add('fa-plus-circle');
      footerDiv.id  = add_id;
      topDiv.appendChild(footerDiv);
    }
    return element;
  }catch(e){
    logMyErrors(e);
  }
}
// Task Card Creation
document.getElementsByClassName('row')[0].appendChild(card_build('task_div', 'add_task'));
// Development Card Creation
document.getElementsByClassName('row')[0].appendChild(card_build('dev_div', 'add_dev'));
// Q&A Card Creation
document.getElementsByClassName('row')[0].appendChild(card_build('qa_div', 'add_qa'));
// Completed Card Creation
document.getElementsByClassName('row')[0].appendChild(card_build('completed_div', 'add_completed'));

function task_model_build() {
  try{
    var element = document.createElement('div');
    element.id = 'moveModal';
    element.classList.add('modal');

    var topDiv = document.createElement('div');
    topDiv.classList.add('modal-content');
    element.appendChild(topDiv);

    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    topDiv.appendChild(cardDiv);

    var cardTitleDiv = document.createElement('div');
    cardTitleDiv.classList.add('card-title');
    cardDiv.appendChild(cardTitleDiv);

    var cardTitleHeader = document.createElement('h3');
    // var t = document.createTextNode("Move");
    // cardTitleHeader.appendChild(t);
    cardTitleHeader.innerHTML = 'Move<span class="close" id="0">&times;</span>';
    cardTitleDiv.appendChild(cardTitleHeader);


    var cardContentDiv = document.createElement('div');
    cardContentDiv.classList.add('card-content');
    cardContentDiv.classList.add('dialog-cont');
    cardDiv.appendChild(cardContentDiv);

    var formElement = document.createElement('form');
    formElement.name = 'move_form';
    formElement.id = 'move_form';
    formElement.setAttribute('onsubmit', 'return false;');
    cardContentDiv.appendChild(formElement);

    var rowDiv = document.createElement('div');
    rowDiv.classList.add('dailog-row');
    formElement.appendChild(rowDiv);

    var rowLabelDiv = document.createElement('div');
    rowLabelDiv.classList.add('inp-label');
    // rowLabelDiv.createTextNode = 'Developer Name';
    rowDiv.appendChild(rowLabelDiv);

    var rowDiv = document.createElement('div');
    rowDiv.classList.add('dailog-row');
    formElement.appendChild(rowDiv);

    return element;
  }catch(e){
    logMyErrors(e);
  }
}
// document.body.appendChild(task_model_build());
