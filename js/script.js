$.getJSON("../data/cerah.json", function (data) {
  let nabi = data;
  $.each(nabi, function (i, data) {
    $("#daftar-nabi").append(`
      <div class="col-md-4">
        <div class="card mb-3">
          <img src="${data.image_url}" class="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">${data.description.substring(0, 200)}...</p>
            <h6 class="card-title">Wafat pada usia: ${data.usia} tahun</h6>
            <a href="../data/data-nabi.html?id=${
              i + 1
            }" class="btn btn-primary">Baca Kisah</a>
          </div>
        </div>
      </div>
    `);
  });
});
