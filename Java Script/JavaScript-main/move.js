// Replace YOUR_API_KEY with your OMDB API key
const apiKey = "9234bccb";
const searchQuery = "pathan";

fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`)
  .then((response) => response.json())
  .then((data) => {
    var trdata = " ";
    data.map(
      (e) => console.log(e)

      //   trdata += ` <tr>
      //          <td>${}</td>
      //         <td><img src="${result.Poster}"></img></td>
      //       </tr>`;
    );

    // console.log(data.Search[0].Poster);
    // console.log(data.Search[0].Title);
    document.getElementById("move").innerHTML = trdata;
  });
//   .catch((error) => {
//     console.error(error);
//   });

//   http://www.omdbapi.com/?i=tt3896198&apikey=9234bccb
