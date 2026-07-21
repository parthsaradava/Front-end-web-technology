arr = [];

flagIndex = -1;

function AddName() {
  input = document.getElementById("name");

  if(input.value == "" )
  {
    alert("Enter name");
    return;
  }

  if(flagIndex == -1)
  {
    arr.push(input.value);
  }
  else
  { 
    arr[flagIndex] = input.value;
    flagIndex = -1;
    document.getElementById("add").innerHTML = "Add"
  }
    
  
  input.value = "";
  displayItems();
}


function displayItems()
{
    temp =""

    for(i = 0 ; i < arr.length ; i++)
    {
        temp += `
        
          <tr>
            <td>${i+1}</td>
                <td>${arr[i]}</td>
                <td>
                    <button id="Edit" onclick="EditName(${i})">Edit</button>
                    <button id="Delete" onclick="DeleteName(${i})">Delete</button>
                </td>
         </tr>
    
        `
    }
    document.getElementsByTagName("tbody")[0].innerHTML = temp;
}

function EditName(index)
{
    inputref = document.getElementById("name");
    inputref.value = arr[index];
    document.getElementById("add").innerHTML = "Edit";
    flagIndex = index;
}

function DeleteName(index)
{
    arr.splice(index , 1);
    displayItems();
}