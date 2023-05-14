//1.create div element
let employeeDiv = document.createElement('div');
    employeeDiv.classList.add('Section');

    let warp = document.querySelector('.Container');
    warp.appendChild(employeeDiv);

    // document.getElementById('create').addEventListener('click',addEmployee);
let i = 0;
    function addEmployee() {
        // collecting form data
        let EmployeeName = document.getElementById('EmployeeName').value;
		let EmployeeLastName = document.getElementById('EmployeeLastName').value;
        let Designation = document.getElementById('Designation').value;
        let Role = document.getElementById('Role').value;
        let gender = document.querySelector('input[name="gender"]:checked').value;
        let male = "https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg";
        let female = "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/60-512.png";

        let source = gender === 'male' ? male : female;
    
        let EmployeeDetails = `<div class="card1">
                <img src=${source} alt="Card image cap" width="80" height="95">
                <div class="card-body">
                    <h5 class="card-title">${EmployeeName}  ${EmployeeLastName}</h5><br>
                    <i class="card-text"><h6>${Designation}</h6></i>
                    <i class="card-text"> ${Role}</i>
                </div> 
                <div><button class="btn btn-primary remove-card" id="remove-${i}">X</button></div>
                </div>`;
            employeeDiv.insertAdjacentHTML('afterbegin',EmployeeDetails);

            //adding function for removing element 
            document.querySelector('#remove-' + i)
            .addEventListener('click', function() {

                let removeE1 = this.parentNode.parentNode;
                //console.log(remove);
                removeE1.remove()
            })

            i++;

            }
            //console.log(addEmployee());
