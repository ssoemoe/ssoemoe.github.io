function insertProjectSlider(project, slides) {
  const { id, color, backgroundColor, url, header, body } = project;
  let projectSlideHTML = `
    <div class="m-3 card" style="background-color: ${backgroundColor}">
          <div class="card-header text-center" style="background-color: ${backgroundColor}">
            <h2 style="color: ${color}">${header}</h2>
          </div>
          <div style="color: ${color}" class="card-body">
            <div class="text-center">
              <button id="view-project-${id}" class="btn btn-primary view-project-btn">View Project</button>
            </div>
            <br>
            <div id="project-${id}-details">
              ${body}
            </div>
          </div>
        </div>
    `;
  slides.innerHTML += projectSlideHTML;
}
