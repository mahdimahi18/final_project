//college degree fetch logic starts

function degree() {
    fetch('college_degrees.json').then((response) => {
        // console.log(response);
        return response.json();
    }).then(data => {
        //console.log(data);
        process_data(data);
    }).catch((err) =>{
        console.log(err);
    });

};

function process_data(data){
    var element = document.getElementById("display_element");
    element.innerHTML = "";

    for (let i = 0; i < data.college_degrees.length; i++) {
        console.log(i);
        let school = data.college_degrees[i].Degree.School;
        let major = data.college_degrees[i].Degree.Program;
        let type = data.college_degrees[i].Degree.Type;
        let year = data.college_degrees[i].Degree.Year;

        var head = document.createElement("h3");
        var node = document.createTextNode(school);
        head.appendChild(node);
        element.appendChild(head);

        var para_major = document.createElement("p");
        var node = document.createTextNode(major);
        para_major.appendChild(node);
        element.appendChild(para_major);

        var para_type = document.createElement("p");
        var node = document.createTextNode(type);
        para_type.appendChild(node);
        element.appendChild(para_type);

        var para_year = document.createElement("p");
        var node = document.createTextNode(year);
        para_year.appendChild(node);
        element.appendChild(para_year);


    };
};

//college degree fetch logic ends