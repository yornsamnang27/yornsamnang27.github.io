// document.addEventListener("DOMContentLoaded", function () {
//     var rankingData = [
//         { rank: 1, university: "Royal University of Phnom Penh", location: "Phnom Penh" },
//         { rank: 2, university: "Institute of Technology of Cambodia", location: "	Phnom Penh" },
//         { rank: 3, university: "Paññasastra University of Cambodia", location: "Phnom Penh" },
//         { rank: 4, university: "Build Bright University", location: "Phnom Penh" },
//         { rank: 5, university: "The University of Cambodia", location: "Phnom Penh" },
//         { rank: 6, university: "University of Puthisastra", location: "Phnom Penh" },
//         { rank: 7, university: "Royal University of Agriculture", location: "Phnom Penh" },
//         { rank: 8, university: "Royal University of Fine Arts", location: "Phnom Penh" },
//         { rank: 9, university: "École Royale d'Administration", location: "Phnom Penh" },
//         { rank: 10, university: "Royal University of Law and Economics", location: "Phnom Penh" },
//         { rank: 11, university: "Royal Academy of Cambodia", location: "Phnom Penh" },
//         { rank: 12, university: "Paragon International University", location: "Phnom Penh" },
//         { rank: 13, university: "National University of Battambang", location: "Battambang" },
//         { rank: 14, university: "National University of Management", location: "Phnom Penh" },
//         { rank: 15, university: "Norton University", location: "Phnom Penh" },
//         { rank: 16, university: "American University of Phnom Penh", location: "Phnom Penh" },
//         { rank: 17, university: "Université des Sciences de la Santé", location: "Phnom Penh" },
//         { rank: 18, university: "Cambodian Mekong University", location: "Phnom Penh" },
//         { rank: 19, university: "International University", location: "Phnom Penh" },
//         { rank: 20, university: "Phnom Penh International University", location: "Phnom Penh" },
//         { rank: 21, university: "National Polytechnic Institute of Cambodia", location: "Phnom Penh" },
//         { rank: 22, university: "Asia Euro University", location: "Phnom Penh" },
//         { rank: 23, university: "CamEd Business School", location: "Phnom Penh" },
//         { rank: 24, university: "IIC University of Technology", location: "Phnom Penh" },
//         { rank: 25, university: "Svay Rieng University", location: "Svay Rieng" },
//         { rank: 26, university: "University of Management and Economics", location: "Battambang" },
//         { rank: 27, university: "Angkor University", location: "Siem Reap" },
//         { rank: 28, university: "Economics and Finance Institute", location: "Phnom Penh" },
//         { rank: 29, university: "Chea Sim University of Kamchaymear", location: "Kamchaymear District" },
//         { rank: 30, university: "University of Southeast Asia", location: "Siem Reap" },
//         { rank: 31, university: "Prek Leap National Institute of Agriculture", location: "Phnom Penh" },
//         { rank: 32, university: "National Meanchey University", location: "Sisophon" },
//         { rank: 33, university: "National Institute of Education", location: "Phnom Penh" },
//         { rank: 34, university: "East Asia Management University", location: "Phnom Penh" },
//         { rank: 35, university: "Cambodia University for Specialties", location: "Phnom Penh" },
//         { rank: 36, university: "Vanda Institute", location: "Phnom Penh" },
//         { rank: 37, university: "Life University, Cambodia", location: "Sihanoukville" },
//         { rank: 38, university: "Human Resources University", location: "Phnom Penh" },
//         { rank: 39, university: "Dewey International University", location: "Battambang" },
//         { rank: 40, university: "Panha Chiet University", location: "Phnom Penh" },
//         { rank: 41, university: "Preah Sihanouk Raja Buddhist University", location: "Phnom Penh" },
//         { rank: 42, university: "National Institute of Business", location: "Phnom Penh" },
//         { rank: 43, university: "Western University, Cambodia", location: "Phnom Penh" },
//         { rank: 44, university: "Beltei International University", location: "Phnom Penh" },
//         { rank: 45, university: "Khemarak University", location: "Phnom Penh" },
//         { rank: 46, university: "Limkokwing University of Creative Technology, Cambodia", location: "Phnom Penh" },
//         { rank: 47, university: "Chenla University", location: "Phnom Penh" },
//         { rank: 48, university: "Angkor Khemara University", location: "Kampot" },
//         { rank: 49, university: "Kampong Cham National School of Agriculture", location: "Kampong Cham" },
//         { rank: 50, university: "Setec Institute", location: "Phnom Penh" },
//     ];

//     var tableBody = document.querySelector("#rankingTable tbody");

//     rankingData.forEach(function (data) {
//         var row = document.createElement("tr");
//         row.innerHTML = "<td>" + data.rank + "</td>" +
//             "<td>" + data.university + "</td>" +
//             "<td>" + data.location + "</td>";
//         tableBody.appendChild(row);
//     });

//     let lists = null;
// });


let lists = null;
fetch('list.json')
    .then(response => response.json())
    .then(data => {
        lists = data;
        addDataToHTML();
    })

function addDataToHTML() {
    // remove datas default from HTML
    let listUniversityHTML = document.querySelector('.listUniversity');

    // add new datas
    if (lists != null) {
        lists.forEach(list => {
            let newList = document.createElement('tr');
            // newList.href = '/detail.html?id=' + list.id;
            newList.classList.add('item');
            newList.innerHTML =
                `<td>${list.rank}</td>
                <td><a href="${'detail.html?id=' + list.id}">${list.university}</a></td>
                <td>${list.location}</td>`;
            listUniversityHTML.appendChild(newList);

        });
    }
}